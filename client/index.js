import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from '@propelauth/react'
const { authUrl } = require('../config')
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AuthProvider authUrl={authUrl}>
          <App />
        </AuthProvider>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
