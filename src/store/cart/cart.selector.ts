import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

const selectCartReducer = (state: any): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, CartItem) => total + CartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, CartItem) => total + CartItem.quantity * CartItem.price,
    0
  )
);
