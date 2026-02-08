import React from 'react'
import Container from '@/components/Container'

const InternalFullContent = ({ children, bgContainer, minHeight }) => {
  return (
    <section className={`w-full py-12 xl:py-24 ${bgContainer} ${minHeight}`}>
      <Container customStyle='w-full flex flex-col flex-wrap responsive_about_container_width gap-y-5'>
        {children}
      </Container>
    </section>
  )
}

export default InternalFullContent
