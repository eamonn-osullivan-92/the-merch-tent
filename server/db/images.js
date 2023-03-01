const connection = require('./connection')

function updateMusicImage(image_path, product_id, db = connection) {
  return db('images')
    .select()
    .where('product_id', product_id)
    .update('path', image_path)
}

module.exports = {
  updateMusicImage,
}
