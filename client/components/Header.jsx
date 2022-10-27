import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar({ setOpenCart }) {
  const cartItems = useSelector((state) => state.cart)
  const cartQuantity = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity
  }, 0)

  return (
    <nav className="navbar">
      <h1 className="heading">The Lost Crates</h1>
      {cartQuantity > 0 && (
        <button
          className="btn btn-rounded"
          onClick={() => setOpenCart((prev) => !prev)}
        >
          <img src="/icons/icon-shopping-cart.svg" alt="" />
          <span className="cart-items">{cartQuantity}</span>
        </button>
      )}
    </nav>
  )
}
