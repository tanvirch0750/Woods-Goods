/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import {formatPrice} from '../../utils/helpers';
import { Error, Loading } from '../../components';
import { useProductsContext } from '../../context/productsContext';
import { singleProductUrl as url } from '../../utils/constants';
// import Wrapper from './SingleProductPage.styles';

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

    console.log(product);

    return <div>Single product page</div>;
}

export default SingleProductPage;
