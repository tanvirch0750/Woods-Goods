import styled from 'styled-components';

const MobileNavContainer = styled.div`
    text-align: center;
    .sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
    }
    .close-btn {
        font-size: 2rem;
        background: transparent;
        border-color: transparent;
        color: var(--clr-primary-5);
        transition: var(--transition);
        cursor: pointer;
        color: var(--clr-red-dark);
        margin-top: 0.2rem;
    }
    .close-btn:hover {
        color: var(--clr-red-light);
    }
    .logo {
            width: 250px;
            /* margin-left: 15px;  */
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
    .links {
        margin-bottom: 2rem;
    }
    .links a {
        display: block;
        text-align: left;
        font-size: 1rem;
        text-transform: capitalize;
        padding: 1rem 1.5rem;
        color: var(--clr-grey-3);
        transition: var(--transition);
        letter-spacing: var(--spacing);
    }

    .links a:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-2);
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--clr-white);
        transition: var(--transition);
        transform: translate(-100%);
        z-index: -1;
    }
    .show-sidebar {
        transform: translate(0);
        z-index: 999;
    }
    .cart-btn-wrapper {
        margin: 2rem auto;
    }
    @media screen and (min-width: 992px) {
        .sidebar {
            display: none;
        }
    }
`;

export default MobileNavContainer;
