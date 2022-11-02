import React from 'react'
import { useIsSmall } from '../hooks/useMediaQuery'
import {
  withAuthInfo,
  useLogoutFunction,
  useRedirectFunctions,
} from '@propelauth/react'

// isLoggedIn is automatically injected from withAuthInfo
function AuthenticationButtons({ isLoggedIn }) {
  const logoutFn = useLogoutFunction()
  const { redirectToSignupPage, redirectToLoginPage, redirectToAccountPage } =
    useRedirectFunctions()
  const isSmall = useIsSmall()

  if (isLoggedIn) {
    return (
      <div className={` ${isSmall ? 'auth-sidebar' : 'auth-buttons'}`}>
        <button onClick={redirectToAccountPage}>Account</button>
        <button onClick={() => logoutFn()}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className={`${isSmall ? 'auth-sidebar' : 'auth-buttons'}`}>
        <button onClick={redirectToSignupPage}>Signup</button>
        <button onClick={redirectToLoginPage}>Login</button>
      </div>
    )
  }
}

export default withAuthInfo(AuthenticationButtons)
