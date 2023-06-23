import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Maria Elisa - MKT Digital',
  description: 'Portfólio de Maria Elisa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${roboto.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
