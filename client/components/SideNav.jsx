import React from 'react'
import { Link } from 'react-router-dom'
import Auth from './Auth'
import { motion, AnimatePresence } from 'framer-motion'

export default function SideNav({ sideNav, setSideNav }) {
  return (
    <AnimatePresence>
      {sideNav ? (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 350 }}
          transition={{ ease: 'linear' }}
          exit={{ width: 0 }}
          className="sidebar"
          onBlur={() => setSideNav(false)}
        >
          <div className="close-container">
            <button className="close-sidebar" onClick={() => setSideNav(false)}>
              &times;
            </button>
          </div>
          <nav className="nav-control-sidebar">
            <ul className="nav-items-sidebar">
              <li>
                <Link to="/">Store</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
            </ul>
            <Auth />
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
