const express = require('express')
const path = require('path')

const musicRoutes = require('./routes/music')
const ordersRoutes = require('./routes/orders')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/music', musicRoutes)
server.use('/api/v1/orders', ordersRoutes)

module.exports = server
