import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  clearItemFromCart,
  removeItemFromCard,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.type";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";
import "./checkout-item.styles.tsx";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = memo(({ cartItem }: CheckoutItemProps) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow
          onClick={() => {
            dispatch(removeItemFromCard(cartItems, cartItem));
          }}
        >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow
          onClick={() => {
            dispatch(addItemsToCart(cartItems, cartItem));
          }}
        >
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan> {price} </BaseSpan>
      <RemoveButton
        onClick={() => dispatch(clearItemFromCart(cartItems, cartItem))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
