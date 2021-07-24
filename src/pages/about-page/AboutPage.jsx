import React from 'react';
import aboutImg from '../../assets/hero-bcg.jpeg';
import { Hero } from '../../components';
import Wrapper from './AboutPage.styles';

function AboutPage() {
    return (
        <main>
            <Hero title="about" />
            <Wrapper className="page section section-center">
                <img src={aboutImg} alt="nice desk" />
                <article>
                    <div className="title">
                        <h2>Our Story</h2>
                        <div className="underline" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam non, ipsa
                        ut, eius quam rem qui ad odit magni quia tempore tenetur quae nesciunt
                        reprehenderit et laudantium odio repellat accusantium.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam non, ipsa
                        ut, eius quam rem qui ad odit magni quia tempore tenetur quae nesciunt
                        reprehenderit et laudantium odio repellat accusantium.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam non, ipsa
                        ut, eius quam rem qui ad odit magni quia tempore tenetur quae nesciunt
                        reprehenderit et laudantium odio repellat accusantium.
                    </p>
                </article>
            </Wrapper>
        </main>
    );
}

export default AboutPage;
