import { createContext, useEffect, useReducer, useState } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  removeItemFromCard: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

const CART_STATES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_STATES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_STATES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled error type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, CartItem) => total + CartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, CartItem) => total + CartItem.quantity * CartItem.price,
      0
    );
    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };
  const addItemsToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };
  const removeItemFromCard = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: "SET_IS_CART_OPEN", payload: bool });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    cartItems,
    cartCount,
    removeItemFromCard,
    clearItemFromCart,
    cartTotal,
  };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
