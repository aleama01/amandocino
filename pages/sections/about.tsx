import React from 'react'
import Head from 'next/head';
import { AboutMe } from '../../components/AboutMe';
import { AnimatePresence, motion } from 'framer-motion';
import { overlayDirectionMap, SectionKey } from '../../components/Layout';


/**
 * Container and wrapper of the 'AboutMe' component for this page section.
 * 
 * @returns {ReactNode} A react component that is a container for AboutMe component and the Head component of this page.
 */
const about = ({ showContent = true }: { showContent?: boolean }) => {
  return (
    <>
      <Head>
        <title>Amandocino | About</title>
        <meta name="description" content="Dive into my story—from my passions and projects to my personal and professional milestones. Discover what drives my creativity and commitment." />
      </Head>
      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              key={"about-background"}
              initial={{ x: '100vw' }}
              animate={overlayDirectionMap['about' as SectionKey]}
              exit={{ x: '100vw' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='flex flex-col bg-black justify-center px-[2vw] w-[40vw] h-screen overflow-y-auto absolute top-0'
            />

            <motion.div
              key={"about"}
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '-100vw' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='flex flex-col justify-center z-10 px-[2vw] w-[60vw] max-h-screen overflow-y-auto absolute top-0'
            >
              <AboutMe />
            </motion.div>
            <motion.div
              key={"about-overlay"}
              initial={{ x: '100vw', y: '32px' }}
              animate={{ x: '60vw', y: '32px' }}
              exit={{ x: '100vw', y: '32px' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='font-bold text-[128px] text-right z-10'
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', rotate: '180deg' }}
            >
              ABOUT ME
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>

  )
}

export default about