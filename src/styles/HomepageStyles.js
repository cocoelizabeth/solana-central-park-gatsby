import styled from 'styled-components';
export default styled.div`
:root {
  
}

.hero-image-container {
        padding-top: var(--header-height);
        height: calc(100vh - (var(--header-height) * 3));
        position: relative;
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
    /* padding-left: var(--grid-gutter);
    padding-right: var(--grid-gutter); */

    p {
        font-size: var(--font-size-body-copy);
        line-height: calc(var(--font-size-body-copy) * 2);
        margin-bottom: 3rem;
    }
}

.black-background {
    padding-top: var(--header-height);
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--central-black);
    top: 0;
    left: 0;
    opacity: 30%;

}

span {
    position: absolute;
    /* padding-top: var(--header-height); */
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate3d(calc(-50% - 12px),calc(-50% + 12px), 0);
    color: var(--central-white);
    width: 100%;
    padding-left: var(--grid-gutter);
    padding-right: var(--grid-gutter);
}

span.drop-shadow-animation-text {
  position: absolute;
  padding-top: var(--header-height);

  top: 50%;
  left: 50%;
  transform: translate3d(calc(-50% - 12px),calc(-50% + 12px) ,0);
  font-size: var(--font-size-xl);
   
  /* mix-blend-mode: screen; */
    text-align: center;
  /* font-size: 12em; */
  /* letter-spacing: 0.2em; */
  text-transform: uppercase;
  -webkit-text-stroke: 1px solid black;
  text-shadow: 0px 0px var(--central-black), 
            0px 0px var(--central-black), 
            0px 0px var(--central-black),            
            0px 0px var(--central-black), 
            0px 0px var(--central-black),
            0px 0px var(--central-black),
            0px 0px var(--central-black);
            /* 0px 0px var(--central-black),
            0px 0px var(--central-black),
            0px 0px var(--central-black),
            0px 0px var(--central-black); */
  /* opacity:0; */
  color: var(--central-white);

  animation: revolve 2s cubic-bezier(.47,.01,0,1.01) forwards 0.5s; 
  
    @keyframes revolve {
        to {
            opacity: 1;
            transform: translate3d(-50%, -50%, 0);
            /* -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--central-black); */
            text-shadow: 
            -2px 1px var(--central-black), 
            -3px 2px var(--central-black), 
            -4px 3px var(--central-black),
            -5px 4px var(--central-black), 
            -6px 5px var(--central-black), 
            -7px 6px var(--central-black), 
            -8px 7px var(--central-black); 
            /* -9px 8px var(--central-white), 
            -10px 9px var(--central-white), 
            -11px 10px var(--central-white), 
            -12px 11px var(--central-white); */
        }
    }
}



`;