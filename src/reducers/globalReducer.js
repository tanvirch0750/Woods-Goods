import { MOBILE_MENU_CLOSE, MOBILE_MENU_OPEN } from '../actions';

const globalReducer = (state, action) => {
   if (action.type === MOBILE_MENU_OPEN) {
     return {...state, isMobileMenuOpen: true}
   }

   if (action.type === MOBILE_MENU_CLOSE) {
      return {...state, isMobileMenuOpen: false}
    }

   return state;
}

export default globalReducer;