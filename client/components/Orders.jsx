import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Order from './Order'
import SearchOrder from './SearchOrder'
import WaitIndicator from './WaitIndicator'
import { fetchOrders } from '../actions/orders'

export default function Orders({ token }) {
  const dispatch = useDispatch()

  const orders = useSelector((state) => state.orders)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchOrders(token))
  }, [])

  return (
    <div className="order-container">
      <div className="order-header">
        <h3 className="order-heading">{`${user.first_name}'s Orders`}</h3>
        <p className="tertiary-btn">
          <Link to="/">Back to store</Link>
        </p>
      </div>
      {orders ? (
        orders.map((order) => (
          <Order order={order} key={order.id}>
            <WaitIndicator />
          </Order>
        ))
      ) : (
        <div className="no-order">You have no orders to display.</div>
      )}
      <SearchOrder />
    </div>
  )
}
