'use client'

import { useEffect } from 'react'
import Container from './Container'
import CustomButton from './CustomButton'
import counterUp from 'counterup2'

const AboutUs = () => {

  useEffect(() => {
    const elements = document.querySelectorAll('.counter')
    elements.forEach((el) => {
      counterUp(el, {
        duration: 2000,
        delay: 30,
      })
    })
  }, [])

  return (
    <section className='w-full flex flex-wrap justify-center bg-primary-blue pt-24 pb-[15vw] gap-24'>
      <Container customStyle='w-full flex flex-col  gap-y-5 lg:flex-row justify-between flex-wrap responsive_about_container_width xl:px-20 pb-[3.25rem] border-b border-solid border-primary-orange'>
        <div className='flex flex-col items-center'>
          <h3 className='text-white'>
            <span className='counter'>250</span>+
          </h3>
          <h4 className='pb-5'>transactions</h4>
        </div>
        <div className='flex items-center flex-col'>
          <h3 className='text-white'>
            $<span className='counter'>95</span> millions+
          </h3>
          <h4 className='pb-5'>in sales</h4>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-white'>
            <span className='counter'>150</span>+
          </h3>
          <h4 className='pb-5'>5 start reviews</h4>
        </div>
      </Container>

      <Container customStyle='flex justify-center flex-wrap responsive_about_container_width'>
        <h1 className='text-white pb-8' data-aos='fade-down'>
          Elevating <br />
          Real Estate, <br />{' '}
          <span className='text-primary-orange'>Redefining Living.</span>
        </h1>
        <Container customStyle='flex justify-center flex-wrap max-w-[80vw] lg:max-w-[85vw] xl:max-w-[45vw] 4xl:max-w-[25vw] gap-5'>
          <p className='text-input-grey text-center'>
            Hendrerit gravida rutrum quisque non tellus orci. Sit amet
            consectetur adipiscing elit duis tristique. Elementum facilisis leo
            vel fringilla est. Sagittis id consectetur purus ut faucibus
            pulvinar elementum integer enim. 
          </p>
          <CustomButton className='btn_primary'>more about us</CustomButton>
        </Container>
      </Container>
    </section>
  )
}
export default AboutUs
