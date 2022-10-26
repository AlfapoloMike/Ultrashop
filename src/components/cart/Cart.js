import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import * as cartAction from "../../redux/cart/cart-actions";
import {
  AllCardsContainer,
  ArrowIcon,
  BlurBackground,
  BoxStyled,
  CartContainerStyled,
  CartIconContainerStyled,
  CartIconStyled,
  CartInfoContainer,
  CloseButtonStyled,
  ColumnCartContainer,
  EmptyCartButtonStyled,
  EmptyCartMessage,
  EndShopCartButtonStyled,
  FullCartContainer,
  InfoCartContainer,
  TestContainer,
  TrashICon,
  UpperCartInfoContainer,
} from "./CartStyle";
import { totalItemsCart, totalPrice } from "../../utility/cartInfo";
import { motion } from "framer-motion";

const Cart = () => {
  const currentCart = useSelector((state) => state.cart);
  const { cartItems:cart, hiddenMenu:hiddenmenu} = currentCart


  const digimons = useSelector((state) => state.cart.cartItems);
  const total = totalPrice(digimons);
  const quantity = totalItemsCart(digimons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hiddenmenu) {
      dispatch(cartAction.toggleCartHidden());
    }
  }, [dispatch]);

  const variants = {
    open: { x: 0 },
    closed: { x: "+100%" },
  };

  return (
    <>
      { hiddenmenu && 
        (<BlurBackground
          onClick={() => dispatch(cartAction.toggleCartHidden())}
          hiddenmenu={hiddenmenu}
        />)
      }

      <CartContainerStyled
        as={motion.div}
        animate={hiddenmenu ? "open" : "closed"}
        variants={variants}
        transition={{ type: "tween" }}
        initial={false}
      >
        <UpperCartInfoContainer>
          <motion.div whileHover={{rotate:360, scale:1.2}}>
          <CloseButtonStyled onClick={() => dispatch(cartAction.toggleCartHidden())}/>
          </motion.div>
          <h2>Productos</h2>
        </UpperCartInfoContainer>
        {cart.length > 0 ? (
          <AllCardsContainer>
            {digimons.map((digimon) => (
              <CartCard {...digimon} key={digimon.id} />
            ))}
          </AllCardsContainer>
        ) : (
          <EmptyCartMessage>
            <h2>El carrito esta vacio</h2>
            <h3>Impmon dice que agregues algo</h3>
            <img src={require(`../../assets/images/ui/impmon.webp`)} />
          </EmptyCartMessage>
        )}
        <CartInfoContainer>
          <h2>Productos en carrito:{quantity}</h2>
          <h2>Monto total:${total} </h2>
          <CartIconContainerStyled>
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: [0, 20, 0, -20, 0, 20, 0, -20, 0],
                transition: { type: "tween", duration: 0.5, bounce: 40 },
              }}
            >
              <TrashICon onClick={() => dispatch(cartAction.clearCart())} />
            </motion.div>
            <EndShopCartButtonStyled>Finalizar compra</EndShopCartButtonStyled>
            <ArrowIcon />
          </CartIconContainerStyled>
        </CartInfoContainer>
      </CartContainerStyled>
    </>
  );
};

export default Cart;
