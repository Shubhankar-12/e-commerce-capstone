import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemsToCart, setCartCount, cartCount } = useContext(CartContext);
  const addItemHandler = () => {
    addItemsToCart(product);
    setCartCount(cartCount + 1);
  };
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price} </span>
      </div>
      <Button buttonType={"inverted"} onClick={addItemHandler}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
