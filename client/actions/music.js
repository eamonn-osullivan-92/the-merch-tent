import {
  getMusic,
  addMusicItem,
  updateMusicItem,
  deleteMusicItem,
  sendImage,
} from '../apis/music'

import { showError } from '../actions/error'

export const SET_MUSIC = 'SET_MUSIC'
export const ADD_MUSIC = 'ADD_MUSIC'
export const DEL_MUSIC = 'DEL_MUSIC'
export const UPDATE_MUSIC = 'UPDATE_MUSIC'
export const ADD_IMAGE_STATE = 'ADD_IMAGE_STATE'
export const UPDATE_IMAGE_STATE = 'UPDATE_IMAGE_STATE'
export const FETCH_MUSIC_PENDING = 'FETCH_MUSIC_PENDING'
export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS'

export function setMusic(music) {
  return {
    type: SET_MUSIC,
    payload: music,
  }
}

export function addMusic(newObj) {
  return {
    type: ADD_MUSIC,
    payload: newObj,
  }
}

export function deleteMusic(id) {
  return {
    type: DEL_MUSIC,
    payload: id,
  }
}

export function updateMusic(updatedObj) {
  return {
    type: UPDATE_MUSIC,
    payload: updatedObj,
  }
}

export function addImage(image_path, product_id) {
  return {
    type: ADD_IMAGE_STATE,
    payload: { image_path, product_id },
  }
}

export function updateImage(image_path, product_id) {
  return {
    type: UPDATE_IMAGE_STATE,
    payload: { image_path, product_id },
  }
}

export function fetchMusicPending() {
  return {
    type: FETCH_MUSIC_PENDING,
  }
}

export function fetchMusicSuccess(music) {
  return {
    type: FETCH_MUSIC_SUCCESS,
    payload: music,
  }
}

//THUNKS

export function fetchMusic() {
  return (dispatch) => {
    dispatch(fetchMusicPending())
    return getMusic()
      .then((music) => {
        dispatch(fetchMusicSuccess(music))
      })
      .catch((err) => {
        // if the error is from our routes, this will use the message our route
        // sends back, rather than the generic 'Internal Server Error' from a
        // status 500
        // if the error is from elsewhere in the Promise chain, there won't be
        // an err.response object, so we use err.message
        const errMessage = err.response?.text || err.message
        console.log(err.message)
        dispatch(showError(errMessage))
      })
  }
}

export function addMusicAndState(objToAdd, image, token) {
  return (dispatch) => {
    return addMusicItem(objToAdd, token)
      .then(([{ id }]) => {
        const newProduct = {
          ...objToAdd,
          id: id,
          image_path: [],
        }
        dispatch(addMusic(newProduct))
        return sendImage(image, id, token)
      })
      .then(({ image_path, product_id }) => {
        return dispatch(updateImage(image_path, Number(product_id)))
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.log(err.message)
        dispatch(showError(errMessage))
      })
  }
}

export function updateMusicAndState(objToUpdate, token) {
  return (dispatch) => {
    //databse
    return updateMusicItem(objToUpdate, token)
      .then(() => {
        //state
        return dispatch(updateMusic(objToUpdate))
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.log(err.message)
        dispatch(showError(errMessage))
      })
  }
}

export function updateImageAndState(image, product_id, token) {
  return (dispatch) => {
    //database
    return sendImage(image, product_id, token).then(({ image_path }) => {
      //state
      return dispatch(updateImage(image_path, product_id))
    })
  }
}

export function deleteMusicAndState(id, token) {
  return (dispatch) => {
    //database
    return deleteMusicItem(id, token)
      .then(() => {
        //state
        return dispatch(deleteMusic(id))
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.log(err.message)
        dispatch(showError(errMessage))
      })
  }
}
