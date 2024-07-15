import { FaLaptopCode, FaMobileAlt, FaSearch, FaShoppingCart, FaTools, FaCloud } from 'react-icons/fa'

export const services = [
  {
    title: 'Custom Website Design',
    description: 'Beautiful, custom websites tailored to your brand and business goals.',
    details: 'Our design process ensures that your website is not only visually appealing but also user-friendly and optimized for conversions.',
    icon: <FaLaptopCode className='text-blue-600' size={48} />,
  },
  {
    title: 'Responsive Web Development',
    description: 'Our websites are built to work flawlessly on any device, ensuring a great user experience for all visitors.',
    details: 'We use the latest technologies to create responsive, fast-loading websites that look great on desktops, tablets, and smartphones.',
    icon: <FaMobileAlt className='text-green-600' size={48} />,
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive more traffic to your site with our SEO services.',
    details: 'We use proven SEO strategies to optimize your website for search engines, helping you reach a wider audience.',
    icon: <FaSearch className='text-yellow-600' size={48} />,
  },
  {
    title: 'E-commerce Solutions',
    description: 'We develop robust e-commerce platforms that provide a seamless shopping experience for your customers.',
    details: 'Our e-commerce solutions include secure payment processing, inventory management, and user-friendly interfaces.',
    icon: <FaShoppingCart className='text-red-600' size={48} />,
  },
  {
    title: 'Website Maintenance',
    description: 'Keep your website running smoothly with our ongoing maintenance services.',
    details: 'We offer regular updates, security checks, and performance optimizations to ensure your website stays up-to-date and secure.',
    icon: <FaTools className='text-indigo-600' size={48} />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Reliable and scalable cloud solutions for your business.',
    details: 'Our cloud services ensure your data is secure and accessible from anywhere.',
    icon: <FaCloud className='text-purple-600' size={48} />,
  },
]
