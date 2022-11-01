export const UPDATE_LOGGED_IN_USER = 'UPDATE_LOGGED_IN_USER'
export const CLEAR_LOGGED_IN_USER = 'CLEAR_LOGGED_IN_USER'

import { addUser, getUser } from '../apis/user'

export function updateLoggedInUser(userToSave) {
  return {
    type: UPDATE_LOGGED_IN_USER,
    payload: userToSave,
  }
}

export function clearLoggedInUser() {
  return {
    type: CLEAR_LOGGED_IN_USER,
  }
}

export function addAndUpdateLoggedInUser(email, token) {
  return (dispatch) => {
    addUser(email, token)
      .then(() => {
        return getUser(token)
      })
      .then((user) => dispatch(updateLoggedInUser(user)))
      .catch((err) => console.log(err.message))
  }
}
