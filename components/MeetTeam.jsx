import Image from 'next/image'
import Container from './Container'
import CustomButton from './CustomButton'
import ServicesCard from './ServicesCard'
import Realtor from '@/public/images/realtor.webp'

const MeetTeam = () => {
  return (
    <section className=' w-full flex flex-wrap justify-center bg-white gap-10 lg:gap-0 py-20 xl:pt-0 xl:pb-24'>
      <Container customStyle='w-full relative lg:-top-[12vw] xl:-top-[8vw] flex flex-wrap justify-between responsive_about_container_width'>
        <ServicesCard
          title={'selling a home?'}
          url={'#'}
          content={'Sagittis id consectetur purus ut faucibus.'}
          btn_title={'home evaluation'}
          image='bg-selling_home'
        />
        <ServicesCard
          title={'buying a home?'}
          url={'#'}
          content={'Sagittis id consectetur purus ut faucibus.'}
          btn_title={'view properties'}
          image='bg-buying_home'
        />
      </Container>
      <Container customStyle='flex flex-wrap justify-center flex-wrap responsive_container_width mb-10 lg:mb-20 xl:mb-40 3xl:mb-52'>
        <div className='flex flex-col items-center max-w-[80vw] lg:max-w-[85vw] xl:max-w-[55vw] 3xl:max-w-[40vw] gap-5 lg:gap-8'>
          <h4>testimonials</h4>
          <h3 className='light text-primary-grey'>
            &quot;ID NIBH TORTOR ID ALIQUET LECTUS PROIN NIBH NISL. MUS MAURIS
            VITAE ULTRICIES LEO. VEL FRINGILLA EST ULLAMCORPER EGET NULLA.&quot;
          </h3>
          <p className='p-0'>-Jane Doe</p>
          <CustomButton className='btn_secondary'>
            More testimonials
          </CustomButton>
        </div>
      </Container>
      <Container customStyle='flex flex-wrap justify-between responsive_about_container_width'>
        <div className='flex flex-col custom-width-45 gap-y-10'>
          <div className='w-full relative border border-solid	border-primary-orange min-h-[45vw] xl:min-h-[39vw]'>
            <Image
              src={Realtor}
              alt='Realtor'
              className='static lg:absolute bottom-0'
            />
          </div>
          <div className='flex flex-col justify-center items-center gap-y-5'>
            <h4>meet your realtor</h4>
            <h3 className='light text-primary-grey'>Name Realtor</h3>
            <p className='text-center'>
              My Job is to guide clients through the Multi-Faceted aspects of
              buying or selling a property in the area of South Florida. I will
              lead through the intricacies of an important Real Estate purchase
              or sale and I will provide knowledge and experienced to make the
              right decision. I&apos;m committed and passionate about my career
              and my goal as an agent is to continue to exceed buyers and
              sellers&apos; expectations. Always looking to finding the right
              home and making the most money for all of my clients.
            </p>
          </div>
        </div>
        <div className='flex flex-col custom-width-45 gap-y-10'>
          <div className='w-full relative border border-solid	border-primary-orange min-h-[45vw] xl:min-h-[39vw]'>
            <Image
              src={Realtor}
              alt='Realtor'
              className='static lg:absolute  bottom-0'
            />
          </div>
          <div className='flex flex-col justify-center items-center gap-y-5'>
            <h4>meet your realtor</h4>
            <h3 className='light text-primary-grey'>Name Realtor</h3>
            <p className='text-center'>
              My Job is to guide clients through the Multi-Faceted aspects of
              buying or selling a property in the area of South Florida. I will
              lead through the intricacies of an important Real Estate purchase
              or sale and I will provide knowledge and experienced to make the
              right decision. I&apos;m committed and passionate about my career
              and my goal as an agent is to continue to exceed buyers and
              sellers&apos; expectations. Always looking to finding the right
              home and making the most money for all of my clients.
            </p>
          </div>
        </div>
        <div className='flex w-full justify-center lg:pt-5'>
          <CustomButton className='btn_secondary'>Meet Our Team</CustomButton>
        </div>
      </Container>
    </section>
  )
}

export default MeetTeam
