import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { Button_type_classes } from "../button/Button";
import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addItemHandler = () => {
    dispatch(addItemsToCart(cartItems, product));
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
