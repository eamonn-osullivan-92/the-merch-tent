const express = require('express')
const path = require('path')

require('dotenv').config()

const musicRoutes = require('./routes/music')
const ordersRoutes = require('./routes/orders')
const usersRoutes = require('./routes/users')
const stripeRoutes = require('./routes/stripe')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/music', musicRoutes)
server.use('/api/v1/orders', ordersRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/stripe', stripeRoutes)

module.exports = server
