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
    //removes null variables that arrise when rows are deleted
    const filteredResultMap = resultMap.filter((item) => item !== null)

    res.json(filteredResultMap)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.put('/edit', async (req, res) => {
  if (req.body == null || req.body == undefined) {
    return res
      .status(500)
      .json({ message: 'Error: Object to update not found in request' })
  }

  console.log(req.body)
  const { objToUpdate } = req.body
  try {
    const updatedObj = await db.updateMusicItem(objToUpdate)
    res.json(updatedObj)
  } catch (err) {
    res.status(500).json({ message: 'Error: unable to update object' })
  }
})

router.delete('/delete', async (req, res) => {
  if (req.body == null || req.body == undefined) {
    return res
      .status(500)
      .json({ message: 'Error: Object ID to delete not found in request' })
  }
  const { id } = req.body
  try {
    const delObjId = await db.deleteMusicItem(id)
    console.log('delObjId: ', delObjId)
    res.json(delObjId)
  } catch (err) {
    res.status(500).json({ message: 'Error: unable to delete object' })
  }
})

module.exports = router
