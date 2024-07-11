import 'react-toastify/dist/ReactToastify.css'
import React, { ReactNode } from 'react'
import { toast, ToastOptions, Slide, Id } from 'react-toastify'

export const defaultToastOptions: ToastOptions = {
  autoClose: 40000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  transition: Slide,
  className: 'toastify-toast',
}

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default'

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ReactNode} content
 * @param {ToastOptions} [options=defaultToastOptions]
 * @return {Id}
 */
export const showToast = (type: ToastType, content: ReactNode, options: Partial<ToastOptions> = {}): Id => {
  const optionsToApply = { ...defaultToastOptions, ...options }

  switch (type) {
    case 'success':
      return toast.success(<div className='flex justify-center items-center'>{content}</div>, optionsToApply)
    case 'error':
      return toast.error(content, optionsToApply)
    case 'info':
      return toast.info(content, optionsToApply)
    case 'warning':
      return toast.warn(content, optionsToApply)
    case 'default':
      return toast(content, optionsToApply)
    default:
      return toast(content, optionsToApply)
  }
}
