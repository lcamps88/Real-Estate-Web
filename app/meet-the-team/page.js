// COMPONENTS
import ContactUs from '@/components/ContactUs'
import Neighborhood from '@/components/Neighborhood'
import WorkWithUs from '@/components/WorkWithUs'
import ContainerCenter from '@/components/internalLayout/InternalMiddleContent'
import Team from '@/components/internalLayout/InternalBottomContent'
import InternalHero from '@/components/internalLayout/InternalHero'
import InternalTopDetails from '@/components/internalLayout/InternalTopContent'
// UTILIES
import PhotoTeam from '@/public/images/team.webp'
import AboutImage from '@/public/images/selling_home.webp'

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
      <Team image={PhotoTeam} />
      <ContactUs pTop='xl:pt-20' />
      <Neighborhood />
      <WorkWithUs />
    </>
  )
}

export default page
