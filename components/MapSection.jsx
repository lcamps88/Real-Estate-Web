'use client'

import { useRef, useState } from 'react'
import CustomMap from './CustomMap'
import locations from '@/data/locations'

const MapSection = () => {
  const mapRef = useRef()
  const initialViewPort = {
    latitude: 27.33979,
    longitude: -81.53307, 
    zoom: 6,
  }

  return (
    <section className='w-full'>
      {/* map */}
      <div className='overflow-hidden w-full border-[1px] border-gainsboro h-[20rem] md:h-[20rem] lg:h-[34vw] 3xl:h-[31.5vw]'>
        <CustomMap
          ref={mapRef}
          data={locations}
          initialViewPort={initialViewPort}
        />
      </div>
    </section>
  )
}

export default MapSection
