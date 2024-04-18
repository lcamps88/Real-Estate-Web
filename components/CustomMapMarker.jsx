import { Marker } from 'react-map-gl'
import { HiMiniHome } from 'react-icons/hi2'

import PropTypes from 'prop-types'

const CustomMapMarker = ({ latitude, longitude, anchor, onClick }) => {
  return latitude && longitude ? (
    <Marker latitude={latitude} longitude={longitude} anchor={anchor || 'top' }>
      <HiMiniHome
        className='fill-primary-blue'
        onClick={onClick}
        size={20}
        sx={{ cursor: 'pointer' }}
      />
    </Marker>
  ) : (
    <></>
  )
}

CustomMapMarker.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  anchor: PropTypes.string,
  onClick: PropTypes.func,
}

export default CustomMapMarker
