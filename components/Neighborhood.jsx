import Container from './Container'
import CustomButton from './CustomButton'
import NeighborhoodCard from './NeighborhoodCard'
import Link from 'next/link'

const Neighborhood = () => {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-primary-blue '>
        <Container
          customStyle='mx-auto flex justify-center responsive_container_width'
          data-aos='fade-down'
        >
          <h3 className='text-white'>featured neighborhoods</h3>
        </Container>
      </div>
      <div className='w-full flex flex-wrap justify-between'>
        <NeighborhoodCard
          title='Palm beach'
          image='bg-neighborhoods4'
          size='w-1/2'
        />
        <NeighborhoodCard
          title='west palm beach'
          image='bg-neighborhoods3'
          size='w-1/2'
        />
      </div>
      <Link href='/neighborhoods' className='w-full'>
        <CustomButton className='w-full btn_full py-6'>View All</CustomButton>
      </Link>
    </>
  )
}

export default Neighborhood
