import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cart from "../cart/Cart";
import {
  IconCart,
  IconProfile,
  LinkStyled,
  NavBarContainerStyled,
} from "./NavbarStyle";
import * as cartAction from "../../redux/cart/cart-actions";
import * as userActions from "../../redux/user/user-actions";
import { IoCartOutline } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { motion } from "framer-motion";
import UserModal from "./userModal/UserModal";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <NavBarContainerStyled>
        <Cart />
        <UserModal />
        <LinkStyled as={Link} to="/">
          Inicio
        </LinkStyled>
        <LinkStyled as={Link} to="/Products">
          Productos
        </LinkStyled>
        <LinkStyled as={Link}>
          <motion.div whileHover={{ rotate: 360 }}>
            <IconCart
              as={IoCartOutline}
              onClick={() => dispatch(cartAction.toggleCartHidden())}
            />
          </motion.div>
        </LinkStyled>
        <a
          as={Link}
          onClick={() =>
            currentUser
              ? dispatch(userActions.toggleMenuHidden())
              : navigate('/Login')
          }
        >
          {currentUser ? `${currentUser.displayName}` : "Inicia sesion"}
          <IconProfile as={RiUserFill} />
        </a>
      </NavBarContainerStyled>
    </>
  );
};

export default Navbar;
