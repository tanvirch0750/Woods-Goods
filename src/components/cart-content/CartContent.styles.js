import styled from 'styled-components';

const Wrapper = styled.section`
    .link-container {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }
    .link-btn {
        background: transparent;
        border-color: transparent;
        text-transform: capitalize;
        padding: 0.4rem 0.8rem;
        background: var(--clr-primary-5);
        color: var(--clr-white);
        border-radius: var(--radius);
        font-weight: 400;
        transition: var(--transition);
        cursor: pointer;
    }
    .link-btn:hover {
        color: var(--clr-primary-10);
        background: var(--clr-primary-1);
    }
    .clear-btn {
        background: #333
    }
    .clear-btn:hover {
        color: var(--clr-primary-10);
        background: #444
    }
`;
export default Wrapper;
