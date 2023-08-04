import styled from 'styled-components';
export default styled.header`

.test {
    height: var(--header-height);
    width: 100%;
    background-color: black;

}
    position: fixed;
    top: 0;
    width: 100vw;
    border-bottom: 1px solid var(--central-black);
    section {
        width: 100%;
        /* background-color: var(--central-white); */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo-container {
        width: 33%;
        margin-top: var(--nav-margin-top);
        margin-bottom: var(--nav-margin-top);
        
    }
    .logo {
        height: var(--logo-height);
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
    /* animation: drawReverse 1s backwards; */
  }
  
  .button:hover path {
    animation: draw 1s forwards;
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
`;