import Hero from '@/components/Hero'
import WorkWithUs from '@/components/WorkWithUs'

export const metadata = {
  title: 'Real Estate 4 All',
  description: 'The best real estate agency!',
}
const Home = () => {
  return (
    <>
      <Hero />
      <WorkWithUs />
    </>
  )
}
export default Home
