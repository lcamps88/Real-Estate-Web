import Link from 'next/link'
// COMPONENTS
import NewsLetter from '@/components/NewsLetter'
import WorkWithUs from '@/components/WorkWithUs'
import InternalHero from '@/components/internalLayout/InternalHero'
import InternalMiddleContent from '@/components/internalLayout/InternalMiddleContent'
import InternalFullContent from '@/components/internalLayout/InternalFullContent'
import Container from '@/components/Container'
import ListingPage from '@/components/ListingPage'

export const metadata = {
  title:
    'Florida Homes for Sale - Search by Location, Price & More | Real Estate 4 All',
  description:
    'Find your dream FL home! Search our comprehensive listings by location, price, & features. Beachfront condos, family homes, investment properties & more. Contact us for off-market options.',
}

const HomeSearch = ({ searchParams }) => {
  return (
    <>
      <InternalHero title={'Home Search'} bgImage='bg-internal_image'/>

      <InternalFullContent
        className='items-start'
        bgContainer='bg-primary-blue'
      >
        <Container customStyle='w-full flex flex-col gap-y-5 lg:flex-row justify-between flex-wrap responsive_about_container_width xl:px-20 pb-[3.25rem] border-b border-solid border-primary-orange'>
          <div className='flex flex-col items-start'>
            <h3 className='text-white text-left'>
              Find Your Perfect Florida Home: Search by Location, Price & More
            </h3>
          </div>
        </Container>
        <Container customStyle='pt-5'>
          <p className='text-white font-bold'>
            Explore a diverse range of properties across Florida and find your
            dream home!
          </p>
          <p className='text-white'>
            Search our comprehensive listings by location, price range, property
            type, and desired features. Whether you&apos;re seeking a beachfront
            condo, a spacious family home, or a charming investment property,
            our user-friendly search tool empowers you to narrow down your
            options and discover the perfect fit for your needs and lifestyle.
          </p>
        </Container>
      </InternalFullContent>
      <ListingPage homeSearch={searchParams} />
      <InternalMiddleContent
        bgContainer='bg-white-light'
        className='relative z-20'
      >
        <h3>Can&apos;t find what you&apos;re looking for?</h3>
        <p className='text-center m-0'>
          <Link className='text-primary-orange' href='/contact-us'>
            Contact our expert agents today{' '}
          </Link>{' '}
          to discuss your dream home and explore off-market opportunities.
        </p>
      </InternalMiddleContent>
      <NewsLetter pTop='xl:pt-20' />
      <WorkWithUs />
    </>
  )
}
export default HomeSearch
