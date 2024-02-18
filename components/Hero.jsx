import CustomButton from './CustomButton'
import ServicesCard from './ServicesCard'

const Hero = () => {
  return (
    <div>
      <h1>
        Header 1 <span className='font-bold'>Span</span> continue{' '}
      </h1>

      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h3 className='light'>Header 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h4>subscribe to our mailing list</h4>


      {/* <ServicesCard
        image='bg-buying_home'
        title={'buying a home?'}
        content={'Sagittis id consectetur purus ut faucibus.'}
        btn_title={'view properties'}
      />

      <ServicesCard
        image='bg-selling_home'
        title={'selling a home?'}
        content={'Sagittis id consectetur purus ut faucibus.'}
        btn_title={'home evaluation'}
      /> */}
    </div>
  )
}

export default Hero
