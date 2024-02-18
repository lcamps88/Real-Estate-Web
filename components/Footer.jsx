import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import LogoLink from '@/public/images/footer-link.webp'
import LogoFooter from '@/public/images/footer_logo.webp'
import facebook from '@/public/icons/facebook.svg'
import instagram from '@/public/icons/instagram.svg'
import twitter from '@/public/icons/twitter.svg'
import youtube from '@/public/icons/youtube.svg'

const Footer = () => {
  let currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container customStyle='flex flex-row justify-between items-start responsive_container_width py-[6.25rem]'>
        <div>
          <Link href='/' passHref>
            <Image src={LogoFooter} alt='ITorres Solution' />
          </Link>
        </div>
        <div className='flex flex-col items-start'>
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
        <div className='flex flex-col items-start'>
          <h4 className='pb-4'>Address</h4>
          <Link href='#' passHref className='link_footer text-white'>
            (Address Empty) (00000)
          </Link>
          <Link href='#' passHref className='link_footer text-primary-orange'>
            Map & directions
          </Link>
        </div>
        <div className='flex flex-col items-start'>
          <h4 className='pb-4'>Contact</h4>
          <Link href='#' passHref className='link_footer text-primary-orange'>
            123-456-7890{' '}
          </Link>
          <Link href='#' passHref className='link_footer text-primary-orange'>
            info@realestate4all.com{' '}
          </Link>
        </div>
        <div className='flex flex-row flex-wrap justify-between'>
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

      <Container customStyle='flex flex-row justify-between items-start responsive_container_width pb-[3rem]'>
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
      <Container customStyle='flex flex-row flex-wrap responsive_container_width line_footer'>
        <div className='text-primary-grey'>
          <p className='mb-5 lg:mb-0'>
            © Copyright {currentYear}. Real Estate 4 All. All Rights Reserved. |
            <Link href='#' className='link_footer'>
              {' '}
              Privacy Policy{' '}
            </Link>
          </p>
        </div>
        <div className='flex flex-row items-center'>
          <p className='mb-5 lg:mb-0'>Website by: </p>
          <Link href='/' passHref>
            {' '}
            <Image src={LogoLink} alt='ITorres Solution' width={134} />
          </Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
