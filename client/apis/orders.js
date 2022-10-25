import request from 'superagent'

const rootUrl = '/api/v1/orders'

export async function postOrder(orderRequest) {
  try {
    const res = await request.post(rootUrl + '/add').send(orderRequest)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

// order history
export async function getOrders() {
  try {
    const res = await request.get('api/v1/orders')
    return res.body
  } catch (err) {
    console.log('getOrder error:', err.message)
  }
}
