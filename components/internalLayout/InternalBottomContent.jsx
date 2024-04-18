import Image from 'next/image'
import Container from '../Container'
import CustomButton from '../CustomButton'

const InternalBottomContent = ({ image }) => {
  return (
    <section className='w-full flex flex-wrap justify-center bg-white-light py-20 xl:py-24'>
      <Container customStyle='w-full flex flex-wrap  justify-between responsive_about_container_width min-h-[30.063rem] gap-y-10 xl:gap-y-0'>
        <div className='flex flex-col justify-center items-start custom-width-45 gap-y-5'>
          <h4>About us</h4>
          <h3 className='text-left'>Enim lobortis scelerisque lorem</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            in eu mi bibendum neque egestas. Lorem ipsum dolor sit amet
            consectetur adipiscing. Et ligula ullamcorper malesuada proin
            libero. Lectus proin nibh nisl condimentum. Et netus et malesuada
            fames ac turpis egestas. Enim lobortis scelerisque fermentum dui.
          </p>

          <CustomButton className='btn_secondary'>Lear More</CustomButton>
        </div>
        <div className='border border-solid border-primary-orange custom-width-45 h-[20rem] md:h-[20rem] lg:h-[36vw] 3xl:h-[32vw]'>
          <Image
            src={image}
            alt=''
            className='w-full h-full bg-cover bg-no-repeat bg-center'
          />
        </div>
      </Container>
    </section>
  )
}

export default InternalBottomContent
