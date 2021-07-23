// // import axios from 'axios';
// import React, { useContext, useReducer } from 'react';
// import { MOBILE_MENU_CLOSE, MOBILE_MENU_OPEN } from '../actions';
// import reducer from '../reducers/productReducer';


// const initialState = {
//    isMobileMenuOpen: false
// };

// const ProductsContext = React.createContext();

// export const ProductsProvider = ({ children }) => {
//    const [state, dispatch] = useReducer(reducer, initialState);

//    const openMobileMenu = () => {
//       dispatch({type: MOBILE_MENU_OPEN})
//    }

//    const closeMobileMenu = () => {
//       dispatch({type: MOBILE_MENU_CLOSE})
//    }

//    return(
//       <ProductsContext.Provider value={{...state, openMobileMenu, closeMobileMenu}}>
//          {children}
//       </ProductsContext.Provider>
//    )}

// export const useProductsContext = () => useContext(ProductsContext)
