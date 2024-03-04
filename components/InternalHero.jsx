import Container from './Container'
import Header from './Header'

const InternalHero = ({ title, bgImage }) => {
  return (
    <section
      className={`internal_hero ${bgImage} bg-cover bg-no-repeat bg-center`}
    >
      <div className='absolute bg-black bg-internal-hero-opacity-74 w-full h-full flex flex-col items-center'>
        <Header className='fixed z-10' />
        <Container customStyle='flex z-10 flex-col items-center responsive_container_width mt-auto mb-auto'>
          <h1 className='internal text-white pb-10'>{title}</h1>
        </Container>
      </div>
    </section>
  )
}

export default InternalHero
