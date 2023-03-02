const connection = require('./connection')

function getImageByProdId(product_id, db = connection) {
  return db('images').select().where('product_id', product_id)
}

function addMusicImage(image_path, product_id, db = connection) {
  let image = {
    product_id,
    product_type: 'music',
    path: image_path,
  }
  return db('images').select().where('product_id', product_id).insert(image)
}

function updateMusicImage(image_path, product_id, db = connection) {
  return db('images')
    .select()
    .where('product_id', product_id)
    .update('path', image_path)
}

module.exports = {
  addMusicImage,
  updateMusicImage,
  getImageByProdId,
}
