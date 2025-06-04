'use client'

import PropTypes from 'prop-types'

const NeighborhoodCard = ({ title, image, size, refLink, data }) => {
  return (
    <div
      className={`relative ${image} bg-cover bg-no-repeat bg-center w-full lg:${size} min-h-[30rem] lg:min-h-[38.8rem]`}
    >
      {!data ? (
        <div className='absolute bg-neighborhoods-opacity-34 flex flex-col justify-center items-center w-full h-full p-10'>
          <h3 className='text-white'>{title}</h3>
        </div>
      ) : (
        <div
          onClick={(evt) => refLink.current.locateTo(data)}
          className='cursor-pointer absolute bg-neighborhoods-opacity-34 flex flex-col justify-center items-center w-full h-full p-10'
        >
          <h3 className='text-white'>{title}</h3>
        </div>
      )}
    </div>
  )
}

NeighborhoodCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  refLink: PropTypes.object,
  data: PropTypes.object,
}
NeighborhoodCard.displayName = 'NeighborhoodCard'

export default NeighborhoodCard