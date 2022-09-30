import { SET_MUSIC } from '../actions/music'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MUSIC:
      return payload
    default:
      return state
  }
}

export default reducer
