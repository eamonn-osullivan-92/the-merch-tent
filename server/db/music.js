const connection = require('./connection')

function getMusic(db = connection) {
  return db('music').select()
}

function getMusicByGenre(genre, db = connection) {
  return db('music').select().where('genre', genre)
}

function addAlbum(album, db = connection) {
  return db('music').insert(album)
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
  getMusicByGenre,
  addAlbum,
  updateAlbum,
  getAlbumsAndImages,
}
