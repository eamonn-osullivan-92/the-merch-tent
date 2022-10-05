import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMusic } from '../actions/music'

import MusicList from './MusicList'

function App() {
  const music = useSelector((state) => state.music)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMusic())
  }, [])

  return (
    <>
      <div className="app">
        <h1>The Lost Crates</h1>
        <Routes>{music && <Route path="/" element={<MusicList />} />}</Routes>
      </div>
    </>
  )
}

export default App
