import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cart'

function MusicListItem({ product }) {
  const dispatch = useDispatch()

  const addAlbumToCart = (product) => {
    const { id, album, stripe_price_id } = product
    const newCartItem = { id, album, stripe_price_id }
    dispatch(addToCart(newCartItem))
  }

  return (
    <div className="product">
      <img src={product?.image_path[0]} alt="" className="image" />
      <p className="album">
        {product?.album} <span>{product?.year}</span>
      </p>
      <p className="artist" data-testid="artist">
        {product?.artist}
      </p>
      <p className="genre">{product?.genre}</p>
      <p className="price">${product?.price}</p>
      <div className="cart-control">
        <button
          className="btn btn-primary"
          data-testid="addToCartBtn"
          onClick={() => addAlbumToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default MusicListItem
