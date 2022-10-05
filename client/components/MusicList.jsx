import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addToCart } from '../actions/cart'
// import { fetchMusic } from '../actions/music'

import MusicListItem from './MusicListItem'

function MusicList({ children }) {
  const music = useSelector((state) => state.music)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(fetchMusic())
  //   }, [])

  function addProductToCart(product) {
    const { id, name } = product
    const newCartItem = { id, name }
    dispatch(addToCart(newCartItem))
    navigate('/cart')
  }

  return (
    <div className="productlist">
      <div className="welcome">
        <p>Welcome</p>
      </div>
      {children} {/* This holds the WaitIndicator (from App) */}
      {music &&
        music.map((product) => {
          return (
            <MusicListItem
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
