import React, { useContext, useEffect, useState } from 'react'
import { getPosts } from '../../services'
import { Stories } from '../../components/Stories'
import Head from 'next/head'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { overlayDirectionMap, overlayDirectionMapMobile, SectionKey } from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Context } from '../../Context'
import { springTransition } from '../../components/Homepage'


/**
 * Container and wrapper of the 'Stories' component for this page section.
 * 
 * @param stories array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Stories component and the Head component of this page.
 */
const StoriesPage = ({ stories }: { stories: Array<any> }) => {
  const { expandStory, setExpandStory, showContent, setShowContent, mobile } = useContext(Context);
  const router = useRouter();

  const handleStoryClick = (slug: string) => {
    setShowContent("diaryslug");

    setTimeout(() => {
      setExpandStory(true);
    }, 400); // Match this to your exit animation duration

    // After animation, navigate
    setTimeout(() => {
      router.push(`/sections/diary/${slug}`);
    }, 400); // Match this to your expand animation duration
  };
  if (mobile) {
    return (
      <>
        <Head>
          <title>Amandocino | Diary</title>
          <meta name="description" content="Discover the personal stories and reflections in our archive, featuring a virtual diary filled with entries in Italian. Dive into the pages that track the passage of time and personal experiences." />
        </Head>
        <div>
          <AnimatePresence>
            {showContent == "diary" && (
              <div className='h-[100dvh] overflow-hidden'>
                <motion.div
                  key={"diary"}
                  initial={{ left: 0, top: "100vh" }}
                  animate={{ ...overlayDirectionMapMobile['diary' as SectionKey] }}
                  exit={{ left: 0, top: "100vh" }}
                  transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
                  className=' bg-[#101411] flex flex-row justify-start z-20 h-[75dvh] py-1 overflow-y-auto absolute'
                  style={{ willChange: 'transform, opacity, left' }}
                >
                  <div className='flex flex-col justify-start px-[2vw] w-[100vw] h-[75dvh] overflow-y-auto'>
                    <Stories stories={stories} onStoryClick={handleStoryClick} />
                  </div>
                </motion.div>
                {/*
                <motion.div
                  initial={{ opacity: 0, left: "4vw", top: "10vh", scale: 0 }}
                  animate={{ opacity: 1, left: "4vw", top: "10vh", scale: 1 }}
                  exit={{ opacity: 0, left: "4vw", top: "10vh", scale: 0 }}
                  transition={springTransition}
                  className="fixed flex flex-col items-center justify-center"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Image src="/drawings/spring.png" alt="spring" width={120} height={120} />
                </motion.div>

                
                */}
                <motion.div
                  initial={{ opacity: 0, left: "40vw", top: "-5vh", scale: 0 }}
                  animate={{ opacity: 1, left: "40vw", top: "-5vh", scale: 1 }}
                  exit={{ opacity: 0, left: "40vw", top: "-5vh", scale: 0 }}
                  transition={springTransition}
                  className="fixed flex flex-col items-center justify-center"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Image src="/drawings/spring.png" alt="spring" width={150} height={150} className='rotate-[-50deg]' />
                </motion.div>
                <motion.div
                  key={"diary-overlay"}
                  initial={{ right: '-100vw', bottom: ' 75dvh' }}
                  animate={{ right: '2vw', bottom: ' 75dvh' }}
                  exit={{ right: '-100vw', bottom: ' 75dvh' }}
                  transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
                  className='font-bold text-[48px] lg:text-[128px] text-right fixed leading-none'
                  style={{ willChange: 'transform, opacity' }}
                >
                  DIARY
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>Amandocino | Diary</title>
          <meta name="description" content="Discover the personal stories and reflections in our archive, featuring a virtual diary filled with entries in Italian. Dive into the pages that track the passage of time and personal experiences." />
        </Head>
        <AnimatePresence>
          {showContent == "diary" && (
            <>
              <motion.div
                key={"diary"}
                initial={{ left: '100vw' }}
                animate={{ ...overlayDirectionMap['diary' as SectionKey] }}
                exit={{ left: '100vw' }}
                transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
                className=' bg-[#101411] flex flex-row justify-start z-20 max-h-[100dvh] overflow-y-auto absolute top-0'
                style={{ willChange: 'transform, opacity, left' }}
              >
                <div className='flex flex-col justify-start px-[2vw] w-[55vw] max-h-[100dvh] overflow-y-auto'>
                  <Stories stories={stories} onStoryClick={handleStoryClick} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "0vw", y: "-100px", scale: 0 }}
                animate={{ opacity: 1, x: "0vw", y: "-100px", scale: 1 }}
                exit={{ opacity: 0, x: "0vw", y: "-100px", scale: 0 }}
                transition={springTransition}
                className="absolute flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/spring.png" alt="spring" width={500} height={500} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "35vw", y: "40vh", scale: 0 }}
                animate={{ opacity: 1, x: "35vw", y: "40vh", scale: 1 }}
                exit={{ opacity: 0, x: "35vw", y: "40vh", scale: 0 }}
                transition={springTransition}
                className="absolute flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/spring.png" alt="spring" width={300} height={300} className='rotate-[-50deg]' />
              </motion.div>

              <motion.div
                key={"diary-overlay"}
                initial={{ x: '100vw', y: '80dvh' }}
                animate={{ x: '-56vw', y: '80dvh' }}
                exit={{ x: '100vw', y: '80dvh' }}
                transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
                className='font-bold text-[128px] text-right leading-none'
                style={{ willChange: 'transform, opacity' }}
              >
                DIARY
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }
}

export default StoriesPage

export async function getStaticProps() {
  const stories = (await getPosts('Diary')) ?? [];
  return {
    props: { stories }
  }
}