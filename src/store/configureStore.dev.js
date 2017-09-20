import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers'

const enhacer = composeWithDevTools(
  applyMiddleware(thunk, createLogger())
)

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhacer)
}
