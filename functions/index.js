const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JLnWdSBBefUMe61sNqgaLdWiX6gtW0aIzgktOXMrxKyGOEedIKudB0LFyBiFgIU4hCGLzEsinDApFmXZua7EvH000q4csrmIS')

// To set up an API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved !!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "INR",
    });

    // 201 : OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-4b3d3/us-central1/api