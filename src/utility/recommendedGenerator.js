export const recomendGenerator=(digimons)=>{

    const max = digimons.length
    var recomendedArray = []
    
    while(recomendedArray.length < 6){
        
        const random = Math.floor(Math.random() * max)
        const add = digimons.find(digimon => digimon.id === random)

        if(random >0 && recomendedArray.indexOf(add) === -1){
            recomendedArray = [...recomendedArray,add]
        }
    }
    
    return recomendedArray;


}

export const lowStockGenerator=(digimons)=>{
    const max = digimons.length
    var stockArray = []
    while(stockArray.length < 6){

        const random = Math.floor(Math.random() * max)
        const add = digimons.find(digimon => digimon.id === random)
        if(random>0){
            if(add.stock < 5  && stockArray.indexOf(add)===-1){
                stockArray = [...stockArray, add]
            }
        }

    }
    return stockArray;
}