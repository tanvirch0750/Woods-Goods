import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useGlobalContext } from '../../context/globalContext';
import { links } from '../../utils/constants';
import { CartAndLoginButton } from '../index';
import NavContainer from './Navbar.styles';

function Navbar() {
    const { openMobileMenu } = useGlobalContext();

    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Woods and Goods" />
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
                </ul>
                <CartAndLoginButton />
            </div>
        </NavContainer>
    );
}

export default Navbar;
