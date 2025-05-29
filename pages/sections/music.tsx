import { getSongs } from '../../lib/spotify'
import Link from 'next/link';
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import Projects from '../../components/Projects';
import { getPosts } from '../../services';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { overlayDirectionMap, SectionKey } from '../../components/Layout';
import { useRouter } from 'next/navigation';
import { Context } from '../../Context';
import Image from 'next/image';
import Music from '../../components/Music';

const music = ({ songs }: { songs: any }) => {
  const { expandStory, setExpandStory, showContent, setShowContent } = useContext(Context);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Amandocino | Music</title>
        <meta name="description" content="Take a look at the projects I’ve embarked on, from academic pursuits to personal passions. This section showcases a range of activities that fuel my creativity and drive." />
      </Head>
      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              key={"music"}
              initial={{ bottom: '-100vh' }}
              animate={overlayDirectionMap['music' as SectionKey]}
              exit={{ bottom: '-100vh' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className='flex flex-col bg-[#101411] justify-start px-[2vw] w-screen h-[80dvh] fixed '
              style={{ willChange: 'transform, left', direction: 'rtl' }}
            >
              <Music songs={songs} />
              <motion.div
                initial={{ opacity: 0, left: "5vw", top: "-10dvh", scale: 0 }}
                animate={{ opacity: 1, left: "5vw", top: "-10dvh", scale: 1 }}
                exit={{ opacity: 0, left: "5vw", top: "-10dvh", scale: 0 }}
                transition={{ duration: 0.1, type: "spring", bounce: 0.1, damping: 15, exit: { delay: 0 } }}
                className="fixed flex flex-col items-center justify-center z-10"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/flower.png" alt="crown" width={350} height={350} className=' scale-x-[-1]' />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, right: "2vw", top: "7dvh", scale: 0 }}
                animate={{ opacity: 1, right: "2vw", top: "7dvh", scale: 1 }}
                exit={{ opacity: 0, right: "2vw", top: "7dvh", scale: 0 }}
                transition={{ duration: 0.1, type: "spring", bounce: 0.1, damping: 15, exit: { delay: 0 } }}
                className="fixed flex flex-col items-center justify-center z-10"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/flower.png" alt="crown" width={300} height={300} className='rotate-[-20deg]' />
              </motion.div>
            </motion.div>
            <motion.div
              key={"music-overlay"}
              initial={{ right: '-50vw' }}
              animate={{ right: '2vw' }}
              exit={{ right: '-50vw' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className='font-bold text-[128px] fixed bottom-[80dvh] leading-none'
            >
              MUSIC
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default music

export async function getStaticProps() {
  const songs = await getSongs()
  return {
    props: { songs }
  }
}