import React from 'react'
import { useIsSmall } from '../hooks/useMediaQuery'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orders'

import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

export default function Cart({ setOpenCart }) {
  const navigate = useNavigate()
  const isSmall = useIsSmall()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const handleOrder = () => {
    dispatch(placeOrder(cartItems))
  }

  const handleOrdersNavigate = () => {
    navigate('/orders')
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-heading">CART</div>
        <button className="close-cart" onClick={() => setOpenCart(false)}>
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
        {cartItems.length == 0 ? (
          <button className="my-orders" onClick={() => handleOrdersNavigate()}>
            See Orders
          </button>
        ) : null}
      </div>
    </>
  )
}
