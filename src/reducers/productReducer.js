 import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS } from '../actions';

const productsReducer = (state, action) => {
   if (action.type === GET_PRODUCTS_BEGIN) {
     return {...state, productsLoading: true}
   }

   if (action.type ===  GET_PRODUCTS_SUCCESS) {
     const featuredProducts = action.payload.filter((product) => product.featured === true);
     return {...state, productsLoading: false, products: action.payload, featuredProducts}
   }

   if (action.type ===GET_PRODUCTS_ERROR) {
      return {...state, productsLoading: false, productsError: true}
   }

   return state;
}

export default productsReducer;