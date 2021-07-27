import React from 'react';
import { Link } from 'react-router-dom';
import heroBcg from '../../assets/hero.jpg';
import heroBcg2 from '../../assets/pexels-rachel-claire-4846101.jpg';
import Wrapper from './Hero.styles';

function Hero() {
    return (
        <Wrapper className="section-center">
            <article className="content">
                <h1>
                    <span>Decor</span> The Dreams <br /> With <span>Wood</span> Beauty
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod vero
                    error minus placeat. Aliquam natus odit delectus totam autem.
                </p>
                <Link to="/products" className="btn hero-btn">
                    Shop Now
                </Link>
            </article>
            <article className="img-container">
                <img src={heroBcg} alt="nice table" className="main-img" />
                <img src={heroBcg2} alt="person-working" className="accent-img" />
            </article>
        </Wrapper>
    );
}

export default Hero;
