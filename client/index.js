import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from '@propelauth/react'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AuthProvider authUrl={process.env.REACT_APP_AUTH_URL}>
          <App />
        </AuthProvider>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
