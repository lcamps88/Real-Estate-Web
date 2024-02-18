'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.webp'

const Header = () => {
  return (
    <section>
      <Link href='/' passHref>
        <Image
          src={Logo}
          alt='Real Estate 4 All logo'
          className='w-full min-w-[10rem] xl:min-w-[15rem] max-w-[12rem] xl:max-w-[17rem]'
        />
      </Link>
    </section>
  )
}

export default Header
