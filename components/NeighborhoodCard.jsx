import PropTypes from 'prop-types'

const NeighborhoodCard = ({ title, image }) => {
  return (
    <div
      className={`relative ${image} bg-cover bg-no-repeat bg-center w-full lg:w-1/2 min-h-[30rem] lg:min-h-[38.8rem]`}
    >
      <div className='absolute bg-black bg-neighborhoods-opacity-34 flex flex-col justify-center items-center w-full h-full p-10'>
        <h3 className='text-white'>{title}</h3>
      </div>
    </div>
  )
}

NeighborhoodCard.propTypes = {

  title: PropTypes.string,
  image: PropTypes.string,
}
NeighborhoodCard.displayName = 'NeighborhoodCard'

export default NeighborhoodCard
