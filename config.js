const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  authUrl: process.env.REACT_APP_AUTH_URL,
  apiKey: process.env.REACT_APP_API_KEY,
}
