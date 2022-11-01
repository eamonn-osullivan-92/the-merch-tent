const propelAuth = require('@propelauth/express')

module.exports = propelAuth.initAuth({
  debugMode: true, //
  authUrl: process.env.REACT_APP_AUTH_URL,
  apiKey: process.env.REACT_APP_API_KEY,
})
