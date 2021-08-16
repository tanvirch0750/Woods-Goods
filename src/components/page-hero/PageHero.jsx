import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './PageHero.styles';

function PageHero({ title, product }) {
    return (
        <Wrapper>
            <div className="section-center">
                <h4>
                    <Link to="/">Home</Link>
                    {`/`}
                    {product && <Link to="/products">Products</Link>}
                    {`/`}
                    <Link className="title" to={`/${title}`}>
                        {`${title}`}
                    </Link>
                </h4>
            </div>
        </Wrapper>
    );
}
export default PageHero;
