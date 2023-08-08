import styled from 'styled-components';
import { FiArrowDown } from 'react-icons/fi';
export default styled.div`

    /* DEFINE ACCORDIAN WIDTH AND CENTER */
    width: 100%;


    .accordian-item-card {
        list-style: none;
        cursor: pointer;
        padding-left: var(--grid-gutter);
        padding-right: var(--grid-gutter);
    }
    
    /* MAKE LABELS APPEAR AS CLICKABLE BUTTONS
    z-index = 20 to make sure its on top of the content section*/
    .accordian-title {
        font-size: var(--font-size-xl);
        padding: 2rem 0px;
        cursor: pointer;
        color:  var(--central-dark-grey);
        display: block;
    }

    /* MAKE TITLE BLACK ON REVEAL */
    .accordian-title.reveal {
        color: var(--central-black);    
    }



    .accordian-content {
        display: none;
        font-size: .9rem;
        transition: all 0.5s ease-in-out;
        &.reveal {
            /* display: flex; */
            /* flex-direction: column; */
            animation: fade .5s 1;
            display: block;
            animation-fill-mode: forwards;
            padding-top: 30px;
            visibility: visible;
            transition: all 10s ease-in-out;
        }
        &.amenities.reveal {
            /* display: flex; */
        }
    }



    .accordian-title:after {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        right: var(--grid-gutter);
        /* top: 7px; */
        background: transparent url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%201024%201024%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.2%20275.4c0-8.6%203.4-17.401%2010-24.001%2013.2-13.2%2034.8-13.2%2048%200l451.8%20451.8%20445.2-445.2c13.2-13.2%2034.8-13.2%2048%200s13.2%2034.8%200%2048L542%20775.399c-13.2%2013.2-34.8%2013.2-48%200l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E) no-repeat center center;	
        margin: 2rem 0px;
        z-index: 2000;
        /* background-color: red; */
       
    }

    .accordian-title:hover {
        color: var( --central-black);

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
        }
        li p {               
                font-family: var(--font-family-body);
                margin-bottom: 1rem;
            }
    }

    .accordian-item-subtitle {
        text-transform: uppercase;
        font-family: var(--font-family-body);

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




   
    /* padding-top: var(--section-padding-small); */



    

    /* MAKE LABELS APPEAR AS CLICKABLE BUTTONS
    z-index = 20 to make sure its on top of the content section*/

    /* MAKE LABEL TEXT BLACK ON HOVER */
    .ac-container label:hover {

    
    }

    /* SELECTED STYLING */
    .ac-container input:checked + label,
    .ac-container input:checked + label:hover{
	    color: var(--central-black);
    }

    /* DOWN ICON ARROW ON HOVER */
    .ac-container label:hover:after,
    .ac-container input:checked + label:hover:after{
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        right: 13px;
        top: 7px;
        background: transparent url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%201024%201024%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.2%20275.4c0-8.6%203.4-17.401%2010-24.001%2013.2-13.2%2034.8-13.2%2048%200l451.8%20451.8%20445.2-445.2c13.2-13.2%2034.8-13.2%2048%200s13.2%2034.8%200%2048L542%20775.399c-13.2%2013.2-34.8%2013.2-48%200l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E) no-repeat center center;	
        margin: 2rem 0px;
        /* background: transparent {<FiArrowDown/>} no-repeat center center;	 */

    }

    /* UP ICON ARROW ON SELECTED ITEM */
    .ac-container input:checked + label:hover:after{
	    background-image: url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%201024%201024%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.2%20751.4c0%208.6%203.4%2017.401%2010%2024.001%2013.2%2013.2%2034.8%2013.2%2048%200l451.8-451.8%20445.2%20445.2c13.2%2013.2%2034.8%2013.2%2048%200s13.2-34.8%200-48L542%20251.401c-13.2-13.2-34.8-13.2-48%200l-475.8%20475.8c-6.8%206.8-10%2015.4-10%2024.2z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E);
    }  
    
    /* HIDE INPUTS (CHECKBOXES) */
    .ac-container input {
	    display: none;
    }

    /*  OPEN & CLOSE TRANSITIONS
    CONTENT AREA HAS INITIAL HEIGHT 0PX AND OVERFLOW HIDDEN
    CLOSING TRANSITION FOR HEIGHT
    CLOSING IS SLIGHTLY FASTER THAN OPENING */


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