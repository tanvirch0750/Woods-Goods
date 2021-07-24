import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Hero.styles';

function Hero({ title }) {
    console.log(title);
    return (
        <Wrapper>
            <div className="section-center">
                <h4>
                    <Link to="/">Home</Link> / <Link to={`/${title}`}>{title}</Link>
                </h4>
            </div>
        </Wrapper>
    );
}

export default Hero;
