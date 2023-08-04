import React from "react";
import { Formik, Form, useField } from 'formik';

export const MyCheckBox = ({ children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox' });

    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};