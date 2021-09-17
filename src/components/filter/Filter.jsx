/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../../context/filterContext';
import { formatPrice, getUniqueValues } from '../../utils/helpers';
import Wrapper from './Filter.styles';

function Filter() {
    const {
        filters: { text, category, company, color, minPrice, maxPrice, price, shipping },
        updateFilters,
        clearFilters,
        allProducts,
    } = useFilterContext();

    const categories = getUniqueValues(allProducts, 'category');
    const companies = getUniqueValues(allProducts, 'company');
    const colors = getUniqueValues(allProducts, 'colors');

    return (
        <Wrapper>
            <div className="content">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-control">
                        <input
                            type="text"
                            name="text"
                            placeholder="Search Product"
                            className="search-input"
                            value={text}
                            onChange={updateFilters}
                        />
                    </div>
                    <div className="form-control">
                        <h5>Category</h5>
                        <div>
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={updateFilters}
                                    name="category"
                                    className={`${
                                        category === cat.toLowerCase() ? 'active' : null
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="form-control">
                        <h5>Company</h5>
                        <select
                            name="company"
                            value={company}
                            onChange={updateFilters}
                            className="company"
                        >
                            {companies.map((com, index) => (
                                <option key={index} value={com}>
                                    {com}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <h5>Colors</h5>
                        <div className="colors">
                            {colors.map((col, index) => {
                                if (col === 'all') {
                                    return (
                                        <button
                                            type="button"
                                            key={index}
                                            name="color"
                                            onClick={updateFilters}
                                            data-color="all"
                                            className={`${
                                                color === 'all' ? 'all-btn active' : 'all-btn'
                                            }`}
                                        >
                                            all
                                        </button>
                                    );
                                }

                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        name="color"
                                        style={{ background: col }}
                                        className={`${
                                            color === col ? 'color-btn active' : 'color-btn'
                                        }`}
                                        data-color={col}
                                        onClick={updateFilters}
                                    >
                                        {color === col ? <FaCheck /> : null}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="form-control">
                        <h5>Price</h5>
                        <p className="price">{formatPrice(price)}</p>
                        <input
                            type="range"
                            name="price"
                            onChange={updateFilters}
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                        />
                    </div>
                    <div className="form-control shipping">
                        <label htmlFor="shipping">Free Shipping</label>
                        <input
                            type="checkbox"
                            name="shipping"
                            id="shipping"
                            onChange={updateFilters}
                            checked={shipping}
                        />
                    </div>
                </form>
                <button type="button" className="clear-btn" onClick={clearFilters}>
                    Clear Filters
                </button>
            </div>
        </Wrapper>
    );
}

export default Filter;
