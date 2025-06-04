// COMPONENTS
import ContactUs from '@/components/ContactUs'
import WorkWithUs from '@/components/WorkWithUs'
import Image from 'next/image'
import Container from '@/components/Container'
import InternalHero from '@/components/internalLayout/InternalHero'
import MapSection from '@/components/MapSection'
// UTILIES
import AboutImage from '@/public/images/selling_home.webp'

export const metadata = {
  title:
    'Explore Top Florida Neighborhoods | Homes for Sale in Boca Raton, Delray Beach & More (Real Estate 4 All)',
  description:
    'Find your dream Florida community! Explore homes for sale in Boca Raton, Delray Beach, Palm Beach Gardens & more. Let Real Estate 4 All guide you.',
}

const Neighborhoods = () => {
  return (
    <>
      <InternalHero title='Neighborhoods' bgImage='bg-internal_image' />
      <MapSection />
      <ContactUs pTop='xl:pt-20' />
      <WorkWithUs />
    </>
  )
}

export default Neighborhoods
