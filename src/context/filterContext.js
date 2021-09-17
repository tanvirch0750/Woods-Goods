import React, { useContext, useEffect, useReducer } from 'react';
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_SORT } from '../actions';
import reducer from '../reducers/filterReducer';
// import {LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS} from '../actions';
import { useProductsContext } from './productsContext';

const initialState = {
   filteredProducts: [],
   allProducts: [],
   gridView: true,
   sort: 'price-lowest'
};

const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {
   const {products} = useProductsContext();
   const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
      dispatch({type: LOAD_PRODUCTS, payload: products})
   }, [products])

   useEffect(() => {
      dispatch({type: SORT_PRODUCTS})
      
   }, [products, state.sort]);

   const setGridView = () => {
      dispatch({type: SET_GRIDVIEW})
   }

   const setListView = () => {
      dispatch({type: SET_LISTVIEW})
   }

   const updateSort = (e) => {
      // const name = e.target.name;
      const {value} = e.target;
      dispatch({type: UPDATE_SORT, payload: value})
   }

   return (
      <FilterContext.Provider value={ {...state, setGridView, setListView, updateSort} }>
         {children}
      </FilterContext.Provider>
   )
}

export const useFilterContext = () => useContext(FilterContext)