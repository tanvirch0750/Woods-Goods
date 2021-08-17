import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Wrapper from './AmountButton.styles';

function AmountButton({ amount, increase, decrease }) {
    return (
        <Wrapper className="amount-btn">
            <button type="button" className="amount-btn" onClick={decrease}>
                <FaMinus />
            </button>
            <h2 className="amount">{amount}</h2>
            <button type="button" className="amount-btn" onClick={increase}>
                <FaPlus />
            </button>
        </Wrapper>
    );
}

export default AmountButton;
