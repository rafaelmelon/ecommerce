import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE
} from 'types'
import API from '../api'

// Actions Creators
export function fetchProductsSuccess (products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export function fetchProductsFailure (error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export function fetchProductSuccess (product) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product
  }
}

export function fetchProductFailure (error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  }
}

export function saveProductSuccess () {
  return {
    type: SAVE_PRODUCT_SUCCESS
  }
}

export function saveProductFailure (error) {
  return {
    type: SAVE_PRODUCT_FAILURE,
    payload: error
  }
}

// Actions Creators (Async)
export function fetchProducts () {
  return async (dispatch => {
    dispatch(() => {
      return {
        type: 'FETCH_PRODUCT_INIT'
      }
    })
    try {
      const data = await API.products.getAll()
      return dispatch(fetchProductsSuccess(data.products))
    } catch (error) {
      return dispatch(fetchProductsFailure(error))
    }
  })
}

export function fetchProduct (productID) {
  return async (dispatch => {
    dispatch(() => {
      return {
        type: 'FETCH_PRODUCT_INIT'
      }
    })

    try {
      const data = await API.products.getSingle(productID)
      return dispatch(fetchProductSuccess(data.product))
    } catch (error) {
      return dispatch(fetchProductFailure(error))
    }

  })
}

export function saveProduct (product) {
  return async (dispatch => {
    dispatch(() => {
      return {
        type: 'FETCH_PRODUCT_INIT'
      }
    })

    try {
      await API.products.save(product)
      return dispatch(saveProductSuccess())
    } catch (error) {
      return dispatch(saveProductFailure(error))
    }

  })
}
