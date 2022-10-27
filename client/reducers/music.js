import { FETCH_MUSIC_SUCCESS } from '../actions/music'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSIC_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default reducer
