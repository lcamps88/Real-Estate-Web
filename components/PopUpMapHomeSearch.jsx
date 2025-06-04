import Link from 'next/link'
import { Popup } from 'react-map-gl'
import { useRouter } from 'next/navigation'
import { Card, CardBody, CardHeader, Chip ,Image} from '@nextui-org/react'
import ImagePlaceholder from '@/public/images/jupiter.webp'

const PopUpMapHomeSearch = ({
  data,
  viewMap,
  closeButton = true,
  closeOnClick = false,
  dynamicPosition = true,
  onClose,
  anchor = 'bottom',
}) => {
  const router = useRouter()

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  let media
  const mediaEntry = Object.entries(data).find(
    ([key, value]) => key === 'Media'
  )
  if (mediaEntry) {
    media = mediaEntry[1]
  } else {
    console.log("'Media' does not exist in the data.")
  }


  return (
    <Popup
      latitude={parseFloat(data?.Latitude)}
      longitude={parseFloat(data?.Longitude)}
      closeButton={closeButton}
      closeOnClick={closeOnClick}
      dynamicPosition={dynamicPosition}
      onClose={onClose}
      anchor={anchor}
      className='max-w-72 sm:max-w-80 border border-solidborder-primary-orange p-0'
    >
      
       {viewMap ? (
        <Link
          href={`https://www.google.com/maps?q=${data?.Latitude},${data?.Longitude}`}
          target='_blank'
        >
          <Card className='rounded-none' isPressable>
            <CardHeader className='bg-white px-4 flex-col items-start'>
              <p className='text-sm text-left text-default-500 mb-1'>
                {data?.UnparsedAddress || ''}
              </p>
              <p className='font-medium m-0 text-secondary'>View Map</p>
            </CardHeader>
          </Card>
        </Link>
      ) : (
        <Link
          href={{
            pathname: `/home-search/${data.ListingKey}`,
            query: { key: data.ListingKey },
          }}
        >
          <Card className='rounded-none' isPressable>
            <CardBody className='overflow-visible p-0'>
              <Image
                shadow='none'
                radius='none'
                width='100%'
                alt='Property'
                className='w-full object-cover h-[140px]'
                src={media !== undefined
                  ? Object.values(media)[0].Thumbnail
                  : ImagePlaceholder.src}
              />
              <Chip
                className='absolute z-10 top-4 left-4 capitalize text-white'
                variant='solid'
                color={data?.StandardStatus === 'Active' ? 'success' : data.StandardStatus === ('Pending' || 'Active Under Contract') ? 'danger' :'secondary'}
                >
                 {data?.StandardStatus === 'Closed'  ? 'Sold' : data?.StandardStatus || ''}
              </Chip>
            </CardBody>
            <CardHeader className='bg-white px-4 flex-col items-start'>
              <p className='uppercase font-bold m-0'>
                {USDollar.format(data?.ListPrice || '')}
              </p>
              <div className='mb-0 flex gap-x-1'>
                <p className='text-sm text-default-500 mb-1'>
                  {data.BedroomsTotal}Beds |{'  '}
                </p>
                <p className='text-sm text-default-500 mb-1'>
                  {data?.BathroomsTotalInteger || ''}Baths |{'  '}
                </p>
                <p className='text-sm text-default-500 mb-1'>{data.sqFt}sqft</p>
              </div>
              <p className='text-sm text-left text-default-500 mb-1'>
                {data.UnparsedAddress || ''}
              </p>
              <p className='text-sm text-left text-default-500 mb-1'>
                MLS&reg;: {data.ListingId || ''}
              </p>
              
            </CardHeader>
          </Card>
        </Link>
      )} 
    </Popup>
  )
}

export default PopUpMapHomeSearch
