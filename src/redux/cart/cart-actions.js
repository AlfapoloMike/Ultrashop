export const ADD_TO_CART = 'ADD_TO_CART';
export const REDUCE_FROM_CART = 'REDUCE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_HIDDEN_CART = 'TOGGLE_HIDDEN_CART';

export const addCart= item =>({
    type:ADD_TO_CART,
    payload:item,
})

export const reduceCart= id =>({
    type:REDUCE_FROM_CART,
    payload:id,
})

export const clearCart =()=>({
    type:CLEAR_CART,
})

export const toggleCartHidden = () => ({
    type: TOGGLE_HIDDEN_CART,
})
  
