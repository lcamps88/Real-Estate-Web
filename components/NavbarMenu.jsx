import { useEffect, useRef, useState } from 'react'
import animationData from '@/public/lottie/menu.json'
import Image from 'next/image'
import Lottie from 'lottie-web'
import Logo from '@/public/images/logo.webp'
import Link from 'next/link'

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const animationContainer = useRef(null)
  const anim = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (anim.current) {
      anim.current?.setDirection(isOpen ? -1 : 1)
      anim.current?.play()
    }
  }

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData,
      })

      return () => anim.current?.destroy()
    }
  }, [])

  return (
    <nav className='relative'>
      <button
        className='absolute z-50 w-7 h-7 right-2 xl:right-0'
        onClick={toggleMenu}
        ref={animationContainer}
      ></button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div className='absolute top-0 right-0 h-full w-full lg:w-1/2 xl:w-1/3 bg-primary-blue p-6 xl:p-10'>
          <Image
            src={Logo}
            alt=''
            className='w-28 mb-14 ml-2 xl:ml-10 xl:mb-24'
          />
          <ul className='flex flex-col items-center'>
            <li className='mb-10'>
              <Link className='nav_menu hover:text-primary-orange' href='/'>
                Home
              </Link>
            </li>
            <li className='mb-10'>
              <Link className='nav_menu hover:text-primary-orange' href='/meet-the-team'>
                Meet the Team
              </Link>
            </li>
            <li className='mb-10'>
              {' '}
              <Link className='nav_menu hover:text-primary-orange' href='#'>
                Home Search
              </Link>
            </li>
            <li className='mb-10'>
              {' '}
              <Link className='nav_menu hover:text-primary-orange' href='#'>
                Your Free Home Valuation
              </Link>
            </li>
            <li className='mb-10'>
              {' '}
              <Link className='nav_menu hover:text-primary-orange' href='#'>
                Neighborhoods
              </Link>
            </li>
            <li className='mb-10'>
              {' '}
              <Link className='nav_menu hover:text-primary-orange' href='#'>
                Testimonials
              </Link>
            </li>
            <li className='mb-10'>
              {' '}
              <Link className='nav_menu hover:text-primary-orange' href='#'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarMenu
