import { combineReducers } from 'redux'
import listPokemonReducer from './listPokemonReducer'
import detailPokemonReducer from './detailPokemonReducer'

export default combineReducers({
  pokemon: combineReducers({
    list: listPokemonReducer,
    detail: detailPokemonReducer,
  })
})