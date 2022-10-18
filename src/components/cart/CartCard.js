import React from 'react'
import { CardContainerStyled, CardImage, CardTextContainer } from './CartStyle'

const CartCard = (digimones) => {

const {nombre, id, precio, quantity} = digimones

  return (
    <CardContainerStyled>
    <CardImage src={require(`../../assets/images/digimon/${nombre.toLowerCase()}.png`)}/>
    <CardTextContainer>
    <h2>{nombre} </h2>
    <h2>{id} </h2>
    <h2>${precio} </h2>
    <h2>cantidad:{quantity} </h2>
    </CardTextContainer>
    </CardContainerStyled>
  )
}

export default CartCard