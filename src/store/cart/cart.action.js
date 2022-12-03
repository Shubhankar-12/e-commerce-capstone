import { createAction } from "../../utils/reducer/reducer";
import { CART_ACTION_TYPE } from "./cart.type";

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (CartItem) => CartItem.id === productToAdd.id
  );
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === existingItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find(
    (CartItem) => CartItem.id === productToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== productToRemove.id;
    });
  } else {
    return cartItems.map((item) =>
      item.id === existingItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => {
    return item.id !== cartItemToClear.id;
  });
};

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool);

export const addItemsToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCard = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
