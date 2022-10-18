import React from 'react'
import { useSelector } from 'react-redux'
import LevelCategoryCard from './LevelCategoryCard'
import { LevelCardsContainerStyled } from './LevelCategoryStyled'

const LevelCategory = () => {

const levels = useSelector(state => state.level.digimonsLevels)

  return (
    <LevelCardsContainerStyled>
      {levels.map(level =>(
        <LevelCategoryCard {...level} key={level.id} />
      ))}
    </LevelCardsContainerStyled>
  )
}

export default LevelCategory