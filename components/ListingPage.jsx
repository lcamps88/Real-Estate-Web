'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'

//COMPONENTS
import Container from '@/components/Container'
import CustomMap from '@/components/CustomMap'
import PropertyCard from '@/components/PropertyCard'
import mlsListing from '@/data/mlsListing'
//NEXTUI COMPONENTS
import {
  connectMlsRouterProperties,
  connectAllMlsRouterProperties,
} from '@/actions/idxApi'
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Checkbox,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Select,
  SelectItem,
  Switch,
} from '@nextui-org/react'
import styled from 'styled-components'
import { BsFillHouseSlashFill } from 'react-icons/bs'
import { IoHomeOutline, IoHomeSharp } from 'react-icons/io5'
import { RiSearchLine } from 'react-icons/ri'
import { RiCloseCircleFill } from 'react-icons/ri'

export const garageSpace = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
]

export const storiesList = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
]

export const beds = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
]

export const baths = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
]

export const propertyTypes = [
  {
    label: 'Residential',
    value: 'Residential',
  },
  {
    label: 'Residential Income',
    value: 'Residential Income',
  },
  {
    label: 'Business Opportunity',
    value: 'Business Opportunity',
  },
  {
    label: 'Mobile/Manufactured',
    value: 'Mobile/Manufactured',
  },
  {
    label: 'Multi Family',
    value: 'Multi Family',
  },
  {
    label: 'Town House',
    value: 'Town House',
  },
  {
    label: 'Condo',
    value: 'Condo',
  },
  {
    label: 'Land',
    value: 'Land',
  },
  {
    label: 'Commercial Sale',
    value: 'Commercial Sale',
  },
  {
    label: 'Co-op',
    value: 'Co-op',
  },
  {
    label: 'Lease',
    value: 'Lease',
  },
  {
    label: 'Business',
    value: 'Business',
  },
  {
    label: 'Other',
    value: 'Other',
  },
]

export const pricesMin = [
  { label: 'No Min', value: '' },
  { label: '300000', value: '300000' },
  { label: '400000', value: '400000' },
  { label: '500000', value: '500000' },
  { label: '600000', value: '600000' },
  { label: '700000', value: '700000' },
  { label: '800000', value: '800000' },
  { label: '900000', value: '900000' },
  { label: '1000000', value: '1000000' },
  { label: '1250000', value: '1250000' },
  { label: '1500000', value: '1500000' },
  { label: '1750000', value: '1750000' },
  { label: '2000000', value: '2000000' },
  { label: '2500000', value: '2500000' },
  { label: '3000000', value: '3000000' },
  { label: '4000000', value: '4000000' },
  { label: '5000000', value: '5000000' },
  { label: '6000000', value: '6000000' },
  { label: '7000000', value: '7000000' },
  { label: '8000000', value: '8000000' },
  { label: '10000000', value: '10000000' },
  { label: '12000000', value: '12000000' },
  { label: '15000000', value: '15000000' },
  { label: '20000000', value: '20000000' },
]

export const pricesMax = [
  { label: '300000', value: '300000' },
  { label: '400000', value: '400000' },
  { label: '500000', value: '500000' },
  { label: '600000', value: '600000' },
  { label: '700000', value: '700000' },
  { label: '800000', value: '800000' },
  { label: '900000', value: '900000' },
  { label: '1000000', value: '1000000' },
  { label: '1250000', value: '1250000' },
  { label: '1500000', value: '1500000' },
  { label: '1750000', value: '1750000' },
  { label: '2000000', value: '2000000' },
  { label: '2500000', value: '2500000' },
  { label: '3000000', value: '3000000' },
  { label: '4000000', value: '4000000' },
  { label: '5000000', value: '5000000' },
  { label: '6000000', value: '6000000' },
  { label: '7000000', value: '7000000' },
  { label: '8000000', value: '8000000' },
  { label: '10000000', value: '10000000' },
  { label: '12000000', value: '12000000' },
  { label: '15000000', value: '15000000' },
  { label: '20000000', value: '20000000' },
  { label: 'No Max', value: '' },
]

export const squareFootage = [
  { label: 'No Min', value: 0 },
  { label: '500', value: '500' },
  { label: '750', value: '750' },
  { label: '1000', value: '1000' },
  { label: '1250', value: '1250' },
  { label: '1750', value: '1750' },
  { label: '2000', value: '2000' },
  { label: '3500', value: '3500' },
  { label: '4000', value: '4000' },
]

export const squareFootageMax = [
  { label: '500', value: '500' },
  { label: '750', value: '750' },
  { label: '1000', value: '1000' },
  { label: '1250', value: '1250' },
  { label: '1750', value: '1750' },
  { label: '2000', value: '2000' },
  { label: '3500', value: '3500' },
  { label: '4000', value: '4000' },
  { label: 'No Max', value: '1000000000' },
]

