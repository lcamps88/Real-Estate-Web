'use client'
import { useForm, Controller } from 'react-hook-form'
import CustomButton from './CustomButton'
import { Input, Textarea } from '@nextui-org/react'

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex text-base flex-wrap font-outfit items-center md:justify-between max-w-[30rem] xl:max-w-[40rem] gap-y-5'
    >
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Controller
          name='firstName'
          control={control}
          rules={{ required: 'First name is required' }}
          render={({ field }) => (
            <Input
              {...field}
              label='First Name'
              labelPlacement='outside'
              placeholder='First Name'
              isRequired
              isInvalid={!!errors.firstName}
              errorMessage={errors.firstName?.message}
              classNames={{
                label: 'text-white',
                input: 'bg-white h-14 px-2',
                inputWrapper: 'bg-white',
              }}
            />
          )}
        />

        <Controller
          name='lastName'
          control={control}
          rules={{ required: 'Last name is required' }}
          render={({ field }) => (
            <Input
              {...field}
              label='Last Name'
              labelPlacement='outside'
              placeholder='Last Name'
              isRequired
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName?.message}
              classNames={{
                label: 'text-white',
                input: 'bg-white h-14 px-2',
                inputWrapper: 'bg-white',
              }}
            />
          )}
        />

        <Controller
          name='phone'
          control={control}
          rules={{
            required: 'Phone is required',
            pattern: {
              value: /^\d{10}$/,
              message: 'Phone must be 10 digits',
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              label='Phone'
              labelPlacement='outside'
              placeholder='Phone'
              isRequired
              isInvalid={!!errors.phone}
              errorMessage={errors.phone?.message}
              classNames={{
                label: 'text-white',
                input: 'bg-white h-14 px-2',
                inputWrapper: 'bg-white',
              }}
            />
          )}
        />

        <Controller
          name='email'
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              label='Email'
              labelPlacement='outside'
              placeholder='Email'
              isRequired
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              classNames={{
                label: 'text-white',
                input: 'bg-white h-14 px-2',
                inputWrapper: 'bg-white',
              }}
            />
          )}
        />
      </div>

      <Controller
        name='message'
        control={control}
        rules={{ required: 'Message is required' }}
        render={({ field }) => (
          <Textarea
            {...field}
            labelPlacement='outside'
            placeholder='Message'
            isRequired
            isInvalid={!!errors.message}
            errorMessage={errors.message?.message}
            classNames={{
              label: 'text-white',
              input: 'bg-white min-h-[100px] p-2',
              inputWrapper: 'bg-white',
            }}
          />
        )}
      />

      <div className='w-full text-center'>
        <CustomButton className='btn_primary m-auto custom-width-45' type='submit'>
          Submit
        </CustomButton>

        {isSubmitted && hasErrors && (
          <p className='text-red-500 text-sm mt-4'>
            Please fill in all required fields before submitting the form.
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
