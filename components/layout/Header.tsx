'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseLargeLine } from 'react-icons/ri'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-no-scroll')
    } else {
      document.body.classList.remove('body-no-scroll')
    }
  }, [isMenuOpen])

  return (
    <header className='bg-gray-800 text-white p-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        <div className='text-lg font-bold'>ByteSmith Code</div>
        <div className='lg:hidden flex items-center'>
          <button onClick={toggleMenu} aria-label='Toggle menu' className='flex items-center'>
            {isMenuOpen ? <RiCloseLargeLine className='w-6 h-6' /> : <RxHamburgerMenu className='w-6 h-6' />}
          </button>
        </div>
        <div
          className={`flex-col lg:flex lg:flex-row lg:items-center lg:space-x-4 transition-all duration-300 ${isMenuOpen ? 'flex' : 'hidden'
            } lg:flex`}
        >
          <Link href='/' className='py-2 lg:py-0 lg:flex lg:items-center'>
            Home
          </Link>
          <Link href='/about' className='py-2 lg:py-0 lg:flex lg:items-center'>
            About
          </Link>
          <Link href='/services' className='py-2 lg:py-0 lg:flex lg:items-center'>
            Services
          </Link>
          <Link href='/contact' className='py-2 lg:py-0 lg:hidden'>
            Contact
          </Link>
          <Link href='/contact' className='hidden lg:inline-block bg-white text-gray-800 px-4 py-2 rounded'>
            Contact
          </Link>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-4 z-40 lg:hidden'>
          <Link href='/' onClick={toggleMenu} className='text-2xl text-white'>
            Home
          </Link>
          <Link href='/about' onClick={toggleMenu} className='text-2xl text-white'>
            About
          </Link>
          <Link href='/services' onClick={toggleMenu} className='text-2xl text-white'>
            Services
          </Link>
          <Link href='/contact' onClick={toggleMenu} className='text-2xl text-white'>
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
