import React from 'react';
import { Link } from 'react-router-dom';
import { CartContent } from '../../components';
import { useCartContext } from '../../context/cartContext';
import Wrapper from './CartPage.styles';

function CartPage() {
    const { cart } = useCartContext();

    if (cart.length < 1) {
        return (
            <Wrapper className="page-100">
                <div className="empty">
                    <h2>Your cart is empty</h2>
                    <Link to="/products" className="btn cart-page-btn">
                        Fill it with some furniture
                    </Link>
                </div>
            </Wrapper>
        );
    }

    return (
        <main>
            <Wrapper className="page">
                <CartContent />
            </Wrapper>
        </main>
    );
}

export default CartPage;
