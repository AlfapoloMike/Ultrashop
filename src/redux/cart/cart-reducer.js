import { ADD_TO_CART, CLEAR_CART, REDUCE_FROM_CART } from "./cart-actions";
import { addItemToCart, reduceItemInCart } from "./cart-utility";



const INITIAL_STATE = {
    cartItems:[]
}


export const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,cartItems:addItemToCart(state.cartItems, action.payload)
            }
        case REDUCE_FROM_CART:
            return{
                ...state,cartItems:reduceItemInCart(state.cartItems, action.payload)
            }
        case CLEAR_CART:
            return{
                ...state,cartItems:[]
            }
        default:
        return state;
    }
};