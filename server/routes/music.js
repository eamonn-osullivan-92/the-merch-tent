const express = require('express')

const db = require('../db/music')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const music = await db.getMusic()
    res.json(music)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/add', async (req, res) => {
  const album = req.body
  try {
    const albumId = await db.addAlbum(album)
    const addedAlbum = await db.getAlbunmById(albumId[0].id)

    res.json(addedAlbum)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

router.patch('/update', async (req, res) => {
  try {
    await db.updateAlbum(req.body)
    res.json('updated')
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

router.get('/albumimages', async (req, res) => {
  try {
    const albumsAndImages = await db.getAlbumsAndImages()
    // combines image paths into same object.
    const resultMap = albumsAndImages.reduce((result, row) => {
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
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router
