import InternalHero from '@/components/InternalHero'
import WorkWithUs from '@/components/WorkWithUs'
import ContactUs from '@/components/ContactUs'
import Neighborhood from '@/components/Neighborhood'

export const metadata = {
  title: 'Meet The Team',
  description: 'Meet The Team',
}

const page = () => {
  return (
    <>
      <InternalHero title='Meet The team' bgImage='bg-internal_image' />
      <ContactUs pTop='xl:pt-20' />
      <Neighborhood />
      <WorkWithUs />
    </>
  )
}

export default page
