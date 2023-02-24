import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'

import { useIsMed } from '../hooks/useMediaQuery'

export default function Header({
  setOpenCart,
  setSideNav,
  headerClass = 'header header--active',
}) {
  const isMed = useIsMed()
  const cartItems = useSelector((state) => state.cart)
  const cartQuantity = cartItems?.reduce((total, cartItem) => {
    return total + cartItem.quantity
  }, 0)

  return (
    <>
      <header className={headerClass}>
        <div className="header__heading-container">
          <h1
            className={
              headerClass == 'header header--active'
                ? 'header__heading header__heading--active'
                : 'header__heading'
            }
          >
            The Lost Crates
          </h1>
          <p className="heading__disclaimer">Disclaimer: not a real store</p>
        </div>
        <div className={`header__nav ${isMed ? 'header__nav--reverse' : null}`}>
          {!isMed ? (
            <Nav />
          ) : (
            <>
              <button
                className="header__nav-btn"
                onClick={() => setSideNav((prev) => !prev)}
              >
                <img src="/icons/icon-menu.svg" alt="" />
              </button>
            </>
          )}
          {cartQuantity > 0 && (
            <button
              className="header__cart-btn"
              onClick={() => setOpenCart((prev) => !prev)}
            >
              <img src="/icons/icon-shopping-cart.svg" alt="" />
              <span className="cart-items">{cartQuantity}</span>
            </button>
          )}
        </div>
      </header>
    </>
  )
}
