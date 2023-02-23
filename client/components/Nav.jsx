import React from 'react'
import { Link } from 'react-router-dom'

import Auth from './Auth'

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/store">Store</Link>
        </li>
        <li className="nav__item">
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
      <Auth />
    </nav>
  )
}
