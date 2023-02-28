import { FETCH_MUSIC_SUCCESS, DEL_MUSIC, UPDATE_MUSIC } from '../actions/music'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSIC_SUCCESS:
      return action.payload
    case DEL_MUSIC:
      return state.filter((music) => music.id !== action.payload)
    case UPDATE_MUSIC:
      return state.map((music) =>
        music.id === action.payload.id ? { ...music, ...action.payload } : music
      )
    default:
      return state
  }
}

export default reducer
