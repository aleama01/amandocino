import Link from 'next/link'
import React, { useEffect, useState, useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import Postcards from '../../components/Postcards'
import { getPosts } from '../../services'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { overlayDirectionMap, overlayDirectionMapMobile, SectionKey } from '../../components/Layout'
import { useRouter } from 'next/router'
import { Context } from '../../Context'
import Image from 'next/image'
import { springTransition } from '../../components/Homepage'


/**
 * Container and wrapper of the 'Photos' component for this page section.
 * 
 * @param postcards array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Photos component and the Head component of this page.
 */
const PostcardsPage = ({ postcards }: { postcards: Array<any> }) => {
  const { expandStory, setExpandStory, showContent, setShowContent, mobile } = useContext(Context);
  const router = useRouter();

  if (mobile) {
    return (
      <>
        <Head>
          <title>Amandocino | Postcards</title>
          <meta name="description" content="Browse through my collection of postcards and memories from various places visited over the years." />
        </Head>
        <AnimatePresence>
          {showContent == "postcards" && (
            <div className='h-[100dvh] overflow-hidden'>
              <motion.div
                key={"postcards"}
                initial={{ top: '100dvh' }}
                animate={overlayDirectionMapMobile['postcards' as SectionKey]}
                exit={{ top: '100dvh' }}
                transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
                className='flex flex-col bg-[#101411] justify-center w-[100dvw] h-[75dvh] overflow-y-auto absolute top-0'
              >
                <Postcards postcards={postcards} />
              </motion.div>
              <motion.div
                key={"postcards-overlay"}
                initial={{ left: '-100vw', bottom: ' 75dvh' }}
                animate={{ left: '2vw', bottom: ' 75dvh' }}
                exit={{ left: '-100vw', bottom: ' 75dvh' }}
                transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
                className='font-bold absolute text-[48px] z-10 leading-none'
              >
                POSTCARDS
              </motion.div>
              <motion.div
                initial={{ opacity: 0, left: '35vw', top: "-10px", scale: 0 }}
                animate={{ opacity: 1, left: '35vw', top: "-10px", scale: 1 }}
                exit={{ opacity: 0, left: '35vw', top: "-10px", scale: 0 }}
                transition={springTransition}
                className="absolute flex flex-col top-0 items-center justify-center pointer-events-none"
                style={{ willChange: 'transform, opacity,left' }}
              >
                <Image src="/drawings/star.png" alt="spring" width={120} height={120} style={{ rotate: "2deg" }} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>Amandocino | Photos</title>
          <meta name="description" content="Browse through my collection of favorite photos, capturing the essence of various places visited over the years. Enjoy this personal gallery of nature shots, from woods to wildlife." />
        </Head>
        <AnimatePresence>
          {showContent == "postcards" && (
            <>
              <motion.div
                key={"postcards"}
                initial={{ top: '100dvh' }}
                animate={overlayDirectionMap['postcards' as SectionKey]}
                exit={{ top: '100dvh' }}
                transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
                className='flex flex-col bg-[#101411] justify-center w-[100dvw] max-h-[100dvh] overflow-y-auto absolute top-0'
              >
                <Postcards postcards={postcards} />
              </motion.div>
              <motion.div
                key={"postcards-overlay"}
                initial={{ left: '32px', bottom: '-100vh' }}
                animate={{ left: '32px', bottom: '0' }}
                exit={{ left: '32px', bottom: '-100vh' }}
                transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
                className='font-bold absolute text-[128px] z-10 leading-none'
              >
                POSTCARDS
              </motion.div>
              <motion.div
                initial={{ opacity: 0, left: '2vw', top: 0, scale: 0 }}
                animate={{ opacity: 1, left: '2vw', top: 0, scale: 1 }}
                exit={{ opacity: 0, left: '2vw', top: 0, scale: 0 }}
                transition={springTransition}
                className="absolute flex flex-col items-center justify-center pointer-events-none"
                style={{ willChange: 'transform, opacity,left ,top' }}
              >
                <Image src="/drawings/star.png" alt="spring" width={100} height={100} style={{ rotate: "180deg" }} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, right: '10vw', bottom: "-40px", scale: 0 }}
                animate={{ opacity: 1, right: '10vw', bottom: "-40px", scale: 1 }}
                exit={{ opacity: 0, right: '10vw', bottom: "-40px", scale: 0 }}
                transition={springTransition}
                className="absolute flex flex-col items-center justify-center pointer-events-none"
                style={{ willChange: 'transform, opacity, right, bottom' }}
              >
                <Image src="/drawings/star.png" alt="spring" width={300} height={300} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }
}

export default PostcardsPage



export async function getStaticProps() {
  const postcards_not_postcards = (await getPosts('Postcards')) || [];
  let postcards = [...postcards_not_postcards]
  for (let i = postcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [postcards[i], postcards[j]] = [postcards[j], postcards[i]]
  }
  return {
    props: { postcards }
  }
}