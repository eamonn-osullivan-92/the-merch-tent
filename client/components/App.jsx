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

import MusicList from './MusicList'
import Cart from './Cart'
import Orders from './Orders'
import Header from './Header'
import SideNav from './SideNav'

function App(props) {
  const music = useSelector((state) => state.music)
  const dispatch = useDispatch()
  const [openCart, setOpenCart] = useState(false)
  const [sideNav, setSideNav] = useState(false)

  useEffect(() => {
    dispatch(fetchMusic())
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
      <div className="container">
        <Header setOpenCart={setOpenCart} setSideNav={setSideNav} />
        <SideNav sideNav={sideNav} setSideNav={setSideNav} />
        <Routes>
          {music && (
            <Route path="/" element={<MusicList setOpenCart={setOpenCart} />} />
          )}
          <Route
            path="/orders"
            element={
              <Orders token={props.accessToken} isLoggedIn={props.isLoggedIn} />
            }
          />
        </Routes>
        {openCart && (
          <Cart
            setOpenCart={setOpenCart}
            isOpen={openCart}
            token={props.accessToken}
            isLoggedIn={props.isLoggedIn}
          />
        )}
      </div>
    </>
  )
}

export default withAuthInfo(App)
