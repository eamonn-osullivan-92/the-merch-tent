const conn = require('./connection')

module.exports = {
  getUser,
  createUser,
}

function getUser(id, db = conn) {
  return db('users').select().where('propel_id', id).first()
}

function createUser(user, db = conn) {
  return db('users').insert(user)
}
