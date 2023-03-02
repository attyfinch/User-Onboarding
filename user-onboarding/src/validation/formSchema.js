import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required('First Name is required')
        .min(3, 'gotta be at least 3 chars man'),
    lastName: yup
        .string()
        .trim()
        .required('First Name is required')
        .min(3, 'gotta be at least 3 chars man'),
    email: yup
        .string().email('must be valid email address')
        .required(),
    role: yup
        .string(),
    password: yup
        .string()
        .trim()
        .required('Choose password')
        .min(8, 'password must be at least 8 chars'),
    terms: yup
        .boolean()
        .required('you must agree to the terms')
})

export default formSchema;