import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardTypeContainerStyled } from './TypeCategoryCardStyled'
import * as typeActions from '../../redux/type/type-actions'


const TypeCategoryCard = (props) => {

  const selectedType = useSelector(state => state.types.selectedType)
  const dispatch = useDispatch()

    const {title , types} = props

  return (
    <>
      <CardTypeContainerStyled
      onClick={()=>dispatch(typeActions.selectedType(types))}
      selected = {selectedType === title}
      >
        <h2>{title}</h2>
        <img src={require(`../../assets/images/categories/types/${title.toLowerCase()}.png`)}/>
      </CardTypeContainerStyled>
    </>
  )
}

export default TypeCategoryCard