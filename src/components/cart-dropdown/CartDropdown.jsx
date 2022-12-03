import React from "react";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import {
  selectCartIsOpen,
  selectCartItems,
} from "../../store/cart/cart.selector";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const setIsCartOpen = useSelector(selectCartIsOpen);
  const navigate = useNavigate();
  const checkoutClickHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            console.log(item);
            return <CartItem key={item.id} cartItems={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty!</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkoutClickHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
