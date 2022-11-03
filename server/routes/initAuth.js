const propelAuth = require('@propelauth/express')
const { authUrl, apiKey } = require('../../config')

module.exports = propelAuth.initAuth({
  debugMode: true, //
  authUrl: authUrl,
  apiKey: apiKey,
})
