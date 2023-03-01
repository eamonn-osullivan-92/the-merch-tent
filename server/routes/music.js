const express = require('express')
const path = require('path')
const db = require('../db/music')
const imageDb = require('../db/images')

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
  const objToUpdate = req.body
  try {
    const updatedObj = await db.updateMusicItem(objToUpdate)
    res.json(updatedObj)
  } catch (err) {
    res.status(500).json({ message: 'Error: unable to update object' })
  }
})

router.post('/upload/:product_id', async (req, res) => {
  try {
    console.log(req.files)
    //check for file
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.')
    }
    const file = req.files.image
    const { product_id } = req.params

    //add file to public directory
    const uploadPath = path.join(
      __dirname,
      '../public/images/music/',
      file.name
    )
    file.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err)
    })
    // update record in db
    await imageDb.updateMusicImage(`/images/music/${file.name}`, product_id)

    // return path to update redux state
    res.json(`/images/music/${file.name}`)
  } catch (err) {
    res.status(500).json({ msg: err.message })
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
    res.json(delObjId)
  } catch (err) {
    res.status(500).json({ message: 'Error: unable to delete object' })
  }
})

module.exports = router
