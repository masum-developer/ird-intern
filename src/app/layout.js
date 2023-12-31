import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import SideMenu from '@/components/SideMenu/SideMenu'
import FoodItem from '@/components/FoodItem/FoodItem'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IRD',
  description: 'Islamic Content',
}

 const RootLayout =({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      
      <div className='flex lg:flex-row bg-[#FFFFFF] w-[100%] flex-col-reverse'>
      <div className="lg:hidden px-4 mt-4">
        <FoodItem/>
      </div>
        <div className='w-[100%] mt-5 lg:mt-0 lg:w-[5%] lg:min-h-screen bg-[#FFFFFF] ml-4'>
            <SideMenu/>
        </div>
        <div className='w-[100%] lg:w-[95%] min-h-screen  border-8 border-[#EEF0F2] bg-[#EEF0F2] rounded-tl-xl'>
        {children}
        </div>
      </div>
        
      </body>
    </html>
  )
}

export default RootLayout;