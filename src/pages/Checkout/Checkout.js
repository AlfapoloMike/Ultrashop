import React from "react";
import { useSelector } from "react-redux";
import CheckoutProductCard from "./CheckoutProductCard";

const Checkout = () => {

const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {cartItems.map((item) => (
        <CheckoutProductCard {...item} key={item.id} />
      ))}
    </>
  );
};

export default Checkout;
