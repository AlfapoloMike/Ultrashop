import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard'
import * as cartAction from '../../redux/cart/cart-actions'
import { BoxStyled, CartContainerStyled, CartIconContainerStyled, CartIconStyled, EmptyCartButtonStyled, EndShopCartButtonStyled, FullCartContainer, InfoCartContainer } from './CartStyle'
import { totalItemsCart, totalPrice } from '../../utility/cartInfo'
import { motion } from "framer-motion";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  
const [show,setShow] = useState(false)  
const digimons = useSelector(state => state.cart.cartItems)  
const total = totalPrice(digimons)
const quantity = totalItemsCart(digimons)
const dispatch = useDispatch()

const variants ={
  open:{opacity:1, x:0},
  closed:{opacity:0, x:"+100%"}
}

    return (
    <>
    <FullCartContainer>

      <CartIconContainerStyled>

    <CartIconStyled as={IoCartOutline}
    onClick={()=>{setShow(!show)}}
    />
      </CartIconContainerStyled>

    <motion.div
    animate={show? "open" : "closed"}
    variants={variants}
    transition={{type:"tween"}}
    >
    <CartContainerStyled>

      {
          digimons.map(digimon=>(
          <CartCard {...digimon} key={digimon.id} />
        ))
      }
    </CartContainerStyled>

      <InfoCartContainer>
        <h2>Productos en carrito:{quantity}</h2>
        <h3>Monto total:{total} </h3>
        <EmptyCartButtonStyled
          onClick={()=>dispatch(cartAction.clearCart())}
          >Vaciar carrito
        </EmptyCartButtonStyled>
        <EndShopCartButtonStyled>
          Finalizar compra
        </EndShopCartButtonStyled>
      </InfoCartContainer>
    </motion.div>
    </FullCartContainer>
    </>
  )
}

export default Cart