import styled from 'styled-components';
export default styled.div`
    margin-top: var(--header-height);
    padding-top: 4rem;
    padding-bottom: 4rem;
    position: relative;
    flex-direction: column;
    display: flex;
    color: var(--central-dark-grey);
    .h1 {
        font-weight: 400;
        padding-bottom: 2rem;
    }

    .h3 {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    p {
        line-height: 30px;
        font-family: var(--font-family-body);
        position: relative;

    }
   .cta {
    padding-top: 4rem;
    padding-bottom: 2rem;
    width: 100%;
    margin: 0 auto;
    /* height: 40px; */
    display: flex;
    align-items: center;
    justify-content: center;
   }


   svg {
    fill: var(--central-olive);

    opacity: 40%;
    
   }
   .signature-graphic  {
    max-width: 400px;
   }

   @media only screen and (min-width: 768px) {
    .thank-you-graphic {
        width: 80%;
    }
    .text-content {
        margin-left: 20%;
        margin-right: 20%;
    }

    .signature-graphic {
        margin-left: 20%;
        margin-right: 20%;
        padding-top: 2rem;
        
    }
   }

   @media only screen and (min-width: 992px) {
    .thank-you-graphic {
        width: 60%;
    }
    .text-content {
        margin-left: 20%;
        margin-right: 20%;
     
    }

    .signature-graphic {
        margin-left: 20%;
        padding-top: 2rem;
        margin-right: 20%;
        max-width: 400px;
       
    }
   }

   .thank-you-graphic {

    /* margin-bottom: -1rem; */
   }

   .signature-graphic {

   }
      /* .text-content {
    margin-left: 20%;
    margin-right: 20%;
   } */


   /* .thank-you-graphic {
    margin-bottom: -2rem;
    opacity: 50%;
    width: 50%;
  
   } */
`;