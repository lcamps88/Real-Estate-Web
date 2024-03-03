'use client'

import CustomButton from './CustomButton'
import { useForm } from 'react-hook-form'

const NewsletterForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
  })
  const nameRegex = new RegExp(/^([^0-9, S]*)$/)
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

  const handleSendLead = async (data) => {
    try {
      console.info('Sending email successfully')
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSendLead)}
      className='w-full flex flex-wrap justify-center xl:justify-between md:max-w-[30rem] xl:max-w-[50rem] gap-5 mx-auto xl:gap-0'
    >
      <div className='w-full xl:w-1/3'>
        <input
          className='input m-0 placeholder-primary-grey border-input-grey'
          {...register('fullName', {
            required: true,
            pattern: nameRegex,
          })}
          type='text'
          placeholder='Name'
        />
        {errors?.fullName?.type === 'pattern' && (
          <span className='error'>No space and numbers allowed in names</span>
        )}
        {errors?.firstName?.type === 'required' && (
          <span className='error'>Name is required</span>
        )}
      </div>
      <div className='w-full xl:w-1/3'>
        <input
          className='input placeholder-primary-grey border-input-grey'
          {...register('email', {
            required: true,
            pattern: emailRegex,
          })}
          type='email'
          placeholder='Email'
        />
        {errors?.email?.type === 'pattern' && (
          <span className='error'>Please enter a correct email.</span>
        )}
        {errors?.email?.type === 'required' && (
          <span className='error'>Email is required</span>
        )}
      </div>
      <CustomButton className='btn_secondary' type='submit'>
        subscribe
      </CustomButton>
    </form>
  )
}

export default NewsletterForm
