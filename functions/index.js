const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")()

//API


//App config
const app = express();

//Middleconfig
app.use(cors({ origin:true }))
app.use(express.json());


//API routes
app.get('/', (request,response)=> response.status(200).send("hello"))
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log("payment", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  });
})

//Listen command

exports.api = functions.https.onRequest(app)
