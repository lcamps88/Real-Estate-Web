import Link from 'next/link'
// COMPONENTS
import InternalHero from '@/components/internalLayout/InternalHero'
import Neighborhood from '@/components/Neighborhood'
import WorkWithUs from '@/components/WorkWithUs'
import InternalMiddleContent from '@/components/internalLayout/InternalMiddleContent'
import InternalTopContent from '@/components/internalLayout/InternalTopContent'
import ContactForm from '@/components/ContactForm'

//IMAGES
import InternalImg from '@/public/images/palmSpring.webp'

export const metadata = {
  title: 'Contact Real Estate 4 All Experts - Buy, Sell, Invest in Florida',
  description:
    'Turn your Florida dream into reality! Free Consultation with our Real Estate experts. We guide you through buying, selling & investing in Florida. Contact us today!',
}

const ContactUs = () => {
  return (
    <>
      <InternalHero title='Contact Us' bgImage='bg-internal_image' />
      <InternalTopContent
        image={InternalImg}
        title={`Let's Connect & Make Your Florida Dream a Reality`}
      >
        <p className='text-white font-bold'>
          Ready to take the next step on your Florida real estate journey?
        </p>
        <p className='text-white'>
          Our dedicated team of professionals is here to guide you every step of
          the way, from buying and selling to investing. Contact us today for a
          personalized consultation and discover how we can turn your vision
          into reality.
        </p>
        <ContactForm />
      </InternalTopContent>
      <InternalMiddleContent bgContainer='bg-white'>
        <h3>Can&apos;t find what you&apos;re looking for?</h3>
        <p className='text-center m-0'>
          Explore our comprehensive listings on our
          <Link className='text-primary-orange' href='/home-search'>
            {' '}
            Home Search
          </Link>{' '}
          page.
        </p>
      </InternalMiddleContent>
      <Neighborhood />
      <WorkWithUs />
    </>
  )
}

export default ContactUs
