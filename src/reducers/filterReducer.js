/* eslint-disable no-unreachable */
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT } from '../actions';
// import {LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS} from '../actions';

const filterReducer = (state, action) => {

   if(action.type === LOAD_PRODUCTS){
      return {
         ...state,
         allProducts: [...action.payload],
         filteredProducts: [...action.payload],

      }
   }

   if(action.type === SET_GRIDVIEW) {
      return{
         ...state,
         gridView: true,
      }
   }

   if(action.type === SET_LISTVIEW) {
      return{
         ...state,
         gridView: false,
      }
   }

   if(action.type === UPDATE_SORT) {
      return{
         ...state,
         sort: action.payload,
      }
   }

  
   throw new Error (`No Matching "${action.type}" - action type`)
}

export default filterReducer;