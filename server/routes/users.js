const express = require('express')
const { requireUser } = require('./initAuth')

const db = require('../db/users')
const router = express.Router()

// TODO: use requireUser as middleware
// GET /api/v1/users
router.get('/', requireUser, (req, res) => {
  const propel_id = req.user?.userId

  if (!propel_id) {
    res.status(500).send('ERROR: User not found')
  } else {
    db.getUser(propel_id)
      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => res.status(500).send(err.message))
  }
})

// TODO: use requireUser as middleware
// POST /api/v1/users
router.post('/adduser', requireUser, (req, res) => {
  const propel_id = req.user?.userId
  const user = req.body
  const userDetails = {
    propel_id,
    ...user,
  }
  db.createUser(userDetails)
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err.message))
})

module.exports = router
