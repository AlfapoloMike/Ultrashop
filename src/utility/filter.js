export const filtering =(digimon, toFilter, state)=>{
    if(toFilter === state){
        return digimon
    }else if(state === null){
        return digimon
    }
}
