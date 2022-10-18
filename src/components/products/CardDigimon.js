import React from 'react'
import { useDispatch } from 'react-redux'
import {CardContainerStyled, DataContainerStyled, DigimonNameStyled, PriceContainerStyled} from './CardsStyle'
import * as actionCart from '../../redux/cart/cart-actions'


const CardDigimon = (props) => {

const { nombre, tipo, nivel, precio, id} = props
const nombreLenght = nombre.length

const dispatch = useDispatch()

  return (
    <>
    <CardContainerStyled>
        <img src={require(`../../assets/images/digimon/${nombre.toLowerCase()}.png`)}/>
        <DigimonNameStyled nombre={nombreLenght}>{nombre}</DigimonNameStyled>
        <DataContainerStyled>Tipo: {tipo}</DataContainerStyled>
        <DataContainerStyled>Nivel: {nivel}</DataContainerStyled>
        <PriceContainerStyled>${precio}</PriceContainerStyled>
        <h2>{}</h2>
        <div>
        <button
        onClick={()=>dispatch(actionCart.addCart(props))}
        >Agregar al carrito
        </button>        
        <button
        onClick={()=>dispatch(actionCart.reduceCart(id))}
        >Restar del carrito
        </button>
        </div>
    </CardContainerStyled>
    </>
  )
}

export default CardDigimon