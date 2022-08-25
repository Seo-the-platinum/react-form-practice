import * as yup from 'yup'

export const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().required(),
    password: yup.string().min(8).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),

})