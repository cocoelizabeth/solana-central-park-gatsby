import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import React, { useState } from 'react';
import InterestListStyles from "../styles/InterestListStyles";
import { Formik, useFormik, Field, Form, ErrorMessage } from 'formik';
import { InterestListSchema } from "../schemas/interestListForm";
import SteinStore from "stein-js-client";
import "../css/reset.css"
import '../css/styles.css'
const store = new SteinStore("https://api.steinhq.com/v1/storages/64c982a2eced9b09e9e8adcf");


const onSubmit = async (values, { setSubmitting }, actions) => {

    let interestedString =""
    if (values.interested_in.length > 1) {
        interestedString = values.interested_in.join(", ");
    } else {
        interestedString = values.interested_in[0]
    }
    store
    .append("Interest List", [
        {
            date: new Date(),
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone: values.phone,
            interested_in: interestedString,
            // moving_date: values.moving_date,
            current_city: values.current_city,
        }
    ])
    .then( res => {
        // console.log(res);
    });
    // actions.resetForm()
}

// const submitHandler = () => {
//     debugger
//     store
//     .append("Interest List", [
//         {   
//             date: new Date(),
//             first_name: values.first_name,
//             last_name: values.last_name,
//             email:values.email,
//             phone:values.phone,
//             interested_in:values.interested_in,
//             moving_date:values.moving_date,
//             current_city:values.current_city,
//         }
//     ])
//     .then(res => {
//         console.log(res)
//     });
// }

const InterestListForm = () => {

// const {values, errors, touched, isSubmitting, getFieldProps, handleBlur, handleChange, handleSubmit } = useFormik({
//     initialValues: {
//         first_name: "",
//         last_name: "",
//         email:"",
//         phone:"",
//         interested_in:"",
//         moving_date:"",
//         current_city:"",
//     },
//     validationSchema: InterestListSchema,
//     onSubmit,
// })

  return (
    <InterestListStyles>
        <h1 className="h1">Interested?</h1>
        <p>
            Be among the first to experience the new standard in Denver living. 
            Sign up for our interest list today and receive exclusive updates
            and leasing opportunities.
        </p>
        <Formik
            initialValues={{         
                first_name: "",
                last_name: "",
                email:"",
                phone:"",
                interested_in:[],
                // moving_date:"",
                current_city:"",
            }}
            validationSchema={InterestListSchema}
            onSubmit={async (values, actions) => {
                
                await new Promise((r) => setTimeout(r, 500));
                
                let interestedString =""
                if (values.interested_in.length > 1) {
                    interestedString = values.interested_in.join(", ");
                } else {
                    interestedString = values.interested_in[0]
                }
                store
         
                .append("Interest List", [
                    {
                        date: new Date().toLocaleDateString('en-us', { timeZone:'America/Denver' }),
                        time: new Date().toLocaleTimeString('en-us', { timeZone:'America/Denver' }),
                        first_name: values.first_name,
                        last_name: values.last_name,
                        email: values.email,
                        phone: values.phone,
                        interested_in: interestedString,
                        // moving_date: values.moving_date,
                        current_city: values.current_city,
                    }
                ])
                .then( res => {
                    
                    if (res.updatedRange) {
                        navigate(`/interest-list/thanks`)
                    }
                    // console.log(res);
                    
                })
                actions.resetForm();
                
              }}
            // onSubmit = {onSubmit}
        >
         
         {({ isSubmitting }) => (
        <Form>
            {/* FIRST NAME */}
            <Field 
                // id="first_name"
                name="first_name"
                type="text"
                // placeholder="First Name"
                className="question"
                required
                autocomplete="off"
                placeholder=" "
                // className={errors.first_name && touched.first_name ? "input-error" : ""}
           
            />
            <label htmlFor="first_name"><span>First Name</span></label>

            <ErrorMessage component="div" className="error" name="first_name" />
            {/* {errors.first_name && touched.first_name && <p className="error">{errors.first_name}</p>} */}
            
            {/* LAST NAME */}
            <Field 
                // id="last_name"
                name="last_name"
                type="text"
                // placeholder="Last Name"
                className="question"
                required
                autocomplete="off"
                placeholder=" "
                
                // className={errors.last_name && touched.last_name ? "input-error" : ""}
            />
            <label htmlFor="last_name"><span>Last Name</span></label>

            <ErrorMessage component="div" className="error" name="last_name" />
            {/* {errors.last_name && touched.last_name && <p className="error">{errors.last_name}</p>} */}

            {/* EMAIL */}

            <Field 
                // id="email"
                name="email"
                type="email"
                
                className="question"
                required
                autocomplete="off"
                placeholder=" "
                // className={errors.email && touched.email ? "input-error" : ""}
            />
            <label htmlFor="email"><span>Email</span></label>
            <ErrorMessage component="div" className="error" name="email" />
            {/* {errors.email && touched.email && <p className="error">{errors.email}</p>} */}

            {/* PHONE */}
            
            <Field 
                // id="phone"
                name="phone"
                type="tel"
                // placeholder="Enter your phone number"
                className="question"
                required
                autocomplete="off"
                placeholder=" "
                // className={errors.phone && touched.phone ? "input-error" : ""}
            />
             <label htmlFor="phone"><span>Phone</span></label>
           
            <ErrorMessage component="div" className="error" name="phone" />
            {/* {errors.phone && touched.phone && <p className="error">{errors.phone}</p>} */}

            <Field
                // id="current_city"
                name="current_city"
                type="text"
                // placeholder="Where do you currently live?"
                className="question"
                required
                autocomplete="off"
                placeholder=" "
                // className={errors.current_city && touched.current_city ? "input-error" : ""}
            />
            <label htmlFor="current_city"><span>Current City</span></label>
            <ErrorMessage component="div" className="error" name="current_city" /> 

            {/* INTERESTED IN -- need error classname? */}
            <div id="checkbox-group">I'm interested in...</div>
            <div role="group" aria-labelledby="checkbox-group">
                <label>
                <Field type="checkbox" name="interested_in" value="Studio" />
                Studio
                </label>
                <label>
                <Field type="checkbox" name="interested_in" value="One Bedroom" />
                One Bedroom
                </label>
                <label>
                <Field type="checkbox" name="interested_in" value="Two Bedroom" />
                Two Bedroom
                </label>
            </div>
            <ErrorMessage component="div" className="error" name="interested_in" />

            {/* MOVING DATE */}
            {/* <label htmlFor="moving_date"><span>Moving Date</span></label> */}
            {/* <Field 
                // id="moving_date"
                name="moving_date"
                type="date"
                placeholder=""
                // className={errors.moving_date && touched.moving_date ? "input-error" : ""}
            />
            <ErrorMessage component="div" className="error" name="moving_date" />  */}
            {/* {errors.moving_date && touched.moving_date && <p className="error">{errors.moving_date}</p>} */}

            {/* CURRENT CITY */}
            
          

            {/* {errors.current_city && touched.current_city && <p className="error">{errors.current_city}</p>} */}

            <button 
                // disabled={isSubmitting} 
                type="submit" disabled={isSubmitting}>
                    Sign Up
            </button>
            
        </Form>
         )}
        </Formik>
    </InterestListStyles>  
    )
}; 

