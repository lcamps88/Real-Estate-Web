import '@/styles/globals.css'
import Header from '@/components/Header'
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
        <main className='full_wrapper'>
          <Header />
          {children}
          <Footer/>
        </main>
      </body>

    </html>
  )
}
export default RootLayout
