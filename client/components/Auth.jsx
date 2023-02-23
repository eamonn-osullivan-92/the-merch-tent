import React from 'react'
import { useIsMed } from '../hooks/useMediaQuery'
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
  const isMed = useIsMed()

  if (isLoggedIn) {
    return (
      <div className={` ${isMed ? 'auth__sidebar' : 'auth__nav'}`}>
        <button onClick={redirectToAccountPage} className="auth__btn">
          Account
        </button>
        <button onClick={() => logoutFn()} className="auth__btn">
          Logout
        </button>
      </div>
    )
  } else {
    return (
      <div className={`${isMed ? 'auth__sidebar' : 'auth__nav'}`}>
        <button onClick={redirectToSignupPage} className="auth__btn">
          Signup
        </button>
        <button onClick={redirectToLoginPage} className="auth__btn">
          Login
        </button>
      </div>
    )
  }
}

export default withAuthInfo(AuthenticationButtons)
