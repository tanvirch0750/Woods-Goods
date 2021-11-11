/* eslint-disable no-unused-vars */
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import { useUserContext } from '../../context/userContext';
import { formatPrice } from '../../utils/helpers';
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
                iconColor: '#fa755a',
            },
        },
    };

    const createPaymentIntent = async () => {
        try {
            const { data } = await axios.post(
                '/.netlify/functions/create-payment-intent',
                JSON.stringify({ cart, shippingFee, totalAmount })
            );

            setClientSecret(data.clientSecret);
        } catch (err) {
            console.log(err.response);
        }
    };

    useEffect(() => {
        createPaymentIntent();
        // eslint-disable-next-line
    }, [])

    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            setTimeout(() => {
                clearCart();
                history.push('/');
            }, 10000);
        }
    };

    return (
        <div>
            {succeeded ? (
                <article>
                    <h4>Thank you</h4>
                    <h4>Your payment was successful!</h4>
                    <h4>Redirecting to home page shortly</h4>
                </article>
            ) : (
                <article>
                    <h4>Hello, {myUser && myUser.name}</h4>
                    <p>Your total is {formatPrice(shippingFee + totalAmount)}</p>
                    <p>Test Card Number : 4242 4242 4242 4242</p>
                </article>
            )}
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

const StripeCheckout = () => (
    <Wrapper>
        <Elements stripe={promise}>
            <CheckoutForm />
        </Elements>
    </Wrapper>
);

// const CheckoutForm = () => {
//     const { cart, totalAmount, shippingFee, clearCart } = useCartContext();
//     const { myUser } = useUserContext();
//     const history = useHistory();

//     // STRIPE STUFF
//     const [succeeded, setSucceeded] = useState(false);
//     const [error, setError] = useState(null);
//     const [processing, setProcessing] = useState('');
//     const [disabled, setDisabled] = useState(true);
//     const [clientSecret, setClientSecret] = useState('');
//     const stripe = useStripe();
//     const elements = useElements();

//     const cardStyle = {
//         style: {
//             base: {
//                 color: '#2f9e44',
//                 fontFamily: 'Arial, sans-serif',
//                 fontSmoothing: 'antialiased',
//                 fontSize: '16px',
//                 '::placeholder': {
//                     color: '#2f9e44',
//                 },
//             },
//             invalid: {
//                 color: '#fa755a',
//                 iconColor: '#e4c5be',
//             },
//         },
//     };

//     const createPaymentIntent = async () => {
//         try {
//             const { data } = await axios.post(
//                 '/.netlify/functions/create-payment-intent',
//                 JSON.stringify({ cart, totalAmount, shippingFee })
//             );

//             setClientSecret(data.clientSecret);
//         } catch (err) {
//             // console.log(err.response);
//         }
//     };

//     useEffect(() => {
//         createPaymentIntent();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     const handleChange = async (event) => {
//         setDisabled(event.empty);
//         setError(event.error ? event.error.message : '');
//     };

//     const handleSubmit = async (ev) => {
//         ev.preventDefault();
//         setProcessing(true);

//         const payload = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement),
//             },
//         });

//         if (payload.error) {
//             setError(`Payment failed ${payload.error.message}`);
//             setProcessing(false);
//         } else {
//             setSucceeded(true);
//             setError(null);
//             setProcessing(false);
//             setTimeout(() => {
//                 clearCart();
//                 history.push('/');
//             }, 10000);
//         }
//     };

//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 flexDirection: 'column',
//                 minHeight: '77vh',
//             }}
//         >
//             {succeeded ? (
//                 <article>
//                     <h4>Thank you</h4>
//                     <h4>Your payment was successful!</h4>
//                     <h4>Redirecting to home page shortly</h4>
//                 </article>
//             ) : (
//                 <article>
//                     <h4>Hello, {myUser && myUser.name}</h4>
//                     <p>Your total is {formatPrice(shippingFee + totalAmount)}</p>
//                     <p>Test Card Number : 4242 4242 4242 4242</p>
//                 </article>
//             )}
//             <form id="payment-form" onSubmit={handleSubmit}>
//                 <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
//                 <button type="button" disabled={processing || disabled || succeeded} id="submit">
//                     <span id="button-text">
//                         {processing ? <div className="spinner" id="spinnier" /> : 'Pay'}
//                     </span>
//                 </button>
//                 {/* Show any error that happens when processing the payment */}
//                 {error && (
//                     <div className="card-error" role="alert">
//                         {error}
//                     </div>
//                 )}
//                 {/* Show  a success message upon completion */}
//                 <p className={succeeded ? 'result-message' : 'result-message hidden'}>
//                     Payment succedded, see the result in your
//                     <a href="https://dashboard.stripe.com/test/payments">Stripe dasboard.</a>
//                     Refresh the page to pay again
//                 </p>
//             </form>
//         </div>
//     );
// };

// function StripeCheckout() {
//     return (
//         <Wrapper>
//             <Elements stripe={promise}>
//                 <CheckoutForm />
//             </Elements>
//         </Wrapper>
//     );
// }

export default StripeCheckout;
