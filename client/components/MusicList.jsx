import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addToCart } from '../actions/cart'
import { fetchMusic } from '../actions/music'

import ProductListItem from './ProductListItem'

function MusicList({ children }) {
  const music = useSelector((state) => state.music)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMusic())
  }, [])

  function addProductToCart(product) {
    const { id, name } = product
    const newCartItem = { id, name }
    dispatch(addToCart(newCartItem))
    navigate('/cart')
  }

  return (
    <div className="productlist">
      <div className="welcome">
        <p>
          Welcome! Please choose from our delicious selection and don&apos;t
          hesitate to let us know if we can answer any of your questions.
        </p>
      </div>
      {children} {/* This holds the WaitIndicator (from App) */}
      {music.map((product) => {
        return (
          <ProductListItem
            key={product.id}
            product={product}
            addToCart={addProductToCart}
          />
        )
      })}
    </div>
  )
}

export default MusicList
