import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const enhacer = composeWithDevTools(
  applyMiddleware(logger())
)

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhacer)
}
