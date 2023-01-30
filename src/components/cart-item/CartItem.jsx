import React, { memo } from "react";
import "./cart-item.styles.scss";
const CartItem = memo(({ cartItems }) => {
  const { name, imageUrl, price, quantity } = cartItems;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ₹{price}
        </span>
      </div>
    </div>
  );
});

export default CartItem;
