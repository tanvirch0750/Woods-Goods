import React from 'react';
import { services } from '../../utils/constants';
import Wrapper from './Services.styles';

function Services() {
    return (
        <Wrapper>
            <div className="section-center">
                <article className="header">
                    <h3>
                        Custom furniture <br /> built only for you
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolor
                        sapiente officiis fugit aut reiciendis iusto velit omnis. Adipisci itaque.
                    </p>
                </article>
                <div className="services-center">
                    {services.map((item) => {
                        const { id, title, icon, text } = item;
                        return (
                            <article key={id} className="service">
                                <span className="icon">{icon}</span>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

export default Services;
