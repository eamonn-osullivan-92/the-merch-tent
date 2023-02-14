import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Order from './Order'
import WaitIndicator from './WaitIndicator'
import { fetchOrders } from '../actions/orders'

export default function Orders({ token, isLoggedIn }) {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orders)
  const user = useSelector((state) => state.user)
  const [showPending, setShowPending] = useState(false)

  const handleShowPending = () => {
    setShowPending((prev) => !prev)
  }

  useEffect(() => {
    dispatch(fetchOrders(token))
  }, [])

  return (
    <>
      {isLoggedIn ? (
        <div className="orders-container">
          <div className="order-header">
            <h3 className="order-heading">{`${user.first_name}'s Orders`}</h3>
            <p className="tertiary-btn">
              <Link to="/">Back to store</Link>
            </p>
          </div>
          {!showPending ? (
            <button
              data-testid="pendingBtn"
              className="btn"
              onClick={() => handleShowPending()}
            >
              Show Pending & Cancelled Orders
            </button>
          ) : (
            <button
              data-testid="pendingBtn"
              className="btn"
              onClick={() => handleShowPending()}
            >
              Hide Pending & Cancelled Orders
            </button>
          )}
          {showPending
            ? orders?.map((order) => (
                <Order order={order} key={order.id}>
                  <WaitIndicator />
                </Order>
              ))
            : orders
                ?.filter((order) => order.status != 'pending')
                .map((order) => (
                  <Order order={order} key={order.id}>
                    <WaitIndicator />
                  </Order>
                ))}
        </div>
      ) : (
        <div className="no-order">Please log in to view your orders</div>
      )}
    </>
  )
}
