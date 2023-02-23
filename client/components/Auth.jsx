import React from 'react'
import {
  withAuthInfo,
  useLogoutFunction,
  useRedirectFunctions,
} from '@propelauth/react'

// isLoggedIn is automatically injected from withAuthInfo
function AuthenticationButtons({ isLoggedIn, sideNav }) {
  const logoutFn = useLogoutFunction()
  const { redirectToSignupPage, redirectToLoginPage, redirectToAccountPage } =
    useRedirectFunctions()

  if (isLoggedIn) {
    return (
      <>
        <li className={sideNav ? 'sidebar__nav-item' : ' nav__item'}>
          <button onClick={redirectToAccountPage} className="auth__btn">
            Account
          </button>
        </li>
        <li className={sideNav ? 'sidebar__nav-item' : ' nav__item'}>
          <button onClick={() => logoutFn()} className="auth__btn">
            Logout
          </button>
        </li>
      </>
    )
  } else {
    return (
      <>
        <li className={sideNav ? 'sidebar__nav-item' : ' nav__item'}>
          <button onClick={redirectToSignupPage} className="auth__btn">
            Signup
          </button>
        </li>
        <li className={sideNav ? 'sidebar__nav-item' : ' nav__item'}>
          <button onClick={redirectToLoginPage} className="auth__btn">
            Login
          </button>
        </li>
      </>
    )
  }
}

export default withAuthInfo(AuthenticationButtons)
