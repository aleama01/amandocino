import React, { useContext } from 'react'
import Head from 'next/head';
import { AboutMe } from '../../components/AboutMe';
import { AnimatePresence, motion } from 'framer-motion';
import { overlayDirectionMap, overlayDirectionMapMobile, SectionKey } from '../../components/Layout';
import { Context } from '../../Context';
import Image from 'next/image';

/**
 * Container and wrapper of the 'AboutMe' component for this page section.
 * 
 * @returns {ReactNode} A react component that is a container for AboutMe component and the Head component of this page.
 */
const AboutPage = () => {
  const { showContent, mobile } = useContext(Context)
  if (mobile) {
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
                initial={{ left: 0, top: '100vh' }}
                animate={overlayDirectionMapMobile['about' as SectionKey]}
                exit={{ left: 0, top: '100vh' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className='flex flex-col bg-[#101411] justify-center w-screen h-[75dvh] py-1 overflow-y-auto absolute'
              >
                <div className='w-full h-[75dvh] px-[2vw] overflow-y-auto'>
                  <AboutMe />
                </div>
              </motion.div>

              <motion.div
                key={"about-overlay-mobile"}
                initial={{ left: '-100vw', bottom: '75vh' }}
                animate={{ left: '2vw', bottom: '75vh' }}
                exit={{ left: '-100vw', bottom: '75vh' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className='font-bold text-[48px] text-left absolute leading-none'
              >
                ABOUT ME
              </motion.div>
              <motion.div
                initial={{ opacity: 0, right: "17vw", top: "0vh", scale: 0 }}
                animate={{ opacity: 1, right: "17vw", top: "0vh", scale: 1 }}
                exit={{ opacity: 0, right: "17vw", top: "0vh", scale: 0 }}
                transition={{ duration: 0.1, type: "spring", bounce: 0.1, damping: 15, exit: { delay: 0 } }}
                className="absolute flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/points_small.png" alt="points_small" width={110} height={110} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>

    )
  } else {
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
                initial={{ left: '100vw' }}
                animate={overlayDirectionMap['about' as SectionKey]}
                exit={{ left: '100vw' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className='flex flex-col bg-[#101411] justify-center px-[2vw] w-[40vw] h-screen overflow-y-auto absolute top-0'
              />

              <motion.div
                key={"about"}
                initial={{ left: '-100vw' }}
                animate={{ left: 0 }}
                exit={{ left: '-100vw' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className='z-10 px-[2vw] w-[60vw] max-h-screen absolute top-0'
              >
                <AboutMe />
              </motion.div>
              <motion.div
                key={"about-overlay"}
                initial={{ x: '100vw', y: '32px' }}
                animate={{ x: '60vw', y: '32px' }}
                exit={{ x: '100vw', y: '32px' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className='font-bold text-[128px] text-right z-10 leading-none'
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', rotate: '180deg' }}
              >
                ABOUT ME
              </motion.div>
              <motion.div
                initial={{ opacity: 0, left: "-2vw", bottom: "-100px", scale: 0 }}
                animate={{ opacity: 1, left: "-2vw", bottom: "-100px", scale: 1 }}
                exit={{ opacity: 0, left: "-2vw", bottom: "-100px", scale: 0 }}
                transition={{ duration: 0.1, type: "spring", bounce: 0.1, damping: 15, exit: { delay: 0 } }}
                className="absolute flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/points_small.png" alt="points_small" width={400} height={400} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, right: "-5vw", top: "-10vh", scale: 0 }}
                animate={{ opacity: 1, right: "-5vw", top: "-10vh", scale: 1 }}
                exit={{ opacity: 0, right: "-5vw", top: "-10vh", scale: 0 }}
                transition={{ duration: 0.1, type: "spring", bounce: 0.1, damping: 15, exit: { delay: 0 } }}
                className="absolute flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/points_small.png" alt="points_small" width={500} height={500} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>

    )
  }
}

export default AboutPage