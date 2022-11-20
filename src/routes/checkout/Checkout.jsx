import React, { useContext } from "react";
import CheckoutItem from "../../components/chechout-item/CheckoutItem";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Discription</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <span className='Total'>Total: 0</span>
    </div>
  );
};

export default Checkout;
