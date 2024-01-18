import { useLogoutFunction, withAuthInfo } from '@propelauth/react'
import React from 'react'

// isLoggedIn is automatically injected from withAuthInfo
function AuthenticationButtons({ isLoggedIn }) {
  const logoutFn = useLogoutFunction()
  //   const { redirectToSignupPage, redirectToLoginPage, redirectToAccountPage } =
  //     useRedirectFunctions()

  const disabledAuth = () => {
    alert('Authorization is currently disabled')
  }

  if (isLoggedIn) {
    return (
      <>
        <li className="nav__item">
          <button onClick={disabledAuth} className="auth__btn">
            Account
          </button>
        </li>
        <li className="nav__item">
          <button onClick={() => logoutFn()} className="auth__btn">
            Logout
          </button>
        </li>
      </>
    )
  } else {
    return (
      <>
        <li className="nav__item">
          <button onClick={disabledAuth} className="auth__btn">
            Signup
          </button>
        </li>
        <li className="nav__item">
          <button onClick={disabledAuth} className="auth__btn">
            Login
          </button>
        </li>
      </>
    )
  }
}

export default withAuthInfo(AuthenticationButtons)
