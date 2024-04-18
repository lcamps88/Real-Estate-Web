// COMPONENTS
import ContactUs from '@/components/ContactUs'
import WorkWithUs from '@/components/WorkWithUs'
import Image from 'next/image'
import Container from '@/components/Container'
import InternalHero from '@/components/internalLayout/InternalHero'
import MapSection from '@/components/MapSection'
// UTILIES
import AboutImage from '@/public/images/selling_home.webp'

const Neighborhoods = () => {
  return (
    <>
      <InternalHero title='Neighborhoods' bgImage='bg-internal_image' />
      <section className='w-full flex flex-wrap justify-center bg-primary-blue py-20 gap-12 xl:py-24 xl:gap-24'>
        <Container customStyle='w-full flex flex-col gap-y-5 lg:flex-row justify-between flex-wrap responsive_about_container_width xl:px-20 pb-[3.25rem] border-b border-solid border-primary-orange'>
          <div className='flex flex-col items-start'>
            <h3 className='text-white text-left'>Neighborhoods</h3>
          </div>
        </Container>
        <Container customStyle='w-full flex flex-wrap justify-between responsive_about_container_width gap-y-10 xl:gap-y-0'>
          <div className='border border-solid border-primary-orange custom-width-45 h-[20rem] md:h-[20rem] lg:h-[34vw] 3xl:h-[31.5vw]'>
            <MapSection/>
          </div>
          <div className='flex flex-col justify-center items-start custom-width-45'>
            <p className='text-white'>
              Our comprehensive neighborhood guides provide valuable insights
              into local amenities, schools, demographics, and real estate
              trends. Explore diverse regions, charming towns, and flourishing
              neighborhoods to find the Florida community that aligns perfectly
              with your lifestyle and aspirations.
            </p>
          </div>
        </Container>
      </section>
      <ContactUs pTop='xl:pt-20' />
      <WorkWithUs />
    </>
  )
}

export default Neighborhoods
