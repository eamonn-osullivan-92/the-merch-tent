import request from 'superagent'

const rootUrl = '/api/v1/orders'

export async function postOrder(orderRequest, token) {
  try {
    const res = await request
      .post(rootUrl + '/add')
      .set('Authorization', `Bearer ${token}`)
      .send(orderRequest)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function createStripeCheckoutSession(orderRequest, token) {
  try {
    const res = await request
      .post('/api/v1/stripe/create-checkout-session')
      .set('Authorization', `Bearer ${token}`)
      .send(orderRequest)
    return res.body
  } catch (err) {
    console.log('Stripe checkout session error', err.message)
  }
}

// order history
export async function getOrder(id, token) {
  try {
    const res = await request
      .post('/api/v1/orders/order')
      .send({ id })
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (err) {
    console.log('getOrder error:', err.message)
  }
}

export async function getOrders(token) {
  try {
    const res = await request
      .post('/api/v1/orders/orders')
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (err) {
    console.log('getOrder error:', err.message)
  }
}
