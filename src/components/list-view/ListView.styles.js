import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    row-gap: 3rem;

    img {
        width: 100%;
        display: block;
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: var(--radius);
        margin-bottom: 1rem;
    }
    h4 {
        margin-bottom: 0.5rem;
    }
    .price {
        color: var(--clr-primary-5);
        margin-bottom: 0.75rem;
        font-weight: 700;
    }
    p {
        max-width: 45em;
        margin-bottom: 1rem;
        font-size: 15px;
    }
    .btn {
        font-size: 0.8rem;
        padding: 0.3rem 1.3rem;
        text-transform: capitalize;
    }
    @media (min-width: 992px) {
        article {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 2rem;
            align-items: start;
        }
    }
`;

export default Wrapper;
