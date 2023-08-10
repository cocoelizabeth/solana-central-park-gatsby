import * as Yup from "yup";

const phoneRegEx = /^((?:\(?[2-9](?:(?=1)1[02-9]|(?:(?=0)0[1-9]|\d{2}))\)?\D{0,3})(?:\(?[2-9](?:(?=1)1[02-9]|\d{2})\)?\D{0,3})\d{4})/

export const InterestListSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Please enter a valid email").required("Email is required"),
    phone: Yup.string().matches(phoneRegEx, 'Phone number is not valid').required("Phone number is required"),
    interested_in: Yup.array().test({
        name: "interested_in_test",
        exclusive: true,
        message: "Please check at least one option",
        test: (value) => value.length > 0,
    }),
    moving_date:Yup.date(),
    current_city:Yup.string().required("Current city is required"),
});