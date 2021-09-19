/* eslint-disable no-unused-expressions */

/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import AmountButton from '../amount-btn/AmountButton';
import Wrapper from './AddToCart.styles';

function AddToCart({ product }) {
    const { addToCart } = useCartContext();

    const { id, stock, colors } = product;

    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1;
            if (tempAmount > stock) {
                tempAmount = stock;
            }
            return tempAmount;
        });
    };
    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1;
            if (tempAmount < 1) {
                tempAmount = 1;
            }
            return tempAmount;
        });
    };

    return (
        <Wrapper>
            <div className="colors">
                <span>Colors: </span>
                <div>
                    {colors.map((color, index) => (
                        <button
                            type="button"
                            key={index}
                            className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
                            style={{ background: color }}
                            onClick={() => setMainColor(color)}
                        >
                            {mainColor === color ? <FaCheck /> : null}
                        </button>
                    ))}
                </div>
            </div>
            <div className="btn-container">
                <AmountButton amount={amount} increase={increase} decrease={decrease} />
                <Link
                    to="/cart"
                    className="btn"
                    onClick={() => addToCart(id, mainColor, amount, product)}
                >
                    Add to cart
                </Link>
            </div>
        </Wrapper>
    );
}

export default AddToCart;
