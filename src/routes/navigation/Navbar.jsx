import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../asset/crown.svg";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import { CartContext } from "../../contexts/cart.context";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
  };
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
