import * as yup from 'yup'
yup.setLocale({

})

export const schema = yup.object().shape({
    firstName: yup.string().matches(/^[a-zA-Z]+$/g, 'Must only contain letters').required('First name is required'),
    lastName: yup.string().matches(/^[a-zA-Z]+$/g, 'Must only contain letters').required(),
    email: yup.string().email().required(),
    age: yup.number().positive().required(),
    password: yup.string().min(8).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
})