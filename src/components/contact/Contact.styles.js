import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 5rem 0;
    h3 {
        text-transform: none;
        color: var(--clr-primary-5);
    }
    p {
        line-height: 1.5;
        max-width: 45em;
        color: var(--clr-grey-3);
    }
    .contact-form {
        width: 90vw;
        max-width: 500px;
        display: grid;
        grid-template-columns: 1fr auto;
    }

    .form-input,
    .submit-btn {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border: 1px solid var(--clr-primary-5);
    }
    .form-input {
        border-right: none;
        color: var(--clr-grey-3);
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
    }
    .form-input:focus{
        outline: none;
    }
    .submit-btn {
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }
    .form-input::placeholder {
        color: var(--clr-grey-5);
        text-transform: capitalize;
    }
    .submit-btn {
        background: var(--clr-primary-5);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        cursor: pointer;
        transition: var(--transition);
        color: var(--clr-white);
    }
    .submit-btn:focus{
        outline: none;
    }
    .submit-btn:hover {
        color: var(--clr-white);
    }
    @media (min-width: 992px) {
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 8rem;
            margin-top: 2rem;
        }
        p {
            margin-bottom: 0;
        }
    }
    @media (min-width: 1280px) {
        padding: 15rem 0;
    }
`;

export default Wrapper;
