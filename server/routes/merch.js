const express = require('express')

const db = require('../db/merchandise')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const merch = await db.getMerch()
    res.json(merch)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/add', async (req, res) => {
  const item = req.body
  try {
    const itemId = await db.addItem(item)
    const addedItem = await db.getAlbunmById(itemId[0].id)

    res.json(addedItem)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

router.post('/del', async (req, res) => {
  const id = req.body.id
  try {
    const del = await db.delItem(id)
    res.json(del)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

router.patch('/update', async (req, res) => {
  try {
    await db.updateItem(req.body)
    res.json('updated')
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

router.get('/itemsimages', async (req, res) => {
  try {
    const itemsAndImages = await db.getItemsAndImages()
    // combines image paths into same object.
    const resultMap = itemsAndImages.reduce((result, row) => {
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
