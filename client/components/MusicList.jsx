import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../actions/cart'
// import { fetchMusic } from '../actions/music'

import MusicListItem from './MusicListItem'

function MusicList() {
  const music = useSelector((state) => state.music)
  const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(fetchMusic())
  //   }, [])

  function addAlbumToCart(album) {
    const { id, name } = album
    const newCartItem = { id, name }
    dispatch(addToCart(newCartItem))
  }

  return (
    <div className="productlist">
      <div className="welcome">
        <p>Welcome</p>
      </div>
      {music &&
        music.map((product) => {
          return (
            <MusicListItem
              key={product.id}
              product={product}
              addAlbumToCart={addAlbumToCart}
            />
          )
        })}
    </div>
  )
}

export default MusicList
