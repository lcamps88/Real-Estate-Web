'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { Popup } from 'react-map-gl'

const CustomMapPopup = ({
  data,
  closeButton = true,
  closeOnClick = false,
  dynamicPosition = true,
  onClose,
  closeOnMove=true,
  anchor = 'bottom',
}) => {
  return (
    <Popup
      latitude={data?.Latitude}
      longitude={data?.Longitude}
      closeButton={closeButton}
      closeOnClick={closeOnClick}
      dynamicPosition={dynamicPosition}
      onClose={onClose}
      anchor={anchor}
      closeOnMove={closeOnMove}
      className='max-w-72 sm:max-w-80 border-1 border-solid border-primary-orange'
    >
      <div className='flex flex-col items-center rounded-lg p-5 gap-y-3'>
        <h4 className='text-center'>{data?.city}</h4>

        {data?.url && (
          <Link href={data?.url} target='_blank' rel='noreferrer'>
            <p className='text-primary-blue m-0'>More Details</p>
          </Link>
        )}
      </div>
    </Popup>
  )
}

export default CustomMapPopup
