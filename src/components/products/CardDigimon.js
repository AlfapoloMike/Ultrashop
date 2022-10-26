import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AddToCartMessage, CardContainerStyled, DataContainerStyled, DigimonCardTextContainer, DigimonNameStyled, PriceContainerStyled} from './CardsStyle'
import * as actionCart from '../../redux/cart/cart-actions'
import { motion } from 'framer-motion'


const CardDigimon = (props) => {

const stockSelected = useSelector(state => state.cart.cartItems)
const { nombre, tipo, nivel, precio, id, elemento} = props
const findDigimon = stockSelected.find(stock => stock.id === id)
const nombreLenght = nombre.length



const dispatch = useDispatch()

  return (
    <>
    <CardContainerStyled
    as={motion.div} whileHover={{scale:1.05}}
    >
        <img src={require(`../../assets/images/digimon/${nombre.toLowerCase()}.png`)}/>
        <DigimonCardTextContainer>
        <DigimonNameStyled nombre={nombreLenght}>{nombre}</DigimonNameStyled>
        <DataContainerStyled>Tipo: {tipo}</DataContainerStyled>
        <DataContainerStyled>Nivel: {nivel}</DataContainerStyled>
        <DataContainerStyled>Elemento: {elemento}</DataContainerStyled>
        <PriceContainerStyled>${precio}</PriceContainerStyled>
        <div>
        {
          findDigimon ?
          stockSelected.map(stock =>{
            if(stock.id === id && stock.quantity >0){
              return <p key={stock.id} >Cantidad en carrito: {stock.quantity} </p> 
            }
          }):
          <p>Agregar al carrito</p>
        }
        <button
        onClick={()=>dispatch(actionCart.reduceCart(id))}
        disabled={findDigimon!== undefined ? false : true}
        >-
        </button>
        <button
        onClick={()=>dispatch(actionCart.addCart(props))}
        >+
        </button>
        </div>
        </DigimonCardTextContainer>
    </CardContainerStyled>
    </>
  )
}

export default CardDigimon