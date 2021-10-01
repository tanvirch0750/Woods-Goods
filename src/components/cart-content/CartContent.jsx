import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import CartColumns from '../cart-columns/CartColumns';
import CartItem from '../cart-item/CartItem';
import CartTotals from '../cart-totals/CartTotals';
import Wrapper from './CartContent.styles';

function CartContent() {
    const { cart, clearCart } = useCartContext();

    return (
        <Wrapper className="section section-center">
            <CartColumns />
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <hr />
            <div className="link-container">
                <Link to="/products" className="link-btn">
                    Continue Shopping
                </Link>
                <button type="button" onClick={clearCart} className="link-btn clear-btn">
                    Clear Shopping Cart
                </button>
            </div>
            <CartTotals />
        </Wrapper>
    );
}

export default CartContent;
