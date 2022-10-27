import React from 'react'
import { useSelector } from 'react-redux'

export default function OrderProductItem({ product }) {
  const music = useSelector((state) => state.music)
  const item = music.find((album) => album.id == product.id)

  return (
    <div className="order-product-container">
      <img src={item.image_path[0]} alt="" />
      <div className="info">
        <p>{product.album}</p>
        <p>{product.artist}</p>
        <p>qty: {product.quantity}</p>
      </div>
    </div>
  )
}
