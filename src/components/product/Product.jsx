import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import Wrapper from './Product.styles';

function Product({ image, name, price, id }) {
    return (
        <Wrapper>
            <div className="container">
                <img src={image} alt={name} />
                <Link to={`products/${id}`} className="link">
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
            </footer>
        </Wrapper>
    );
}

export default Product;
