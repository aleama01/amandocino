import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import PhotosGallery from '../../components/PhotosGallery'
import { getPosts } from '../../services'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { overlayDirectionMap, SectionKey } from '../../components/Layout'
import { Stories } from '../../components/Stories'
import stories from './diary'


/**
 * Container and wrapper of the 'Photos' component for this page section.
 * 
 * @param places array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Photos component and the Head component of this page.
 */
const photos = ({ places, showContent = true }: { places: Array<any>, showContent?: boolean }) => {
  return (
    <>
      <Head>
        <title>Amandocino | Photos</title>
        <meta name="description" content="Browse through my collection of favorite photos, capturing the essence of various places visited over the years. Enjoy this personal gallery of nature shots, from woods to wildlife." />
      </Head>
      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              key={"postcards"}
              initial={{ y: '100vh' }}
              animate={overlayDirectionMap['postcards' as SectionKey]}
              exit={{ y: '100vh' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='flex flex-col bg-black justify-center px-[2vw] w-[100dvw] max-h-screen overflow-y-auto absolute top-0'
            >
              <PhotosGallery places={places} />
            </motion.div>
            <motion.div
              key={"postcards-overlay"}
              initial={{ x: '32px', y: '100vh' }}
              animate={{ x: '32px', y: '85vh' }}
              exit={{ x: '32px', y: '100vh' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='font-bold text-[128px] z-10'
            >
              POSTCARDS
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default photos



export async function getStaticProps() {
  const places = (await getPosts('Travel')) || [];
  return {
    props: { places }
  }
}