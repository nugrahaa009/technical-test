const DETAIL_DATA_POKEMON = 'DETAIL_DATA_POKEMON'
const DETAIL_DATA_POKEMON_SUCCESS = 'DETAIL_DATA_POKEMON_SUCCESS'
const DETAIL_DATA_POKEMON_FAILED = 'DETAIL_DATA_POKEMON_FAILED'
const UNMOUNT_DETAIL_DATA_POKEMON = 'UNMOUNT_DETAIL_DATA_POKEMON'

const initialState = {
  data: null,
  loading: true,
  message: null,
}

const detailPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_DATA_POKEMON:
      return {
        ...state,
        data: null,
        loading: true,
      }
    case DETAIL_DATA_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'SUCCESS',
        data: action.payload.data,
      }
    case DETAIL_DATA_POKEMON_FAILED:
      return {
        ...state,
        data: null,
        loading: true,
        message: 'FAILED',
      }
    case UNMOUNT_DETAIL_DATA_POKEMON:
      return {
        ...state,
        data: null,
        loading: true,
        message: null
      }
    default:
      return state
  }
}

export default detailPokemonReducer

