/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
   if(event.body){
      const { cart, totalAmount, shippingFee } = JSON.parse(event.body);

      const calculateOrderAmount = () => shippingFee + totalAmount;

      try {
         const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(),
            currency: 'usd',
            // payment_method_types: [
            //    "giropay",
            //    "eps",
            //    "p24",
            //    "sofort",
            //    "sepa_debit",
            //    "card",
            //    "bancontact",
            //    "ideal",
            //  ],
         });

         return {
            statusCode: 200,
            body: JSON.stringify({clientSecret: paymentIntent.client_secret})
         }
      } catch (error) {
         return {
            statusCode: 500,
            body: JSON.stringify({msg: error.message})
         }
      }
  }
   return {
      statusCode: 200,
      body: 'create payment intent'
   }
}