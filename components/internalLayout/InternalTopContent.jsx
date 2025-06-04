import Image from 'next/image'
import Container from '../Container'
import CustomButton from '../CustomButton'

const InternalTopContent = ({ title, subtitle, image, children }) => {
  return (
    <section className='w-full flex flex-wrap justify-center bg-primary-blue py-12 gap-12 xl:py-24 xl:gap-24'>
      <Container customStyle='w-full flex flex-col gap-y-5 lg:flex-row justify-between flex-wrap responsive_about_container_width xl:px-20 pb-[3.25rem] border-b border-solid border-primary-orange'>
        <div className='flex flex-col items-start'>
          <h4 className='pb-5'>{subtitle}</h4>
          <h3 className='text-white text-left'>{title}</h3>
        </div>
      </Container>
      <Container customStyle='w-full flex flex-wrap justify-between responsive_about_container_width gap-y-10 xl:gap-y-0'>
        <div className='border border-solid border-primary-orange custom-width-45 h-[20rem] md:h-[20rem] lg:h-[34vw] 3xl:h-[31.5vw]'>
          <Image
            src={image}
            alt=''
            className='w-full h-full bg-cover bg-no-repeat bg-center'
          />
        </div>
        <div className='flex flex-col justify-center items-start custom-width-45'>
          {children}
        </div>
      </Container>
    </section>
  )
}

export default InternalTopContent
