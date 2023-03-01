import {
  FETCH_MUSIC_SUCCESS,
  DEL_MUSIC,
  UPDATE_MUSIC,
  UPDATE_IMAGE_STATE,
} from '../actions/music'

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
    case UPDATE_IMAGE_STATE:
      //   return state.map((music) =>
      //     music.id === action.payload.product_id
      //       ? music.image_path.unshift(action.payload.image_path).pop()
      //       : music
      //   )
      return state.map((music) =>
        music.id === action.payload.product_id
          ? music.image_path.splice(0, 1, action.payload.image_path)
          : music
      )
    default:
      return state
  }
}

export default reducer
