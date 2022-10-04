import {
  getMusic,
  sendNewAlbum,
  sendDelAlbum,
  sendUpdatedAlbum,
} from '../apis/music'

export const SET_MUSIC = 'SET_MUSIC'
export const ADD_ALBUM = 'ADD_ALBUM'
export const UPDATE_ALBUM = 'UPDATE_ALBUM'
export const DEL_ALBUM = 'DEL_ALBUM'

export function setMusic(music) {
  return {
    type: SET_MUSIC,
    payload: music,
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
    return getMusic().then((music) => {
      dispatch(setMusic(music))
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
