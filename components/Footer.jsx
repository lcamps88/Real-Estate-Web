import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import LogoLink from '@/public/images/footer-link.webp'
import LogoFooter from '@/public/images/logo-footer.png'
import facebook from '@/public/icons/facebook.svg'
import instagram from '@/public/icons/instagram.svg'
import twitter from '@/public/icons/twitter.svg'
import youtube from '@/public/icons/youtube.svg'

const Footer = () => {
  let currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container customStyle='w-full flex flex-col flex-wrap justify-center gap-y-12 xl:gap-y-0 lg:justify-between md:flex-row items-start responsive_container_width py-20 lg:py-[6.25rem]'>
        <div className='w-full flex justify-center xl:justify-start xl:w-1/6'>
          <Link href='/' passHref>
            <Image src={LogoFooter} alt='ITorres Solution' />
          </Link>
        </div>
        <div className='flex flex-col item-center text-center lg:items-start w-full lg:w-2/6 xl:w-1/5'>
          <h4 className='pb-4'>Services</h4>
          <Link href='#' passHref className='link_footer text-white'>
            Home
          </Link>
          <Link href='#' passHref className='link_footer text-white'>
            Portfolio
          </Link>
          <Link href='#' passHref className='link_footer text-white'>
            Neighborhoods
          </Link>
          <Link href='#' passHref className='link_footer text-white'>
            Home Search
          </Link>
          <Link href='#' passHref className='link_footer text-white'>
            Contact Us{' '}
          </Link>
        </div>
        <div className='flex flex-col item-center text-center lg:items-start w-full lg:w-2/6 xl:w-1/5'>
          <h4 className='pb-4'>Address</h4>
          <Link href='#' passHref className='link_footer text-white'>
            (Address Empty) (00000)
          </Link>
          <Link href='#' passHref className='link_footer text-primary-orange'>
            Map & directions
          </Link>
        </div>
        <div className='flex flex-col item-center text-center lg:items-start w-full lg:w-2/6 xl:w-1/5'>
          <h4 className='pb-4'>Contact</h4>
          <Link href='#' passHref className='link_footer text-primary-orange'>
            123-456-7890{' '}
          </Link>
          <Link href='#' passHref className='link_footer text-primary-orange'>
            info@realestateflorida.com{' '}
          </Link>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-x-10 xl:gap-x-0 xl:justify-between w-full xl:w-1/6'>
          <Link href='#' passHref className='mr-6'>
            <Image src={facebook} alt='facebook' />
          </Link>
          <Link href='#' passHref className='mr-6'>
            <Image src={instagram} alt='facebook' />
          </Link>
          <Link href='#' passHref className='mr-6'>
            <Image src={twitter} alt='facebook' />
          </Link>
          <Link href='#' passHref>
            <Image src={youtube} alt='facebook' />
          </Link>
        </div>
      </Container>

      <Container customStyle='flex flex-row justify-between items-start responsive_container_width pb-12'>
        <div className='text-primary-grey'>
          <p>
            Turpis nunc eget lorem dolor sed viverra ipsum nunc. Felis bibendum
            ut tristique et egestas quis ipsum suspendisse. Neque aliquam
            vestibulum morbi blandit cursus risus at. Nec feugiat in fermentum
            posuere urna nec tincidunt praesent. Nisl rhoncus mattis rhoncus
            urna neque. Ultrices vitae auctor eu augue ut lectus arcu bibendum.
            Cursus mattis molestie a iaculis at erat. Facilisis gravida neque
            convallis a cras.
          </p>
        </div>
      </Container>
      <Container customStyle='flex flex-col justify-center gap-y-5 lg:gap-y-0 responsive_container_width line_footer'>
        <div className='text-primary-grey'>
          <p className='mb-0'>
            © Copyright {currentYear}. Real Estate Florida. All Rights Reserved. |
            <Link href='#' className='link_footer'>
              {' '}
              Privacy Policy{' '}
            </Link>
          </p>
        </div>
       
      </Container>
    </footer>
  )
}

export default Footer
