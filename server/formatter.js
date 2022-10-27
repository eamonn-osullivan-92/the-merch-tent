module.exports = {
  formatOrder,
}

function createDateTimeString(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleTimeString() + ', ' + date.toDateString()
}

function createOrder(orderLine) {
  return {
    id: orderLine.orderId,
    createdAt: createDateTimeString(orderLine.createdAt),
    status: orderLine.status,
    products: [createProduct(orderLine)],
  }
}

function createProduct(orderLine) {
  return {
    id: orderLine.musicId,
    artist: orderLine.artist,
    album: orderLine.album,
    quantity: orderLine.orderQuantity,
  }
}

function sortByIdAscending(arr) {
  arr.sort((a, b) => {
    return a.id - b.id
  })
  return arr
}

function formatOrder(orderLines) {
  let order
  orderLines.forEach((item) => {
    !order
      ? (order = createOrder(item))
      : order.products.push(createProduct(item))
  })
  order.products = sortByIdAscending(order.products)
  return order
}
