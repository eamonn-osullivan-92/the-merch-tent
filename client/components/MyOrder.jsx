import React from 'react'
import { useSelector } from 'react-redux'

export default function MyOrder() {
  return (
    <div className="orders-container">
      <div className="order-header">
        <h2 className="order-header">My Order</h2>
      </div>
      <div className="order-info"></div>
    </div>
  )
}
