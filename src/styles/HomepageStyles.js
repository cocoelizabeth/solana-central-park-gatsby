import styled from 'styled-components';
export default styled.div`


.hero-image-container {
        margin-top: var(--header-height);
        height: calc(100vh - (var(--header-height) * 3));
    }
    .hero-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        margin: 0 auto;

    }

.body-copy-container {
    text-align: center;
    padding-top: var(--section-padding-small);
    padding-left: var(--grid-gutter);
    padding-right: var(--grid-gutter);

    p {
        font-size: var(--font-size-body-copy);
        line-height: calc(var(--font-size-body-copy) * 2);
        margin-bottom: 3rem;
    }
}




    @media screen {
        
    }
`;