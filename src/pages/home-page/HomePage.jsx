import React from 'react';
import { Contact, FeaturedProduct, Hero, Services } from '../../components';

function HomePage() {
    return (
        <main>
            <Hero />
            <FeaturedProduct />
            <Services />
            <Contact />
        </main>
    );
}

export default HomePage;
