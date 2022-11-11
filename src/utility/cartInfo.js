export const totalPrice =(cart)=>{

    var totalPriceCart = 0

    cart.map(item=>(
        totalPriceCart += (item.precio * item.quantity)
    ))

    return totalPriceCart;

}
export const totalItemsCart = (cart) =>{
    var totalCart = 0

    cart.map(item=>
        (
            totalCart += item.quantity
        )        
    )

    return totalCart;
}