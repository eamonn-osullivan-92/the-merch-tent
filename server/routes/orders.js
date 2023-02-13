const express = require('express')

const db = require('../db/orders')
const { requireUser } = require('./initAuth')

const router = express.Router()

router.post('/orders', requireUser, (req, res) => {
  const userId = req.user.userId

  if (userId == null || userId == undefined) {
    res
      .status(500)
      .send(
        'Authentication error: User not found. You must be logged in to view orders'
      )
  }

  db.findOrdersByUser(userId)
    .then((orders) => {
      res.status(201).json(orders)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

module.exports = router
