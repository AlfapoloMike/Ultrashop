import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as levelActions from '../../redux/level/level-actions'
import { CardLevelContainerStyled } from './LevelCategoryStyled'

const LevelCategoryCard = (props) => {

const selectedLevel = useSelector(state => state.level.selectedLevel)
const {title, level, id} = props;
const dispatch = useDispatch()
  return (
    <>
    <CardLevelContainerStyled
    onClick={()=> dispatch(levelActions.selectedLevel(level))}
    selected = {selectedLevel === title}
    >
      <h2>{title}</h2>
      <img src={require(`../../assets/images/categories/levels/${title.toLowerCase()}.png`)}/>
    </CardLevelContainerStyled>
    </>
  )
}

export default LevelCategoryCard