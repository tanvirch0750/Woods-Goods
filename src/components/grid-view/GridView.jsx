import React from 'react';
import Product from '../product/Product';
import Wrapper from './GridView.styles';

function GridView({ products }) {
    return (
        <Wrapper>
            <div className="products-container">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </Wrapper>
    );
}

export default GridView;
