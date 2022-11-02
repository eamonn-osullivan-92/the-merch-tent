import React from 'react'
import { useIsSmall } from '../hooks/useMediaQuery'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orders'

import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

export default function Cart({ isOpen, setOpenCart, token }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSmall = useIsSmall()

  const music = useSelector((state) => state.music)
  const cartItems = useSelector((state) => state.cart)
  const order = useSelector((state) => state.orders)

  const handleOrder = () => {
    dispatch(placeOrder(cartItems, token))
  }

  const handleOrdersNavigate = () => {
    navigate('/orders')
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, cartItem) => {
      const item = music.find((i) => i.id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity
    }, 0)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: 0 }}
            animate={isSmall ? { width: 380 } : { width: 600 }}
            transition={{ ease: 'linear' }}
            exit={{ width: 0 }}
            className="cart-container"
          >
            <div className="cart-heading">
              <h2 className="cart-heading">Cart</h2>
              <button className="close-cart" onClick={() => setOpenCart(false)}>
                &times;
              </button>
            </div>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <CartItem key={item.id} id={item.id} />
              ))}
            </div>
            <div className="cart-total">
              <p className="cart-total-price">Total: ${getCartTotal()}</p>
              {cartItems.length > 0 ? (
                <button className="btn" onClick={() => handleOrder()}>
                  Submit Order
                </button>
              ) : null}
              {order ? (
                <button
                  className="btn btn-secondary"
                  onClick={() => handleOrdersNavigate()}
                >
                  See Order
                </button>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
