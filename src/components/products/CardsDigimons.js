import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TotalDigimons } from '../../data/Digimons'
import { selectedLevel } from '../../redux/level/level-actions'
import { filtering } from '../../utility/filter'
import { INITIAL_LIMIT } from '../../utility/pagination'
import { NoFoundDigimon } from '../noDigimonFound/NoFoundDigimon'
import CardDigimon from './CardDigimon'
import {CardsContainerStyled} from './CardsStyle'


const CardsDigimons = () => {

const digimons = useSelector(state => state.digimons.digimons)
const [limit, setLimit] = useState(INITIAL_LIMIT)

const typeSelected = useSelector(state =>state.types.selectedType)
const levelSelected = useSelector(state =>state.level.selectedLevel)
const digimonsFiltered = digimons.filter(digimon =>filtering(digimon,digimon.tipo,typeSelected)).filter(digimon =>filtering(digimon,digimon.nivel,levelSelected))


useEffect(()=> setLimit(INITIAL_LIMIT),[typeSelected,levelSelected])

return (
  <>
    <button
    onClick={()=>setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
    disabled={INITIAL_LIMIT===limit}
    >
      ver menos
    </button>
    <button
    onClick={()=>setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
    disabled={TotalDigimons <= limit}
    >
      ver mas
    </button>
    <CardsContainerStyled>

        { digimonsFiltered.length === 0 ? 
                  <NoFoundDigimon/>:
                  digimonsFiltered.map(digimon =>(
                    
                    limit>=digimon.id || typeSelected || levelSelected?
                    
                    <CardDigimon {...digimon} key={digimon.id}/>: ''
                    
                    ))
              
       }
 
        
    </CardsContainerStyled> 
    </>
  )
}

export default CardsDigimons