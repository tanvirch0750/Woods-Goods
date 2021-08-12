import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 225px;

    .cart-btn {
        font-family: "Inter", sans-serif;
        color: var(--clr-grey-1);
        font-size: 1.1rem;
        font-weight: 500;
        display: flex;

        align-items: center;
    }
    .cart-container {
        display: flex;
        align-items: center;
        position: relative;
        svg {
            height: 1.6rem;
            margin-left: 5px;
        }
    }
    .cart-value {
        position: absolute;
        top: -10px;
        right: -16px;
        background: var(--clr-primary-5);
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.75rem;
        color: var(--clr-white);
        padding: 12px;
    }
    .auth-btn {
        font-family: "Inter", sans-serif;
        color: var(--clr-grey-1);
        font-size: 1.1rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        background: transparent;
        border-color: transparent;
        cursor: pointer;
        svg {
            margin-left: 5px;
        }
    }
`;
export default Wrapper;
