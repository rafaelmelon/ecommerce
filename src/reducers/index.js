import { combineReducers } from 'redux'

import productList from './productListReducer'
import activeProduct from './activeProductReducer'
import cart from './cartReducer'

const rootReducer = combineReducers({
  productList,
  activeProduct,
  cart
})

export default rootReducer
