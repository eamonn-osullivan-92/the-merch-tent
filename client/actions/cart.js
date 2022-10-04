export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const UPDATE_CART = 'UPDATE_CART'

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  }
}

export function updateCart(updateInfo) {
  return {
    type: UPDATE_CART,
    payload: updateInfo,
  }
}
