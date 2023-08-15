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
  /* margin-left: var(--grid-padding);
  margin-right: var(--grid-padding); */
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
  will-change: transform;
  transform: translateZ(0);
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



`;