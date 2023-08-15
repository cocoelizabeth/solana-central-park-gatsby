import styled from 'styled-components';
export default styled.footer`
 background-color: var(--central-olive);
 color: var(--central-white);

 padding-top: 4rem;
 padding-bottom: 4rem;
 .h2 {
   
 }

 .title {
        font-family: var(--font-family-body);
        font-weight: 500;
        text-transform: uppercase;
        padding-top: 2rem;
  
}


 div.address {
    padding-bottom: 2rem;
    a {
        text-decoration: none;
        
    }

    p {
        font-family: var(--font-family-body);
        text-decoration: none;
    }


 }

.team-item {
    display: flex;
  
    a {
        margin-right: 6px;

    }

}

 a {

        color: var(--central-white)
}

.team-item {
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-body);
    font-size: var(--font-size-xs);
    margin-top: 12px;
    text-transform: uppercase;
    a {
        font-size: var(--font-size-body-copy);
        text-transform: capitalize;
    }
}

.copyright {
    padding-top: 3rem;
    font-family: var(--font-family-body);
    text-align: left;
    width: 100%;
    font-size: var(--font-size-xs);
    display: flex;
    align-items: center;
 
}

.copyright-text {
    margin-left: 5px;
}

@media only screen and (min-width: 768px) {
    /* .h2 {
        width: 100%;
        text-align: center;
    } */
    .h2 {
        /* font-size: var(--font-size-h3); */
        width: 25%;
    }

    .title {
        padding-top: 0;
    }
    .footer-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: top;
    }


    .footer-contact,
    .team {
        display: flex;
        flex-direction: column;
  
    }

    .footer-contact {
        /* width: 40%; */
        .title {
        
            margin-bottom: 12px;

        }
    }



   .address a {

    p {
        line-height: 16px;
    }

   }

    /* .copyright {
        width: 100%;
        display: flex;
        justify-content: center;
    } */
}


`;