// app/providers.jsx
'use client'
import { useEffect } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Providers = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      disable: 'mobile',
    })
  }, [])
  return <NextUIProvider>{children}</NextUIProvider>
}
