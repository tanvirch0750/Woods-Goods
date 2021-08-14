import React from 'react';
import { useProductsContext } from '../../context/productsContext';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import Product from '../product/Product';
// import {Link} from 'react-router-dom';
import Wrapper from './FeaturedProduct.styles';

function FeaturedProduct() {
    const {
        productsLoading: loading,
        productsError: error,
        featuredProducts: featured,
    } = useProductsContext();

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    return (
        <Wrapper className="section">
            <div className="title">
                <h2>Featured Products</h2>
                <div className="underline" />
            </div>
            <div className="section-center featured">
                {featured.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </Wrapper>
    );
}

export default FeaturedProduct;
