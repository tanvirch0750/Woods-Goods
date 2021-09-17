import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    margin-bottom: 2rem;
    column-gap: 2rem;
    @media (max-width: 576px) {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.75rem;
        .btn-container {
            width: 50px;
        }
        label {
            display: inline-block;
            margin-right: 0.5rem;
        }
    }
    @media (min-width: 768px) {
        column-gap: 2rem;
    }
    p {
        text-transform: capitalize;
        margin-bottom: 0;
    }

    .btn-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;
        button {
            background: transparent;
            border: 1px solid var(--clr-primary-2);
            color: var(--clr-primary-2);
            width: 1.5rem;
            border-radius: var(--radius);
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            svg {
                font-size: 1rem;
            }
        }
        .active {
            background: var(--clr-primary-2);
            color: var(--clr-white);
        }
    }

    .sort-input {
        border-color: transparent;
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.25rem 0.5rem;
        color: inherit;
    }
    label {
        font-size: 1rem;
        text-transform: capitalize;
    }

    select{
        color: inherit;
    }
`;

export default Wrapper;
