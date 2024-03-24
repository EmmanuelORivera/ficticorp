import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/ReactToastify.css'
import Navbar from '@/components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FictiCorp',
  description: 'Herramienta de control de empleados',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="container">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
