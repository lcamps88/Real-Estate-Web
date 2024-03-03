import PropTypes from 'prop-types'
import CustomButton from './CustomButton'

const ServicesCard = ({ image, url, title, content, btn_title }) => {
  return (
    <div
      className={`relative ${image} bg-cover bg-no-repeat bg-center border border-solid border-primary-orange custom-width-45 md:min-h-[30rem] xsm:min-h-[25rem] lg:min-h-[32rem] 3xl:min-h-[38rem]`}
    >
      <div className='static lg:absolute bg-black bg-card-opacity-48 flex flex-col justify-center items-center w-full h-full p-10'>
        <h3 className='text-white text-center'>{title}</h3>
        <p className='text-white text-center'>{content}</p>
        <CustomButton className='btn_primary' url={url}>
          {btn_title}
        </CustomButton>
      </div>
    </div>
  )
}

ServicesCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
}
ServicesCard.displayName = 'ServicesCard'

export default ServicesCard