export default InterestListForm;

// const InterestListForm = () => {

// const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
//     initialValues: {
//         first_name: "",
//         last_name: "",
//         email:"",
//         phone:"",
//         interested_in:"",
//         moving_date:"",
//         current_city:"",
//     },
//     validationSchema: InterestListSchema,
//     onSubmit,
// })
//     console.log(errors)
//   return (
//     <InterestListStyles>
//         <section>
//         <h1>Anywhere in your app!</h1>
//     <form onSubmit={handleSubmit}>
//         {/* FIRST NAME */}
//         <label htmlFor="first_name">First Name</label>
//         <input 
//             value={values.first_name}
//             onChange={handleChange}
//             id="first_name"
//             type="text"
//             placeholder="First Name"
//             onBlur={handleBlur}
//             className={errors.first_name && touched.first_name ? "input-error" : ""}
//         />
//         {errors.first_name && touched.first_name && <p className="error">{errors.first_name}</p>}
        
//         {/* LAST NAME */}
//         <label htmlFor="last_name">Last Name</label>
//         <input 
//             value={values.last_name}
//             onChange={handleChange}
//             id="last_name"
//             type="text"
//             placeholder="Last Name"
//             onBlur={handleBlur}
//             className={errors.last_name && touched.last_name ? "input-error" : ""}
//         />
//         {errors.last_name && touched.last_name && <p className="error">{errors.last_name}</p>}

//         {/* EMAIL */}
//         <label htmlFor="email">Email</label>
//         <input 
//             value={values.email}
//             onChange={handleChange}
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             onBlur={handleBlur}
//             className={errors.email && touched.email ? "input-error" : ""}
//         />
//         {errors.email && touched.email && <p className="error">{errors.email}</p>}

//         {/* PHONE */}
//         <label htmlFor="phone">Phone</label>
//         <input 
//             value={values.phone}
//             onChange={handleChange}
//             id="phone"
//             type="tel"
//             placeholder="Enter your phone number"
//             onBlur={handleBlur}
//             className={errors.phone && touched.phone ? "input-error" : ""}
//         />
//         {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}

        

//         {/* INTERESTED IN -- need error classname? */}
//         {/* <div id="checkbox-group">Checked</div>
//           <div role="group" aria-labelledby="checkbox-group">
//             <label>
//               <Field type="checkbox" name="checked" value="Studio" />
//               Studio
//             </label>
//             <label>
//               <Field type="checkbox" name="checked" value="One Bedroom" />
//               One Bedroom
//             </label>
//             <label>
//               <Field type="checkbox" name="checked" value="Two Bedroom" />
//               Two Bedroom
//             </label>
//           </div> */}

//         {/* MOVING DATE */}
//         <label htmlFor="moving_date">Moving Date</label>
//         <input 
//             value={values.moving_date}
//             onChange={handleChange}
//             id="moving_date"
//             type="date"
//             placeholder=""
//             onBlur={handleBlur}
//             className={errors.moving_date && touched.moving_date ? "input-error" : ""}
//         />
//         <label htmlFor="current_city">Current City</label>
//         {errors.moving_date && touched.moving_date && <p className="error">{errors.moving_date}</p>}

//         {/* CURRENT CITY */}
//         <input
//             value={values.current_city}
//             onChange={handleChange}
//             id="current_city"
//             type="text"
//             placeholder="Where do you currently live?"
//             onBlur={handleBlur}
//             className={errors.current_city && touched.current_city ? "input-error" : ""}
//         />
//         {errors.current_city && touched.current_city && <p className="error">{errors.current_city}</p>}

//         <button disabled={isSubmitting} type="submit">Sign Up</button>

//     </form>
//         </section>
//     </InterestListStyles>  
//     )
// }; 

// export default InterestListForm;

