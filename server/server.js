const express = require('express')
const path = require('path')

require('dotenv').config()

const musicRoutes = require('./routes/music')
const ordersRoutes = require('./routes/orders')
const usersRoutes = require('./routes/users')
const stripeRoutes = require('./routes/stripe')

const server = express()

server.use((req, res, next) => {
  if (req.originalUrl.includes('/webhook')) {
    next()
  } else {
    express.json({ limit: '1mb' })(req, res, next)
  }
})
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/music', musicRoutes)
server.use('/api/v1/orders', ordersRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/stripe', stripeRoutes)

server.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
