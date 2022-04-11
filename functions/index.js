const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51Kn06pSDdSresvtNdvSgHKcJ6ifdGqqXq1fRqOloeYWEcKLaX5CewOt5V8hYivzBNABdZjDpL4T2z5K3agTEIwhL00jHd3M35M")

//API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true}))
app.use(express.json());

// API routes
app.get('/', ( request, response ) => response.status(200).send('hello!!'))

app.post('/payments/create', async (request,response )=>{
  const total = request.query.total;
  console.log('Payment Request Recieved', total);
  const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
  })
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,

  })
})

//listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-df53f/us-central1/api
