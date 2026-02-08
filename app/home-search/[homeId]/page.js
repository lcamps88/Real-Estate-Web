'use client'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// COMPONENTS
import NewsLetter from '@/components/NewsLetter'
import WorkWithUs from '@/components/WorkWithUs'
import HeroPropertyDetails from '@/components/internalLayout/HeroPropertyDetails'
import InternalFullContent from '@/components/internalLayout/InternalFullContent'
import Container from '@/components/Container'
import PropertySearchForm from '@/components/PropertyForm'
import CustomMap from '@/components/CustomMap'
import { Divider } from '@nextui-org/react'
import { getPropertyDetails } from '@/actions/idxApi'
import ImagePlaceholder from '@/public/images/jupiter.webp'

//ICONS
import { FaHome } from 'react-icons/fa'
import { IoBedSharp } from 'react-icons/io5'
import { FaBath } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
import { BsRulers } from 'react-icons/bs'
import { GrStatusGoodSmall } from 'react-icons/gr'
import Logo from '@/public/images/logo.webp'

const PropertyDetails = ({ searchParams }) => {
  const [selectProperty, setSelectProperty] = useState({})
  const [initialViewPort, setInitialViewPort] = useState({
    latitude: undefined,
    longitude: undefined,
    zoom: 8,
  })

  const mapRef = useRef()

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }

  let media
  const mediaEntry = Object.entries(selectProperty).find(
    ([key, value]) => key === 'Media'
  )
  if (mediaEntry) {
    media = mediaEntry[1]
  } else {
    console.log("'Media' does not exist in the data.")
  }

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const mlsProperty = await getPropertyDetails(searchParams.key)
        if (mlsProperty) {
          setSelectProperty(mlsProperty.data)
        }
      } catch (error) {
        console.error('Error fetching property:', error)
      }
    }
    fetchProperty()
  }, [searchParams.key])

  useEffect(() => {
    if (selectProperty) {
      setInitialViewPort({
        latitude: selectProperty.Latitude,
        longitude: selectProperty.Longitude,
        zoom: 8,
      })
    }
  }, [selectProperty])

  return (
    <>
      <HeroPropertyDetails
        title={'Property Details'}
        bgImage={
          media !== undefined
            ? Object.values(media)[0].MediaURL
            : ImagePlaceholder.src
        }
        gallery={media}
      />
      <InternalFullContent bgContainer='bg-white-light' ref={mapRef}>
        <Container customStyle='w-full flex flex-col flex-wrap responsive_container_width gap-y-5'>
          <div className='w-full flex flex-wrap justify-between items-start gap-y-12 xl:gap-y-0'>
            <div className='w-full flex flex-wrap justify-between xl:w-2/3 3xl:w-3/4 gap-y-10 xl:pr-20'>
              <div className='w-full flex flex-wrap justify-between xl:gap-y-2 border-b-1 pb-2 xl:pb-0'>
                <div className='w-full lg:w-1/2 flex flex-col items-start text-left'>
                  <h3 className='property'>address</h3>
                  <p className='mb-2'>
                    {' '}
                    {selectProperty?.UnparsedAddress || 'address'}
                  </p>
                </div>

                <div className='w-full lg:w-1/4 flex flex-col items-start xl:items-end'>
                  <h3 className='property'>
                    {USDollar.format(selectProperty.ListPrice || '0.00')}
                  </h3>
                  <p>Price</p>
                </div>
              </div>
              <div className='w-full flex flex-wrap justify-between'>
                <div className='w-full lg:w-1/4 flex flex-col'>
                  {selectProperty?.StandardStatus && (
                    <p className='flex justify-start items-center gap-x-3'>
                      <GrStatusGoodSmall />{' '}
                      {selectProperty?.StandardStatus || 'status'}
                    </p>
                  )}
                  {selectProperty?.BedroomsTotal && (
                    <p className='flex justify-start items-center gap-x-3'>
                      <IoBedSharp /> {selectProperty.BedroomsTotal}
                    </p>
                  )}
                  {selectProperty?.BathroomsTotalInteger && (
                    <p className='flex justify-start items-center gap-x-3'>
                      <FaBath /> {selectProperty.BathroomsTotalInteger}
                    </p>
                  )}
                  {selectProperty?.BuildingAreaTotal && (
                    <p className='flex justify-start items-center gap-x-3'>
                      <BsRulers /> {selectProperty.BuildingAreaTotal} sqft
                    </p>
                  )}
                  {selectProperty?.PropertyType && (
                    <p className='flex justify-start items-center gap-x-3'>
                      <FaHome /> {selectProperty.PropertyType}
                    </p>
                  )}

                  {selectProperty?.YearBuilt && (
                    <p className='flex justify-start items-center gap-x-2'>
                      <FaCalendar />
                      Built in {selectProperty?.YearBuilt}
                    </p>
                  )}
                </div>
                <div className='w-full lg:w-2/3 flex flex-col gap-y-2'>
                  {selectProperty?.PublicRemarks && (
                    <p>{selectProperty?.PublicRemarks}</p>
                  )}

                  <div className='w-full flex flex-wrap gap-x-20 justify-left'>
                    {selectProperty?.ListingId && (
                      <div className='flex flex-col'>
                        <p className='font-bold mb-0'>
                          {selectProperty?.ListingId}
                        </p>
                        <p>MLS&reg;</p>
                      </div>
                    )}
                    {selectProperty?.ListingContractDate && (
                      <div className='flex flex-col'>
                        <p className='font-bold  mb-0'>
                          {formatDate(selectProperty?.ListingContractDate)}
                        </p>
                        <p>LISTED</p>
                      </div>
                    )}
                    {selectProperty?.dateModified && (
                      <div className='flex flex-col'>
                        <p className='font-bold  mb-0'>
                          {formatDate(selectProperty?.dateModified)}
                        </p>
                        <p>UPDATED</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              {selectProperty &&
                initialViewPort.latitude &&
                initialViewPort.longitude && (
                  <div className='w-full flex flex-col items-start gap-y-5'>
                    <h3 className='property text-left m-0'>Map</h3>
                    <div className='overflow-hidden w-full border-[1px] border-primary-orange h-96'>
                      <CustomMap
                        ref={mapRef}
                        data={[selectProperty]}
                        initialViewPort={initialViewPort}
                        homeSearch={true}
                        viewMap={true}
                      />
                    </div>
                    <p className='m-0'>
                      {selectProperty?.UnparsedAddress || 'address'}
                    </p>
                  </div>
                )}

              <Divider />
              <div className='w-full flex flex-wrap items-start gap-y-10'>
                <div className='w-full flex items-start flex-col '>
                  <h3 className='property mb-10'>Interior Features</h3>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Total Stories</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.StoriesTotal || 0}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Bedrooms</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.BedroomsTotal || 0}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Bathrooms</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.BathroomsTotalInteger || 0}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Interior Features</p>{' '}
                    <p className='m-0 w-1/2'>
                      {' '}
                      {selectProperty?.InteriorFeatures || '-'}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Appliances</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.Appliances || '-'}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Floor Description</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.Flooring || '-'}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Cooling</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.Cooling || '-'}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Heating</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.Heating || '-'}
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full flex flex-wrap items-start gap-y-10'>
                <div className='w-full flex items-start flex-col '>
                  <h3 className='property mb-10'>Exterior/Building Features</h3>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Exterior Features</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.ExteriorFeatures || '-'}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Sewer</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.Utilities || '-'}
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full flex flex-wrap items-start gap-y-10'>
                <div className='w-full flex items-start flex-col '>
                  <h3 className='property mb-10'>Other Property Details</h3>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Area Name</p>{' '}
                    <p className='m-0 w-1/3'>{selectProperty?.Area || 0}</p>
                  </div>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Taxes Annual Amount</p>{' '}
                    <p className='m-0 w-1/3'>
                      {selectProperty?.TaxAnnualAmount
                        ? USDollar.format(selectProperty?.TaxAnnualAmount)
                        : USDollar.format(0)}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>AssociationFee</p>{' '}
                    <p className='m-0 w-1/3'>
                      {selectProperty?.AssociationFee
                        ? USDollar.format(selectProperty?.AssociationFee)
                        : USDollar.format(0)}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Association Amenities</p>{' '}
                    <p className='m-0 w-1/3'>
                      {' '}
                      {selectProperty?.AssociationAmenities || '-'}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Garage</p>{' '}
                    <p className='m-0 w-1/3'>
                      {selectProperty?.GarageSpaces || 0}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Parking</p>{' '}
                    <p className='m-0 w-1/3'>
                      {selectProperty?.OpenParkingSpaces || 0}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>View</p>{' '}
                    <p className='m-0 w-1/3'>{selectProperty?.View || ''}</p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>County 0r Parish</p>{' '}
                    <p className='m-0 w-1/3'>
                      {selectProperty?.CountyOrParish || '-'}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Waterfront</p>{' '}
                    <p className='m-0 w-1/3'>
                      {selectProperty?.WaterfrontFeatures || '-'}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap  border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Buyer Agency Compensation</p>{' '}
                    <p className='m-0 w-1/3'>
                      {selectProperty?.BuyerBrokerageCompensation || '-'}
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full flex flex-wrap items-start gap-y-10'>
                <div className='w-full flex items-start flex-col '>
                  <h3 className='property mb-10'>Listing History</h3>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Date</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.ListingContractDate || '-'}
                    </p>
                  </div>
                  <div className='w-full flex flex-wrap border-b-1 pb-2 mb-2 gap-x-10'>
                    <p className='m-0 w-1/3'>Event</p>{' '}
                    <p className='m-0 w-1/2'>
                      {selectProperty?.StandardStatus || '-'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col gap-y-5 xl:w-1/3 3xl:w-1/4 p-8 md:px-16 md:py-10 xl:p-8 bg-primary-blue'>
              <div className='w-full flex justify-center'>
                <Image
                  src={Logo}
                  alt='Real Estate 4 All logo'
                  className='w-24 xl:min-w-8'
                />
              </div>
              <div className='w-full flex justify-left items-center gap-x-2 mb-3'>
                <p className='text-white m-0'>Email:</p>
                <Link
                  href={'mailto:info@realestate4all.com'}
                  target='_blank'
                  className='text-white link_footer'
                >
                  info@realestate4all.com
                </Link>
              </div>
              <PropertySearchForm
                addressProperty={selectProperty?.UnparsedAddress}
              />
            </div>
          </div>
        </Container>
      </InternalFullContent>
      <NewsLetter pTop='xl:pt-20' />
      <WorkWithUs />
    </>
  )
}

export default PropertyDetails
