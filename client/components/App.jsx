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
import Order from './Order'
import Header from './Header'
import Auth from './Auth'

function App(props) {
  console.log(props)
  const music = useSelector((state) => state.music)
  const dispatch = useDispatch()
  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    dispatch(fetchMusic())
  }, [])

  //Auth
  useEffect(() => {
    console.log('use effect runs')
    if (!props.isLoggedIn) {
      dispatch(clearLoggedInUser())
    } else {
      getUser(props.accessToken)
        .then((userInDb) => {
          userInDb
            ? dispatch(updateLoggedInUser(userInDb))
            : dispatch(
                addAndUpdateLoggedInUser(props.user.email, props.accessToken)
              )
        })
        .catch((err) => console.error(err.message))
    }
  }, [props.isLoggedIn])

  return (
    <>
      <div className="app">
        <Header setOpenCart={setOpenCart} />
        <Auth />
        <Routes>
          {music && (
            <Route path="/" element={<MusicList setOpenCart={setOpenCart} />} />
          )}
          <Route path="/orders" element={<Order />} />
        </Routes>
        {openCart && <Cart setOpenCart={setOpenCart} isOpen={openCart} />}
      </div>
    </>
  )
}

export default withAuthInfo(App)
