import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard'
import * as cartAction from '../../redux/cart/cart-actions'

const Cart = () => {
  
const digimons = useSelector(state => state.cart.cartItems)  

const dispatch = useDispatch()
    return (
    <>
    <button
    onClick={()=>dispatch(cartAction.clearCart())}
    >Vaciar carrito</button>
    {
        digimons.map(digimon=>(
        <CartCard {...digimon} />
      ))
    }
    
    </>
  )
}

export default Cart