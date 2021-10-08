import React from 'react';
import Wrapper from './CartColumns.styles';

function CartColumns() {
    return (
        <Wrapper>
            <div className="content">
                <h5>Item</h5>
                <h5>Price</h5>
                <h5>Quantity</h5>
                <h5>Subtotal</h5>
                <span />
            </div>
            <hr />
        </Wrapper>
    );
}

export default CartColumns;
