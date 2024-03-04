import NewsletterForm from './NewsletterForm'

const ContactUs = ({pTop}) => {
  return (
    <div className={`bg-white responsive_container_width pt-20 pb-20 ${pTop} xl:pb-24`}>
      <h4 className='pb-5'>subscribe to our mailing list</h4>
      <h3 className='text-primary-grey pb-5'>
        RECEIVE EXCLUSIVE LISTINGS IN YOUR INBOX
      </h3>
      <p className='text-center'>
        Are you interested in buying a home? Look no further than working with
        real estate experts.
      </p>
      <NewsletterForm/>
    </div>
  )
}

export default ContactUs
