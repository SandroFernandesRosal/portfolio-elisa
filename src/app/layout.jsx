import './globals.css'
import { Roboto_Flex as Roboto, Cookie } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const cookie = Cookie({
  subsets: ['latin'],
  variable: '--font-cookie',
  weight: '400',
})

export const metadata = {
  title: 'Elisa Rosal - MKT Digital',
  description: 'Portfólio de Elisa Rosal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${roboto.variable} ${cookie.variable} w-[100vw]`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
