const express = require('express')
const router = express.Router()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_KEY)

// const DOMAIN = 'thelostcrates.co.nz'
const DOMAIN = 'http://localhost:3000/'

router.post('/create-checkout-session', async (req, res) => {
  console.log('stripe route')

  const order = req.body
  const lineItems = order.map((item) => {
    return { price: item.stripe_price_id, quantity: item.quantity }
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${DOMAIN}?success=true`,
    cancel_url: `${DOMAIN}?canceled=true`,
    automatic_tax: { enabled: true },
  })

  res.json({ url: session.url })
})

module.exports = router
