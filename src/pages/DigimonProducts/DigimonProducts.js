import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../components/cart/Cart";
import AllFilters from "../../components/filters/AllFilters";
import CardsDigimons from "../../components/products/CardsDigimons";
import { ItemsToBlur } from "./DigimonProductsStyle";


const DigimonProducts = () => {
const hiddenMenu = useSelector(state => state.cart.hiddenMenu)

  return (
    <> 
      <AllFilters />
      <CardsDigimons/>
    </>
  );
};

export default DigimonProducts;
