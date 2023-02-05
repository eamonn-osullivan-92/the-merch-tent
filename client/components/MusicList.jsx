import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../actions/cart'
// import { fetchMusic } from '../actions/music'

import MusicListItem from './MusicListItem'
import WaitIndicator from './WaitIndicator'

function MusicList({ setOpenCart }) {
  const music = useSelector((state) => state.music)
  const dispatch = useDispatch()

  const addAlbumToCart = (product) => {
    const { id, album, stripe_price_id } = product
    const newCartItem = { id, album, stripe_price_id }
    console.log(newCartItem)
    dispatch(addToCart(newCartItem))
    setOpenCart(true)
  }

  return (
    <div className="store-container">
      <div className="products-grid">
        {music &&
          music.map((product) => {
            return (
              <MusicListItem
                key={product.id}
                product={product}
                addAlbumToCart={addAlbumToCart}
              >
                <WaitIndicator />{' '}
              </MusicListItem>
            )
          })}
      </div>
    </div>
  )
}

export default MusicList
