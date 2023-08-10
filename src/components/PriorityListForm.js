import { navigate } from "gatsby"
import React from 'react';

import SteinStore from "stein-js-client";
import PriorityListStyles from "../styles/PriorityListStyles";
const store = new SteinStore("https://api.steinhq.com/v1/storages/64c982a2eced9b09e9e8adcf");

export default class PriorityListForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {},
            errors: {},
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showLoadingSpinner = this.showLoadingSpinner.bind(this);
        this.hideLoadingSpinner = this.hideLoadingSpinner.bind(this);
        this.resetForm = this.resetForm.bind(this)




        this.errorsRef = React.createRef();
        this.formRef = React.createRef();
        this.btnRef = React.createRef();
        this.formContainerRef = React.createRef();
        this.loadingSpinnerRef = React.createRef();
      

    }

    handleFormChange(e) {
        let empty = false;
        let input = e.currentTarget;
            this.setState({
                formData: {
                    ...this.state.formData,
                    [e.target.name]: e.target.value
                }
            })

        let requiredFormFields = Array.from(document.getElementsByClassName('req'));
        requiredFormFields.forEach((requiredField) => {
            if (requiredField.value === "") {
                requiredField.classList.remove("ui-full")
            } else {
                requiredField.classList.add("ui-full")
            }
        })

        Array.from(document.getElementsByTagName('input')).forEach((input) => {
            if (input.value === "" && !(input.classList.contains('optional-field'))) {
                empty = true;
            }
        })

        if (empty) {
            this.btnRef.current.disabled = true;
        } else {
            this.btnRef.current.disabled = false;
        }
        this.handleErrors(input)
    }

    handleErrors(input) {
        let errors = this.state.errors;
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        const validPhoneRegex = RegExp(
            /^((?:\(?[2-9](?:(?=1)1[02-9]|(?:(?=0)0[1-9]|\d{2}))\)?\D{0,3})(?:\(?[2-9](?:(?=1)1[02-9]|\d{2})\)?\D{0,3})\d{4})/
        )

        switch (input.name) {
            case 'first_name':
                errors.first_name = 
                    input.value.length < 3
                        ? 'First name must be at least two characters long.'
                        : "";
                break;
            case 'last_name':
                errors.last_name = 
                    input.value.length < 3
                        ? 'Last name must be at least two characters long.'
                        : "";
                    break;
            case 'email':
                errors.email = 
                    validEmailRegex.test(input.value)
                        ? ''
                        : "Invalid email.";
                    break;
            case 'phone':
                errors.phone = 
                    validPhoneRegex.test(input.value)
                        ? ''
                        : "Invalid phone number.";
                    break;
            case 'current_city':
                errors.current_city = 
                    input.value.length < 3
                        ? 'Please enter your current city.'
                        : "";
                    break;
            default:
                break;
        }

        this.setState({ errors, [input.name]: input.value });

    }
    
    validateForm(errors) {
        
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        
        return valid;
    }

    handleSubmit = e => {
        const form = e.target;
        e.preventDefault();
        if (this.validateForm(this.state.errors)) {
          
            const data = this.state.formData;
         
            const first_name = data.first_name;
            const last_name = data.last_name;
            const email = data.email;
            const date = new Date().toLocaleDateString('en-us', { timeZone:'America/Denver' });
            const time = new Date().toLocaleTimeString('en-us', { timeZone:'America/Denver' });
            const subject = ["Interest List: ", first_name, " ", last_name].join("");
            const phone = data.phone;
            const current_city = data.current_city;
            this.showLoadingSpinner();

            // let event = {
            //     mode: "no-cors",
            //     method: "POST",
            //     headers: {
            //         Accept: "application/json",
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         senderName: '"SOLANA CENTRAL PARK" <info@solanacentralpark.com>',
            //         senderEmail: "info@solanacentralpark.com",
            //         message: "NEW MESSAGE",
            //         firstName: first_name,
            //         lastName: last_name,
            //         email: email,
            //         date: date,
            //         time: time,
            //         phone: phone,
            //         subject: subject,
            //     })
            // }
        

        fetch (
            "https://v7u9b4rtpc.execute-api.us-east-2.amazonaws.com/sendEmail", 
        {
            mode: "no-cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                senderName: '"SOLANA CENTRAL PARK" <info@solanacentralpark.com>',
                senderEmail: "info@solanacentralpark.com",
                message: "NEW MESSAGE",
                first_name: first_name,
                last_name: last_name,
                email: email,
                date: date,
                time: time,
                subject: subject,
                phone: phone,
                current_city: current_city,
            })
        })
        .then(response => console.log(response))
      
        // .then(()=> this.resetForm())
        // .then(()=> this.hideLoadingSpinner())
        .then(() => navigate("/interest-list/thanks"))
        .catch(error => alert(error));
    } else {
        this.errorsRef.current.classList.remove('display-none');
        this.btnRef.current.disabled = true;
    } 

    }


    showLoadingSpinner() {
        // debugger
        // this.formContainerRef.current.classList.add('blur')
        // debugger
        // this.loadingSpinnerRef.current.classList.add('show')
        // debugger
    }

    hideLoadingSpinner() {
        this.showLoadingSpinner = this.showLoadingSpinner.bind(this);
        this.hideLoadingSpinner = this.hideLoadingSpinner.bind(this);
    }


    resetForm() {
        let requiredFormFields = Array.from(document.getElementsByClassName('req'));

        requiredFormFields.forEach((requiredField) => {
            
            requiredField.value = "";
            requiredField.classList.remove("ui-full")
        })
        this.btnRef.current.disabled=true;
        // this.state.formData={};
        // this.state.errors={};
        this.setState({
            formData: {},
            errors: {},
        })
    }



    render() {
        let errors = Object.values(this.state.errors).map(error => {
            return (
                <p>{error}</p>
            )
        })

        return (
            <PriorityListStyles>
                <div ref="formContainerRef">
                    <h1 className="h1">Interested?</h1>
                    <p>
                        Be among the first to experience the new standard in Denver living. 
                        Sign up for our interest list today and receive exclusive updates
                        and leasing opportunities.
                    </p>
                    {/* ERRORS - COME BACK */}
                    <div ref={this.errorsRef} className="errors-container display-none">{errors}</div>
                
                    <form
                        name="interest-list-sign-up"
                        method="post"
                        onSubmit={this.handleSubmit}
                        className=""
                        ref={this.formRef}
                        // action="/interest-list/thanks"
                    >

                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input type="hidden" name="form-name" value="interest-list-sign-up" />

                        <p hidden>
                            <label>
                                Don’t fill this out:{" "}
                                <input name="bot-field" onChange={this.handleFormChange} value="ignore" />
                            </label>
                            <label>
                                Don’t fill this out:{" "}
                                <input name="address" onChange={this.handleFormChange} value="ignore" />
                            </label>
                        </p>

                        <div className="field line">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="text"
                                    name="first_name"
                                    defaultValue=""
                                    required="required"
                                    id="first_name"
                                    onChange={this.handleFormChange}
                                />
                                <label className="placeholder" htmlFor="first_name">
                                    <span>First Name</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>
                        </div>
                        
                        <div className="field line">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="text"
                                    name="last_name"
                                    defaultValue=""
                                    required="required"
                                    id="last_name"
                                    onChange={this.handleFormChange}
                                />
                                <label className="placeholder" htmlFor="last_name">
                                    <span>Last Name</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>
                        </div>

                        <div className="field line">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="email"
                                    name="email"
                                    defaultValue=""
                                    required="required"
                                    id="email"
                                    onChange={this.handleFormChange}
                                />
                                <label className="placeholder" htmlFor="email">
                                    <span>Email</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>
                        </div>

                        <div className="field line">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="tel"
                                    name="phone"
                                    defaultValue=""
                                    required="required"
                                    id="phone"
                                    onChange={this.handleFormChange}
                                />
                                <label className="placeholder" htmlFor="phone">
                                    <span>Phone</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>
                        </div>
                        <div className="field line">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="text"
                                    name="current_city"
                                    defaultValue=""
                                    required="required"
                                    id="current_city"
                                    onChange={this.handleFormChange}
                                />
                                <label className="placeholder" htmlFor="current_city">
                                    <span>Current City</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>
                        </div>

                        <div className="submit-btn-container">
                            <button
                                className="submit-btn"
                                type="submit"
                                disabled="disabled"
                                id="btn"
                                ref={this.btnRef}>
                                SIGN UP
                            </button>
                        </div>

                    </form>
                </div>

                <div ref={this.loadingSpinnerRef} className="submit-spinner-careers">
                    <div className="loading-spinner"></div>
                    {/* <img className="logo not-found-logo" src={logoGif} alt="Logo" /> */}
                </div>
            </PriorityListStyles>
        )
    }


}


