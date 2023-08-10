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

    p {
        font-family: var(--font-family-body);
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



`;