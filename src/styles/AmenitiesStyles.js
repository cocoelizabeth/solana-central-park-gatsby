import styled from 'styled-components';
export default styled.div`

    /* padding-top: var(--section-padding-small); */

    .amenity-list-title {
        padding-bottom: 2rem;
        padding-top: 4rem;
    }
    .amenities-list-container {
        display: flex;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        /* padding-left: var(--grid-gutter); */
    } 
    .amenity-list-item {
        width: 33%;
        margin-top: 2rem;
        text-align: center;
        /* padding: 2rem; */
        text-transform: uppercase;
        /* display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: auto; */
        /* img {
            padding: 25px;
            margin: 0 auto;
            width: 40px;
            height:100%;
            margin-bottom: 20px;

        } */
        
        p {
            color: var(--icon-color);
            font-family: var(--font-family-body);
            font-size: var(--font-size-xs);
            font-size: 8px;
            margin: 0 auto;
            padding-left: 10px;
            padding-right: 10px;
            text-align: center;
        }


    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
    }

    .amenity-icon-svg,
    .amenity-icon-svg-line {
        /* margin: 0 auto; */
        /* width: 40px; */
        height:40px;
        /* max-width: 30px; */
        width: 30px;
        margin-bottom: 10px;
        margin-bottom: 0;
        
        /* display: flex;
        justify-content: center;
        align-items: center; */

    }
    .amenity-icon-svg {
        fill: var(--icon-color);

    }

    .amenity-icon-svg-line {
        fill: transparent;
        stroke: var(--icon-color);
        stroke-width: 2px;
    }

`;