import { FaLaptopCode, FaMobileAlt, FaSearch, FaShoppingCart, FaTools, FaCloud, FaDatabase, FaRobot, FaChartLine } from 'react-icons/fa'

const iconMapping: { [key: string]: JSX.Element } = {
  FaLaptopCode: <FaLaptopCode className='text-blue-600' size={48} />,
  FaMobileAlt: <FaMobileAlt className='text-green-600' size={48} />,
  FaSearch: <FaSearch className='text-yellow-600' size={48} />,
  FaShoppingCart: <FaShoppingCart className='text-red-600' size={48} />,
  FaTools: <FaTools className='text-indigo-600' size={48} />,
  FaCloud: <FaCloud className='text-purple-600' size={48} />,
  FaDatabase: <FaDatabase className='text-gray-600' size={48} />,
  FaRobot: <FaRobot className='text-orange-600' size={48} />,
  FaChartLine: <FaChartLine className='text-teal-600' size={48} />,
}

export default iconMapping
