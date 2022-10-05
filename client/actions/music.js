import {
  getMusic,
  sendNewAlbum,
  sendDelAlbum,
  sendUpdatedAlbum,
} from '../apis/music'

import { showError } from '../actions/error'

export const SET_MUSIC = 'SET_MUSIC'
export const ADD_ALBUM = 'ADD_ALBUM'
export const UPDATE_ALBUM = 'UPDATE_ALBUM'
export const DEL_ALBUM = 'DEL_ALBUM'
export const FETCH_MUSIC_PENDING = 'FETCH_MUSIC_PENDING'
export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS'

export function setMusic(music) {
  return {
    type: SET_MUSIC,
    payload: music,
  }
}

export function fetchMusicPending() {
  return {
    type: FETCH_MUSIC_PENDING,
  }
}

export function fetchMusicSuccess(products) {
  return {
    type: FETCH_MUSIC_SUCCESS,
    payload: products,
  }
}

export function addAlbum(newItem) {
  return {
    type: ADD_ALBUM,
    payload: newItem,
  }
}

export function delAlbum(id) {
  return {
    type: DEL_ALBUM,
    payload: id,
  }
}

export function updateAlbum(updatedItem) {
  return {
    type: UPDATE_ALBUM,
    payload: updatedItem,
  }
}

//THUNKS

export function fetchMusic() {
  return (dispatch) => {
    dispatch(fetchMusicPending())
    return getMusic()
      .then((products) => {
        console.log(products)
        dispatch(fetchMusicSuccess(products))
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

export function fetchAddMusic(newAlbum) {
  return (dispatch) => {
    return sendNewAlbum(newAlbum).then((album) => {
      dispatch(addAlbum(album))
    })
  }
}

export function delAndUpdateMusic(delAlbumId) {
  return (dispatch) => {
    return sendDelAlbum(delAlbumId).then(() => {
      dispatch(delAlbum(delAlbumId))
    })
  }
}

export function fetchUpdatedMerch(updatedAlbum) {
  return (dispatch) => {
    return sendUpdatedAlbum(updatedAlbum).then(() => {
      dispatch(updateAlbum(updatedAlbum))
    })
  }
}
