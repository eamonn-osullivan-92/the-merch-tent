const express = require('express')

const db = require('../db/merchandise')

const router = express.Router()

router.get('/', (req, res) => {
  db.getMerch()
    .then((results) => {
      res.json({ merch: results.map((merch) => merch.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
