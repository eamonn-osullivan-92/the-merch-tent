const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_KEY)
const db = require('../db/orders')
const { requireUser } = require('./initAuth')

// const DOMAIN = 'thelostcrates.co.nz'
const DOMAIN = 'http://localhost:3000/'

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
  const lineItems = order.map((item) => {
    return { price: item.stripe_price_id, quantity: item.quantity }
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${DOMAIN}`,
    cancel_url: `${DOMAIN}?canceled=true`,
    automatic_tax: { enabled: true },
  })

  // add order with default pending status, to be updated upon payment finalisation
  await db.addOrder(order, userId, session.id)

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
        console.log(checkoutSessionCompleted)
        // Then define and call a function to handle the event checkout.session.completed
        await db.updateOrderStatus('Confirmed', checkoutSessionCompleted.id)
        break
      }
      //   case 'payment_intent.canceled': {
      //     const paymentIntentCanceled = event.data.object
      //     // Then define and call a function to handle the event payment_intent.canceled
      //     db.updateOrderStatus('Cancelled', paymentIntentCanceled.id)
      //     break
      //   }
      //   case 'payment_intent.payment_failed': {
      //     const paymentIntentPaymentFailed = event.data.object
      //     // Then define and call a function to handle the event payment_intent.payment_failed
      //     db.updateOrderStatus('Failed', paymentIntentPaymentFailed.id)
      //     break
      //   }
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send()
  }
)

module.exports = router
