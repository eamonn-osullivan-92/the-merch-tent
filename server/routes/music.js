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

router.get('/albumimages', (req, res) => {
  db.getAlbumsAndImages()
    .then((results) => {
      // combines image paths into same object.
      const resultMap = results.reduce((result, row) => {
        result[row.id] = result[row.id] || {
          ...row,
          image_path: [],
        }

        result[row.id].image_path.push(row.image_path)
        return result
      }, [])

      //removes null variable at beginning.
      resultMap.shift()

      res.json(resultMap)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
