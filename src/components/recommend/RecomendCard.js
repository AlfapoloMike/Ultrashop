import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonRecomendStyle, CardContainer, RecomendTextContainer } from './RecomenderStyle'
import * as actionCart from '../../redux/cart/cart-actions'

const RecomendCard = (props) => {

  const cart = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()
  const { nombre, tipo, nivel, precio, id} = props
  return (
    <>

      <CardContainer>
          
      <div>
      <img alt={nombre} src={require(`../../assets/images/digimon/${nombre.toLowerCase()}.png`)}/>
      </div>
      <RecomendTextContainer>
      <h3>{nombre}</h3>
      <h3>Tipo:{tipo}</h3>
      <h3>${precio}</h3>
      <ButtonRecomendStyle>
            <button onClick={() => dispatch(actionCart.addCart(props))}>
              Agregar al carrito
            </button>
      </ButtonRecomendStyle>
      </RecomendTextContainer>
      </CardContainer>

    </>
  )
}

export default RecomendCard