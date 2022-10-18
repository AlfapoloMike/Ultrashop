import React from 'react'
import { useSelector } from 'react-redux'
import TypeCategoryCard from './TypeCategoryCard'
import { TypeCardsContainerStyled } from './TypeCategoryCardStyled'


const TypeCategory = () => {
  
const types = useSelector(state => state.types.digimonsTypes)
  
  return (
    <TypeCardsContainerStyled>
        {
            types.map(type =>(
                <TypeCategoryCard {...type} key={type.id} />
            ))
        }
    </TypeCardsContainerStyled>
  )
}

export default TypeCategory