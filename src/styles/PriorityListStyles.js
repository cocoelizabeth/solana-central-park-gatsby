import styled from 'styled-components';
export default styled.div`



    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
    padding-top: calc( var(--header-height) + 4rem);
    padding-bottom: 4rem;
    
    background-color: var(--central-light);
    --input-label-text-color: var(--central-pewter);
    --heading-text-color: var(--central-pewter);
    --placeholder-text-color: var(--central-grey);
    --error-color: var(--central-light-brown);
    --input-focus-color: var(--central-olive);
    --border-color: var(--central-grey);
    --checkbox-background-color: var(--central-white);
    --checkbox-hover-color: var(--central-grey);
    --checkbox-check-color: var(--central-white);

    .form-title {
      padding-bottom: 2rem;
      color: var(--heading-text-color);
      font-weight: 400;
    }

    .form-description {
      color: var(--heading-text-color);
      margin-bottom: 3rem;
    }


    form {
        display: flex;
        flex-direction: column;
    }

    .error {
        color: var(--error-color);
        font-style: italic;
        font-family: var(--font-family-body);
        font-size: var(--font-size-xs);
        height: 20px;
        padding-top: 10px;
    }

    button:disabled {
        opacity: 0.35;
    }

 


input,
span,
label,
textarea {
  display: block;
  border: none;
}


textarea,
input,
textarea:focus,
input:focus {
  outline: 0;
  color: var(--input-focus-color);
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
  border-top: 1px solid var(--border-color);
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
  z-index: 1;
}

input.question:focus + label,
textarea.question:focus + label {
  width: 100%;
}

input.question:focus,
input.question:valid,
input.question:not(:placeholder-shown) {
  padding: 0;
}

textarea.question:valid,
textarea.question:focus,
textarea.question:not(:placeholder-shown) {
  margin: 0;
}


input.question:focus + label > span,
input.question:valid + label > span,
input.question:not(:placeholder-shown) + label > span {
  top: -85px;
  font-size: var(--font-size-body-copy);
  color: var(--input-label-text-color);
  font-family: var(--font-family-body);
  text-transform: uppercase;
}

textarea.question:focus + label > span,
textarea.question:valid + label > span,
textarea.question:not(:placeholder-shown) + label > span {
  top: -150px;
  font-size: var(--font-size-body-copy);
  color: var(--input-label-text-color);
}

input.question:valid + label,
textarea.question:valid + label {
  border-color: var(--input-focus-color);
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
  color: var(--placeholder-text-color);
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
  background: var(--central-olive);
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
.submit-btn-container {
    position: relative;
    display: inline-block;
    cursor: pointer;
    max-width: 300px;
    height: auto;
    line-height: 14px;
    margin: 0 auto
}
.submit-btn {
  padding: 32px 64px;
  border: none;
  background: none;
  outline: none;
  text-transform: uppercase;
  font-size: var(--font-size-xs);
  font-size: var(--font-size-large);
  margin-top: 5px;
  margin-bottom: 5px;
  color: var(--central-olive);
  width: 100%;
}

.submit-btn-container svg {
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.submit-btn-container path {
    stroke: var(--central-olive);
    stroke-width: 8px;
    stroke-dasharray: 1500 1500;
  }

  button:disabled + svg {
    opacity: 35%;

  }

  button:enabled {
    opacity:100%;
  }

  button:enabled:hover {
    cursor: pointer;
  }
  




  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 0s 600000s, color 0s 600000s;
  }
    


input, label {
  margin-bottom: 3rem;
}

.error {
  padding-bottom: 2rem;
}

label {
  margin-top: 1rem;

}

label span {
  padding-top: 1rem;
}
input.question {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

label.placeholder  {
  padding-bottom: 2rem;
}

.form-item {
  margin-bottom: 1rem;
}


.cls-1 {
  fill: var(--checkbox-check-color);
}
.checkbox-group-title {
  font-size: var(--font-size-large);
  color: var(--heading-text-color);
  
}
label.checkbox-label {
  font-family: var(--font-family-body);
  text-transform: uppercase;
  font-size: var(--font-size-body-copy);
  color: var(--input-label-text-color);
}

/* Customize the label (the container) */
label.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  font-size: 0px;
  
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: var(--checkbox-background-color);
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: var(--checkbox-hover-color);
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--input-focus-color);
  border: 0px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}


.blur {
    filter: blur(3px)
  }

.submit-spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-color: black;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  &.show {
      display: flex;
      pointer-events: none;
  }

}

.loading-spinner {

  width: 2.5em;
  height: 2.5em;
  border: 0.3em solid transparent;
  border-color: black;
  border-top-color: white;
  border-radius: 50%;
  animation: loadingspin 1s linear infinite;

}

@keyframes loadingspin {
	100% {
			transform: rotate(360deg)
	}
}


`;