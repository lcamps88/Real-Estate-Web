'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import Container from './Container'
import NavbarMenu from './NavbarMenu'

const Header = () => {
  return (
    <Container className='w-full flex justify-between responsive_container_width_nav py-10'>
      <div className='hidden xl:flex justify-between pt-6 w-1/4'>
        <Link className='nav_menu hover:text-primary-orange' href='/meet-the-team'>
          meet team
        </Link>
        <Link className='nav_menu hover:text-primary-orange' href='/neighborhoods'>
          neighborhoods
        </Link>
      </div>
      <Link href='/' passHref>
        <Image
          src={Logo}
          alt='Real Estate 4 All logo'
          className='w-28 xl:min-w-[12rem] max-w-[12rem] xl:max-w-[17rem]'
        />
      </Link>
      <div className='flex justify-end xl:justify-between pt-4 w-1/4'>
        <Link className='hidden xl:flex  nav_menu hover:text-primary-orange' href='#'>
          home search
        </Link>
        <Link className='hidden xl:flex nav_menu hover:text-primary-orange' href='/contact-us'>
          contact
        </Link>
        <NavbarMenu/>
      </div>
      
    </Container>
  )
}

export default Header
