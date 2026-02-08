import axios from 'axios'

export const sendNewsletterForm = async (formData) => {
  const formNewsletterData = new FormData()
  formNewsletterData.append('First Name', formData.firstName)
  formNewsletterData.append('Last Name:', formData.lastName)
  formNewsletterData.append('Phone Number:', formData.phone)
  formNewsletterData.append('Email Address:', formData.email)

  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
  const { data } = await axios.post(
    process.env.NEXT_PUBLIC_BASIN_NEWSLETTER_FORM_ENDPOINT,
    formData,
    config
  )
  return data
}

export const sendContactForm = async (formData) => {
  const formContactData = new FormData()
  formContactData.append('First Name', formData.firstName)
  formContactData.append('Last Name:', formData.lastName)
  formContactData.append('Phone Number:', formData.phone)
  formContactData.append('Email Address:', formData.email)
  formContactData.append('Message:', formData.message)

  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
  const { data } = await axios.post(
    process.env.NEXT_PUBLIC_BASIN_CONTACT_FORM_ENDPOINT,
    formData,
    config
  )
  return data
}

export const sendHomeSearchForm = async (formData) => {
  const formHomeSearchData = new FormData()
  formHomeSearchData.append('First Name', formData.firstName)
  formHomeSearchData.append('Last Name:', formData.lastName)
  formHomeSearchData.append('Phone Number:', formData.phone)
  formHomeSearchData.append('Email Address:', formData.email)

  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
  const { data } = await axios.post(
    process.env.NEXT_PUBLIC_BASIN_HOME_SEARCH_FORM_ENDPOINT,
    formData,
    config
  )
  return data
}

export const sendHomeFreeValuationForm = async (formData) => {
  const formHomeFreeValuationData = new FormData()
  formHomeFreeValuationData.append('Address', formData.address)
  formHomeFreeValuationData.append('Beds:', formData.beds)
  formHomeFreeValuationData.append('Baths:', formData.baths)
  formHomeFreeValuationData.append('Garages:', formData.garages)
  formHomeFreeValuationData.append('Upgrades:', formData.upgrades)

  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
  const { data } = await axios.post(
    process.env.NEXT_PUBLIC_BASIN_FREE_HOME_VALUATION_FORM_ENDPOINT,
    formData,
    config
  )
  return data
}

export const sendPropertyDetailsForm = async (formData) => {
  const formPropertyDetailsData = new FormData()
  formPropertyDetailsData.append('First Name', formData.firstName)
  formPropertyDetailsData.append('Last Name:', formData.lastName)
  formPropertyDetailsData.append('Phone Number:', formData.phone)
  formPropertyDetailsData.append('Email Address:', formData.email)
  formPropertyDetailsData.append('Message:', formData.message)

  const config = {
    mode: 'cors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
  const { data } = await axios.post(
    process.env.NEXT_PUBLIC_BASIN_PROPERTY_DETAILS_ENDPOINT,
    formData,
    config
  )
  return data
}
