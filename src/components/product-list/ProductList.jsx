import React from 'react';
import { useFilterContext } from '../../context/filterContext';
import GridView from '../grid-view/GridView';
import ListView from '../list-view/ListView';

function ProductList() {
    const { filteredProducts: products, gridView } = useFilterContext();

    if (products.length < 1) {
        return (
            <h5 style={{ textTransform: 'none' }}>
                Please wait for few seconds Or Sorry no products matched your search.
            </h5>
        );
    }

    if (gridView === false) {
        return (
            <div>
                <ListView products={products} />
            </div>
        );
    }

    return (
        <div>
            <GridView products={products} />
        </div>
    );
}

export default ProductList;
