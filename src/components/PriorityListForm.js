import { navigate } from "gatsby"
import React from 'react';

import SteinStore from "stein-js-client";
import PriorityListStyles from "../styles/PriorityListStyles";
const store = new SteinStore("https://api.steinhq.com/v1/storages/64c982a2eced9b09e9e8adcf");

export default class PriorityListForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                current_city: "",
            },
            interestedIn: {
                studio: false,
                oneBedroom: false,
                twoBedroom: false,
            },
            errors: {},
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showLoadingSpinner = this.showLoadingSpinner.bind(this);
        this.hideLoadingSpinner = this.hideLoadingSpinner.bind(this);
        this.resetForm = this.resetForm.bind(this)
        this.noBoxesChecked = this.noBoxesChecked.bind(this);
        this.requiredInputsAreBlank = this.requiredInputsAreBlank.bind(this);
        this.toggleSubmitButton = this.toggleSubmitButton.bind(this);
        this.addToSpreadsheet = this.addToSpreadsheet.bind(this)

        this.formRef = React.createRef();
        this.btnRef = React.createRef();
        this.formContainerRef = React.createRef();
        this.loadingSpinnerRef = React.createRef();
      

    }


    noBoxesChecked() {
        let boxesBlank = true;
        Array.from(document.getElementsByClassName('checkbox-option')).forEach((checkbox) => {
            if (checkbox.checked) {
               boxesBlank = false;
            }
        })
        return boxesBlank;

    }

    requiredInputsAreBlank() {
        let empty = false;
        let requiredFormFields = Array.from(document.getElementsByClassName('req'));
        requiredFormFields.forEach((requiredField) => {
            if (requiredField.value === "") {
                empty = true;
            }
        })
        return empty;
    }

    toggleSubmitButton () {
        if (!(this.requiredInputsAreBlank()) && !(this.noBoxesChecked()) && this.validateForm(this.state.errors)) {
            this.btnRef.current.disabled = false;
        } else {
            this.btnRef.current.disabled = true;
        }
    }

    handleCheckboxChange(e) {
        const { value, checked } = e.currentTarget;
        const input = e.currentTarget;
        this.setState((prevState) => {
            const interestedIn = prevState.interestedIn;
            interestedIn[value] = checked;
            return interestedIn;
          });
        this.handleErrors(input)
        this.toggleSubmitButton();


    }


    handleFormChange(e) {
        let input = e.currentTarget;
            this.setState({
                formData: {
                    ...this.state.formData,
                    [e.target.name]: e.target.value
                }
            })
            this.handleErrors(input);
            this.toggleSubmitButton();
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
                    input.value.length < 2
                        ? 'First name must be at least two characters long.'
                        : "";
                break;
            case 'last_name':
                errors.last_name = 
                    input.value.length < 2
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
            case 'interested_in': {
                errors.interestedIn =
                    this.noBoxesChecked()
                    ? "Please choose at least one type of floor plan."
                    : "";
            }
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

    addToSpreadsheet(first_name, last_name, email, date, time, phone, current_city, interested_in) {

        let interestedList = "";
        let interestedArray = interested_in.split(",");
        let newArray = [];
        interestedArray.forEach((floorplan) => {
            switch(floorplan) {
                case 'studio':
                    newArray.push("Studio");
                case 'oneBedroom':
                    newArray.push("One Bedroom");
                case 'twoBedroom':
                    newArray.push("Two Bedroom");
                default:
                    break;
            }
        interestedList = newArray.join(", ")
        })

   
        store
        .append("Interest List", [
            {
                date: date,
                time: time,
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone,
                current_city: current_city,
                interested_in: interestedList
        
            }
        ])

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
            const interested_in = Object.keys(this.state.interestedIn)
            .filter((key) => this.state.interestedIn[key])
            .join(", ");
            this.showLoadingSpinner();

            this.addToSpreadsheet(first_name, last_name, email, date, time, phone, current_city, interested_in)

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
                interested_in: interested_in,
            })
        })
        .then(response => console.log(response))
      
        // .then(()=> this.resetForm())
        // .then(()=> this.hideLoadingSpinner())
        .then(() => navigate("/interest-list/thanks"))
        .catch(error => alert(error));
    } else {
        this.btnRef.current.disabled = true;
    } 

    }


    showLoadingSpinner() {
        this.formContainerRef.current.classList.add('blur')
        this.loadingSpinnerRef.current.classList.add('show')
    }

    hideLoadingSpinner() {
        this.careerFormRef.current.classList.remove('blur');
        this.loadingSpinnerRef.current.classList.remove('show')
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

        console.log(this.state.errors)

        return (
            <PriorityListStyles>
                <div ref={this.formContainerRef}>
                    <h1 className="h1 form-title">Interested?</h1>
                    <p className="form-description">
                        Be among the first to experience the new standard in Denver living. 
                        Sign up for our interest list today and receive exclusive updates
                        and leasing opportunities.
                    </p>
                  

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

                            <div className="form-item">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="text"
                                    name="first_name"
                                    defaultValue=""
                                    required="required"
                                    id="first_name"
                                    onChange={this.handleFormChange}
                                    placeholder=" "
                                />
                                <label className="placeholder" htmlFor="first_name">
                                    <span>First Name</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>               
                                    {this.state.errors.first_name ? (
                                         <div className="error">
                                            {this.state.errors.first_name}
                                        </div>

                                    ) : (
                                        <div className="error"></div>
                                    )
                                    }
                                
                            </div>
                      
                        
                            <div className="form-item">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="text"
                                    name="last_name"
                                    defaultValue=""
                                    required="required"
                                    id="last_name"
                                    onChange={this.handleFormChange}
                                    placeholder=" "
                                />
                                <label className="placeholder" htmlFor="last_name">
                                    <span>Last Name</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>
                                {this.state.errors.last_name ? (
                                         <div className="error">
                                            {this.state.errors.last_name}
                                        </div>

                                    ) : (
                                        <div className="error"></div>
                                    )
                                    }
                            </div>

                            <div className="form-item">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="email"
                                    name="email"
                                    defaultValue=""
                                    required="required"
                                    id="email"
                                    onChange={this.handleFormChange}
                                    placeholder=" "
                                />
                                <label className="placeholder" htmlFor="email">
                                    <span>Email</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>
                                {this.state.errors.email ? (
                                         <div className="error">
                                            {this.state.errors.email}
                                        </div>

                                    ) : (
                                        <div className="error"></div>
                                    )
                                }
                            </div>  

                            <div className="form-item">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="tel"
                                    name="phone"
                                    defaultValue=""
                                    required="required"
                                    id="phone"
                                    onChange={this.handleFormChange}
                                    placeholder=" "
                                />
                                <label className="placeholder" htmlFor="phone">
                                    <span>Phone</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>
                                {this.state.errors.phone ? (
                                         <div className="error">
                                            {this.state.errors.phone}
                                        </div>

                                    ) : (
                                        <div className="error"></div>
                                    )
                                }   
                            </div>


                            <div className="form-item">
                                <input
                                    className="req question"
                                    maxLength={240}
                                    type="text"
                                    name="current_city"
                                    defaultValue=""
                                    required="required"
                                    id="current_city"
                                    onChange={this.handleFormChange}
                                    placeholder=" "
                                />
                                <label className="placeholder" htmlFor="current_city">
                                    <span>Current City</span>
                                    {/* <span className="underline-form-field">Name</span> */}
                                </label>
                                {this.state.errors.current_city ? (
                                         <div className="error">
                                            {this.state.errors.current_city}
                                        </div>

                                    ) : (
                                        <div className="error"></div>
                                    )
                                }   
                            </div> 


                            <div className="form-item">
                                <div id="checkbox-group" className="checkbox-group-title">I'm interested in...</div>
                                <div role="group" aria-labelledby="checkbox-group"> 
                                    <label className="checkbox-label container">Studio
                                        <input
                                            className="checkbox-option"
                                            type="checkbox" 
                                            onChange={this.handleCheckboxChange} 
                                            checked={this.state.interestedIn.studio}
                                            name="interested_in"
                                            value="studio"          
                                        />
                                        <span value="studio" name="interested_in" className="checkmark"></span>
                                       
                                    </label>
                                    <label className="checkbox-label container">   One Bedroom
                                        <input
                                            className="checkbox-option"
                                            type="checkbox"
                                            onChange={this.handleCheckboxChange} 
                                            name="interested_in"
                                            value="oneBedroom"
                                            checked={this.state.interestedIn.oneBedroom}
                                        />
                                        <span className="checkmark" onClick={this.handleCheckboxChange}></span>
                                     
                                    </label>     
                                    <label className="checkbox-label container">   Two Bedroom
                                        <input
                                            className="checkbox-option"
                                            type="checkbox"
                                            onChange={this.handleCheckboxChange} 
                                            name="interested_in"
                                            value="twoBedroom"
                                            checked={this.state.interestedIn.twoBedroom}
                                        />
                                        <span className="checkmark" onClick={this.handleCheckboxChange}></span>
                                     
                                    </label>               
                                </div>
                                {this.state.errors.interestedIn ? (
                                         <div className="error">
                                            {this.state.errors.interestedIn}
                                        </div>

                                    ) : (
                                        <div className="error"></div>
                                    )
                                }   
                 
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
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path  fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />
                            </svg>
                        </div>

                    </form>
                </div>

                <div ref={this.loadingSpinnerRef} className="submit-spinner">
                    <div className="loading-spinner"></div>
                    {/* <img className="logo not-found-logo" src={logoGif} alt="Logo" /> */}
                </div>
            </PriorityListStyles>
        )
    }


}


