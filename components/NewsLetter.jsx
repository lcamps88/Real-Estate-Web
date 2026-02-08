import NewsletterForm from './NewsletterForm'

const NewsLetter = ({ pTop }) => {
  return (
    <section
      className={`bg-white w-full flex flex-col m-auto responsive_container_width py-14 ${pTop} xl:pb-24`}
    >
      <h4 className='pb-5'>Unlock Exclusive Listings & Expert Guidance</h4>
      <h3 className='text-primary-grey pb-5'>
        Own your dream home in Florida!
      </h3>
      <p className='text-center'>
        Stay ahead of the market with expert insights and insider access to the
        hottest properties before they hit the mainstream market.
      </p>
      <NewsletterForm />
    </section>
  )
}

export default NewsLetter
