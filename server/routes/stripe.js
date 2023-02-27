const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_KEY)
const db = require('../db/orders')
const { requireUser } = require('./initAuth')

const DOMAIN = 'https://www.thelostcrates.co.nz/'

router.use((req, res, next) => {
  if (req.originalUrl.includes('/webhook')) {
    next()
  } else {
    bodyParser.json()(req, res, next)
  }
})

router.post('/create-checkout-session', requireUser, async (req, res) => {
  const order = req.body
  const userId = req.user?.userId

  if (order == null || order == undefined) {
    res.status(500).send('Error: Order not found')
  }

  if (userId == null || userId == undefined) {
    res
      .status(500)
      .send(
        'Authentication error: User not found. You must be logged in to complete an order'
      )
  }

  const lineItems = order.map((item) => {
    return { price: item.stripe_price_id, quantity: item.quantity }
  })

  // add order with default pending status, to be updated upon payment finalisation
  const orderId = await db.addOrder(order, userId)

  //Create stripe checkout session, pass order ID as metadata to fulfill orders on completion
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${DOMAIN}`,
    cancel_url: `${DOMAIN}?canceled=true`,
    automatic_tax: { enabled: true },
    expires_at: new Date(Date.now() + 30 * 60000),
    metadata: {
      id: orderId,
    },
  })

  res.json({ url: session.url })
})

//webhook to monitor events
const endpointSecret = process.env.REACT_APP_ENDPOINT
router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  async (request, response) => {
    const sig = request.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret)
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const checkoutSessionCompleted = event.data.object

        // Then define and call a function to handle the event checkout.session.completed
        await db.updateOrderStatus(
          'Confirmed',
          checkoutSessionCompleted.metadata.id
        )
        break
      }
      case 'checkout.session.expired': {
        // checkout session will expire after 30 minutes
        const checkoutSessionExpired = event.data.object

        db.updateOrderStatus('Cancelled', checkoutSessionExpired.metadata.id)
        break
      }

      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send()
  }
)

module.exports = router
