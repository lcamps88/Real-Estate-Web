import axios from 'axios'
import { getToken } from '@/data/authToken'

export const fetchFeaturedProperties = async () => {
  const url = 'https://api.idxbroker.com/clients/featured'
  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      accesskey: process.env.NEXT_PUBLIC_IDX_BROKER_API,
      outputtype: 'json',
    },
  }

  try {
    const response = await axios.get(url, config)

    return response.data
  } catch (error) {
    console.error('Error access to properties list:', error)
    return null
  }
}

export const fetchProperties = async () => {
  const headers = {
    'Content-Type': 'application/json',
    accesskey: process.env.NEXT_PUBLIC_IDX_BROKER_API,
  }

  const response = await fetch(`https://api.idxbroker.com/clients/featured`, {
    headers: headers,
  })

  const result = await response.json()
  return result
}

// List Properties pagination
export const connectMlsRouterProperties = async (
  top = 10,
  skip = 0,
  filter
) => {
  const currentYear = new Date().getFullYear()

  const accessToken = await getToken()

  let filterQuery = ''
  const filterParts = []

  if (filter.PropertyType) {
    // const properties = filter.PropertyType.split(',').map((property) =>
    //   property.trim()
    // )
    // const propertyFilter =
    //   properties.length > 1
    //     ? `PropertyType in (${properties
    //         .map((property) => `'${property}'`)
    //         .join(', ')})`
    //  : `PropertyType eq '${filter.PropertyType}'`

    const properties = filter.PropertyType.map((property) => property.trim())
    const propertyFilter =
      properties.length > 1
        ? `PropertyType in (${properties
            .map((property) => `'${property}'`)
            .join(', ')})`
        : `PropertyType eq '${Array.from(filter.PropertyType)}'`
    filterParts.push(propertyFilter)
  }

  if (filter.StandardStatus) {
    const status = filter.StandardStatus.split(',').map((s) => s.trim())
    const statusFilter =
      status.length > 1
        ? `StandardStatus in (${status.map((s) => `'${s}'`).join(', ')})`
        : `StandardStatus eq '${filter.StandardStatus}'`
    filterParts.push(statusFilter)
  }
  if (filter.GarageSpaces) {
    filterParts.push(`GarageSpaces le ${filter.GarageSpaces}`)
  }
  if (filter.StoriesTotal) {
    filterParts.push(`StoriesTotal le ${filter.StoriesTotal}`)
  }
  if (filter.BedroomsTotal) {
    filterParts.push(`BedroomsTotal le ${filter.BedroomsTotal}`)
  }
  if (filter.BathroomsTotalInteger) {
    filterParts.push(`BathroomsTotalInteger le ${filter.BathroomsTotalInteger}`)
  }
  if (filter.City) {
    const cities = filter.City.split(',').map((city) => city.trim())
    const cityFilter =
      cities.length > 1
        ? `City in (${cities.map((city) => `'${city}'`).join(', ')})`
        : `City eq '${filter.City}'`
    filterParts.push(cityFilter)
  }

  if (filter.ListPrice.min && filter.ListPrice.max) {
    filterParts.push(
      `ListPrice ge ${filter.ListPrice.min} and ListPrice le ${filter.ListPrice.max}`
    )
  }
  if (filter.YearBuilt.min || filter.YearBuilt.max) {
    filterParts.push(
      `YearBuilt ge ${
        filter.YearBuilt.min === null ? 0 : filter.YearBuilt.min
      } and YearBuilt le ${
        filter.YearBuilt.max === null ? currentYear : filter.YearBuilt.max
      }`
    )
  }
  if (filter.LivingArea.min || filter.LivingArea.max) {
    filterParts.push(
      `BuildingAreaTotal ge ${
        filter.LivingArea.min === (null || '' || undefined)
          ? 0
          : filter.LivingArea.min
      } and BuildingAreaTotal le ${
        filter.LivingArea.max === null ? 1000000000 : filter.LivingArea.max
      }`
    )
  }

  if (filter.ForSaleOrRent) {
    filterParts.push(filter.ForSaleOrRent)
  }

  if (filterParts.length) {
    filterQuery = `&$filter=${filterParts.join(' and ')}`
  }

  const baseUrl = 'https://api.realtyfeed.com/reso/odata/Property'
  const url = `${baseUrl}?$top=${top}&$skip=${skip}${filterQuery}`

  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': process.env.NEXT_PUBLIC_MLS_API_KEY,
      Authorization: `Bearer ${accessToken}`,
      outputtype: 'json',
    },
  }

  try {
    const response = await axios.get(url, config)
    return {
      data: response.data,
      nextSkip: skip + top,
    }
  } catch (error) {
    console.error('Error access to properties list:', error)
    return null
  }
}

