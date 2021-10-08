import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../context/cartContext';
import { formatPrice } from '../../utils/helpers';
import AmountButton from '../amount-btn/AmountButton';
import Wrapper from './CartItem.styles';

function CartItem({ id, image, name, color, price, amount }) {
    const { removeCartItem } = useCartContext();
    // const {removeCartItem, toggleAmount} = useCartContext();

    const increase = () => {};

    const decrease = () => {};

    return (
        <Wrapper>
            <div className="title">
                <img src={image} alt={name} />
                <div>
                    <h5 className="name">{name}</h5>
                    <p className="color">
                        color : <span style={{ background: color }} />
                    </p>
                    <h5 className="price-small">{formatPrice(price)}</h5>
                </div>
            </div>
            <h5 className="price">{formatPrice(price)}</h5>
            <AmountButton amount={amount} increase={increase} decrease={decrease} />
            <h5 className="subtotal">{formatPrice(price * amount)}</h5>
            <button type="button" className="remove-btn" onClick={() => removeCartItem(id)}>
                <FaTrash />
            </button>
        </Wrapper>
    );
}

export default CartItem;
