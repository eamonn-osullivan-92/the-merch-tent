import React from 'react'
import { withAuthInfo } from '@propelauth/react'

function Auth(props) {
  // isLoggedIn and user are injected automatically from withAuthInfo below
  console.log(props)
  if (props.isLoggedIn) {
    return <div>You are logged in as {props.user.email}</div>
  } else {
    return <div>You are not logged in</div>
  }
}

export default withAuthInfo(Auth) //
