import { getMerch } from '../apis/merch'

export const SET_MERCH = 'SET_MERCH'

export function setFruits(merch) {
  return {
    type: SET_MERCH,
    payload: merch,
  }
}

export function fetchMerch() {
  return (dispatch) => {
    return getMerch().then((merch) => {
      dispatch(setFruits(merch))
    })
  }
}
