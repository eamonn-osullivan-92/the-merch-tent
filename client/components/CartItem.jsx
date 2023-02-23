import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateCart } from '../actions/cart'

export default function CartItem({ id }) {
  const dispatch = useDispatch()
  const music = useSelector((state) => state.music)
  const cart = useSelector((state) => state.cart)
  const item = music.find((album) => album.id == id)
  const quantity = cart.find((album) => album.id == id).quantity

  const removeFromCart = () => {
    dispatch(deleteFromCart(id))
  }

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1
    dispatch(updateCart({ id, newQuantity }))
  }

  const handleDecreaseQuantity = () => {
    const newQuantity = quantity - 1
    newQuantity > 0
      ? dispatch(updateCart({ id, newQuantity }))
      : dispatch(deleteFromCart(item.id))
  }

  return (
    <div className="cart-item-container">
      <div className="item-content">
        <img src={item?.image_path[0]} alt="" />
        <div className="item-info">
          <p className="album" data-testid="cart-item-album">
            {item?.album}
          </p>
          <p className="artist">{item?.artist}</p>
          <p data-testid="cart-item-price" className="price">
            ${item?.price}
          </p>
        </div>
      </div>
      <div className="item-total">
        <p className="price" data-testid="cart-total-price">
          ${quantity * item?.price}
        </p>
        <div className="quantity-control">
          <button
            className="quantity-btn"
            onClick={() => handleDecreaseQuantity()}
          >
            -
          </button>
          <div className="quantity-text">
            <span className="quantity">{quantity}</span> in cart
          </div>
          <button
            className="quantity-btn"
            onClick={() => handleIncreaseQuantity()}
          >
            +
          </button>
        </div>
        <button className="btn remove-btn" onClick={() => removeFromCart()}>
          Remove
        </button>
      </div>
    </div>
  )
}
