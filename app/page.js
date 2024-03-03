import Hero from '@/components/Hero'
import WorkWithUs from '@/components/WorkWithUs'
import Neighborhood from '@/components/Neighborhood'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import MeetTeam from '@/components/MeetTeam'
import FeaturedProperties from '@/components/FeaturedProperties'

export const metadata = {
  title: 'Real Estate 4 All',
  description: 'The best real estate agency!',
}
const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs/>
      <MeetTeam/>
      <FeaturedProperties/>
      <ContactUs/>
      <Neighborhood />
      <WorkWithUs />
    </>
  )
}
export default Home
