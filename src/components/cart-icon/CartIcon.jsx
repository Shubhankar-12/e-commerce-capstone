import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectCartIsOpen,
} from "../../store/cart/cart.selector";
// import { setIsCartOpen } from "../../store/cart/cart.action";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectCartIsOpen);
  const cartCount = useSelector(selectCartCount);
  const cartClickHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={cartClickHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
