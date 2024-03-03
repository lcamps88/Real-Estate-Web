import Container from './Container'
import Header from './Header'
import CustomSeach from './CustomSeach'

const Hero = () => {
  return (
    <section className='hero bg-hero-opacity-25'>
      <div className='hero flex justify-center flex-wrap text-center'>
        <video
          className='absolute -z-10 h-full w-full object-cover '
          loop
          autoPlay
          muted
          playsInline
          preload='auto'
        >
          <source src='video/hero-bg.webm' type='video/webm' />
          <source src='video/hero-bg.mp4' type='video/mp4' />
        </video>
        <Header className='fixed' />
        <Container customStyle='responsive_container_width'>
          <h2 className='text-white pb-5'>
            <span className='font-bold'>Unlocking Doors</span> <br/> to a
            Brighter Future
          </h2>
          <p className='text-white'>
            Morbi quis commodo odio aenean sed adipiscing diam.
          </p>
          <CustomSeach />
        </Container>
      </div>
    </section>
  )
}

export default Hero
