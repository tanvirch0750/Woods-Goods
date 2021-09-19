/* eslint-disable no-unused-vars */
import React, { useContext, useReducer } from 'react';
// import {ADD_TO_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS} from '../actions';
import { ADD_TO_CART } from '../actions';
import reducer from '../reducers/cart-reducer';

const initialState = {
   cart: [],
   totalItems: 0,
   totalAmount: 0,
   shippingFee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({children}) => {

   const [state, dispatch] = useReducer(reducer, initialState);

   // add to cart
   const addToCart = (id, color, amount, product) => {
      dispatch({ type: ADD_TO_CART, payload: {id, color, amount, product} }) 
   }

   return (
      <CartContext.Provider value={{...state, addToCart}}>
         {children}
      </CartContext.Provider>
   )
}

export const useCartContext = () => useContext(CartContext)