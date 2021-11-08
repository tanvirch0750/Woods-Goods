import React from 'react';
import Wrapper from './StripeCheckout.styles';

const CheckoutForm = () => <h2>Hello stripe checkout World</h2>;

function StripeCheckout() {
    return (
        <Wrapper>
            <CheckoutForm />
        </Wrapper>
    );
}

export default StripeCheckout;
