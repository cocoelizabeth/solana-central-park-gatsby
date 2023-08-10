import styled from 'styled-components';
export default styled.div`
section {
    padding-bottom: 2rem;
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
    text-align: left;
    padding-top: var(--section-padding-small);
    /* padding-left: var(--grid-gutter);
    padding-right: var(--grid-gutter); */

    p {
        font-size: var(--font-size-body-copy);
        line-height: calc(var(--font-size-body-copy) * 2);
        margin-bottom: 3rem;
    }
}

.section-title {
    padding-bottom: 2rem;
    padding-top: 4rem;
}


.key-highlights > *{
    text-align: left;
    font-family: var(--font-family-body);

    b {
        font-family: var(--font-family-body);
        font-weight: 600;
    }
    b::after {
        content: "";
        clear: both;
        display: table;
    }
    p {
        font-family: var(--font-family-body);
        margin-bottom: 1rem;
    }


}

.key-highlights ul {
    padding-inline-start: var(--grid-gutter);
}

.key-highlights > p:nth-child(5){
    margin-bottom: 0px;
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


/* GOLD TEXT */

span.gold{
   position: absolute;
   transform: translate(-50%,-50%);
   top: 50%;
   left: 50%;
   letter-spacing: 5px;
   font-size: 150px;
   font-size: 80px;
   font-weight: bold;
   background-image: linear-gradient(
	to right,
	#462523 0,
       	#cb9b51 22%, 
	#f6e27a 45%,
	#f6f2c0 50%,
	#f6e27a 55%,
	#cb9b51 78%,
	#462523 100%
	);
   color:transparent;
   -webkit-background-clip:text;
   height: 100%;
    top: calc(50% + var(--header-height));
    margin: auto;
    line-height: 80px;

}

span.outline-shadow {
    -webkit-text-stroke: 1px black;
   color: white;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
}

span.gold-2 {
    color: #D5AD6D; /*if no support for background-clip*/
background: -webkit-linear-gradient(transparent, transparent),
-webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(163,126,67,1) 45%, rgba(145,112,59,1) 61%, rgba(213,173,109,1) 100%);
background: -o-linear-gradient(transparent, transparent);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-text-stroke: 2px black;
/* font-size: 80px; */
}


`;