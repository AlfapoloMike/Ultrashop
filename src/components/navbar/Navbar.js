import React from 'react'
import Cart from '../cart/Cart'
import { NavBarContainerStyled } from './NavbarStyle'

const Navbar = () => {

  return (

    <>
    <NavBarContainerStyled>
    <h2>Inicio</h2>
    <h2>Productos</h2>
    <h2>Cuenta</h2>
    <Cart/>
    </NavBarContainerStyled>
    </>

  )
}

export default Navbar