import type { Metadata } from 'next'
import './globals.css'
import StarsCanvas from '@/components/StarBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Portfolio Vitor Gabriel',
  description: 'This my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#030014] overflow-y-scroll overflow-x-hidden selection:text-white selection:bg-purple-700'>
        <StarsCanvas />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
