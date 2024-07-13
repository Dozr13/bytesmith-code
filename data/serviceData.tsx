import { FaLaptopCode, FaMobileAlt, FaSearch, FaShoppingCart, FaTools, FaCloud } from 'react-icons/fa'

export const services = [
  {
    title: 'Custom Website Design',
    description: 'Beautiful, custom websites tailored to your brand and business goals.',
    details: 'Our design process ensures that your website is not only visually appealing but also user-friendly and optimized for conversions.',
    icon: <FaLaptopCode size={48} className='mx-auto mb-4 text-blue-600' />,
  },
  {
    title: 'Responsive Web Development',
    description: 'Our websites are built to work flawlessly on any device, ensuring a great user experience for all visitors.',
    details: 'We use the latest technologies to create responsive, fast-loading websites that look great on desktops, tablets, and smartphones.',
    icon: <FaMobileAlt size={48} className='mx-auto mb-4 text-blue-600' />,
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive more traffic to your site with our SEO services.',
    details: 'We use proven SEO strategies to optimize your website for search engines, helping you reach a wider audience.',
    icon: <FaSearch size={48} className='mx-auto mb-4 text-blue-600' />,
  },
  {
    title: 'E-commerce Solutions',
    description: 'We develop robust e-commerce platforms that provide a seamless shopping experience for your customers.',
    details: 'Our e-commerce solutions include secure payment processing, inventory management, and user-friendly interfaces.',
    icon: <FaShoppingCart size={48} className='mx-auto mb-4 text-blue-600' />,
  },
  {
    title: 'Website Maintenance',
    description: 'Keep your website running smoothly with our ongoing maintenance services.',
    details: 'We offer regular updates, security checks, and performance optimizations to ensure your website stays up-to-date and secure.',
    icon: <FaTools size={48} className='mx-auto mb-4 text-blue-600' />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud solutions to meet your business needs.',
    details: 'Our cloud services include cloud migration, management, and optimization to ensure your business runs smoothly in the cloud.',
    icon: <FaCloud size={48} className='mx-auto mb-4 text-blue-600' />,
  },
]
