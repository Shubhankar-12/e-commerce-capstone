import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutClickHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => {
            console.log(item);
            return <CartItem key={item.id} cartItems={item} />;
          })
        ) : (
          <p className='no-item'>Your cart is empty!</p>
        )}
      </div>
      <Button onClick={checkoutClickHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
