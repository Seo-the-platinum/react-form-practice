import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../utils/formSchema'
import './css/form.css'

const Form = () => {
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })
    const submitForm = (data)=> console.log(data)
  return (
    <div className='form'>
        <div className='title'>
            Sign Up
        </div>
        <div className='inputs'>
            <form onSubmit={handleSubmit(submitForm)}>
                <input 
                    name='firstName' 
                    placeholder='First Name...' 
                    {...register('firstName')}
                    type='text' />
                <p className='error'>{errors.firstName?.message}</p>
                <input 
                    name='lastName'
                    placeholder='Last Name...'
                    {...register('lastName')} 
                    type='text' />
                <p className='error'>{errors.lastName?.message}</p>
                <input
                    name='email'
                    placeholder='Email...' 
                    {...register('email')} 
                    type='text' />
                <p className='error'>{errors.email?.message}</p>
                <input 
                    name='age'
                    placeholder='Age...' 
                    {...register('age')} 
                    type='text' />
                <p className='error'>{errors.age?.message}</p>
                <input
                    name='password'
                    placeholder='Password...'
                    {...register('password')} 
                    type='password' />
                <p className='error'>{errors.password?.message}</p>
                <input 
                    name='confirmPassword'
                    placeholder='Confirm Password...' 
                    {...register('confirmPassword')} 
                    type='password' />
                <p className='error'>{errors.confirmPassword && 'Passwords Must Match'}</p>
                <button id='submit' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form