import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../actions/cart'

export default function CartItem({ id }) {
  const dispatch = useDispatch()
  const music = useSelector((state) => state.music)
  const item = music.find((album) => album.id == id)

  const removeFromCart = () => {
    dispatch(deleteFromCart(item.id))
  }

  return (
    <div className="cart-item-container">
      <div className="item-info">
        <img src={item.image_path[0]} alt="" />
        <div className="item-info">
          <p className="album">
            {item.album} <span className="cart-item-quantity">quantity</span>
          </p>
          <p className="artist">{item.artist}</p>
          <p className="price">{item.price}</p>
        </div>
      </div>
      <div className="item-total">
        <p className="price">price x quantity</p>
        <button
          className="btn remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}
