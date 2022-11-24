import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { Button_type_classes } from "../button/Button";
import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(CartContext);
  const addItemHandler = () => {
    addItemsToCart(product);
  };
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price} </span>
      </div>
      <Button
        buttonType={Button_type_classes.inverted}
        onClick={addItemHandler}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
