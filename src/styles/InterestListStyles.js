import styled from 'styled-components';
export default styled.div`
    padding-top: calc( var(--header-height) + 2rem) ;


    form {
        display: flex;
        flex-direction: column;
    }
    input.input-error,
    select.input-error {
        border-color: red;
      
    }
    .error {
        color: red;
        font-style: italic;
        font-family: var(--font-family-body);
        font-size: var(--font-size-xs);
    }

    button:disabled {
        opacity: 0.35;
    }

 


input,
span,
label,
textarea {
  display: block;
  margin: 10px;
  padding: 5px;
  border: none;
  font-size: 22px;
}

textarea:focus,
input:focus {
  outline: 0;
}


/* Question */
input.question,
textarea.question {
  font-size: var(--font-size-large);
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}
/* Underline and Placeholder */

input.question + label,
textarea.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 100%;
  border-top: 1px solid var(--central-charcoal);
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
}

input.question:focus + label,
textarea.question:focus + label {
  width: 100%;
}

input.question:focus,
input.question:valid,
input.question:not(:placeholder-shown) {
  padding-top: 35px;
}

textarea.question:valid,
textarea.question:focus,
textarea.question:not(:placeholder-shown) {
  margin-top: 35px;
}


input.question:focus + label > span,
input.question:valid + label > span,
input.question:not(:placeholder-shown) + label > span {
  top: -100px;
  font-size: var(--font-size-body-copy);
  color: #333;
}

textarea.question:focus + label > span,
textarea.question:valid + label > span,
textarea.question:not(:placeholder-shown) + label > span {
  top: -150px;
  font-size: var(--font-size-body-copy);
  color: #333;
}

input.question:valid + label,
textarea.question:valid + label {
  border-color: green;
}

input.question:invalid,
textarea.question:invalid {
  box-shadow: none;
}

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8F8F8F;
  font-size: var(--font-size-large);
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

input[type="submit"] {
  -webkit-transition: opacity 0.2s ease, background 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: #EEE;
}

input[type="submit"]:active {
  background: #999;
}

input.question:valid ~ input[type="submit"], textarea.question:valid ~ input[type="submit"] {
  -webkit-animation: appear 1s forwards;
  animation: appear 1s forwards;
}

input.question:invalid ~ input[type="submit"], textarea.question:invalid ~ input[type="submit"] {
  display: none;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}

input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 0s 600000s, color 0s 600000s;
  }
    
`;