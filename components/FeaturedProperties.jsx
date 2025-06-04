'use client'

import Container from './Container'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ArrowLeft from '@/public/images/arrow-left.png'
import ArrowRight from '@/public/images/arrow-right.png'
import Image from 'next/image'

export const ButtonGroup = ({ next, previous }) => {
  return (
    <div className='w-full hidden lg:flex carousel-button-group absolute left-0 right-0 justify-between'>
      <button className='w-16 h-16 bg-white' onClick={() => previous()}>
        <Image src={ArrowLeft} alt='' className='m-auto' />
      </button>

      <button onClick={() => next()} className='w-16 h-16 bg-primary-orange'>
        <Image src={ArrowRight} alt='' className='m-auto' />
      </button>
    </div>
  )
}

export const PropertyCard = ({ image, type, description, price }) => {
  return (
    <div
      className={`relative ${image} w-full bg-cover bg-no-repeat h-[30rem] lg:h-[40rem] xl:h-[40vw]`}
    >
      <Container customStyle='absolute bottom-0 flex flex-col lg:flex-row justify-between flex-wrap gap-4 lg:gap-0 py-8 px-8 lg:px-14 bg-opacity-property '>
        <div className='flex gap-5 flex-wrap'>
          <p className='text-white bg-primary-orange m-0 px-2 uppercase'>
            {type}
          </p>
          <p className='m-0'>{description}</p>
        </div>
        <div className='flex'>
          <h4>{price}</h4>
        </div>
      </Container>
    </div>
  )
}

const FeaturedProperties = () => {
  return (
    <section className='w-full flex flex-wrap bg-primary-blue pt-20 pb-20 xl:pb-0 xl:pt-24 gap-y-10 xl:gap-y-0'>
      <Container customStyle='mx-auto responsive_container_width' >
        <h3 data-aos='fade-down' className='text-white'>featured properties</h3>
      </Container>
      <Container customStyle='mx-auto relative xl:top-[4.5vw] 3xl:top-[3.5vw] responsive_container_width'>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=''
          containerClass='container'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 780 },
              items: 1,
              slidesToSlide: 1, // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 450 },
              items: 1,
              slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1, // optional, default to 1.
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=''
          slidesToSlide={1}
          swipeable
        >
          <PropertyCard
            image='bg-slider1'
            type={'for sale'}
            description={'7110 Georgia Avenue, West Palm Beach, FL 33405'}
            price={'$4,150,000'}
          />
          <PropertyCard
            image='bg-neighborhoods1'
            type={'under contrarct'}
            description={'5541 Job Rd, West Palm Beach, FL 33405'}
            price={'$1,150,000'}
          />
        </Carousel>
      </Container>
    </section>
  )
}

export default FeaturedProperties
