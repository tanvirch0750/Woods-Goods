// import axios from 'axios';
import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_SUCCESS } from '../actions';
import reducer from '../reducers/productReducer';
import { productsUrl } from "../utils/constants";


const initialState = {
   productsLoading: false,
   productsError: false,
   products: [],
   featuredProducts: [],
   singleProductLoading: false,
   singleProductError: false,
   singleProduct: {}
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const fetchProducts = async ( url ) => {
      dispatch({type: GET_PRODUCTS_BEGIN})

      try {
         const response = await axios.get(url);
         const products = response.data;
         dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})
      } catch (error) {
         dispatch({type: GET_PRODUCTS_ERROR})
      }
      
   }

   const fetchSingleProduct = async (url) => {
      dispatch({type: GET_SINGLE_PRODUCT_BEGIN})

      try {
         const response = await axios.get(url);
         const singleProduct = response.data;
         dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
      } catch (error) {
         dispatch({type: GET_SINGLE_PRODUCT_ERROR})
      }
   }

   useEffect(() => {
     fetchProducts(productsUrl)
   }, []);

   return(
      <ProductsContext.Provider value={{...state, fetchSingleProduct}}>
         {children}
      </ProductsContext.Provider>
   )}

export const useProductsContext = () => useContext(ProductsContext)
