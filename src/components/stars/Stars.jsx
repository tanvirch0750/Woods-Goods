/* eslint-disable no-nested-ternary */
import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import Wrapper from './Stars.styles';

function Stars({ stars, reviews }) {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;

        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <BsStarFill />
                ) : stars >= number ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
        );
    });

    return (
        <Wrapper>
            <div className="stars">{tempStars}</div>
            <p className="reviews">({reviews} customer reviews)</p>
        </Wrapper>
    );
}

export default Stars;
