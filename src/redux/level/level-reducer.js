import { digimonLevel } from '../../data/Level';
import { DELETE_LEVEL, SELECT_LEVEL } from './level-actions';


const INITIAL_STATE = {
    digimonsLevels: digimonLevel,
    selectedLevel: null
};

const levelsReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case SELECT_LEVEL:
            return {
                ...state,selectedLevel:
                    action.payload !== state.selectedLevel ? action.payload : null
            }
        default:
        return state;
    }
};

export default levelsReducer;