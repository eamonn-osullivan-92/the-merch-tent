const connection = require('./connection')

function updateMusicImage(image_path, product_id, db = connection) {
  return db('images')
    .select()
    .where('product_id', product_id)
    .update('path', image_path)
}

function updateSecondaryMusicImage(image_path, product_id, db = connection) {
  return db('images')
    .select()
    .where('product_id', product_id)
    .orderBy('id', 'desc')
    .update('image_path', image_path)
    .first()
}

module.exports = {
  updateMusicImage,
}
