import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { addItemsToCart, removeItemFromCard, clearItemFromCart } =
    useContext(CartContext);
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => {
            removeItemFromCard(cartItem);
          }}
        >
          &#10094;{" "}
        </div>
        {quantity}
        <div
          className='arrow'
          onClick={() => {
            addItemsToCart(cartItem);
          }}
        >
          {" "}
          &#10095;
        </div>
      </span>
      <span className='price'> {price} </span>
      <div className='remove-item' onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
