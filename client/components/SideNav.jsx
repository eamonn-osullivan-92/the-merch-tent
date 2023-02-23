import React from 'react'
import { Link } from 'react-router-dom'
import Auth from './Auth'

export default function SideNav({ sideNav, setSideNav }) {
  return (
    <>
      <div
        className={sideNav ? 'sidebar sidebar--active' : 'sidebar'}
        onBlur={() => setSideNav(false)}
      >
        <div className="sidebar__close-container">
          <button className="sidebar__close" onClick={() => setSideNav(false)}>
            &times;
          </button>
        </div>
        <nav className="sidebar__nav-control">
          <ul className="sidebar__nav-items">
            <li className="sidebar__nav-item">
              <Link to="/" onClick={() => setSideNav(false)}>
                Home
              </Link>
            </li>
            <li className="sidebar__nav-item">
              <Link to="/store" onClick={() => setSideNav(false)}>
                Store
              </Link>
            </li>
            <li className="sidebar__nav-item">
              <Link to="/orders" onClick={() => setSideNav(false)}>
                Orders
              </Link>
            </li>
          </ul>
          <Auth />
        </nav>
      </div>
    </>
  )
}
