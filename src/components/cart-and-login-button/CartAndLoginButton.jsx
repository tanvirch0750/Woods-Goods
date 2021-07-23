import React from 'react';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/globalContext';
import Wrapper from './CartAndLoginButton.styles';

const CartAndLoginButton = () => {
    const { closeMobileMenu } = useGlobalContext();
    return (
        <Wrapper className="cart-btn-wrapper">
            <Link to="/cart" className="cart-btn" onClick={closeMobileMenu}>
                Cart
                <span className="cart-container">
                    <FaShoppingCart />
                    <span className="cart-value">12</span>
                </span>
            </Link>
            <button type="button" className="auth-btn" onClick={closeMobileMenu}>
                Login <FaUserPlus />
            </button>
        </Wrapper>
    );
};

export default CartAndLoginButton;
