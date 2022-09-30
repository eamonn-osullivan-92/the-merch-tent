const express = require('express')

const db = require('../db/music')

const router = express.Router()

router.get('/', (req, res) => {
  db.getMusic()
    .then((results) => {
      res.json({ music: results.map((music) => music.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
