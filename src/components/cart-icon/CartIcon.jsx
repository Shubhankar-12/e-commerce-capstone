import { React, useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const cartClickHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className='cart-icon-container' onClick={cartClickHandler}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;