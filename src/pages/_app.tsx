import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import WhyteInktrap from 'next/font/local'

const WhyteInktrapFont = WhyteInktrap({
  src: './../../public/assets/fonts/ABCWhyteInktrapVariable-Trial.woff2',
})

export default function App({ Component, pageProps }: AppProps) {
  return <div className={`${WhyteInktrapFont.className} px-32`}>
    <div className="header">
      <Header />
    </div>
    <div className="main">
      <main className='flex flex-col min-h-screen py-8'>
        <Component {...pageProps} />
      </main>

    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
}
