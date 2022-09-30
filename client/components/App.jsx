import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMerch } from '../actions/merch'

function App() {
  const merch = useSelector((state) => state.merch)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMerch())
  }, [])

  return (
    <>
      <div className="app">
        <h1>The Merch Tent</h1>
      </div>
    </>
  )
}

export default App
