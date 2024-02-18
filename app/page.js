import Image from 'next/image'
import Hero from '@/components/Hero'

export const metadata = {
  title: 'Real Estate 4 All',
  description: 'The best real estate agency!',
}
const Home = () => {
  return (
    <>
      <Hero />
    </>
  )
}
export default Home
