import { digimons, TotalDigimons} from '../../data/Digimons'

const INITIAL_STATE = {
    digimons: digimons,
    totalDigimons: TotalDigimons,
};

const digimonsReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        default:
        return state;
    }
};

export default digimonsReducer;