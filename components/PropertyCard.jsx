import Container from './Container'

const PropertyCard = ({ image, type, description, price }) => {
    return (
      <div className={`relative ${image} w-full bg-cover bg-no-repeat h-[40vw]`}>
        <Container customStyle='absolute bottom-0 flex justify-between flex-wrap py-5 px-14 bg-opacity-property '>
          <div className='flex gap-4'>
            <p className='text-white bg-primary-orange m-0 px-2 *:uppercase'>
              {type}
            </p>
            <p className='m-0'>{description}</p>
          </div>
  
          <h4>{price}</h4>
        </Container>
      </div>
    )
  }

export default PropertyCard
