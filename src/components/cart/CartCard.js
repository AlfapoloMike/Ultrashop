import React from "react";
import { useDispatch } from "react-redux";
import {
  ButtonsCartContainerStyled,
  CardContainerStyled,
  CardImage,
  CardTextContainer,
} from "./CartStyle";
import * as actionCart from "../../redux/cart/cart-actions";

const CartCard = (digimones) => {
  const { nombre, id, precio, quantity } = digimones;

  const dispatch = useDispatch();

  return (
    <>
      <CardContainerStyled>
        <CardImage
          src={require(`../../assets/images/digimon/${nombre.toLowerCase()}.png`)}
        />
        <CardTextContainer>
          <h2>{nombre} </h2>
          <h2>{id} </h2>
          <h2>${precio} </h2>
          <h2>cantidad:{quantity} </h2>
          <ButtonsCartContainerStyled>
            <button onClick={() => dispatch(actionCart.reduceCart(id))}>
              -
            </button>
            <button onClick={() => dispatch(actionCart.addCart(digimones))}>
              +
            </button>
          </ButtonsCartContainerStyled>
        </CardTextContainer>
      </CardContainerStyled>
    </>
  );
};

export default CartCard;
