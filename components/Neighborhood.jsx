import Container from './Container'
import CustomButton from './CustomButton'
import NeighborhoodCard from './NeighborhoodCard'

const Neighborhood = () => {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-primary-blue '>
        <Container customStyle='mx-auto flex justify-center responsive_container_width'>
          <h3 className='text-white'>featured neighborhoods</h3>
        </Container>
      </div>
      <div className='w-full flex flex-wrap justify-between'>
        <NeighborhoodCard title='Palm beach' image='bg-neighborhoods1' effect='flip-left'/>
        <NeighborhoodCard title='west palm beach' image='bg-neighborhoods2' effect='flip-right'/>
      </div>
      <CustomButton className='w-full btn_full py-6'>View All</CustomButton>
    </>
  )
}

export default Neighborhood
