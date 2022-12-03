import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/chechout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./checkout.styles.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
      <div className='total'>Total: {cartTotal}</div>
    </div>
  );
};

export default Checkout;
