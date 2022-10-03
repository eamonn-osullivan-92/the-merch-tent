const connection = require('./connection')

function getMusic(db = connection) {
  return db('music').select()
}

function getAlbumById(id, db = connection) {
  return db('music').select().where('id', id).first()
}

function getMusicByGenre(genre, db = connection) {
  return db('music').select().where('genre', genre)
}

function addAlbum(album, db = connection) {
  return db('music').insert(album).returning('id')
}

function delAlbum(id, db = connection) {
  return db('music').delete().where('id', id)
}

function updateAlbum(albumId, updatedAlbum, db = connection) {
  return db('music').select().where('id', albumId).update(updatedAlbum)
}

function getAlbumsAndImages(db = connection) {
  return db('music')
    .innerJoin('images', 'music.id', 'images.product_id')
    .select('music.*', 'images.path AS image_path')
    .where('product_type', 'music')
}

module.exports = {
  getMusic,
  getAlbumById,
  getMusicByGenre,
  addAlbum,
  delAlbum,
  updateAlbum,
  getAlbumsAndImages,
}
