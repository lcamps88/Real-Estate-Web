import Container from './Container'
import CustomButton from './CustomButton'

const WorkWithUs = () => {
  return (
    <div className='relative w-full bg-contact_image bg-cover bg-no-repeat bg-center min-h-[34.063rem]'>
      <div className='absolute bg-black bg-contact-opacity-81 flex flex-col justify-center items-center w-full h-full p-10'>
        <Container customStyle='flex flex-col items-center responsive_container_width'>
          <h3 className='text-white'>Work With Us</h3>
          <p className='text-white text-center'>
            Hendrerit gravida rutrum quisque non tellus orci. Sit amet
            consectetur adipiscing elit duis tristique.
          </p>
          <CustomButton className='btn_secondary'>Contact Us</CustomButton>
        </Container>
      </div>
    </div>
  )
}

export default WorkWithUs
