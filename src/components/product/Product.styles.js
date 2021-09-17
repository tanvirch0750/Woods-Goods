import styled from 'styled-components';

const Wrapper = styled.article`
    border: 1px solid #eee;
    border-radius: 5px;
    overflow: hidden;

    .container {
        position: relative;
        background: var(--clr-black);
        /* border-radius: var(--radius); */
    }
    img {
        width: 100%;
        display: block;
        object-fit: cover;
        /* border-radius: var(--radius); */
        /* border-top-left-radius: var(--radius); */
        transition: var(--transition);
    }
    .link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--clr-primary-5);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        transition: var(--transition);
        opacity: 0;
        cursor: pointer;
        svg {
            font-size: 1.25rem;
            color: var(--clr-white);
        }
    }
    .container:hover img {
        opacity: 0.5;
    }
    .container:hover .link {
        opacity: 1;
    }
    footer {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        padding-top: 0;
    }
    footer h5,
    footer p {
        margin-bottom: 0;
        font-weight: 600;
    }

    footer p {
        color: var(--clr-primary-5);
        letter-spacing: var(--spacing);
    }
`;

export default Wrapper;
