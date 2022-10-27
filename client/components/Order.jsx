import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MyOrder from './MyOrder'
import SearchOrder from './SearchOrder'
import WaitIndicator from './WaitIndicator'

export default function Order() {
  const order = useSelector((state) => state.orders)
  return (
    <div className="order-container">
      {order ? (
        <>
          <div className="order-header">
            <h3 className="order-heading">Thanks for your Order</h3>
            <p className="tertiary-btn">
              <Link to="/">Back to store</Link>
            </p>
          </div>
          <MyOrder>
            <WaitIndicator />
          </MyOrder>
        </>
      ) : (
        <div className="no-order">
          No order available, use the search bar below to locate your order
        </div>
      )}
      <SearchOrder />
    </div>
  )
}
