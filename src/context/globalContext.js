import React, { useContext, useReducer } from 'react';
import { MOBILE_MENU_CLOSE, MOBILE_MENU_OPEN } from '../actions';
import reducer from '../reducers/globalReducer';


const initialState = {
   isMobileMenuOpen: false
};

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const openMobileMenu = () => {
      dispatch({type: MOBILE_MENU_OPEN})
   }

   const closeMobileMenu = () => {
      dispatch({type: MOBILE_MENU_CLOSE})
   }

   return(
      <GlobalContext.Provider value={{...state, openMobileMenu, closeMobileMenu}}>
         {children}
      </GlobalContext.Provider>
   )}

export const useGlobalContext = () => useContext(GlobalContext)
