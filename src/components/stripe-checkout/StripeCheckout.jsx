/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import {
    Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Wrapper from './StripeCheckout.styles';
// import {
//     CardElement,
//     useStripe,
//     Elements,
//     useElements,
//   } from '@stripe/react-stripe-js'
// import axios from 'axios'
// import { useCartContext } from '../../context/cartContext';
// import { useUserContext } from '../../context/userContext'
// import { formatPrice } from '../../utils/helpers'
// import { useHistory } from 'react-router-dom'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const CheckoutForm = () => <h2>Hello stripe checkout World</h2>;

function StripeCheckout() {
    return (
        <Wrapper>
            <Elements stripe={promise} >
               <CheckoutForm />
            </Elements>  
        </Wrapper>
    );
}

export default StripeCheckout;
