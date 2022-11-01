import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { withAuthInfo } from '@propelauth/react'

import { fetchMusic } from '../actions/music'
import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'

import MusicList from './MusicList'
import Cart from './Cart'
import Order from './Order'
import Header from './Header'
import Auth from './Auth'

function App(props) {
  console.log(props)
  const music = useSelector((state) => state.music)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    dispatch(fetchMusic())
  }, [])

  //Auth
  useEffect(() => {
    if (!props.isLoggedIn) {
      dispatch(clearLoggedInUser())
    } else {
      //   let user = {
      //     propelId: props.user.userId,
      //     email: props.user.email,
      //   }
      getUser(props.email)
        .then((userInDb) => {
          userInDb ? dispatch(updateLoggedInUser(userInDb)) : dispatch(addUser)
        })
        .catch((err) => console.error(err.message))
    }
  }, [props.user])

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
