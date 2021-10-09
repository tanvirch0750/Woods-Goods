import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/globalContext';
import { useUserContext } from '../../context/userContext';
import { links } from '../../utils/constants';
import { CartAndLoginButton } from '../index';
import NavContainer from './Navbar.styles';

function Navbar() {
    const { openMobileMenu } = useGlobalContext();
    const { myUser } = useUserContext();
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" className="logo">
                        Woods <span>&</span> Goods
                    </Link>
                    <button type="button" className="nav-toggle" onClick={openMobileMenu}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {links.map((link) => {
                        const { id, text, url } = link;
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        );
                    })}
                    {myUser && (
                        <li>
                            <Link to="/checkout">checkout</Link>
                        </li>
                    )}
                </ul>
                <CartAndLoginButton />
            </div>
        </NavContainer>
    );
}

export default Navbar;
