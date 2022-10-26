import React from 'react'
import LevelCategory from '../levelCategory/LevelCategory'
import TypeCategory from '../typeCategory/TypeCategory'
import { FilterContainerStyled } from './AllFiltersStyle'

const AllFilters = () => {
  return (

    <FilterContainerStyled>
        <LevelCategory></LevelCategory>
        <TypeCategory></TypeCategory>
    </FilterContainerStyled>
  )
}

export default AllFilters