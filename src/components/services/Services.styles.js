import styled from 'styled-components';

const Wrapper = styled.section`
    h3,
    h4 {
        color: var(--clr-primary-1);
    }
    padding: 5rem 0;

    background: var(--clr-primary-9);

    .header h3 {
        margin-bottom: 2rem;
        text-transform: none;
    }
    p {
        margin-bottom: 0;
        line-height: 1.5;
        color: var(--clr-primary-1);
    }
    .services-center {
        margin-top: 4rem;
        display: grid;
        gap: 2.5rem;
    }
    .service {
        background: #fff;
        text-align: center;
        padding: 2.5rem 2rem;
        border-radius: var(--radius);
        box-shadow: var(--light-shadow);
        p {
            color: var(--clr-primary-1);
        }
    }
    span {
        width: 4rem;
        height: 4rem;
        display: grid;
        margin: 0 auto;
        place-items: center;
        margin-bottom: 1rem;
        border-radius: 50%;
        background: var(--clr-primary-10);
        color: var(--clr-primary-1);
        svg {
            font-size: 2rem;
        }
    }
    @media (min-width: 992px) {
        .header {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 576px) {
        .services-center {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
    @media (min-width: 1280px) {
        padding: 0;
        .section-center {
            transform: translateY(5rem);
        }
    }
`;

export default Wrapper;
