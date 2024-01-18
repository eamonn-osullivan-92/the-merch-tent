import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/orders'

import CartItem from './CartItem'

export default function Cart({ isOpen, setOpenCart }) {
  const dispatch = useDispatch()
  //   const { redirectToLoginPage } = useRedirectFunctions()

  const music = useSelector((state) => state.music)
  const cartItems = useSelector((state) => state.cart)

  const handleOrder = () => {
    dispatch(placeOrder(cartItems))
      .then((stripeUrl) => {
        window.location.href = stripeUrl
      })
      .catch((err) => err.message)
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, cartItem) => {
      const item = music.find((i) => i.id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity
    }, 0)
  }

  return (
    <>
      <div className={isOpen ? 'cart cart--active' : 'cart'}>
        <div className="cart__heading-flex">
          <h2 className="cart-heading">Cart</h2>
          <button className="cart__close" onClick={() => setOpenCart(false)}>
            &times;
          </button>
        </div>
        <div className="cart-items-list">
          {cartItems?.map((item) => (
            <CartItem key={item.id} id={item.id} />
          ))}
        </div>
        <div className="cart__total">
          <p className="cart-total-price">Total: ${getCartTotal()}</p>
          {cartItems.length > 0 ? (
            <button
              className="btn-secondary cart__btn"
              onClick={() => handleOrder()}
            >
              Submit Order
            </button>
          ) : null}
        </div>
      </div>
    </>
  )
}
