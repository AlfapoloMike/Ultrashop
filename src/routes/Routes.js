import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import DigimonProducts from '../pages/DigimonProducts/DigimonProducts';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';

const Routes = () => {
  return (
    <>
        <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/Register' element={<Register />} />
        {/* <Route path='/forgot-password' element={<ForgotPassword />} /> */}
        {/* <Route path='/mis-ordenes' element={<MisOrdenes />} /> */}
        {/* <Route path='/felicitaciones' element={<Felicitaciones />} /> */}
        <Route path='/Products' element={<DigimonProducts />} />
        <Route path='/Checkout' element={<Checkout/>} />
        </ReactDomRoutes>
    </>
  )
}

export default Routes