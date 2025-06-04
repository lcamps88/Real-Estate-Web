'use client'

import { useRef } from 'react'
import CustomMap from './CustomMap'
import locations from '@/data/locations'
import Container from '@/components/Container'
import NeighborhoodCard from '@/components/NeighborhoodCard'

const MapSection = () => {
  const mapRef = useRef()
  const initialViewPort = {
    latitude: 26.5996006,
    longitude: -80.3544114,
    zoom: 8,
  }

  return (
    <>
      <div className='w-full flex flex-wrap justify-center bg-primary-blue py-12 gap-12 xl:py-24 xl:gap-24'>
        <Container customStyle='w-full flex flex-col gap-y-5 lg:flex-row justify-between flex-wrap responsive_about_container_width xl:px-20 pb-[3.25rem] border-b border-solid border-primary-orange'>
          <div className='flex flex-col items-start'>
            <h3 className='text-white text-left'>Neighborhoods</h3>
          </div>
        </Container>
        <Container customStyle='w-full flex flex-wrap justify-between responsive_about_container_width gap-y-10 xl:gap-y-0'>
          <div className='flex border border-solid border-primary-orange custom-width-45 h-[40rem] lg:h-[34vw] 3xl:h-[31.5vw]'>
            {/* map */}
            <div className='overflow-hidden w-full border-[1px] border-gainsboro h-[40rem] lg:h-[34vw] 3xl:h-[31.5vw]'>
              <CustomMap
                ref={mapRef}
                data={locations}
                initialViewPort={initialViewPort}
                newLocation={true}
              />
            </div>
          </div>
          <div className='flex flex-col justify-center items-start custom-width-45'>
            <h3 className='text-left text-white mb-5'>
              Dive deeper and discover the perfect place to call home!
            </h3>
            <p className='text-white m-0'>
              Our comprehensive neighborhood guides provide valuable insights
              into local amenities, schools, demographics, and real estate
              trends. Explore diverse regions, charming towns, and flourishing
              neighborhoods to find the Florida community that aligns perfectly
              with your lifestyle and aspirations.
            </p>
          </div>
        </Container>
      </div>
      <div className='w-full flex flex-wrap justify-between'>
        {locations.slice(0, 9).map((location) => (
          <NeighborhoodCard
            key={location.id}
            image={location.image}
            title={location.city}
            size='w-2/6'
            refLink={mapRef}
            data={location}
          />
        ))}
        {locations.slice(9).map((location) => (
          <NeighborhoodCard
            key={location.id}
            image={location.image}
            title={location.city}
            size='w-1/2'
            refLink={mapRef}
            data={location}
          />
        ))}
      </div>

      {/* <NeighborhoodCard
          title='Palm Springs'
          image='bg-neighborhoods1'
          size='w-2/6'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='West Palm Beach'
          image='bg-neighborhoods2'
          size='w-2/6'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='Boca Raton'
          image='bg-neighborhoods3'
          size='w-2/6'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='Delray Beach'
          image='bg-neighborhoods4'
          size='w-2/6'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='Wellington'
          image='bg-neighborhoods5'
          size='w-2/6'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='Boynton Beach'
          image='bg-neighborhoods6'
          size='w-2/6'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='Royal Palm Beach'
          image='bg-neighborhoods7'
          size='w-2/6'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='Lake Worth'
          image='bg-neighborhoods8'
          size='w-2/6'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='Palm Beach'
          image='bg-neighborhoods9'
          size='w-2/6'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='Jupiter'
          image='bg-neighborhoods10'
          size='w-1/2'
          refLink={mapRef}
        />
        <NeighborhoodCard
          title='Palm Beach Gardens'
          image='bg-neighborhoods4'
          size='w-1/2'
          refLink={mapRef}
        /> */}
    </>
  )
  // return (
  //   <section className='w-full'>
  //     {/* map */}
  //     <div className='overflow-hidden w-full border-[1px] border-gainsboro h-[20rem] md:h-[20rem] lg:h-[34vw] 3xl:h-[31.5vw]'>
  //       <CustomMap
  //         ref={mapRef}
  //         data={locations}
  //         initialViewPort={initialViewPort}
  //         newLocation={true}
  //       />
  //     </div>
  //      <div className='w-full flex flex-wrap justify-between'>
  //       {locations.slice(0, 9).map((location) => (
  //         <NeighborhoodCard
  //           key={location.id}
  //           image={location.image}
  //           title={location.city}
  //           size='w-2/6'
  //           refLink={mapRef}
  //           data={location}
  //         />
  //       ))}
  //       {locations.slice(9).map((location) => (
  //         <NeighborhoodCard
  //           key={location.id}
  //           image={location.image}
  //           title={location.city}
  //           size='w-1/2'
  //           refLink={mapRef}
  //           data={location}
  //         />
  //       ))}
  //     </div>
  //   </section>
  // )
}

export default MapSection
