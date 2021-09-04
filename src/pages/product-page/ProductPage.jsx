import React from 'react';
import { Filter, ProductList, Sort } from '../../components';
import Wrapper from './ProductPage.styles';

function ProductPage() {
    return (
        <main>
            <Wrapper className="page">
                <div className="section-center products">
                    <Filter />
                    <div>
                        <Sort />
                        <ProductList />
                    </div>
                </div>
            </Wrapper>
        </main>
    );
}

export default ProductPage;
