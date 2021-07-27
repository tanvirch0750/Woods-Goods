import React from 'react';
import { PageHero } from '../../components';
import Wrapper from './CheckoutPage.styles';

function CheckoutPage() {
    return (
        <main>
            <PageHero title="checkout" />
            <Wrapper className="page" />
        </main>
    );
}

export default CheckoutPage;
