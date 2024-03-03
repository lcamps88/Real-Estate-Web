'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.webp'
import Container from './Container'

const Header = () => {
  return (
    <Container className='w-full flex justify-center xl:justify-between responsive_container_width_nav py-7'>
      <div className='hidden xl:flex pt-4 w-1/4'>
        <Link className='nav_menu hover:text-primary-orange mr-10' href='#'>
          porfolio
        </Link>
        <Link className='nav_menu hover:text-primary-orange' href='#'>
          neighborhoods
        </Link>
      </div>
      <Link href='/' passHref>
        <Image
          src={Logo}
          alt='Real Estate 4 All logo'
          className='w-full min-w-[10rem] xl:min-w-[12rem] max-w-[12rem] xl:max-w-[17rem]'
        />
      </Link>
      <div className='hidden xl:flex pt-4 w-1/4 '>
        <Link className='nav_menu hover:text-primary-orange mr-10' href='#'>
          home search
        </Link>
        <Link className='nav_menu hover:text-primary-orange' href='#'>
          contact
        </Link>
      </div>
    </Container>
  )
}

export default Header
