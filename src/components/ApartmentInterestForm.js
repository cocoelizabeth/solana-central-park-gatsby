import React, { useState, useEffect } from 'react';
import { navigate } from "gatsby"

import PriorityListStyles from "../styles/PriorityListStyles";
import SteinStore from "stein-js-client";
const store = new SteinStore("https://api.steinhq.com/v1/storages/64c982a2eced9b09e9e8adcf");

const ApartmentInterestForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [selectedFloorplans, setSelectedFloorplans] = useState([]);

    const [touchedFields, setTouchedFields] = useState({});
    
    const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currentCity: '',
      floorplans: '',
    });
    
    useEffect(() => {
      setErrors(validateForm());
    }, [firstName, lastName, email, phone, currentCity, selectedFloorplans]);

    const handleFieldBlur = (fieldName) => {
        setTouchedFields((prevTouchedFields) => ({
            ...prevTouchedFields,
            [fieldName]: true,
        }))
    }
    const validateForm = () => {
      const newErrors = {};
      
      if (!firstName) {
        newErrors.firstName = 'First name is required';
      }
      
      if (!lastName) {
        newErrors.lastName = 'Last name is required';
      }
      
      if (!email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Invalid email format';
      }
      
      if (!phone) {
        newErrors.phone = 'Phone is required';
      }
      
      if (!currentCity) {
        newErrors.currentCity = 'Current city is required';
      }
      
      if (selectedFloorplans.length === 0) {
        newErrors.floorplans = 'Please select at least one floorplan';
      }
      
      return newErrors;
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const formErrors = validateForm();
      
      if (Object.keys(formErrors).length === 0) {
        // Perform your form submission action here
        console.log('Form submitted successfully');
      } else {
        setErrors(formErrors);
      }
    };
    
    const handleFloorplanChange = (event) => {
      const { value, checked } = event.target;
      setSelectedFloorplans((prevSelected) => {
        if (checked) {
          return [...prevSelected, value];
        } else {
          return prevSelected.filter((floorplan) => floorplan !== value);
        }
      });
    };
    
    return (
    <PriorityListStyles>
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                // onBlur={() => handleFieldBlur('firstName')}
                onBlur={() => setErrors({ ...errors, firstName: validateForm().firstName })}
                />
                {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            
            {/* Similar input fields for Last Name, Email, Phone, and Current City */}
            
            <div>
                <label>Floorplan Type</label>
                <div>
                <label>
                    <input
                    type="checkbox"
                    value="Studio"
                    checked={selectedFloorplans.includes('Studio')}
                    onChange={handleFloorplanChange}
                    />
                    Studio
                </label>
                {/* Similar checkboxes for One Bedroom and Two Bedroom */}
                </div>
                {errors.floorplans && <p>{errors.floorplans}</p>}
            </div>
            
            <button type="submit" disabled={Object.keys(errors).length !== 0}>Submit</button>
            </form>
        </div>
    </PriorityListStyles>
    );
  };
  
  export default ApartmentInterestForm;