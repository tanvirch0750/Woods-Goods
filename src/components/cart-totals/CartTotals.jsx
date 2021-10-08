import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import { formatPrice } from '../../utils/helpers';
import Wrapper from './CartTotals.styles';

function CartTotals() {
    const { totalAmount, shippingFee } = useCartContext();

    return (
        <Wrapper>
            <div>
                <article>
                    <h5>
                        Subtotal : <span>{formatPrice(totalAmount)}</span>
                    </h5>
                    <p>
                        Shipping Fee: <span>{formatPrice(shippingFee)}</span>
                    </p>
                    <hr />
                    <h4>
                        Order Total: <span>{formatPrice(totalAmount + shippingFee)}</span>
                    </h4>
                </article>
                <Link to="/checkout" className="btn">
                    Proceed to checkout
                </Link>
            </div>
        </Wrapper>
    );
}

export default CartTotals;
