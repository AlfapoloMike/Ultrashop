import React from 'react'

const CheckoutProductCard = (props) => {

const {nombre, quantity, tipo, nivel} = props

  return (
    <>
        <h2>{nombre} </h2>
        <h2>{tipo} </h2>
        <h2>{nivel} </h2>
        <h2>{quantity} </h2>
    </>
  )
}

export default CheckoutProductCard