import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMusic } from '../actions/music'

import MusicList from './MusicList'
import Cart from './Cart'

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
        <h1>The Lost Crates</h1>
        <button onClick={() => setOpenCart((prev) => !prev)}>Cart</button>
        <Routes>{music && <Route path="/" element={<MusicList />} />}</Routes>
        {openCart && <Cart setOpenCart={setOpenCart} />}
      </div>
    </>
  )
}

export default App
