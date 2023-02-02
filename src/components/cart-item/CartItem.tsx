import { memo } from "react";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import "./cart-item.styles.tsx";

import { CartItem as TCartItem } from "../../store/cart/cart.type";

type CartItemProps = {
  cartItems: TCartItem;
};
const CartItem = memo(({ cartItems }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItems;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ₹{price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
