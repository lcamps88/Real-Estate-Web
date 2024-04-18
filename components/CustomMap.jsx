import 'mapbox-gl/dist/mapbox-gl.css'
import Head from 'next/head'
import PropTypes from 'prop-types'
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from 'react-map-gl'
import CustomMapMarker from './CustomMapMarker'

const CustomMap = forwardRef(({ data, initialViewPort }, ref) => {
  const mapRef = useRef()
  const [popupInfo, setPopupInfo] = useState(null)

  // Zoom location
  const moveTo = useCallback((location) => {
    const longitude = location.longitude
    const latitude = location.latitude
    setPopupInfo(location)

    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 3000,
      zoom: 10,
    })
  }, [])

  useImperativeHandle(ref, () => ({
    locateTo: (location) => {
      moveTo(location)
    },
    center: () => {
      setPopupInfo(null)
      mapRef.current?.flyTo(initialViewPort)
    },
  }))

  const pins = Array.isArray(data)
  ? data.map((location) => (
      <CustomMapMarker
        key={`marker-${location.id}`}
        latitude={location.latitude}
        longitude={location.longitude}
        anchor='top'
        onClick={() => moveTo(location)}
      />
    ))
  : null;

  return (
    <>
      <Head>
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css'
          rel='stylesheet'
        />
      </Head>
      <Map
        ref={mapRef}
        initialViewState={initialViewPort}
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        <GeolocateControl position='top-right' />
        <FullscreenControl position='top-right' />
        <NavigationControl position='top-right' />
        <ScaleControl />
        {pins}
      </Map>
    </>
  )
})

CustomMap.propTypes = {
  initialViewPort: PropTypes.object.isRequired,
}

CustomMap.displayName = 'CustomMap'

export default CustomMap
