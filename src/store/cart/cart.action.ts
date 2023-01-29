import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer";
import { CategoryItem } from "../categories/category.type";
import { CartItem, CART_ACTION_TYPE } from "./cart.type";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === existingItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  const existingItem = cartItems.find(
    (CartItem) => CartItem.id === productToRemove.id
  );

  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== productToRemove.id;
    });
  }
  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] => {
  return cartItems.filter((item) => {
    return item.id !== cartItemToClear.id;
  });
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPE.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPE.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPE.SET_CART_ITEMS, cartItems)
);

export const setIsCartOpen = withMatcher(
  (bool: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool)
);

export const addItemsToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
export const removeItemFromCard = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};

export const emptyCart = () => {
  const newCartItems: CartItem[] = [];
  return setCartItems(newCartItems);
};
