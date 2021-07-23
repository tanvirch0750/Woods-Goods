import React from 'react';
import Wrapper from './Footer.styles';

function Footer() {
    return (
        <Wrapper>
            <h5>
                &copy;{new Date().getFullYear()} <span>Woods & Goods</span>
            </h5>
            <h5>All rights reserve</h5>
        </Wrapper>
    );
}

export default Footer;
