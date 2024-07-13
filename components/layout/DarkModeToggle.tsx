'use client'

import { useEffect, useState } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setDarkMode(!darkMode)
  }

  return (
    <button onClick={toggleDarkMode} className='p-2 rounded-md bg-gray-700 text-gray-100' aria-label='Toggle Dark Mode'>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
