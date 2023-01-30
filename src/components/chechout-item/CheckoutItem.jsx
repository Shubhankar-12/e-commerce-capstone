import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  clearItemFromCart,
  removeItemFromCard,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./checkout-item.styles.scss";
const CheckoutItem = memo(({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

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
            dispatch(removeItemFromCard(cartItems, cartItem));
          }}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() => {
            dispatch(addItemsToCart(cartItems, cartItem));
          }}
        >
          &#10095;
        </div>
      </span>
      <span className='price'> {price} </span>
      <div
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(cartItems, cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
});

export default CheckoutItem;
