const express = require('express')

const db = require('../db/orders')

const router = express.Router()

router.post('/', (req, res) => {
  const id = req.body.id
  db.findOrderById(id)
    .then((order) => {
      res.status(201).json(order)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post('/add', (req, res) => {
  const orderRequest = req.body
  db.addOrder(orderRequest)
    .then((id) => {
      res.status(201).json(id)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

module.exports = router
