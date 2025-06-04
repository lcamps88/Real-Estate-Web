import { useState } from 'react'
import { Marker } from 'react-map-gl'
import { HiMiniHome } from 'react-icons/hi2'

import PropTypes from 'prop-types'

const CustomMapMarker = ({
  latitude,
  longitude,
  anchor,
  onClick,
  activeColor,
  defaultColor,
  isSelected,
}) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
    onClick()
  }

  return latitude && longitude ? (
    <Marker latitude={latitude} longitude={longitude} anchor={anchor || 'top'}>
      <HiMiniHome
        className={isSelected ? activeColor : defaultColor}
        onClick={handleClick}
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
  activeColor: PropTypes.string,
  defaultColor: PropTypes.string,
}

export default CustomMapMarker
