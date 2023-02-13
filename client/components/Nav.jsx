import React from 'react'
import { Link } from 'react-router-dom'

import Auth from './Auth'

export default function Nav() {
  return (
    <nav className="nav-control">
      <ul className="nav-items">
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
      <Auth />
    </nav>
  )
}
