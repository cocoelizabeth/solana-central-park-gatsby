import styled from 'styled-components';
export default styled.div`

background-color: var(--central-black);


.marquee {
  --gap: .5rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  /* margin-left: var(--grid-gutter);
  margin-right: var(--grid-gutter); */
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
  padding-inline-start: 0;
  text-decoration: none;
  list-style-type: none;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__content {
    animation-play-state: paused !important;
  }
}

.marquee__content {
  animation: scroll 20s linear infinite;
}

/* .marquee--hover-pause:hover .marquee__content {
  animation-play-state: paused;
} */

.marquee__content > * {
  flex: 0 0 auto;
  color: var(--central-white);
  /* text-transform: uppercase; */
  /* background: dodgerblue; */
  margin: 2px;
  padding: 0rem 1rem;
  border-radius: 0.25rem;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
 
}

.marquee__content a {
    color: var(--central-white);
    text-decoration: none;
    border-bottom: 1px solid white;
    cursor: pointer;
    /* ::after {
        content: "9";
    } */
}

span.arrow {
    position: unset;
    padding-left: 8px;
    padding-right: 0;
}



/*   
    .marquee {
        height: 3rem;
    width: 100vw;
    background-color: black;

    overflow: hidden;
    position: relative;
    }

    .marquee div {
    display: block;
    width: 200%;
    height: 100%;

    position: absolute;
    overflow: hidden;

    animation: marquee 5s linear infinite;
    }

    .marquee span {
    float: left;
    width: 50%;
    } */

    /* @keyframes marquee {
    0% { left: 0; }
    100% { left: -100%; }
    } */
    /* .cssmarquee {
 height: 50px;  
 overflow: hidden;
 position: relative;
}
.cssmarquee h1 {
 font-size: 2em;
 position: absolute;
 width: 100%;
 height: 100%;
 margin: 0;
 line-height: 50px;
 text-align: center;    
 transform:translateX(100%);
 animation: cssmarquee 10s linear infinite;
}

h1.second {
    animation-delay: 2s;
    color: red;
    padding-left: 50%;
}

h1.third {
    animation-delay: 6s;
    color: blue;
    padding-left: 50%;
}
  
@keyframes cssmarquee {
 0%   { 
 transform: translateX(100%);       
 }
 100% { 
  
 transform: translateX(-100%); 
 }
}

.marquee {
    position: relative;
    overflow: hidden;
    --offset: 20vw;
    --move-inital: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));

    background-color: black;
    color: white;
    height: 300px;
}

.marquee__inner {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-inital), 0, 0);
    animation: marquee 5s linear infinite;
    animation-play-state: running;
}

.marquee span {
    font-size: 10vw;
    padding: 0 2vw;
}

.marquee:hover .marquee__inner {
    animation-play-state: paused;
}

@keyframes marquee {
    0%   { 
 transform: translate3d(var(--move-initial), 0, 0);       
 }
 100% { 
  
 transform:translate3d(var(--move-final), 0, 0); 
 }
    
} */
`;