const ListingPage = ({ homeSearch }) => {
  const pathname = usePathname()
  const router = useRouter()

  const [initialViewPort, setInitialViewPort] = useState({
    latitude: 26.5996006,
    longitude: -80.3544114,
    zoom: 8,
  })

  const mapRef = useRef()
  // const initialViewPort = {
  //   latitude: 26.5996006,
  //   longitude: -80.3544114,
  //   zoom: 8,
  // }

  const [valuesProperty, setValuesProperty] = useState([])

  const [isFilterPanelOpen, setFilterPanelOpen] = useState(false)
  const handleOpenFilterPanel = () => setFilterPanelOpen(true)
  const handleCloseFilterPanel = () => setFilterPanelOpen(false)

  // Filters
  const [bathrooms, setBathrooms] = useState()
  const [bedrooms, setBedrooms] = useState()

  //Year Build
  const currentYear = new Date().getFullYear()
  const startYear = 1990
  const [yearArray, setYearArray] = useState([])
  const [yearArrayMax, setYearArrayMax] = useState([])
  const [yearMin, setYearMin] = useState()
  const [yearMax, setYearMax] = useState()

  //Living Area
  const [livingSqftMin, setLivingSqftMin] = useState()
  const [livingSqftMax, setLivingSqftMax] = useState()

  //Price
  const [priceRange, setPriceRange] = useState([{ min: '', max: '' }])
  const [priceRangeMin, setPriceRangeMin] = useState()
  const [priceRangeMax, setPriceRangeMax] = useState()
  const [filteredMaxPrices, setFilteredMaxPrices] = useState(pricesMax)

  //City , Address, ZipCode
  const [addressSearch, setAddressSearch] = useState('')
  const [propTypes, setPropType] = useState('')
  //Garage , Stories
  const [garage, setGarage] = useState('')
  const [stories, setStories] = useState('')

  // Status, Sale or rent
  const [forSale, setForSale] = useState(true)
  const [selectedStatuses, setSelectedStatuses] = useState([])

  const [filter, setFilter] = useState({
    BedroomsTotal: '',
    BathroomsTotalInteger: '',
    City: 'West Palm Beach,Palm Spring,Boca Raton,Delray Beach,Wellington,Boyton Beach,Royal Palm Beach,Lake Work,Palm Beach,Jupiter,Palm Beach Garden',
    StandardStatus: '',
    ListPrice: { min: '', max: '' },
    LivingArea: { min: 0, max: 1000000000 },
    YearBuilt: { min: 0, max: currentYear },
    GarageSpaces: '',
    StoriesTotal: '',
    LotSizeArea: { min: '', max: '' },
    PropertyType: '',
    PropertySubType: {},
    PostalCode: '',
    UnparsedAddress: '',
    ForSaleOrRent: `(PropertySubType ne 'Residential Rental' and PropertyType ne 'Residential Lease')`,
  })

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const handleForSaleChange = (isForSale) => {
    setForSale(isForSale)
    setFilter((prevFilter) => ({
      ...prevFilter,
      ForSaleOrRent: isForSale
        ? `(PropertySubType ne 'Residential Rental' and PropertyType ne 'Residential Lease')`
        : `(PropertySubType eq 'Residential Rental' or PropertyType eq 'Residential Lease')`,
    }))
  }

  const handlePriceMinChange = (value) => {
    setPriceRangeMin(value)
    setPriceRange((prev) => ({ ...prev, min: value }))
  }

  const handlePriceMaxChange = (value) => {
    setPriceRangeMax(value)
    setPriceRange((prev) => ({ ...prev, max: value }))
  }

  const formatPrice = (value) => {
    if (!value) return ''
    const num =
      typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value

    if (isNaN(num)) return 'Invalid Number'

    if (num >= 1000000) {
      const million = num / 1000000
      return `${million % 1 === 0 ? million.toFixed(0) : million.toFixed(1)}M`
    } else if (num >= 1000) {
      // Miles
      const thousand = num / 1000
      return `${
        thousand % 1 === 0 ? thousand.toFixed(0) : thousand.toFixed(1)
      }K`
    }
    return num.toString()
  }

  const selectedPriceValue = useMemo(() => {
    let result = 'Any Price'

    const formattedMin =
      priceRange.min && priceRange.min !== 'No Min'
        ? formatPrice(priceRange.min)
        : 'No Min'
    const formattedMax =
      priceRange.max && priceRange.max !== 'No Max'
        ? formatPrice(priceRange.max)
        : 'No Max'

    if (
      priceRange.min &&
      priceRange.min !== 'No Min' &&
      priceRange.max &&
      priceRange.max !== 'No Max'
    ) {
      result = `${formattedMin} - ${formattedMax}`
    } else if (priceRange.min && priceRange.min !== 'No Min') {
      result = `${formattedMin} - No Max`
    } else if (priceRange.max && priceRange.max !== 'No Max') {
      result = `No Min - ${formattedMax}`
    }
    setFilter((prevFilters) => ({
      ...prevFilters,
      ListPrice: {
        min: parseInt(priceRange.min),
        max: parseInt(priceRange.max),
      },
    }))

    return result
  }, [priceRange.min, priceRange.max])

  const handleBedroomsChange = (value) => {
    setBedrooms(value)
    setFilter((prevFilters) => ({ ...prevFilters, BedroomsTotal: value }))
    // const { name, value } = event.target
    // setBedrooms(value.toString())
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   [name]: parseInt(value),
    // }))
  }

  const handleBathroomsChange = (value) => {
    setBathrooms(value)
    setFilter((prevFilters) => ({
      ...prevFilters,
      BathroomsTotalInteger: value,
    }))
  }

  const handleGarageChange = (value) => {
    setGarage(value)
    setFilter((prevFilters) => ({
      ...prevFilters,
      GarageSpaces: parseInt(value),
    }))
    // const { name, value } = event.target
    // setGarage(value)
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   [name]: parseInt(value),
    // }))
  }
  const handleStoriesChange = (value) => {
    setStories(value)
    setFilter((prevFilters) => ({
      ...prevFilters,
      StoriesTotal: parseInt(value),
    }))
    // const { name, value } = event.target
    // setStories(value)
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   [name]: parseInt(value),
    // }))
  }

  const handleYearBuildMinChange = (value) => {
    setYearMin(value)
    setFilter((prevFilters) => ({
      ...prevFilters,
      YearBuilt: { ...prevFilters.YearBuilt, min: value },
    }))

    // const value = parseInt(event.target.value, 10)
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   YearBuilt: { ...prevFilters.YearBuilt, min: value },
    // }))
  }

  const handleYearBuildMaxChange = (value) => {
    setYearMax(value)
    setFilter((prevFilters) => ({
      ...prevFilters,
      YearBuilt: { ...prevFilters.YearBuilt, max: value },
    }))
    // const value = parseInt(event.target.value, 10)
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   YearBuilt: { ...prevFilters.YearBuilt, max: value },
    // }))
  }

  const handleSqftMinChange = (value) => {
    setLivingSqftMin(value)
    setFilter((prevFilters) => ({
      ...prevFilters,
      LivingArea: { ...prevFilters.LivingArea, min: value },
    }))
    // const value = parseInt(event.target.value, 10)
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   LivingArea: { ...prevFilters.LivingArea, min: value },
    // }))
  }

  const handleSqftMaxChange = (value) => {
    setLivingSqftMax(value)
    setFilter((prevFilters) => ({
      ...prevFilters,
      LivingArea: { ...prevFilters.LivingArea, max: value },
    }))

    // const value = parseInt(event.target.value, 10)
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   LivingArea: { ...prevFilters.LivingArea, max: value },
    // }))
  }

  const handleStatusChange = (status, isChecked) => {
    setSelectedStatuses((prev) => {
      let newStatuses
      if (isChecked) {
        newStatuses = [...prev, status]
      } else {
        newStatuses = prev.filter((item) => item !== status)
      }
      const statusString = newStatuses.join(', ')

      setFilter((prevFilter) => ({
        ...prevFilter,
        StandardStatus: statusString,
      }))

      return newStatuses
    })
  }

  // const handlePropertyTypeChange = (e) => {
  //   const value = e.target.value
  //   setPropType(value === propTypes ? '' : value)
  //   setFilter((prevFilter) => ({
  //     ...prevFilter,
  //     PropertyType: `${value}`,
  //   }))
  // }

  const handleValuesPropertyTypeChange = (e) => {
    const { value } = e.target
    setValuesProperty(e.target.value.split(','))
    setFilter((prevFilter) => ({
      ...prevFilter,
      PropertyType: e.target.value.split(','),
    }))
  }

  const cityValid = (value) => value.match(/^[a-zA-Z .,*]+$/i)
  const isInvalidCity = useMemo(() => {
    if (filter.City === '') return false
    return cityValid(filter.City) ? false : true
  }, [filter.City])

  const toTitleCaseRegex = (str) => {
    return str.toLowerCase().replace(/\b(\w)/g, function (char) {
      return char.toUpperCase()
    })
  }

  const handleCityZipAddressChange = (event) => {
    const value = toTitleCaseRegex(event.target.value)
    setAddressSearch(value)
    setFilter((prevFilter) => ({
      ...prevFilter,
      City: value,
    }))
  }

  const Reset = () => {
    setFilter((prev) => ({
      ...prev,
      GarageSpaces: '',
      StoriesTotal: '',
      YearBuilt: { min: '', max: '' },
      StandardStatus: '',
      BedroomsTotal: '',
      BathroomsTotalInteger: '',
      PropertyType: '',
      PostalCode: '',
      PropertySubType: '',
      ListPrice: { min: '', max: '' },
      LivingArea: { min: '', max: '' },
      ForSaleOrRent: `(PropertySubType ne 'Residential Rental' and PropertyType ne 'Residential Lease')`,
      City: 'West Palm Beach,Palm Spring,Boca Raton,Delray Beach,Wellington,Boyton Beach,Royal Palm Beach,Lake Work,Palm Beach,Jupiter,Palm Beach Garden',
    }))
    setSelectedStatuses('')
    setYearMax('')
    setYearMin('')
    setLivingSqftMin('')
    setLivingSqftMax('')
    setValuesProperty('')
    setAddressSearch('')
    setPriceRangeMin('')
    setPriceRangeMax('')
    setGarage('')
    setForSale(true)
    setStories('')
    setBathrooms('')
    setBedrooms('')
    setPropType('')
    setPriceRange({
      min: 'No Min',
      max: 'No Max',
    })
  }

  useEffect(() => {
    if (homeSearch) {
      const { city } = homeSearch
      if (city) {
        setAddressSearch(toTitleCaseRegex(city))
        setFilter((prevFilter) => ({
          ...prevFilter,
          City: toTitleCaseRegex(city),
        }))
        router.push(pathname)
      }
    } else {
      return
    }
  }, [homeSearch, pathname, router, filter.City])

  //New MLS API

  const [propertiesData, setPropertiesData] = useState([])
  const [propertiesValue, setPropertiesValue] = useState([])
  const [propertiesMap, setPropertiesMap] = useState([])

  const [skipPage, setSkipPage] = useState(1)
  const top = 10
  const skip = (skipPage - 1) * top

  const pagesMls = propertiesData.page_count
  const itemsMls = useMemo(() => {
    const start = skip
    const end = start + top
    return propertiesValue
  }, [skip, propertiesValue])

  const isDataEmptyMls =
    !Array.isArray(propertiesValue) ||
    propertiesValue.length < 1 ||
    !propertiesValue

  const getErrorMessage = (isInvalidCity, isInvalidSearch) => {
    if (isInvalidCity && isInvalidSearch) {
      return 'Please enter a valid city and ensure your search is not empty.'
    } else if (isInvalidCity) {
      return 'Please enter a valid city.'
    } else if (isInvalidSearch) {
      return 'Your search is empty; please enter a new search.'
    }
    return '' // No error
  }

  const isInvalidSearch = useMemo(() => {
    return !propertiesValue || propertiesValue.length === 0
  }, [propertiesValue])

  const errorMessage = useMemo(() => {
    return getErrorMessage(isInvalidCity, isInvalidSearch)
  }, [isInvalidCity, isInvalidSearch])

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const mlsProperties = await connectMlsRouterProperties(
          top,
          skip,
          filter
        )
        if (mlsProperties) {
          setPropertiesData(mlsProperties.data)
          setPropertiesValue(mlsProperties.data.value)
          let topAll = 0
          if (mlsProperties.data['@odata.count'] >= 200) {
            topAll = 100
          } else {
            topAll = mlsProperties.data['@odata.count']
          }
          const allMlsProperties = await connectAllMlsRouterProperties(
            topAll,
            skip,
            filter
          )
          if (allMlsProperties?.data?.value.length > 0) {
            setPropertiesMap(allMlsProperties.data.value)
            if (addressSearch) {
              mapRef.current.locateTo(
                allMlsProperties.data.value.slice(0, 1)[0]
              )
            }
          }
        }
      } catch (error) {
        console.error('Error fetching properties:', error)
      }
    }
    fetchProperties()
  }, [filter, skip, top, addressSearch])

  // useEffect(() => {
  //   if (propertiesValue) {
  //     setInitialViewPort({
  //       latitude: propertiesValue.Latitude,
  //       longitude: propertiesValue.Longitude,
  //       zoom: 8,
  //     })
  // if (addressSearch) {
  //   mapRef.current.locateTo(propertiesMap.slice(0, 1)[0])
  // }
  //   }
  // }, [propertiesValue])

  useEffect(() => {
    let years = []
    for (let year = startYear; year <= currentYear; year++) {
      years.push({ label: year.toString(), value: year.toString() })
    }
    setYearArray(years)
    setYearArrayMax(years)
  }, [startYear, currentYear])

  useEffect(() => {
    if (priceRangeMin) {
      const filteredOptions = pricesMax.filter((option) => {
        return parseInt(option.value, 10) >= parseInt(priceRangeMin, 10)
      })
      setFilteredMaxPrices(filteredOptions)
    } else {
      setFilteredMaxPrices(pricesMax)
    }
  }, [priceRangeMin])

  //End new MLS API

  return (
    <>
      <Container customStyle='flex border-b border-solid border-border_line p-10 xl:py-5'>
        <div className='w-full flex flex-wrap justify-between mx-auto items-center responsive_container_full_width p-x-10 gap-5'>
          <div className='flex items-center w-full xl:w-1/5'>
            <Input
              type='text'
              label='Search by City'
              variant='none'
              radius='none'
              labelPlacement='inside'
              startContent={<RiSearchLine className='text-primary-orange' />}
              value={addressSearch}
              onChange={handleCityZipAddressChange}
              isInvalid={errorMessage}
              color={errorMessage ? 'danger' : 'success'}
              errorMessage={errorMessage}
              onValueChange={setAddressSearch}
              style={{ fontSize: '16px' }}
            />
          </div>
          <div className='w-full flex items-center flex-wrap xl:justify-end gap-6 xl:w-3/4'>
            <div className='flex justify-start xl:items-end m-0 w-full xl:w-auto'>
              <Switch
                isSelected={forSale}
                onValueChange={handleForSaleChange}
                size='lg'
                color='secondary'
                thumbIcon={({ isSelected }) =>
                  isSelected ? (
                    <IoHomeSharp className='text-secondary' />
                  ) : (
                    <IoHomeOutline className='text-secondary' />
                  )
                }
              >
                {forSale ? (
                  <p className='m-0'>For Sale</p>
                ) : (
                  <p className='m-0'>For Rent</p>
                )}
              </Switch>
            </div>
            <div className='flex justify-center items-center custom-width-45 xl:w-28'>
              <Dropdown classNames='w-full flex p-0 ' radius='none'>
                <DropdownTrigger classNames='w-[40vw] xl:w-[30vw]'>
                  <Button
                    variant='bordered'
                    radius='none'
                    fullWidth
                    className='h-[55px] border-border_line m-0 text-input-grey'
                  >
                    {selectedPriceValue}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label='Multiple selection example'
                  variant='bordered'
                  radius='none'
                  closeOnSelect={false}
                >
                  <DropdownItem key='price1' variant='light' radius='none'>
                    <div className='w-[300px] md:w-[40vw] xl:w-[30vw] flex flex-wrap justify-between items-center gap-3 rounded-none'>
                      <Autocomplete
                        variant='bordered'
                        label='Min Price'
                        labelPlacement='inside'
                        radius='none'
                        name='min'
                        value={filter.ListPrice.min}
                        allowsCustomValue={true}
                        onSelectionChange={handlePriceMinChange}
                        onInputChange={handlePriceMinChange}
                        inputValue={priceRangeMin}
                        scrollShadowProps={{
                          isEnabled: false,
                          hideScrollBar: false,
                        }}
                        className='flex price-width-45 border-border_line text-input-grey'
                        style={{ fontSize: '16px' }}
                      >
                        {pricesMin.map((f) => (
                          <AutocompleteItem key={f.value} value={f.value}>
                            {f.label}
                          </AutocompleteItem>
                        ))}
                      </Autocomplete>
                      <p className='m-0'>to</p>
                      <Autocomplete
                        variant='bordered'
                        label='Max Price'
                        labelPlacement='inside'
                        radius='none'
                        name='max'
                        value={filter.ListPrice.max}
                        allowsCustomValue={true}
                        onSelectionChange={handlePriceMaxChange}
                        onInputChange={handlePriceMaxChange}
                        inputValue={priceRangeMax}
                        scrollShadowProps={{
                          isEnabled: false,
                          hideScrollBar: false,
                        }}
                        className='flex price-width-45 border-border_line text-input-grey'
                        style={{ fontSize: '16px' }}
                      >
                        {filteredMaxPrices.map((f) => (
                          <AutocompleteItem key={f.value} value={f.value}>
                            {f.label}
                          </AutocompleteItem>
                        ))}
                      </Autocomplete>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className='flex justify-center items-center custom-width-45 xl:w-28'>
              <Autocomplete
                variant='bordered'
                label='Beds'
                labelPlacement='inside'
                radius='none'
                className='xl:h-[55px] border-border_line text-input-grey'
                selectedKey={bedrooms}
                onInputChange={handleBedroomsChange}
                onSelectionChange={handleBedroomsChange}
                style={{ fontSize: '16px' }}
              >
                {beds.map((f) => (
                  <AutocompleteItem key={f.value} value={f.value}>
                    {f.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
            <div className='flex justify-center items-center custom-width-45 xl:w-28'>
              <Autocomplete
                variant='bordered'
                label='Baths'
                labelPlacement='inside'
                radius='none'
                className='xl:h-[55px] border-border_line text-input-grey'
                selectedKey={bathrooms}
                onSelectionChange={handleBathroomsChange}
                style={{ fontSize: '16px' }}
              >
                {baths.map((f) => (
                  <AutocompleteItem key={f.value} value={f.value}>
                    {f.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
            <div className='containerProperty flex justify-center items-center custom-width-45 xl:w-1/5'>
              <Select
                label='Property Types'
                selectionMode='multiple'
                selectedKeys={valuesProperty}
                className='max-w-full'
                variant='bordered'
                radius='none'
                onChange={handleValuesPropertyTypeChange}
                style={{ fontSize: '16px' }}
              >
                {propertyTypes.map((f) => (
                  <SelectItem
                    key={f.value}
                    value={f.value}
                    style={{ fontSize: '16px' }}
                  >
                    {f.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Button
              className='border border-solid  h-[55px] mt-auto border-primary-orange text-primary-orange font-outfit inline-block uppercase hover:bg-primary-orange hover:text-white custom-width-45 xl:w-1/6'
              radius='none'
              color='warning'
              onClick={handleOpenFilterPanel}
            >
              More Filters
            </Button>
          </div>
        </div>
      </Container>
      <Container customStyle='relative w-full flex flex-col flex-wrap bg-white responsive_container_full_width gap-y-5'>
        <div className='w-full flex flex-wrap justify-between items-start gap-y-12 xl:gap-y-0 '>
          <div className='flex flex-wrap justify-between border-b-2 lg:border-0 py-10 px-5 lg:pb-12 xl:pr-12 w-full lg:w-1/2 gap-y-5 overflow-auto h-[50rem] lg:h-[40vw] xl:h-[40vw]'>
            {/* {!isDataEmptyMls ? ( */}
            {isDataEmptyMls ? (
              mlsListing.map((property, i) => (
                <PropertyCard key={i} data={property} />
              ))
            ) : (
              <div className='flex justify-center flex-col space-y-5 p-4 mx-auto text-center'>
                <BsFillHouseSlashFill
                  color='primary'
                  size={100}
                  className='mx-auto text-primary'
                />
                <p>There are no results. Please try a different search</p>
              </div>
            )}

            <div className='flex w-full justify-center bottom-0'>
              <Pagination
                isCompact
                showControls
                showShadow
                color='primary'
                page={skipPage}
                total={pagesMls}
                onChange={(skipPage) => setSkipPage(skipPage)}
                className='px-5'
              />
            </div>
          </div>
          <div className='w-full lg:hidden flex justify-center transform text-center text-gray-600'>
            <p className='animate-bounce mb-0 font-semibold'>
              Scroll to see more properties
            </p>
          </div>
          <div className='flex flex-col justify-center w-full lg:w-1/2 gap-y-10'>
            <div className='w-full h-[35rem] lg:h-[40vw] xl:h-[40vw] flex'>
              <div className='overflow-hidden w-full h-full'>
                <CustomMap
                  ref={mapRef}
                  data={propertiesMap}
                  initialViewPort={initialViewPort}
                  homeSearch={true}
                />
              </div>
            </div>
          </div>
        </div>
        {isFilterPanelOpen && (
          <div className='absolute top-0 right-0 lg:h-full overflow-auto w-full lg:w-[35vw] xl:w-[25vw] bg-white z-10 pt-20 pb-10 px-5 border-1 lg:border-l-1 border-primary-orange shadow-sm'>
            <RiCloseCircleFill
              color='primary'
              size={25}
              className='absolute top-5 right-5 cursor-pointer'
              onClick={handleCloseFilterPanel}
            />
            <div className='w-full gap-y-5'>
              <p className='flex m-2'>Square Footage</p>
              <div className='w-full flex flex-wrap justify-between gap-y-5'>
                <Autocomplete
                  variant='bordered'
                  label='No Min'
                  labelPlacement='inside'
                  radius='none'
                  className='flex xl:h-[55px] custom-width-45 border-border_line text-input-grey'
                  selectedKey={livingSqftMin}
                  onSelectionChange={handleSqftMinChange}
                  scrollShadowProps={{
                    isEnabled: false,
                    hideScrollBar: false,
                  }}
                  style={{ fontSize: '16px' }}
                >
                  {squareFootage.map((f) => (
                    <AutocompleteItem key={f.value} value={f.value}>
                      {f.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>

                {/* <Select
                  variant='bordered'
                  label='No Min'
                  labelPlacement='inside'
                  radius='none'
                  value={filter.LivingArea.min}
                  onChange={handleSqftMinChange}
                  scrollShadowProps={{
                    isEnabled: false,
                    hideScrollBar: false,
                  }}
                  className='flex custom-width-45 xl:h-[55px] border-border_line'
                >
                  {squareFootage.map((f) => (
                    <SelectItem key={f.value} value={f.value}>
                      {f.label}
                    </SelectItem>
                  ))}
                </Select> */}

                {/* max living Area */}

                <Autocomplete
                  variant='bordered'
                  label='No Max'
                  labelPlacement='inside'
                  radius='none'
                  className='flex xl:h-[55px] custom-width-45 border-border_line text-input-grey'
                  selectedKey={livingSqftMax}
                  onSelectionChange={handleSqftMaxChange}
                  scrollShadowProps={{
                    isEnabled: false,
                    hideScrollBar: false,
                  }}
                  style={{ fontSize: '16px' }}
                >
                  {squareFootageMax.map((f) => (
                    <AutocompleteItem key={f.value} value={f.value}>
                      {f.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>

                {/* <Select
                  variant='bordered'
                  label='No Max'
                  labelPlacement='inside'
                  radius='none'
                  value={filter.LivingArea.max}
                  onChange={handleSqftMaxChange}
                  scrollShadowProps={{
                    isEnabled: false,
                    hideScrollBar: false,
                  }}
                  className='flex custom-width-45 xl:h-[55px] border-border_line'
                >
                  {squareFootageMax.map((f) => (
                    <SelectItem key={f.value} value={f.value}>
                      {f.label}
                    </SelectItem>
                  ))}
                </Select> */}
              </div>

              <Divider className='my-4' />
              <p className='flex m-1'>Year Built</p>
              <div className='w-full flex flex-wrap justify-between gap-y-5'>
                <Autocomplete
                  variant='bordered'
                  label='No Min'
                  labelPlacement='inside'
                  radius='none'
                  className='flex xl:h-[55px] custom-width-45 border-border_line text-input-grey'
                  selectedKey={yearMin}
                  onSelectionChange={handleYearBuildMinChange}
                  scrollShadowProps={{
                    isEnabled: false,
                    hideScrollBar: false,
                  }}
                  style={{ fontSize: '16px' }}
                >
                  {yearArray.map((f) => (
                    <AutocompleteItem key={f.value} value={f.value}>
                      {f.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>

                {/* <Select
                  variant='bordered'
                  label='No Min'
                  labelPlacement='inside'
                  radius='none'
                  value={filter.YearBuilt.min}
                  scrollShadowProps={{
                    isEnabled: false,
                    hideScrollBar: false,
                  }}
                  onChange={handleYearBuildMinChange}
                  className='flex custom-width-45 xl:h-[55px] border-border_line'
                >
                  {yearArray?.map((f) => (
                    <SelectItem key={f.value} value={f.value}>
                      {f.label}
                    </SelectItem>
                  ))}
                </Select> */}

                {/* Max Year */}
                <Autocomplete
                  variant='bordered'
                  label='No Max'
                  labelPlacement='inside'
                  radius='none'
                  className='flex xl:h-[55px] custom-width-45 border-border_line text-input-grey'
                  selectedKey={yearMax}
                  onSelectionChange={handleYearBuildMaxChange}
                  scrollShadowProps={{
                    isEnabled: false,
                    hideScrollBar: false,
                  }}
                  style={{ fontSize: '16px' }}
                >
                  {yearArray.map((f) => (
                    <AutocompleteItem key={f.value} value={f.value}>
                      {f.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>

                {/* <Select
                  variant='bordered'
                  label='No Max'
                  labelPlacement='inside'
                  radius='none'
                  value={filter.YearBuilt.max}
                  onChange={handleYearBuildMaxChange}
                  scrollShadowProps={{
                    isEnabled: false,
                    hideScrollBar: false,
                  }}
                  className='flex custom-width-45 xl:h-[55px] border-border_line'
                >
                  {yearArrayMax?.map((f) => (
                    <SelectItem key={f.value} value={f.value}>
                      {f.label}
                    </SelectItem>
                  ))}
                </Select> */}
              </div>
              <Divider className='my-4' />
              <p className='flex m-1'>Status</p>
              <div className='w-full flex flex-wrap justify-between gap-5'>
                <div className='flex flex-col gap-y-5 custom-width-45 text-left'>
                  <Checkbox
                    defaultSelected={false}
                    color='secondary'
                    value={filter.StandardStatus}
                    isSelected={selectedStatuses.includes('Active') === true}
                    onValueChange={(isChecked) =>
                      handleStatusChange('Active', isChecked)
                    }
                  >
                    Active
                  </Checkbox>
                  <Checkbox
                    defaultSelected={false}
                    color='secondary'
                    value={filter.StandardStatus}
                    isSelected={selectedStatuses.includes('Pending') === true}
                    onValueChange={(isChecked) =>
                      handleStatusChange('Pending', isChecked)
                    }
                  >
                    Pending
                  </Checkbox>
                </div>
                <div className='flex gap-y-5 flex-col custom-width-45 text-left'>
                  <Checkbox
                    defaultSelected={false}
                    color='secondary'
                    value={filter.StandardStatus}
                    isSelected={
                      selectedStatuses.includes('Active Under Contract') ===
                      true
                    }
                    onValueChange={(isChecked) =>
                      handleStatusChange('Active Under Contract', isChecked)
                    }
                  >
                    Under contract
                  </Checkbox>
                  <Checkbox
                    defaultSelected={false}
                    color='secondary'
                    value={filter.StandardStatus}
                    isSelected={selectedStatuses.includes('Closed') === true}
                    onValueChange={(isChecked) =>
                      handleStatusChange('Closed', isChecked)
                    }
                  >
                    Sold
                  </Checkbox>
                </div>
              </div>
              <Divider className='my-4' />
              <div className='w-full flex flex-col gap-y-5'>
                <div className='w-full flex justify-between items-center flex-wrap gap-y-5'>
                  <p className='flex m-0'>Garage Spaces</p>
                  <Autocomplete
                    variant='bordered'
                    label='All'
                    labelPlacement='inside'
                    radius='none'
                    className='flex xl:h-[55px] custom-width-45 border-border_line text-input-grey'
                    selectedKey={garage}
                    onSelectionChange={handleGarageChange}
                    scrollShadowProps={{
                      isEnabled: false,
                      hideScrollBar: false,
                    }}
                    style={{ fontSize: '16px' }}
                  >
                    {garageSpace.map((f) => (
                      <AutocompleteItem key={f.value} value={f.value}>
                        {f.label}
                      </AutocompleteItem>
                    ))}
                  </Autocomplete>

                  {/* <Select
                    variant='bordered'
                    label='All'
                    labelPlacement='inside'
                    radius='none'
                    name='GarageSpaces'
                    onChange={handleGarageChange}
                    value={garage}
                    scrollShadowProps={{
                      isEnabled: false,
                      hideScrollBar: false,
                    }}
                    className='flex custom-width-45 border-border_line'
                  >
                    {garageSpace?.map((f) => (
                      <SelectItem key={f.value} value={f.value}>
                        {f.label}
                      </SelectItem>
                    ))}
                  </Select> */}
                </div>
                <div className='w-full flex justify-between items-center flex-wrap gap-y-5'>
                  <p className='flex m-0'>Stories</p>
                  <Autocomplete
                    variant='bordered'
                    label='All'
                    labelPlacement='inside'
                    radius='none'
                    className='flex xl:h-[55px] custom-width-45 border-border_line text-input-grey'
                    selectedKey={stories}
                    onSelectionChange={handleStoriesChange}
                    scrollShadowProps={{
                      isEnabled: false,
                      hideScrollBar: false,
                    }}
                    style={{ fontSize: '16px' }}
                  >
                    {storiesList.map((f) => (
                      <AutocompleteItem key={f.value} value={f.value}>
                        {f.label}
                      </AutocompleteItem>
                    ))}
                  </Autocomplete>
                  {/* <Select
                    variant='bordered'
                    label='All'
                    labelPlacement='inside'
                    radius='none'
                    name='StoriesTotal'
                    value={stories}
                    onChange={handleStoriesChange}
                    scrollShadowProps={{
                      isEnabled: false,
                      hideScrollBar: false,
                    }}
                    className='flex custom-width-45 border-border_line'
                  >
                    {storiesList?.map((f) => (
                      <SelectItem key={f.value} value={f.value}>
                        {f.label}
                      </SelectItem>
                    ))}
                  </Select> */}
                </div>
              </div>
            </div>
            <Divider className='my-4' />
            <div className='w-full flex flex-wrap justify-between items-center'>
              <div className='w-1/2 flex'>
                <p className='font-medium m-0'>
                  Total: {propertiesData['@odata.count']}
                </p>
              </div>
              <Button
                className='w-1/3 border flex border-solid  mt-auto border-primary-orange text-primary-orange font-outfit uppercase hover:bg-primary-orange hover:text-white'
                radius='none'
                color='warning'
                onClick={Reset}
              >
                Reset
              </Button>
            </div>
          </div>
        )}
      </Container>
    </>
  )
}

export default ListingPage
