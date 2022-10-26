// import React from 'react'

// const LowStocksCard = (items) => {

// // const {stock, nombre} = items

//   return (
//     <>
//     </>
//   )
// }

// export default LowStocksCard

import React from "react";
import { motion } from "framer-motion";
import { AllDataCardContainer, CardContainerStyled, DataCardContainer, DigimonNameStyled, PriceCardContainer } from "./LowStockStyles";
import * as actionCart from '../../redux/cart/cart-actions'
import { useDispatch, useSelector } from "react-redux";

const LowStocksCard = (props) => {
    const {nombre, tipo, nivel, elemento, precio, id} = props
    const nombreLenght = nombre.length
const stockSelected = useSelector(state => state.cart.cartItems)
const findDigimon = stockSelected.find(stock => stock.id === id)
const dispatch = useDispatch()

  return (
    <div>
      <CardContainerStyled as={motion.div} whileHover={{ scale: 1.05 }}>
        <img
          src={require(`../../assets/images/digimon/${nombre.toLowerCase()}.png`)}
        />
        <AllDataCardContainer>
          <DigimonNameStyled nombre={nombreLenght}>{nombre}</DigimonNameStyled>
          <DataCardContainer>Tipo: {tipo}</DataCardContainer>
          <DataCardContainer>Nivel: {nivel}</DataCardContainer>
          <DataCardContainer>Elemento: {elemento}</DataCardContainer>
          <PriceCardContainer>${precio}</PriceCardContainer>
          <div>
            {findDigimon ? (
              stockSelected.map((stock) => {
                if (stock.id === id && stock.quantity > 0) {
                  return (
                    <p key={stock.id}>Cantidad en carrito: {stock.quantity} </p>
                  );
                }
              })
            ) : (
              <p>Agregar al carrito</p>
            )}
            <button
              onClick={() => dispatch(actionCart.reduceCart(id))}
              disabled={findDigimon !== undefined ? false : true}
            >
              -
            </button>
            <button onClick={() => dispatch(actionCart.addCart(props))}>
              +
            </button>
          </div>
        </AllDataCardContainer>
      </CardContainerStyled>
    </div>
  );
};

export default LowStocksCard;
