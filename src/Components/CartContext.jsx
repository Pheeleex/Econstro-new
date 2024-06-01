// CartContext.js
import React, { createContext, useReducer, useEffect } from 'react';

const initialState = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
