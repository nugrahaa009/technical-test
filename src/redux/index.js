import AllReducer from './reducers'
import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

const initialState = {}

const store = createStore(AllReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store
