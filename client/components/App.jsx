import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMusic } from '../actions/music'

import MusicList from './MusicList'
import Cart from './Cart'
import Order from './Order'
import Header from './Header'

function App() {
  const music = useSelector((state) => state.music)
  const dispatch = useDispatch()

  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    dispatch(fetchMusic())
  }, [])

  return (
    <>
      <div className="app">
        <Header setOpenCart={setOpenCart} />
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

export default App
