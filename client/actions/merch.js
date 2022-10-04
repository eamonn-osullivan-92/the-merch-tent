import {
  getMerch,
  sendUpdatedMerch,
  sendNewMerch,
  sendDelMerch,
} from '../apis/merch'

export const SET_MERCH = 'SET_MERCH'
export const ADD_MERCH = 'ADD_MERCH'
export const UPDATE_MERCH = 'UPDATE_MERCH'
export const DEL_MERCH = 'DEL_MERCH'

export function setMerch(merch) {
  return {
    type: SET_MERCH,
    payload: merch,
  }
}

export function addMerch(newItem) {
  return {
    type: ADD_MERCH,
    payload: newItem,
  }
}

export function delMerch(id) {
  return {
    type: DEL_MERCH,
    payload: id,
  }
}

export function updateMerch(updatedItem) {
  return {
    type: UPDATE_MERCH,
    payload: updatedItem,
  }
}

//THUNKS

export function fetchMerch() {
  return (dispatch) => {
    return getMerch().then((merch) => {
      dispatch(setMerch(merch))
    })
  }
}

export function fetchAddMerch(newItem) {
  return (dispatch) => {
    return sendNewMerch(newItem).then((merch) => {
      dispatch(addMerch(merch))
    })
  }
}

export function delAndUpdateMerch(delItemId) {
  return (dispatch) => {
    return sendDelMerch(delItemId).then(() => {
      dispatch(delMerch(delItemId))
    })
  }
}

export function fetchUpdatedMerch(updatedItem) {
  return (dispatch) => {
    return sendUpdatedMerch(updatedItem).then(() => {
      dispatch(updateMerch(updatedItem))
    })
  }
}
