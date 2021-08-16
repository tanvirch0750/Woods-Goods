/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { AddToCart, Error, Loading, PageHero, ProductImages, Stars } from '../../components';
import { useProductsContext } from '../../context/productsContext';
import { singleProductUrl as url } from '../../utils/constants';
import { formatPrice } from '../../utils/helpers';
import Wrapper from './SingleProductPage.styles';

function SingleProductPage() {
    const { id } = useParams();
    const history = useHistory();
    const {
        singleProductLoading: loading,
        singleProductError: error,
        singleProduct: product,
        fetchSingleProduct,
    } = useProductsContext();

    // useEffect(() => {
    //     fetchSingleProduct(`${url}${id}`);
    // }, [fetchSingleProduct, id]);
    useEffect(() => {
        fetchSingleProduct(`${url}${id}`);
    },[id])

    console.log(product);
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push('/');
            }, 3000);
        }
    }, [error]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const {name, price, description, stock, stars, reviews, id: sku, company, images} = product;

    return (
        <Wrapper>
            <PageHero title={name} product/>
            <div className="section section-center page">
                <Link to="/products" className="btn">
                    See all the products
                </Link>
                <div className="product-center">
                    <ProductImages images={images}/>
                    <section className="content">
                        <h2>{name}</h2>
                        <Stars />
                        <h5 className="price">{formatPrice(price)}</h5>
                        <p className="desc">{description}</p>
                        <p className="info">
                            <span>Available :</span>
                            {stock > 0 ? 'In Stock' : 'Out of stock'}
                        </p>
                        <p className="info">
                            <span>SKU :</span>
                            {sku}
                        </p>
                        <p className="info">
                            <span>Company :</span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart />}
                    </section>
                </div>
            </div>
        </Wrapper>
    );
}

export default SingleProductPage;
