'use client'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

const CustomSeach = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
  })
  const handleSendLead = async (data) => {
    try {
      console.info('Sending email successfully')
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }
  return (
    <div className='w-full flex flex-col flex-wrap justify-center gap-8'>
      <form
        onSubmit={handleSubmit(handleSendLead)}
        className='w-full flex flex-wrap justify-between max-w-[30rem] mx-auto'
      >
        <div className='w-full relative bg-white broder border-solid '>
          <div className='absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 dark:text-primary-orange'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            className='input m-0 placeholder-primary-grey border-primary-orange'
            {...register('addressSearch', {
              required: true,
            })}
            type='text'
            placeholder='Search by Address, City, Zip, or MLS #'
          />
          {errors?.fullName?.type === 'pattern' && (
            <span className='error'>No space</span>
          )}
          {errors?.firstName?.type === 'required' && (
            <span className='error'>Address is required</span>
          )}
        </div>
      </form>
      <Link href='#'>
        <p className='text-primary-orange underline'> Advanced Search</p>
      </Link>
    </div>
  )
}

export default CustomSeach
