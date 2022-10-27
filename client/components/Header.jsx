import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar({ setOpenCart }) {
  const cartItems = useSelector((state) => state.cart)
  const cartQuantity = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity
  }, 0)

  return (
    <nav className="navbar">
      <h1 className="heading">The Lost Crates</h1>
      <div className="nav-control">
        <ul className="nav-items">
          <li>
            <Link to="/">Store</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
        {cartQuantity > 0 && (
          <button
            className="btn btn-rounded"
            onClick={() => setOpenCart((prev) => !prev)}
          >
            <img src="/icons/icon-shopping-cart.svg" alt="" />
            <span className="cart-items">{cartQuantity}</span>
          </button>
        )}
      </div>
    </nav>
  )
}
