import React from 'react'
import { useSelector } from 'react-redux'

import OrderProductItem from './OrderProductItem'

export default function MyOrder({ children }) {
  const order = useSelector((state) => state.orders)
  return (
    <div className="order-info">
      {children}
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
  )
}
