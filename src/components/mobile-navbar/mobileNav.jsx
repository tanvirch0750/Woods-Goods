import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useGlobalContext } from '../../context/globalContext';
import { links } from '../../utils/constants';
import { CartAndLoginButton } from '../index';
import MobileNavContainer from './mobileNav.styles';

function MobileNavbar() {
    const { isMobileMenuOpen, closeMobileMenu } = useGlobalContext();

    return (
        <MobileNavContainer>
            <aside className={`${isMobileMenuOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className="sidebar-header">
                    <img src={logo} alt="woods and goods" />
                    <button className="close-btn" type="button" onClick={closeMobileMenu}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="links">
                    {links.map((link) => {
                        const { id, text, url } = link;
                        return (
                            <li key={id}>
                                <Link to={url} onClick={closeMobileMenu}>
                                    {text}
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link to="/checkout" onClick={closeMobileMenu}>
                            Checkout
                        </Link>
                    </li>
                </ul>
                <CartAndLoginButton />
            </aside>
        </MobileNavContainer>
    );
}

export default MobileNavbar;
