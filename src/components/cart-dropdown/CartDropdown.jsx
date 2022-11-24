import React, { useContext } from "react";
import Button from "../button/Button";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
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
