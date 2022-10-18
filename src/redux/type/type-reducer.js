import { digimonTypes } from "../../data/Types";
import { SELECT_TYPE } from "./type-actions";


const INITIAL_STATE = {
    digimonsTypes: digimonTypes,
    selectedType: null,
};

const typesReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case SELECT_TYPE:
            return{
                ...state,selectedType:
                    action.payload !== state.selectedType ? action.payload : null
            }
        default:
        return state;
    }
};

export default typesReducer;
