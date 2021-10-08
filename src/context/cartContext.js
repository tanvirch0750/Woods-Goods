/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useReducer } from 'react';
// import {ADD_TO_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS} from '../actions';
import { ADD_TO_CART, CLEAR_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from '../actions';
import reducer from '../reducers/cart-reducer';

const getLocalStorage = () => {
   const cart = localStorage.getItem('cart');
   if (cart) {
      return JSON.parse(localStorage.getItem('cart'));
   } 
      return []
}

const initialState = {
   // cart: [],
   cart: getLocalStorage(),
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

   // remove cart
   const removeCartItem = (id) => {
      dispatch({type: REMOVE_CART_ITEM, payload: id})
   }

   // toggle amount
   const toggleAmount = (id, value) => {
      dispatch({type: TOGGLE_CART_ITEM_AMOUNT, payload: {id, value}})
   }

   // clear cart
   const clearCart = () => {
      dispatch({type: CLEAR_CART})
   }

   // localstorage for persistant cart
   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state.cart))
   }, [state.cart])

   return (
      <CartContext.Provider value={{...state, addToCart, removeCartItem, toggleAmount, clearCart}}>
         {children}
      </CartContext.Provider>
   )
}

export const useCartContext = () => useContext(CartContext)