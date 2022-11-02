const express = require('express')

const db = require('../db/orders')
const { requireUser } = require('./initAuth')

const router = express.Router()

router.post('/order', requireUser, (req, res) => {
  const id = req.body.id
  db.findOrderById(id)
    .then((order) => {
      res.status(201).json(order)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post('/orders', requireUser, (req, res) => {
  const userId = req.user.userId
  db.findOrdersByUser(userId)
    .then((orders) => {
      res.status(201).json(orders)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post('/add', requireUser, (req, res) => {
  const orderRequest = req.body
  const userId = req.user.userId
  db.addOrder(orderRequest, userId)
    .then((id) => {
      res.status(201).json(id)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

module.exports = router
