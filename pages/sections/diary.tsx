import React from 'react'
import { getPosts } from '../../services'
import { Stories } from '../../components/Stories'
import Head from 'next/head'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { overlayDirectionMap, SectionKey } from '../../components/Layout'


/**
 * Container and wrapper of the 'Stories' component for this page section.
 * 
 * @param stories array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Stories component and the Head component of this page.
 */
const stories = ({ stories, showContent = true }: { stories: Array<any>, showContent?: boolean }) => {
  return (
    <>
      <Head>
        <title>Amandocino | Diary</title>
        <meta name="description" content="Discover the personal stories and reflections in our archive, featuring a virtual diary filled with entries in Italian. Dive into the pages that track the passage of time and personal experiences." />
      </Head>
      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              key={"diary"}
              initial={{ x: '100vw' }}
              animate={overlayDirectionMap['diary' as SectionKey]}
              exit={{ x: '100vw' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='flex flex-col bg-black justify-center z-10 px-[2vw] w-[55vw] max-h-screen overflow-y-auto absolute top-0'
            >
              <Stories stories={stories} />
            </motion.div>
            <motion.div
              key={"diary-overlay"}
              initial={{ x: '100vw', y: '80vh' }}
              animate={{ x: '-56vw', y: '80vh' }}
              exit={{ x: '100vw', y: '80vh' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='font-bold text-[128px] text-right'
            >
              DIARY
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default stories

export async function getStaticProps() {
  const stories = (await getPosts('Diary')) ?? [];
  return {
    props: { stories }
  }
}