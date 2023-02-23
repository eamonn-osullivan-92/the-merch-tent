import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { withAuthInfo } from '@propelauth/react'

import { getUser } from '../apis/user'
import { fetchMusic } from '../actions/music'
import {
  clearLoggedInUser,
  updateLoggedInUser,
  addAndUpdateLoggedInUser,
} from '../actions/loggedInUser'
import Home from './Home'
import MusicList from './MusicList'
import Cart from './Cart'
import Orders from './Orders'
import SideNav from './SideNav'
import Header from './Header'
// import { useSessionStorage } from '../hooks/useSessionStorage'

function App(props) {
  const music = useSelector((state) => state.music)
  const dispatch = useDispatch()
  const [openCart, setOpenCart] = useState(false)
  const [sideNav, setSideNav] = useState(false)
  //   const [firstLoad, setFirstLoad] = useSessionStorage('firstLoad', true)

  useEffect(() => {
    dispatch(fetchMusic())
    // setFirstLoad(false)
  }, [])

  //Auth
  useEffect(() => {
    if (!props.isLoggedIn) {
      dispatch(clearLoggedInUser())
    } else {
      getUser(props.accessToken)
        .then((userInDb) => {
          userInDb
            ? dispatch(updateLoggedInUser(userInDb))
            : dispatch(addAndUpdateLoggedInUser(props.user, props.accessToken))
        })
        .catch((err) => console.error(err.message))
    }
  }, [props.isLoggedIn])

  return (
    <>
      <SideNav sideNav={sideNav} setSideNav={setSideNav} />
      <Routes>
        <Route
          path="/"
          element={<Home setOpenCart={setOpenCart} setSideNav={setSideNav} />}
        />
        {music && (
          <Route
            path="/store"
            element={
              <>
                <Header setOpenCart={setOpenCart} setSideNav={setSideNav} />
                <MusicList setOpenCart={setOpenCart} />
              </>
            }
          />
        )}
        <Route
          path="/orders"
          element={
            <>
              <Header setOpenCart={setOpenCart} setSideNav={setSideNav} />
              <Orders token={props.accessToken} isLoggedIn={props.isLoggedIn} />
            </>
          }
        />
      </Routes>
      <Cart
        setOpenCart={setOpenCart}
        isOpen={openCart}
        token={props.accessToken}
        isLoggedIn={props.isLoggedIn}
      />
    </>
  )
}

export default withAuthInfo(App)
