// COMPONENTS
import InternalHero from '@/components/InternalHero'
import WorkWithUs from '@/components/WorkWithUs'
import ContactUs from '@/components/ContactUs'
import Neighborhood from '@/components/Neighborhood'
import InternalTopDetails from '@/components/InternalTopDetails'
import ContainerCenter from '@/components/ContainerCenter'
import ContainerBottom from '@/components/InternalBottom'
// UTILIES
import AboutImage from '@/public/images/selling_home.webp'
import InternalImage from '@/public/images/internal-image2.webp'

export const metadata = {
  title: 'Meet The Team',
  description: 'Meet The Team',
}

const page = () => {
  return (
    <>
      <InternalHero title='Meet The team' bgImage='bg-internal_image' />
      <InternalTopDetails image={AboutImage} />
      <ContainerCenter />
      <ContainerBottom image={InternalImage} />
      <ContactUs pTop='xl:pt-20' />
      <Neighborhood />
      <WorkWithUs />
    </>
  )
}

export default page
