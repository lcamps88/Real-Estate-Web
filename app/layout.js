import '@/styles/globals.css'
import { Providers } from './providers'
import Footer from '@/components/Footer'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='./favicon.ico'
          type='image/x-icon'
          sizes='32x32'
        />
        <link
          rel='apple-touch-icon'
          href='./webclip.png?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body>
        <Providers>
          <main className='full_wrapper'>
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
export default RootLayout
