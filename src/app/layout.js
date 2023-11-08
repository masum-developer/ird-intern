import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import SideMenu from '@/components/SideMenu/SideMenu'

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
      <div className='flex bg-[#FFFFFF]'>
        <aside className='w-[5%] min-h-screen bg-[#FFFFFF] ml-4'>
            <SideMenu/>
            
        </aside>
        <main className='w-[95%] min-h-screen  border-8 border-[#EEF0F2] bg-[#EEF0F2] rounded-tl-xl'>
        {children}
        </main>
      </div>
        
      </body>
    </html>
  )
}

export default RootLayout;