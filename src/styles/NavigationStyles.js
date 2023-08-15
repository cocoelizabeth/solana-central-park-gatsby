import styled from 'styled-components';
export default styled.header`

    position: fixed;
    top: 0;
    width: 100vw;
    border-top: 1px solid var(--central-black);
    border-bottom: 1px solid var(--central-black);
    section {
        width: 100%;
        background-color: var(--central-white);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo-container {
        width: 33%;
        margin-top: var(--nav-margin-top);
        margin-bottom: var(--nav-margin-top);
        animation: fadeIn 1s forwards;
        
    }
    .logo {
        height: var(--logo-height);
        aspect-ratio: 58 / 17;
    }

    .button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        width:96px;
        width:121px;
        line-height: 14px;
        
    }


  
  .button button {
    padding: 8px 16px;
    border: none;
    background: none;
    outline: none;
    text-transform: uppercase;
    font-size: var(--font-size-xs);
    font-size: var(--font-size-small);
    /* letter-spacing: 1.5px; */
    margin-top: 5px;
    margin-bottom: 5px;
    color: var(--central-olive);
  }
  
  .button svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .button path {
    stroke: var(--central-olive);
    stroke-width: 8px;
    stroke-dasharray: 0 1500;

    animation: draw 1s forwards;
    animation-delay: 3s;
    /* animation: drawReverse 1s backwards; */
  }

  .button path.animation-delay-none {
    animation-delay: 0s;
  }
  

  button:hover {
    cursor: pointer;
  }
  
  .button:hover path {
    /* animation: draw 1s forwards; */
    animation: drawAgain 1s forwards;
    stroke-dasharray: 1500 0;
  }

  .animation-delay {

  }
  
  @keyframes draw {
    from {
      stroke-dasharray: 0 1500;
    }
  
    to {
      stroke-dasharray: 1500 1500;
    }
  }

  
  @keyframes drawReverse {
    from {
      stroke-dasharray: 1500 1500;
    }
  
    to {
      stroke-dasharray: 0 1500;
    }
  }

  @keyframes drawAgain {
    from {
      stroke-dasharray: 0 1500;
      opacity:0;
    }
  
    to {
      stroke-dasharray: 1500 1500;
      opacity: 1;
    }
  }

  @media only screen and (min-width: 768px) {
    .button {
      width: 130px;
      button {
        padding: 10px 20px;
        line-height: 15px;
      }
    }
  } 

  @media only screen and (min-width: 992px) {
    .button {
      width: 150px;
      button {
        padding: 15px 20px;
        line-height: 15px;
      }
    }
  } 



`;