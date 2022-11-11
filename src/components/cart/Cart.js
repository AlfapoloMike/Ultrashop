import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import * as cartAction from "../../redux/cart/cart-actions";
import {
  AllCardsContainer,
  ArrowIcon,
  BlurBackground,
  CartContainerStyled,
  CartIconContainerStyled,
  CartInfoContainer,
  CloseButtonStyled,
  EmptyCartMessage,
  EndShopCartButtonStyled,
  TrashICon,
  UpperCartInfoContainer,
} from "./CartStyle";
import { totalItemsCart, totalPrice } from "../../utility/cartInfo";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const {cartItems , hiddenMenu } = useSelector((state) => state.cart)
  const total = totalPrice(cartItems);
  const quantity = totalItemsCart(cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (hiddenMenu) {
      dispatch(cartAction.toggleCartHidden());
    }
  }, [dispatch]);

  const variants = {
    open: { x: 0 },
    closed: { x: "+100%" },
  };

  return (
    <>
      { hiddenMenu && 
        (<BlurBackground
          onClick={() => dispatch(cartAction.toggleCartHidden())}
          hiddenMenu={hiddenMenu}
        />)
      }

      <CartContainerStyled
        as={motion.div}
        animate={hiddenMenu ? "open" : "closed"}
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
        {cartItems.length > 0 ? (
          <AllCardsContainer>
            {cartItems.map((digimon) => (
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
            <a as={Link} onClick={()=>navigate("/Checkout")} >
            <EndShopCartButtonStyled>Finalizar compra</EndShopCartButtonStyled>
            </a>
            <ArrowIcon />
          </CartIconContainerStyled>
        </CartInfoContainer>
      </CartContainerStyled>
    </>
  );
};

export default Cart;
