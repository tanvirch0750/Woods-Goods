import React from 'react';
import { Link } from 'react-router-dom';
import heroBcg from '../../assets/hero.jpg';
import heroBcg2 from '../../assets/pexels-rachel-claire-4846101.jpg';
import Wrapper from './Hero.styles';

function Hero() {
    return (
        <div className="hero-full">
            <Wrapper className="section-center">
                <article className="content">
                    <h1>
                        <span>Decor</span> The Dreams <br /> With <span>Wood</span> Beauty
                    </h1>
                    <p>
                        Woods & Goods will supply comfort and style at work or in the home. We
                        ensure to sell stylish, modern furniture designs. Our products are suit each
                        customer specific requirements.
                    </p>
                    <Link to="/products" className="btn hero-btn">
                        Get your furniture
                    </Link>
                </article>
                <article className="img-container">
                    <img src={heroBcg} alt="nice table" className="main-img" />
                    <img src={heroBcg2} alt="person-working" className="accent-img" />
                </article>
            </Wrapper>
        </div>
    );
}

export default Hero;
