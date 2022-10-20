export const addItemToCart=(cartItems, product)=>{
    
    const itemToAdd = cartItems.find(item => item.id === product.id)

    if (itemToAdd) {
        return cartItems.map(item =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    
      return [...cartItems, { ...product, quantity: 1}];
}

export const reduceItemInCart=(cartItems, id)=>{
    const itemToReduce = cartItems.find(item =>item.id === id)

    if(itemToReduce.quantity >1){
      return cartItems.map(item=>
        item.id === id?
        {...item, quantity:item.quantity -1}:
        item
        )
    }

    return cartItems.filter(item => item.id !== itemToReduce.id);

}