// List all Properties select
export const connectAllMlsRouterProperties = async (topAll, skip, filter) => {
  const accessToken = await getToken()

  let filterQuery = ''
  const filterParts = []

  if (filter.PropertyType) {
    const properties = filter.PropertyType.map((property) => property.trim())
    const propertyFilter =
      properties.length > 1
        ? `PropertyType in (${properties
            .map((property) => `'${property}'`)
            .join(', ')})`
        : `PropertyType eq '${Array.from(filter.PropertyType).join(', ')}'`
    filterParts.push(propertyFilter)
  }
  if (filter.StandardStatus) {
    const status = filter.StandardStatus.split(',').map((s) => s.trim())
    const statusFilter =
      status.length > 1
        ? `StandardStatus in (${status.map((s) => `'${s}'`).join(', ')})`
        : `StandardStatus eq '${filter.StandardStatus}'`
    filterParts.push(statusFilter)
  }
  if (filter.GarageSpaces) {
    filterParts.push(`GarageSpaces le ${filter.GarageSpaces}`)
  }
  if (filter.StoriesTotal) {
    filterParts.push(`StoriesTotal le ${filter.StoriesTotal}`)
  }
  if (filter.BedroomsTotal) {
    filterParts.push(`BedroomsTotal le ${filter.BedroomsTotal}`)
  }
  if (filter.BathroomsTotalInteger) {
    filterParts.push(`BathroomsTotalInteger le ${filter.BathroomsTotalInteger}`)
  }
  if (filter.City) {
    const cities = filter.City.split(',').map((city) => city.trim())
    const cityFilter =
      cities.length > 1
        ? `City in (${cities.map((city) => `'${city}'`).join(', ')})`
        : `City eq '${filter.City}'`
    filterParts.push(cityFilter)
  }
  if (filter.ListPrice.min && filter.ListPrice.max) {
    filterParts.push(
      `ListPrice ge ${filter.ListPrice.min} and ListPrice le ${filter.ListPrice.max}`
    )
  }
  if (filter.YearBuilt.min && filter.YearBuilt.max) {
    filterParts.push(
      `YearBuilt ge ${filter.YearBuilt.min} and YearBuilt le ${filter.YearBuilt.max}`
    )
  }
  if (filter.LivingArea.min && filter.LivingArea.max) {
    filterParts.push(
      `BuildingAreaTotal ge ${filter.LivingArea.min} and BuildingAreaTotal le ${filter.LivingArea.max}`
    )
  }
  if (filter.ForSaleOrRent) {
    filterParts.push(filter.ForSaleOrRent)
  }
  if (filterParts.length) {
    filterQuery = `&$filter=${filterParts.join(' and ')}`
  }

  const baseUrl = 'https://api.realtyfeed.com/reso/odata/Property'
  const url = `${baseUrl}?$top=${topAll}&$skip=${skip}${filterQuery}`

  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': process.env.NEXT_PUBLIC_MLS_API_KEY,
      Authorization: `Bearer ${accessToken}`,
      outputtype: 'json',
    },
  }

  try {
    const response = await axios.get(url, config)
    return {
      data: response.data,
      nextSkip: skip + top,
    }
  } catch (error) {
    console.error(
      'Error accessing properties list:',
      error.response?.data || error.message
    )
    return null
  }
}

//Property details
export const getPropertyDetails = async (property) => {
  const accessToken = await getToken()

  const baseUrl = 'https://api.realtyfeed.com/reso/odata/Property'
  const url = `${baseUrl}(${property})`

  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': process.env.NEXT_PUBLIC_MLS_API_KEY,
      Authorization: `Bearer ${accessToken}`,
      outputtype: 'json',
    },
  }
  try {
    const response = await axios.get(url, config)
    return { data: response.data }
  } catch (error) {
    console.error('Error access to properties deatils list:', error)
    return null
  }
}

// Home page Slider
export const homeMlsRouterProperties = async (top = 10, skip = 2) => {
  const accessToken = await getToken()
  const baseUrl = 'https://api.realtyfeed.com/reso/odata/Property'
  const url = `${baseUrl}?$top=${top}&$skip=${skip}&$filter=StandardStatus in ('Active', 'Active Under Contract') and City in ('West Palm Beach', 'Palm Spring', 'Boca Raton', 'Delray Beach', 'Wellington', 'Boyton Beach', 'Royal Palm Beach', 'Lake Work', 'Palm Beach', 'Jupiter', 'Palm Beach Garden') and ListPrice ge 400000 and ListPrice le 500000 and (PropertySubType ne 'Residential Rental' and PropertyType ne 'Residential Lease')`

  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': process.env.NEXT_PUBLIC_MLS_API_KEY,
      Authorization: `Bearer ${accessToken}`,
      outputtype: 'json',
    },
  }

  try {
    const response = await axios.get(url, config)
    return {
      data: response.data,
      nextSkip: skip + top,
    }
  } catch (error) {
    console.error('Error access to properties list:', error)
    return null
  }
}
