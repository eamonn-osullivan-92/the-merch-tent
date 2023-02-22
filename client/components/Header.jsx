import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'

import { useIsSmall } from '../hooks/useMediaQuery'

export default function Navbar({
  setOpenCart,
  setSideNav,
  headerClass = 'header header--active',
}) {
  const isSmall = useIsSmall()
  const cartItems = useSelector((state) => state.cart)
  const cartQuantity = cartItems?.reduce((total, cartItem) => {
    return total + cartItem.quantity
  }, 0)

  return (
    <>
      <header className={headerClass}>
        <div className="header-wrap">
          <div className="heading-container">
            <h1 className="heading">The Lost Crates</h1>
            <p className="disclaimer">Disclaimer: not a real store</p>
          </div>
          <div className={`nav-container ${isSmall ? 'reverse' : null}`}>
            {!isSmall ? (
              <Nav />
            ) : (
              <>
                <button
                  className="hamburger-btn"
                  onClick={() => setSideNav((prev) => !prev)}
                >
                  <img src="/icons/icon-menu.svg" alt="" />
                </button>
              </>
            )}
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
        </div>
      </header>
    </>
  )
}
