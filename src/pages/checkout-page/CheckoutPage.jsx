import React from 'react';
import { Hero } from '../../components';
import Wrapper from './CheckoutPage.styles';

function CheckoutPage() {
    return (
        <main>
            <Hero title="checkout" />
            <Wrapper className="page" />
        </main>
    );
}

export default CheckoutPage;
