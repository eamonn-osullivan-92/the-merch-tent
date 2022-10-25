import React from 'react'
import { useIsSmall } from '../hooks/useMediaQuery'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orders'

import CartItem from './CartItem'
import cart from '../reducers/cart'

export default function Cart({ setCartOpen }) {
  const isSmall = useIsSmall()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const closeCart = () => {
    setCartOpen(false)
  }

  const handleOrder = () => {
    dispatch(placeOrder(cartItems))
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-heading">CART</div>
        <button className="close-cart" onClick={closeCart}>
          &times;
        </button>
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} />
          ))}
        </div>
        <button className="submit" onClick={() => handleOrder()}>
          Submit Order
        </button>
      </div>
    </>
  )
}
