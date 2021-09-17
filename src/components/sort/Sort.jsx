/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../../context/filterContext';
import Wrapper from './Sort.styles';

function Sort() {
    const {
        filteredProducts: products,
        gridView,
        setGridView,
        setListView,
        sort,
        updateSort,
    } = useFilterContext();
    return (
        <Wrapper>
            <div className="btn-container">
                <button
                    type="button"
                    className={`${gridView ? 'active' : null}`}
                    onClick={setGridView}
                >
                    <BsFillGridFill />
                </button>
                <button
                    type="button"
                    className={`${!gridView ? 'active' : null}`}
                    onClick={setListView}
                >
                    <BsList />
                </button>
            </div>
            <p>{products.length} products found</p>
            <hr />
            <form>
                <label htmlFor="sort">Sort by</label>
                <select
                    name="sort"
                    id="sort"
                    className="sort-input"
                    value={sort}
                    onChange={updateSort}
                >
                    <option value="price-lowest">Lowest Price</option>
                    <option value="price-highest">Highest Price</option>
                    <option value="name-a">Name (a-z)</option>
                    <option value="name-z">Name (z-a)</option>
                </select>
            </form>
        </Wrapper>
    );
}

export default Sort;
