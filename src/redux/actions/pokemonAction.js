import { API, errorHandler } from "../../configs"

export const unmountListPokemon = () => async (dispatch) => await dispatch({type: 'UNMOUNT_LIST_DATA_POKEMON'})

export const unmountDetailPokemon = () => async (dispatch) => await dispatch({ type: 'UNMOUNT_DETAIL_DATA_POKEMON' })

export const listPokemon = (params) => async (dispatch) => {
  await dispatch({ type: 'LIST_DATA_POKEMON' })
  return API.GET(import.meta.env.VITE_API_BASE_URL, params).then((response) => {
    const { next, previous, count, results } = response
    let data = []
    results.forEach((pokemon, index) => {
      const segments = pokemon.url.split("/")
      const number = segments[segments.length - 2]
      index++
      let pokemonObject = {
        id: index,
        url: pokemon.url,
        name: pokemon.name,
        image: import.meta.env.VITE_IMAGE_BASE_URL + number + '.png',
      }
      data.push(pokemonObject)
    })
    dispatch({
      type: 'LIST_DATA_POKEMON_SUCCESS',
      payload: {
        next,
        previous,
        data: data,
        count
      },
    })
  }).catch((err) => dispatch(errorHandler(err, dispatch({ type: 'LIST_DATA_POKEMON_FAILED' }))))
}

export const detailPokemon = (path) => async (dispatch) => {
  await dispatch({ type: 'DETAIL_DATA_POKEMON' })
  return API.GET(path).then((response) => {
    dispatch({
      type: 'DETAIL_DATA_POKEMON_SUCCESS',
      payload: {
        data: response,
      },
    })
  }).catch((err) => dispatch(errorHandler(err, dispatch({ type: 'DETAIL_DATA_POKEMON_FAILED' }))))
}