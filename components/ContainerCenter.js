import Container from './Container'
import CustomButton from './CustomButton'

const ContainerCenter = () => {
  return (
    <div className='w-full flex bg-white min-h-[30.063rem] justify-center items-center py-20 xl:py-24 '>
      <Container customStyle='flex flex-col items-center gap-y-5 xl:px-[10rem] responsive_container_width'>
        <h4>lorem ipsum</h4>
        <h3>Lectus urna duis convallis</h3>
        <p className='text-center'>
          My Job is to guide clients through the Multi-Faceted aspects of buying
          or selling a property in the area of South Florida. I will lead
          through the intricacies of an important Real Estate purchase or sale
          and I will provide knowledge and experienced to make the right
          decision. I&apos;m committed and passionate about my career and my
          goal as an agent is to continue to exceed buyers and sellers
          expectations. Always looking to finding the right home and making the
          most money for all of my clients.
        </p>
        <CustomButton className='btn_secondary'>lean more</CustomButton>
      </Container>
    </div>
  )
}

export default ContainerCenter
