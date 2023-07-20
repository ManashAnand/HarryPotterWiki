
import { Footer, Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import { FilterContextProvider } from './../context/Filters';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Harry Potter wiki',
  description: 'Discover Harry potter world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <FilterContextProvider>
          <Navbar/>
          {children}
          <Footer/>
        </FilterContextProvider>
      </body>
    </html>
  )
}
