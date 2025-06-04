'use client'
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
import CustomMapPopup from './CustomMapPopUp'
import PopUpMapHomeSearch from './PopUpMapHomeSearch'

const CustomMap = forwardRef(
  ({ data, initialViewPort, homeSearch, viewMap, newLocation }, ref) => {
    const mapRef = useRef()
    const [popupInfo, setPopupInfo] = useState(null)
    const [selectedLocation, setSelectedLocation] = useState(null)

    const handleClickMarker = useCallback((location) => {
      setPopupInfo(location)
    }, [])

    // Zoom location
    const moveTo = useCallback((location) => {
      setSelectedLocation(location)
      const longitude = location?.Longitude
      const latitude = location?.Latitude
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
        setSelectedLocation(null) // Clear selected location
        mapRef.current?.flyTo(initialViewPort)
      },
    }))

    const pins = Array.isArray(data)
      ? data?.map((location, i) =>
          newLocation ? (
            <CustomMapMarker
              key={`marker-${i}`}
              latitude={parseFloat(location?.Latitude)}
              longitude={parseFloat(location?.Longitude)}
              anchor='top'
              onClick={() => handleClickMarker(location)}
              activeColor='fill-primary-orange'
              defaultColor='fill-primary-blue'
              isSelected={selectedLocation && selectedLocation === location}
            />
          ) : (
            <CustomMapMarker
              key={`marker-${i}`}
              latitude={parseFloat(location?.Latitude)}
              longitude={parseFloat(location?.Longitude)}
              anchor='top'
              onClick={() => moveTo(location)}
              activeColor='fill-primary-orange'
              defaultColor='fill-primary-blue'
              isSelected={selectedLocation && selectedLocation === location}
            />
          )
        )
      : null

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
          {popupInfo &&
            (homeSearch ? (
              <PopUpMapHomeSearch
                data={popupInfo}
                viewMap={viewMap}
                onClose={() => setPopupInfo(null)}
              />
            ) : (
              <CustomMapPopup
                data={popupInfo}
                onClose={() => setPopupInfo(null)}
              />
            ))}
        </Map>
      </>
    )
  }
)

CustomMap.propTypes = {
  initialViewPort: PropTypes.object.isRequired,
}

CustomMap.displayName = 'CustomMap'

export default CustomMap
