import React from "react";
import { useDispatch } from "react-redux";
import {
  AllTextContainer,
  ButtonsContainerCheckCard,
  CartInfoCheckoutContainer,
  CheckoutCardContainer,
  TextStyled,
} from "./CheckoutStyle";
import * as actionCart from '../../redux/cart/cart-actions'
import { totalPrice } from "../../utility/cartInfo";

const CheckoutProductCard = (props) => {
  const { nombre, quantity, tipo, nivel, id } = props;
  const dispatch = useDispatch()



  return (
    <>
      <CheckoutCardContainer>
        <img
          src={require(`../../assets/images/digimon/${nombre.toLowerCase()}.png`)}
        />
        <AllTextContainer>
          <TextStyled>{nombre} </TextStyled>
          <TextStyled>Tipo:{tipo} </TextStyled>
          <TextStyled>Nivel:{nivel} </TextStyled>
        </AllTextContainer>
        <ButtonsContainerCheckCard>
          <h2>Cantidad:{quantity} </h2>
          <button
            onClick={() => dispatch(actionCart.reduceCart(id))}
          >
            -
          </button>
          <button onClick={() => dispatch(actionCart.addCart(props))}>+</button>
        </ButtonsContainerCheckCard>
      </CheckoutCardContainer>
    </>
  );
};

export default CheckoutProductCard;
