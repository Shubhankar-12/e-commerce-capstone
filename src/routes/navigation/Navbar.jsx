import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../asset/crown.svg";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
  };
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
