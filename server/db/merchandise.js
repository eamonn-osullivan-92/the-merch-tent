const connection = require('./connection')

function getItems(db = connection) {
  return db('merchandise').select()
}

function getItemByType(type, db = connection) {
  return db('merchandise').select().where('type', type)
}

function addItem(item, db = connection) {
  return db('merchandise').insert(item)
}

function delItem(id, db = connection) {
  return db('item').delete().where('id', id)
}

function updateItem(itemId, updatedItem, db = connection) {
  return db('merchandise').select().where('id', itemId).update(updatedItem)
}

function getItemsAndImages(db = connection) {
  return db('merchandise')
    .innerJoin('images', 'merchandise.id', 'images.product_id')
    .select('merchandise.*', 'images.path AS image_path')
    .where('product_type', 'merchandise')
}

module.exports = {
  getItems,
  getItemByType,
  addItem,
  delItem,
  updateItem,
  getItemsAndImages,
}
