import Header from '../components/Header'
import Footer from '../components/Footer'
import ToastProvider from '@/providers/ToastProvider'
import './globals.css'
import { inter } from '../ui/fonts/fonts'

export const metadata = {
  generator: 'Next.js',
  applicationName: 'ByteSmith Code',
  referrer: 'origin-when-cross-origin',
  title: 'ByteSmith Code',
  description: 'We create beautiful websites for small businesses.',
  authors: [{ name: 'Wade' }],
  creator: 'Wade Pate',
  publisher: 'Wade Pate',
  keywords: [
    'BSC',
    'ByteSmith Code',
    'Website design',
    'Small business websites',
    'Custom website development',
    'Responsive web design',
    'SEO optimization',
    'E-commerce solutions',
    'Website maintenance',
    'Web development services',
    'Local business websites',
    'Professional web design',
    'Affordable web design',
    'Online presence for small businesses',
    'Small business digital solutions',
    'Idaho web design',
    'Local web developer',
    'Personalized web development',
    'Web design for mom-and-pop shops',
    'Small business online marketing',
    'Web development consulting',
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={metadata.keywords.join(', ')} />
        <link rel='icon' href='/favicon.ico' />
      </head>
      {/* <body className={`${inter.className}`}> */}
      <body className='flex flex-col min-h-screen'>
        <Header />
        <main className='container mx-auto px-4 pt-4 flex-grow flex flex-col'>
          <ToastProvider>{children}</ToastProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
