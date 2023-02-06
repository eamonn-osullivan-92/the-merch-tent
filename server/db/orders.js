const connection = require('./connection')

const { formatOrder, formatOrderList } = require('../formatter')

module.exports = {
  findOrderById,
  findOrdersByUser,
  addOrder,
  updateOrderStatus,
}

function addOrder(orderRequest, userId, sessionId, db = connection) {
  // remove item names from order (we have the id)
  const order = orderRequest.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
    }
  })

  const hasInvalidQuantity = order.some((item) => item.quantity === 0)
  if (hasInvalidQuantity) {
    return Promise.reject(
      new Error('INVALID ORDER: Quantity required for all items')
    )
  }
  // will only get here to insert if the order is valid
  const timestamp = new Date(Date.now())
  return db('orders')
    .insert({
      created_at: timestamp,
      status: 'pending',
      stripe_session_id: sessionId,
      propel_id: userId,
    })
    .returning('id')
    .then(([{ id }]) => addOrderLines(id, order, db))
}

function updateOrderStatus(status, sessionId, db = connection) {
  //status is either pending / confirmed / Failed / cancelled
  return db('orders')
    .select()
    .where('stripe_session_id', sessionId)
    .update({ status: status })
}

function addOrderLines(id, order, db = connection) {
  const orderLines = order.map((item) => {
    return {
      order_id: id,
      product_id: item.id,
      quantity: item.quantity,
    }
  })
  return db('orders_products')
    .insert(orderLines)
    .then(() => id)
}

function findOrderById(id, db = connection) {
  return db('orders_products')
    .join('orders', 'orders_products.order_id', 'orders.id')
    .join('music', 'orders_products.product_id', 'music.id')
    .select(
      'music.id as musicId',
      'orders.id as orderId',
      'orders_products.quantity as orderQuantity',
      'created_at as createdAt',
      'status',
      'artist',
      'album',
      'price'
    )
    .where('orders.id', id)
    .then(formatOrder)
}

function findOrdersByUser(userId, db = connection) {
  return db('orders_products')
    .join('orders', 'orders_products.order_id', 'orders.id')
    .join('music', 'orders_products.product_id', 'music.id')
    .select(
      'music.id as musicId',
      'orders.id as orderId',
      'orders_products.quantity as orderQuantity',
      'created_at as createdAt',
      'status',
      'artist',
      'album',
      'price'
    )
    .where('orders.propel_id', userId)
    .then(formatOrderList)
}
