'use client'

import '@/app/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { Slide, ToastContainer } from 'react-toastify'

interface ToastProviderProps {
  children: React.ReactNode
}

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default'

const contextClass: Record<ToastType, string> = {
  success: 'bg-blue-600',
  error: 'bg-red-600',
  info: 'bg-gray-600',
  warning: 'bg-orange-400',
  default: 'bg-indigo-600',
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        position='bottom-center'
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Slide}
        toastClassName={(context) => {
          const type = context?.type as ToastType | undefined
          return `${contextClass[type || 'default']} relative flex p-1 min-h-10 rounded-md justify-evenly overflow-hidden cursor-pointer`
        }}
        bodyClassName={() => 'flex items-center justify-evenly w-full'}
        className='toastify-container'
      />
    </>
  )
}
