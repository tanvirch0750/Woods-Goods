import React from 'react';
import { useFilterContext } from '../../context/filterContext';
import GridView from '../grid-view/GridView';
// import ListView from '../list-view';

function ProductList() {
    const { filteredProducts: products } = useFilterContext();

    return (
        <div>
            <GridView products={products} />
        </div>
    );
}

export default ProductList;
