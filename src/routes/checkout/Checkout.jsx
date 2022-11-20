import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemsToCart, removeCartItem } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <h1> {item.name} </h1>
            <p> {item.quantity} </p>
            <p> {item.price} </p>
            <p onClick={() => addItemsToCart(item)}>Increment</p>
            <p>Decrement</p>
            <p onClick={() => removeCartItem(item)}> X </p>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
