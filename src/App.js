import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, MobileNavbar, Navbar } from './components';
import {
    AboutPage,
    CartPage,
    CheckoutPage,
    ErrorPage,
    HomePage,
    ProductPage,
    SingleProductPage
} from './pages';

function App() {
    return (
        <Router>
            <Navbar />
            <MobileNavbar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/about">
                    <AboutPage />
                </Route>
                <Route exact path="/cart">
                    <CartPage />
                </Route>
                <Route exact path="/products">
                    <ProductPage />
                </Route>
                <Route exact path="/products/:id" children={<SingleProductPage />} />
                <Route exact path="/checkout">
                    <CheckoutPage />
                </Route>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
