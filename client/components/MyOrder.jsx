import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import OrderProductItem from './OrderProductItem'

export default function MyOrder() {
  const order = useSelector((state) => state.orders)
  return (
    <div className="order-container">
      <div className="order-header">
        <h3 className="order-heading">Thanks for your Order</h3>
        <p className="tertiary-btn">
          <Link to="/">Back to store</Link>
        </p>
      </div>
      <div className="order-info">
        <p>
          <span className="key">Order ID: </span>
          {order.id}
        </p>
        <p>
          <span className="key">Created date: </span>
          {order.createdAt}
        </p>
        <p>
          <span className="key">Status: </span>
          {order.status}
        </p>

        {order.products.map((product, i) => {
          return <OrderProductItem key={i} product={product} />
        })}
      </div>
    </div>
  )
}
