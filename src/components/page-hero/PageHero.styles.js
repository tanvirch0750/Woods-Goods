import styled from 'styled-components';

const Wrapper = styled.section`
   
   width: 100%;
   min-height: 15vh;
   display: flex;
   align-items: center;
   color: var(--clr-primary-1);
   margin-top: 20px;

   h4{
      margin-bottom: 0;
      font-size: 16px;
      background-color: var(--clr-primary-10);
      display: inline-block;
      padding: 12px 24px;
      border-radius: 5px;
      
   }

   a{
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
   }

   a:hover{
    color: var(--clr-primary-1);
   }

   .title{
      color: var(--clr-primary-1);
   }
`;


export default Wrapper;
