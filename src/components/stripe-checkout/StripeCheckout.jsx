/* eslint-disable no-unused-vars */
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
// import { formatPrice } from '../../utils/helpers'
import { useHistory } from 'react-router-dom';
// import {
//     CardElement,
//     useStripe,
//     Elements,
//     useElements,
//   } from '@stripe/react-stripe-js'
// import axios from 'axios'
import { useCartContext } from '../../context/cartContext';
import { useUserContext } from '../../context/userContext';
import Wrapper from './StripeCheckout.styles';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
    const { cart, totalAmount, shippingFee, clearCart } = useCartContext();
    const { myUser } = useUserContext();
    const history = useHistory();

    // STRIPE STUFF
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const cardStyle = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#32325d',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#e4c5be',
            },
        },
    };

    const createPaymentIntent = async () => {
        console.log('Hello from stripe checkout');
        // try {
        //   const { data } = await axios.post(
        //     '/.netlify/functions/create-payment-intent',
        //     JSON.stringify({ cart, shipping_fee, total_amount })
        //   )

        //   setClientSecret(data.clientSecret)
        // } catch (error) {
        //   // console.log(error.response)
        // }
    };

    useEffect(() => {
        createPaymentIntent();
    }, []);

    const handleChange = async (event) => {
        // setDisabled(event.empty)
        // setError(event.error ? event.error.message : '')
    };

    const handleSubmit = async (ev) => {};

    return (
        <div>
            <form id="payment-form" onSubmit={handleSubmit}>
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                <button type="button" disabled={processing || disabled || succeeded} id="submit">
                    <span id="button-text">
                        {processing ? <div className="spinner" id="spinnier" /> : 'Pay'}
                    </span>
                </button>
                {/* Show any error that happens when processing the payment */}
                {error && (
                    <div className="card-error" role="alert">
                        {error}
                    </div>
                )}
                {/* Show  a success message upon completion */}
                <p className={succeeded ? 'result-message' : 'result-message hidden'}>
                    Payment succedded, see the result in your
                    <a href="https://dashboard.stripe.com/test/payments">Stripe dasboard.</a>
                    Refresh the page to pay again
                </p>
            </form>
        </div>
    );
};

function StripeCheckout() {
    return (
        <Wrapper>
            <Elements stripe={promise}>
                <CheckoutForm />
            </Elements>
        </Wrapper>
    );
}

export default StripeCheckout;
