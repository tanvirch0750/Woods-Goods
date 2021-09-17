/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../../context/filterContext';
import Wrapper from './Sort.styles';

function Sort() {
    const { filteredProducts: products, gridView } = useFilterContext();
    return (
        <Wrapper>
            <div className="btn-container">
                <button type="button" className={`${gridView ? 'active' : null}`}>
                    <BsFillGridFill />
                </button>
                <button type="button" className={`${!gridView ? 'active' : null}`}>
                    <BsList />
                </button>
            </div>
            <p>{products.length} products found</p>
            <hr />
            <form>
                <label htmlFor="sort">Sort by</label>
                <select name="sort" id="sort" className="sort-input">
                    <option value="price-lowest">Lowest Price</option>
                    <option value="price-highest">Highest Price</option>
                    <option value="price-a">Name (a-z)</option>
                    <option value="price-z">Name (z-a)</option>
                </select>
            </form>
        </Wrapper>
    );
}

export default Sort;
