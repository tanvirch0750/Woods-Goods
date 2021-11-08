import React from 'react';
import { Link } from 'react-router-dom';
import { StripeCheckout } from '../../components';
import { useCartContext } from '../../context/cartContext';
import Wrapper from './CheckoutPage.styles';

function CheckoutPage() {
    const { cart } = useCartContext();

    return (
        <main>
            <Wrapper className="page">
                {cart.length < 1 ? (
                    <div className="empty">
                        <h2>Your cart is empty</h2>
                        <Link to="/products" className="btn">
                            Fill it
                        </Link>
                    </div>
                ) : (
                    <StripeCheckout />
                )}
            </Wrapper>
        </main>
    );
}

export default CheckoutPage;
