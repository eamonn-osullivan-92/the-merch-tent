import {
  FETCH_MUSIC_SUCCESS,
  ADD_MUSIC,
  DEL_MUSIC,
  UPDATE_MUSIC,
  UPDATE_IMAGE_STATE,
} from '../actions/music'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSIC_SUCCESS:
      return action.payload
    case ADD_MUSIC:
      return [action.payload, ...state]
    case DEL_MUSIC:
      return state.filter((music) => music.id !== action.payload)
    case UPDATE_MUSIC:
      return state.map((music) =>
        music.id === action.payload.id ? { ...music, ...action.payload } : music
      )
    case UPDATE_IMAGE_STATE:
      return state.map((music) =>
        music.id === action.payload.product_id
          ? {
              ...music,
              image_path: [action.payload.image_path, music.image_path.pop()],
            }
          : music
      )
    default:
      return state
  }
}

export default reducer
