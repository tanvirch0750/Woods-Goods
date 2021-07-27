import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './PageHero.styles';

function PageHero({ title }) {
    console.log(title);
    return (
        <Wrapper>
            <div className="section-center">
                <h4>
                    <Link to="/">Home</Link> /{' '}
                    <Link className="title" to={`/${title}`}>
                        {title}
                    </Link>
                </h4>
            </div>
        </Wrapper>
    );
}
export default PageHero;
