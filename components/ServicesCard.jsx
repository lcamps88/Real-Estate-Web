import PropTypes from 'prop-types'
import CustomButton from './CustomButton'

const ServicesCard = ({ image, url, title, content, btn_title }) => {
  return (
    <div
      className={`relative ${image} bg-cover bg-no-repeat bg-center border border-solid border-primary-orange max-w-[35.25rem] min-h-[32.25rem]`}
    >
      <div className='absolute bg-black bg-card-opacity-48 flex flex-col justify-center items-center w-full h-full p-10'>
        <h3 className='text-white'>{title}</h3>
        <p className='text-white'>{content}</p>
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
  btn_title: PropTypes.btn_title,
}
ServicesCard.displayName = 'ServicesCard'

export default ServicesCard
