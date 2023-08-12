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
    margin-top: 2rem;
    width: 100%;
    /* height: 40px; */
    display: flex;
   }
`;