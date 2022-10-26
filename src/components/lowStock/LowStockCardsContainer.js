
import React from 'react'
import { useSelector } from 'react-redux'
import { lowStockGenerator } from '../../utility/recommendedGenerator'
import LowStocksCard from './LowStocksCard'
import { CardsContainerStyled } from './LowStockStyles'

const LowStockCardsContainer = () => {
  
    const allItems = useSelector(state => state.digimons.digimons)

    const items = lowStockGenerator(allItems)
  
    return (
    <>
    <CardsContainerStyled>
    <h2>Productos con bajo stock!</h2>
    {
        items.map(item=>(
            <LowStocksCard {...item} key={item.id} />
        ))
    }
    </CardsContainerStyled>
    </>
  )
}

export default LowStockCardsContainer