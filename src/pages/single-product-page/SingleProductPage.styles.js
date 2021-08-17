import styled from 'styled-components';

const Wrapper = styled.main`
    
    .section {
        padding: 0 0 4rem 0;
    }
    .product-center {
        display: grid;
        gap: 4rem;
        margin-top: 5rem;
    }
    .price {
        color: var(--clr-primary-5);
    }
    .desc {
        line-height: 2;
        max-width: 45em;
    }
    .info {
        text-transform: capitalize;
        width: 300px;
        display: grid;
        grid-template-columns: 125px 1fr;
        span {
            font-weight: 700;
            color: var(--clr-grey-2);
        }
    }

    @media (min-width: 992px) {
        .bredcrumb-product{
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .section-center {
                width: 500px;
                margin: 0;
                max-width: 500px;
            }
        }
        .product-center {
            grid-template-columns: 1fr 1fr;
            align-items: start;
        }
        .price {
            font-size: 1.25rem;
        }
    }
`;

export default Wrapper;
