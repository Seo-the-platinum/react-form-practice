import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../utils/formSchema'

const Form = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })
    const handleForm = (e)=> {
        e.preventDefault()
    }
  return (
    <div className='Form'>
        <div className='title'>
            Sign Up
        </div>
        <div className='inputs'>
            <form onSubmit={handleForm}>
                <input name='firstName' placeholder='First Name...' type='text' />
                <input name='lastName' placeholder='Last Name...' type='text' />
                <input name='email' placeholder='Email...' type='text' />
                <input name='age' placeholder='Age...' />
                <input name='password' placeholder='Password...' type='password' />
                <input name='confirmPassword' placeholder='Confirm Password...' type='password' />
                <button id='submit' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form