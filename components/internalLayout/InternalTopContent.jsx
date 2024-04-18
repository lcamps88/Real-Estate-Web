import Image from 'next/image'
import Container from '../Container'
import CustomButton from '../CustomButton'

const InternalTopContent = ({ image }) => {
  return (
    <section className='w-full flex flex-wrap justify-center bg-primary-blue py-20 gap-12 xl:py-24 xl:gap-24'>
      <Container customStyle='w-full flex flex-col gap-y-5 lg:flex-row justify-between flex-wrap responsive_about_container_width xl:px-20 pb-[3.25rem] border-b border-solid border-primary-orange'>
        <div className='flex flex-col items-start'>
          <h4 className='pb-5'>about us</h4>
          <h3 className='text-white'>Headline here</h3>
        </div>
      </Container>
      <Container customStyle='w-full flex flex-wrap justify-between responsive_about_container_width gap-y-10 xl:gap-y-0'>
        <div className='border border-solid border-primary-orange custom-width-45 h-[20rem] md:h-[20rem] lg:h-[36vw] 3xl:h-[32vw]'>
          <Image
            src={image}
            alt=''
            className='w-full h-full bg-cover bg-no-repeat bg-center'
          />
        </div>
        <div className='flex flex-col justify-center items-start custom-width-45'>
          <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            in eu mi bibendum neque egestas. Lorem ipsum dolor sit amet
            consectetur adipiscing. Et ligula ullamcorper malesuada proin
            libero. Lectus proin nibh nisl condimentum. Et netus et malesuada
            fames ac turpis egestas. Enim lobortis scelerisque fermentum dui.
          </p>
          <p className='text-white'>
            Lectus urna duis convallis convallis tellus id interdum. Tortor
            condimentum lacinia quis vel eros donec ac. Ac tincidunt vitae
            semper quis lectus nulla at. Nec sagittis aliquam malesuada bibendum
            arcu vitae elementum. Interdum varius sit amet mattis vulputate enim
            nulla aliquet porttitor. Enim neque volutpat ac tincidunt vitae.
          </p>
          <CustomButton className='btn_primary'>Read More</CustomButton>
        </div>
      </Container>
    </section>
  )
}

export default InternalTopContent
