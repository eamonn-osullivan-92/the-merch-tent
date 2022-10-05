import {
  //   SET_MUSIC,
  ADD_ALBUM,
  UPDATE_ALBUM,
  DEL_ALBUM,
  //   FETCH_MUSIC_PENDING,
  FETCH_MUSIC_SUCCESS,
} from '../actions/music'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSIC_SUCCESS:
      return action.payload
    case ADD_ALBUM:
      return [...state, action.payload]
    case UPDATE_ALBUM:
      return [...state].map((item) =>
        item.id == action.payload.id ? (item = action.payload) : item
      )
    case DEL_ALBUM:
      return [...state].filter((item) => item.id !== action.payload)
    default:
      return state
  }
}

export default reducer
