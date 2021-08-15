 import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_SUCCESS } from '../actions';

const productsReducer = (state, action) => {
   if (action.type === GET_PRODUCTS_BEGIN) {
     return {...state, productsLoading: true}
   }

   if (action.type ===  GET_PRODUCTS_SUCCESS) {
     const featuredProducts = action.payload.filter((product) => product.featured === true);
     return {...state, productsLoading: false, products: action.payload, featuredProducts}
   }

   if (action.type === GET_PRODUCTS_ERROR) {
      return {...state, productsLoading: false, productsError: true}
   }

   if (action.type ===  GET_SINGLE_PRODUCT_BEGIN) {
    return {...state, singleProductLoading: true, singleProductError: false}
  }

  if (action.type ===  GET_SINGLE_PRODUCT_SUCCESS) {
    return {...state, singleProductLoading: false, singleProduct: action.payload}
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {...state, singleProductLoading: false, singleProductError: true}
 }

   return state;
}

export default productsReducer;