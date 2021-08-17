import styled from 'styled-components';

const Wrapper = styled.section`
    margin-top: 2rem;
    
    .colors {
        display: grid;
        grid-template-columns: 125px 1fr;
        align-items: center;
        margin-bottom: 1rem;
        span {
            text-transform: capitalize;
            font-weight: 700;
            color: var(--clr-grey-2);
        }
        div {
            display: flex;
        }
    }
    .color-btn {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: #222;
        margin-right: 0.5rem;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 0.75rem;
            color: var(--clr-white);
        }
    }
    .active {
        opacity: 1;
    }
    .btn-container {
        margin-top: 2rem;
    }

    .btn {
        margin-top: 1rem;
        width: 140px;
    }

    @media (min-width: 992px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .btn-container {
        margin-top: 0rem;
       }
    }
`;

export default Wrapper;
