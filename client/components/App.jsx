import React, { useEffect } from 'react'
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
        <h1>The Merch Tent</h1>
        <MusicList />
      </div>
    </>
  )
}

export default App
