import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchOrder } from '../actions/orders'

export default function SearchOrder() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const handleFetchOrder = () => {
    dispatch(fetchOrder(Number(query)))
    setQuery('')
  }

  return (
    <div className="search-container">
      <p>Looking for a different order? Search the order ID below:</p>
      <div className="search">
        <input
          type="text"
          className="search-id"
          placeholder="Order ID?"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={() => handleFetchOrder()}
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  )
}
