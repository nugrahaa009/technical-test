const LIST_DATA_POKEMON = 'LIST_DATA_POKEMON'
const LIST_DATA_POKEMON_SUCCESS = 'LIST_DATA_POKEMON_SUCCESS'
const LIST_DATA_POKEMON_FAILED = 'LIST_DATA_POKEMON_FAILED'
const UNMOUNT_LIST_DATA_POKEMON = 'UNMOUNT_LIST_DATA_POKEMON'

const initialState = {
  loading: true,
  message: null,
  next: null,
  previous: null,
  count: 0,
  data: [],
}

const listPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_DATA_POKEMON:
      return {
        ...state,
        data: [],
        loading: true,
        next: null,
        previous: null,
        count: 0
      }
    case LIST_DATA_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'SUCCESS',
        next: action.payload.next,
        previous: action.payload.previous,
        data: action.payload.data,
        count: action.payload.count,
      }
    case LIST_DATA_POKEMON_FAILED:
      return {
        ...state,
        loading: true,
        message: 'FAILED',
        next: null,
        previous: null,
        data: [],
        count: 0
      }
    case UNMOUNT_LIST_DATA_POKEMON:
      return {
        ...state,
        data: [],
        next: null,
        previous: null,
        loading: true,
        count: 0
      }
    default:
      return state
  }
}

export default listPokemonReducer
