import React from "react";
import { useSelector } from "react-redux";
import { totalItemsCart, totalPrice } from "../../utility/cartInfo";
import CheckoutProductCard from "./CheckoutProductCard";
import { CartInfoCheckoutContainer, CheckoutContainerStyle } from "./CheckoutStyle";

const CheckoutContainer = () => {

const cartItems = useSelector((state) => state.cart.cartItems);
const totalPrices = totalPrice(cartItems)
const totalItems = totalItemsCart(cartItems)
  return (
    <>
    <CheckoutContainerStyle>
      {cartItems.map((item) => (
        <CheckoutProductCard {...item} key={item.id} />
      ))}
    <CartInfoCheckoutContainer>
        <h2>Estas a un paso de finalizar</h2>
        <h2>Monto total:{totalPrices}</h2>
        <h2>Cantidad de productos:{totalItems}</h2>
      </CartInfoCheckoutContainer>
    </CheckoutContainerStyle>
    </>
  );
};

export default CheckoutContainer;
