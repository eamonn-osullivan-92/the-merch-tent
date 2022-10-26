const express = require('express')

const db = require('../db/orders')

const router = express.Router()

router.get('/', (req, res) => {
  db.listOrders()
    .then((orders) => {
      res.status(201).json(orders)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post('/add', (req, res) => {
  const orderRequest = req.body
  db.addOrder(orderRequest)
    .then(() => {
      res.status(201).json(null)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

module.exports = router
