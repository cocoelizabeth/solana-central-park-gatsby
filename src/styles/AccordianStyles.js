import styled from 'styled-components';
export default styled.div`
    color: var(--central-dark-grey);

    /* DEFINE ACCORDIAN WIDTH AND CENTER */
    width: 100%;

    ul.accordian-container {
        padding-inline-start: 0px;
        margin-block-end: 0px;
    }

    .border-bottom {
        border-bottom: 1px solid var(--central-dark-grey);
    }


    .accordian-item-card {
        list-style: none;
        padding-left: var(--grid-padding);
        padding-right: var(--grid-padding);
    }
    
    /* MAKE LABELS APPEAR AS CLICKABLE BUTTONS
    z-index = 20 to make sure its on top of the content section*/
    .accordian-title {
        font-size: var(--font-size-xl);
        padding: 2rem 0px;
        cursor: pointer;
        display: block;
    }

    /* MAKE TITLE BLACK ON REVEAL */
    .accordian-title.reveal {
        /* color: var(--central-dark-grey);     */
    }


    
    .accordian-content {
        display: none;
        font-size: .9rem;
        transition: all 0.5s ease-in-out;
        &.reveal {
            animation: fade .5s 1;
            display: block;
            animation-fill-mode: forwards;
            padding-top: 30px;
            visibility: visible;
            transition: all 10s ease-in-out;
        }
    }



    .accordian-title:after {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        right: var(--grid-gutter);
        background: transparent url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%201024%201024%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.2%20275.4c0-8.6%203.4-17.401%2010-24.001%2013.2-13.2%2034.8-13.2%2048%200l451.8%20451.8%20445.2-445.2c13.2-13.2%2034.8-13.2%2048%200s13.2%2034.8%200%2048L542%20775.399c-13.2%2013.2-34.8%2013.2-48%200l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E) no-repeat center center;	
        margin: 2rem 0px;
        z-index: 2;
        right: var(--grid-padding);
    }

    .accordian-title:hover {
        color: var( --central-medium-grey);

    }

    .accordian-title.reveal:after {
        background-image: url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%201024%201024%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.2%20751.4c0%208.6%203.4%2017.401%2010%2024.001%2013.2%2013.2%2034.8%2013.2%2048%200l451.8-451.8%20445.2%20445.2c13.2%2013.2%2034.8%2013.2%2048%200s13.2-34.8%200-48L542%20251.401c-13.2-13.2-34.8-13.2-48%200l-475.8%20475.8c-6.8%206.8-10%2015.4-10%2024.2z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E);
    }

    .accordian-content {
        p {
            margin-bottom: 3rem;
            font-family: var(--font-family-body);

            b {
                font-family: var(--font-family-body);
                font-weight: 600;
                z-index: 10;
            }
            a:last-of-type::before, 
            b::after {
                content: "";
                clear: both;
                display: table;
            }
            a {
                text-transform: uppercase;
                color: var(--central-olive);
                text-decoration: none;
                border-bottom: 1px solid var(--central-olive);
                font-family: var(--font-family-body);
            }
            a:hover {
                color: var(--central-light-grey);
   
                
            }
            a:after {
                content: "→";
                text-decoration: none;
                padding-left: 5px;
              
                
            }
        }
        li p {               
                font-family: var(--font-family-body);
                margin-bottom: 1rem;
            }
    }

    .accordian-item-subtitle {
        text-transform: uppercase;
        font-family: var(--font-family-body);
        font-size: var(--font-size-small)
    }

   .amenities-list-container {
     padding-bottom: 4rem;
   }

    .accordian-content ul {
        padding-inline-start: var(--grid-gutter);
    }

    /* REMOVE SPACE UNDER AMENITIES LIST */
    .accordian-content > p:nth-child(5){
        margin-bottom: 0px;
    }   

    .amenity-list-title {
        padding-bottom: 2rem;
        padding-top: 4rem;
    }
    .amenities-list-container {
        display: flex;
        flex-wrap: wrap;
    }

    .amenity-list-item {
        width: 33%;
        margin-top: 2rem;
        text-align: center;
        text-transform: uppercase;
        .text-container div {
            color: var(--icon-color);
            font-family: var(--font-family-body);
        
            font-size:var(--font-size-xxs);
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
        height:40px;
        width: 30px;
        margin-bottom: 10px;
        margin-bottom: 0;
    }
    .amenity-icon-svg {
        fill: var(--icon-color);
    }

    .amenity-icon-svg-line {
        fill: transparent;
        stroke: var(--icon-color);
        stroke-width: 2px;
    }

    .asterix-text {
        font-size: var(--font-size-xxs);
        margin-top: -2rem;
        padding-bottom: 4rem;
        font-family: var(--font-family-body);


    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 25px 0;
        /* font-size: 0.9em; */

        /* font-family: sans-serif; */
        /* min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */
        p {
            margin-bottom: 0 !important;
            padding-bottom: 0;
        }
    }

    th {
        p {
            line-height: normal;
            text-transform: uppercase;
            /* font-size: 12px; */
            font-weight: 500;
        }
    }

    table th,
    table td {
        padding-top: 15px;
        padding-bottom: 15px;
        p {
            /* font-size: var(--font-size-small); */
            line-height: normal;
        }
    }



    table td:nth-child(2),
    table th:nth-child(2),
    table td:nth-child(3),
    table th:nth-child(3),
    table td:nth-child(4),
    table th:nth-child(4) {
        text-align: center;
        min-width: 100px;
    }



    table tr {
        border-bottom: thin solid var(--central-medium-grey);
        

    }



    .accordian-content h2 {
        margin-bottom: 30px;
    }

     @media only screen and (min-width: 768px) {

        .amenity-list-item {
            padding-left: 40px;
            padding-right: 40px;
        }
        .amenity-icon-svg,
        .amenity-icon-svg-line {
            height:50px;
            width: 40px;
            margin-bottom: 10px;
        }
    } 

    @media only screen and (min-width: 768px) {

        .amenity-list-item {
            width: 20%;
            padding-left: 20px;
            padding-right: 20px;
            margin-bottom: 5px;
        }
        .amenity-icon-svg,
        .amenity-icon-svg-line {
            height:50px;
            width: 40px;
            margin-bottom: 10px;
        }
    } 
`;