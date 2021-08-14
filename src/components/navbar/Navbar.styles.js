import styled from 'styled-components';

const NavContainer = styled.nav`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-center {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            width: 250px;
            margin-left: -15px;
            font-family: 'Nunito', sans-serif;
            color: var(--clr-primary-1);
            font-size: 30px;
            display: inline-block;
            align-self: center;
            font-weight: 700;
            letter-spacing: -3px;
            text-shadow: 2px 3px 4px rgba(0,0,0,0.15);

            span {
                color: var(--clr-grey-2);
            }
        }
    }
    .nav-toggle {
        background: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        svg {
            font-size: 2rem;
        }
    }
    .nav-links {
        display: none;
    }
    .cart-btn-wrapper {
        display: none;
    }
    @media (min-width: 992px) {
        .nav-toggle {
            display: none;
        }
        .nav-center {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
        }
        .nav-links {
            display: flex;
            justify-content: center;
            li {
                margin: 0 0.5rem;
            }
            a {
                color: var(--clr-grey-2);
                font-size: 1.1rem;
                font-weight: 500;
                text-transform: capitalize;
                letter-spacing: -0.5px;
                padding: 0.5rem;
                &:hover {
                    border-bottom: 3px solid var(--clr-primary-2);
                }
            }
        }
        .cart-btn-wrapper {
            display: grid;
            justify-items: end;
        }
    }
`;

export default NavContainer;
