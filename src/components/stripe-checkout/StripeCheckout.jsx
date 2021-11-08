/* eslint-disable no-unused-vars */
import { Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
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

    return <h2>Hello stripe checkout World</h2>;
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
