import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ContextProvider, { Context } from '../Context'
import { useRouter } from 'next/router';
import Head from 'next/head'
import { motion, AnimatePresence } from "framer-motion"
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import Footer from '../components/Footer'

/**
 * Main entry of the website, contains route, head component and context provider. 
 * 
 * @returns The main wrapper of the whole website. 
 */
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const text = "AMANDOCINO"
  return (
    <ContextProvider>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <title>Amandocino</title>
        <meta name="description" content="Dive in and get to know me, read my posts, watch my photos, look at what my friends do, watch the projects I work on." />
      </Head>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)} initial={false}>
        <motion.div key={router.asPath} className='relative overflow-hidden' >
          <Header />
          <Component {...pageProps} />
          <motion.div className='fixed text-lg top-0 left-0 w-[100dvw] h-[100dvh] bg-[#10100E] origin-top z-[100] flex flex-col justify-center items-center' initial={{ y: "-100%" }} animate={{ y: "-100%" }} exit={{ y: 0 }} transition={{ duration: 1.5, ease: [0.40, 1, 0.36, 1] }}>{text}</motion.div>
          <motion.div className='fixed text-lg top-0 left-0 w-[100dvw] h-[100dvh] bg-[#10100E] origin-top z-[100] flex flex-col justify-center items-center' initial={{ y: 0 }} animate={{ y: "-100%" }} exit={{ y: "-100%" }} transition={{ duration: 1.5, ease: [0.40, 1, 0.36, 1] }}>{text}</motion.div>
          <SideMenu />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ContextProvider>
  )
}
