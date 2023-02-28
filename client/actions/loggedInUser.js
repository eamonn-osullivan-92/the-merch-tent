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

export function addAndUpdateLoggedInUser(user, token) {
  let admin
  if (user.email == 'admin@test.com') {
    admin = true
  }
  return (dispatch) => {
    const userToAdd = {
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
      role: admin ? 'admin' : 'guest',
    }
    addUser(userToAdd, token)
      .then(() => {
        return getUser(token)
      })
      .then((user) => dispatch(updateLoggedInUser(user)))
      .catch((err) => console.log(err.message))
  }
}
