'use client'

import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import React, { useState } from 'react'
import Link from 'next/link'

const SocialMediaLinks: React.FC = () => {
  const [visibleInfo, setVisibleInfo] = useState<string | null>(null)

  const handleComingSoon = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    alert('Coming soon')
  }

  const toggleInfo = (info: string) => {
    setVisibleInfo(visibleInfo === info ? null : info)
  }

  return (
    <div className='flex flex-col items-center space-y-4'>
      <div className='flex justify-center space-x-8 text-gray-600 dark:text-gray-400'>
        <Link
          href='#'
          onClick={(e) => {
            e.preventDefault()
            toggleInfo('phone')
          }}
          className='hover:text-[#4CAF50] transition-colors'
        >
          <FaPhone size={24} />
        </Link>
        <Link
          href='#'
          onClick={(e) => {
            e.preventDefault()
            toggleInfo('email')
          }}
          className='hover:text-[#D44638] transition-colors'
        >
          <FaEnvelope size={24} />
        </Link>
        <Link href='#' onClick={handleComingSoon} className='hover:text-[#3b5998] transition-colors'>
          <FaFacebook size={24} />
        </Link>
        <Link href='#' onClick={handleComingSoon} className='hover:text-[#1DA1F2] transition-colors'>
          <FaTwitter size={24} />
        </Link>
        <Link href='#' onClick={handleComingSoon} className='hover:text-[#0077B5] transition-colors'>
          <FaLinkedin size={24} />
        </Link>
      </div>
      <div className='min-h-[24px]'>
        {visibleInfo === 'phone' && (
          <div className='text-gray-900 dark:text-gray-100'>
            Phone: <Link href='tel:720-641-7170'>720-641-7170</Link>
          </div>
        )}
        {visibleInfo === 'email' && (
          <div className='text-gray-900 dark:text-gray-100'>
            Email: <Link href='mailto:wade.pate@bytesmithcode.com'>wade.pate@bytesmithcode.com</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default SocialMediaLinks
