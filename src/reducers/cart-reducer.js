import { ADD_TO_CART, CLEAR_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from '../actions';
// import {ADD_TO_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS} from '../actions';

const cartReducer = (state, action) => {

   if (action.type === ADD_TO_CART) {
      const {id, color, amount, product} = action.payload;

      const tempItem =  state.cart.find((item) => item.id === id + color)

      if(tempItem){

         const tempCart = state.cart.map((item) => {
            if(item.id === id + color){
               let newAmount = item.amount + amount;
               if(newAmount > item.maxStock){
                  newAmount = item.maxStock
               }
               return {...item, amount: newAmount}
            } // else
               return item;
            
         })

         return {...state, cart: tempCart}

      } // else
         const newItem = {
            id: id+color,
            name: product.name,
            color,
            amount,
            image: product.images[0].url,
            price: product.price,
            maxStock: product.stock
         }
         return {...state, cart:[...state.cart, newItem]}
      
   }

   if (action.type === REMOVE_CART_ITEM) {
      const temCart = state.cart.filter((item) => item.id !== action.payload)
      return {...state, cart: temCart} 
   }

   if (action.type === CLEAR_CART) {
      return {...state, cart: []} 
   }

   if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
      const {id, value} = action.payload;

      const tempCart = state.cart.map((item) => {
         if(item.id === id){
            if(value === 'inc'){
               let newAmount = item.amount + 1;
               if(newAmount > item.maxStock){
                  newAmount = item.maxStock
               }
               return {...item, amount: newAmount}
            };
            if(value === 'dec'){
               let newAmount = item.amount - 1;
               if(newAmount < 1){
                  newAmount = 1
               }
               return {...item, amount: newAmount}
            }

         } // else
            return item;
      });

      return {...state, cart: tempCart}


   }

   throw new Error(`No Matching "${action.type}" - action type`)
}

export default cartReducer;