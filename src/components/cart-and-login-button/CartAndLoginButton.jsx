import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import { useGlobalContext } from '../../context/globalContext';
import { useUserContext } from '../../context/userContext';
import Wrapper from './CartAndLoginButton.styles';

const CartAndLoginButton = () => {
    const { closeMobileMenu } = useGlobalContext();
    const { totalItems, clearCart } = useCartContext();
    const { loginWithRedirect, myUser, logout } = useUserContext();

    return (
        <Wrapper className="cart-btn-wrapper">
            <Link to="/cart" className="cart-btn" onClick={closeMobileMenu}>
                Cart
                <span className="cart-container">
                    <FaShoppingCart />
                    <span className="cart-value">{totalItems}</span>
                </span>
            </Link>
            {/* <button type="button" className="auth-btn" onClick={loginWithRedirect}>
                Login <FaUserPlus />
            </button>
            <button
                type="button"
                className="auth-btn"
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Logout <FaUserMinus />
            </button> */}
            {myUser ? (
                <button
                    type="button"
                    className="auth-btn"
                    onClick={() => {
                        clearCart();
                        localStorage.removeItem('user');
                        logout({ returnTo: window.location.origin });
                    }}
                >
                    Logout <FaUserMinus />
                </button>
            ) : (
                <button type="button" className="auth-btn" onClick={loginWithRedirect}>
                    Login <FaUserPlus />
                </button>
            )}
        </Wrapper>
    );
};

export default CartAndLoginButton;
