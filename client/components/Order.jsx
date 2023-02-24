import React from 'react'

import OrderProductItem from './OrderProductItem'

export default function Order({ children, order }) {
  return (
    <div className="order" data-testid="order">
      {children}
      <p data-testid="order-id" className="order__info">
        <span className="order__info-key">Order ID: </span>
        {order.id}
      </p>
      <p className="order__info">
        <span className="order__info-key">Created date: </span>
        {order.createdAt}
      </p>
      <p data-testid="order-status" className="order__info">
        <span className="order__info-key">Status: </span>
        <span className={order.status == 'pending' ? `danger` : ``}>
          {order.status}
        </span>
      </p>

      {order?.products.map((product, i) => {
        return <OrderProductItem key={i} product={product} />
      })}
    </div>
  )
}
