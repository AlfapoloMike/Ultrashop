import {combineReducers} from "redux"
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer  from "../cart/cart-reducer"
import levelsReducer from "../level/level-reducer"
import digimonsReducer from "../products/digimon-reducer"
import typesReducer from "../type/type-reducer"
import userReducer from "../user/user-reducer"



const persisConfig = {
    key:'root',
    storage: storage,
    whitelist: ['cart','user']
}
const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    digimons: digimonsReducer,
    types:typesReducer,
    level:levelsReducer,
});

export default persistReducer(persisConfig,rootReducer)