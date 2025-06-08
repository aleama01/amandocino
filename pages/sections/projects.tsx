import Link from 'next/link';
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import Projects from '../../components/Projects';
import { getPosts } from '../../services';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { overlayDirectionMap, overlayDirectionMapMobile, SectionKey } from '../../components/Layout';
import { useRouter } from 'next/navigation';
import { Context } from '../../Context';
import Image from 'next/image';
import { springTransition } from '../../components/Homepage';

/**
 * Container and wrapper of the 'Projects' component for this page section.
 * 
 * @param projects array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Projects component and the Head component of this page.
 */
const ProjectsPage = ({ projects }: { projects: any }) => {
  const { expandStory, setExpandStory, showContent, setShowContent, mobile } = useContext(Context);
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    setShowContent(false);

    setTimeout(() => {
      setExpandStory(true);
    }, 400); // Match this to your exit animation duration

    // After animation, navigate
    setTimeout(() => {
      router.push(`/sections/projects/${slug}`);
    }, 400); // Match this to your expand animation duration
  };

  if (mobile) {
    return (
      <>
        <Head>
          <title>Amandocino | Projects</title>
          <meta name="description" content="Take a look at the projects I’ve embarked on, from academic pursuits to personal passions. This section showcases a range of activities that fuel my creativity and drive." />
        </Head>
        <AnimatePresence>
          {showContent && (
            <div className='h-[100dvh] overflow-hidden'>
              <motion.div
                key={"project-mobile"}
                initial={{ left: 0, top: "100vh" }}
                animate={overlayDirectionMapMobile['projects' as SectionKey]}
                exit={{ left: 0, top: "100vh" }}
                transition={{ type: 'tween', duration: 0.4 }}
                className='flex flex-col bg-[#101411] justify-start z-10 py-1 w-[100dvw] h-[75dvh] absolute'
                style={{ willChange: 'transform, left', direction: 'rtl' }}
              >
                <div className='flex flex-col justify-start w-full h-[75dvh] px-[2vw] overflow-y-auto'>
                  <Projects projects={projects} onClick={handleProjectClick} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, left: "32vw", top: "10px", scale: 0 }}
                animate={{ opacity: 1, left: "32vw", top: "10px", scale: 1 }}
                exit={{ opacity: 0, left: "32vw", top: "10px", scale: 0 }}
                transition={springTransition}
                className="absolute flex flex-col items-center justify-center w-[90px]"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/crown.png" alt="crown" width={90} height={90} style={{ rotate: "-5deg" }} />
              </motion.div>

              <motion.div
                key={"project-overlay-mobile"}
                initial={{ right: '-100vw', bottom: ' 75dvh' }}
                animate={{ right: '2vw', bottom: ' 75dvh' }}
                exit={{ right: '-100vw', bottom: ' 75dvh' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className='font-bold text-[48px] text-right absolute leading-none'
              >
                PROJECTS
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
          <title>Amandocino | Projects</title>
          <meta name="description" content="Take a look at the projects I’ve embarked on, from academic pursuits to personal passions. This section showcases a range of activities that fuel my creativity and drive." />
        </Head>
        <AnimatePresence>
          {showContent && (
            <>
              <motion.div
                key={"project"}
                initial={{ left: '-100vw' }}
                animate={overlayDirectionMap['projects' as SectionKey]}
                exit={{ left: '-100vw' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className='flex flex-col bg-[#101411] justify-start z-10 px-[2vw] w-[40vw] max-h-[100dvh] overflow-y-auto absolute top-0'
                style={{ willChange: 'transform, left', direction: 'rtl' }}
              >
                <Projects projects={projects} onClick={handleProjectClick} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, right: "5vw", top: "-100px", scale: 0 }}
                animate={{ opacity: 1, right: "5vw", top: "-100px", scale: 1 }}
                exit={{ opacity: 0, right: "5vw", top: "-100px", scale: 0 }}
                transition={springTransition}
                className="absolute flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/crown.png" alt="crown" width={500} height={500} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, right: "27vw", top: "50vh", scale: 0 }}
                animate={{ opacity: 1, right: "27vw", top: "50vh", scale: 1 }}
                exit={{ opacity: 0, right: "27vw", top: "50vh", scale: 0 }}
                transition={springTransition}
                className="absolute flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/crown.png" alt="crown" width={300} height={300} className='rotate-[-20deg]' />
              </motion.div>

              <motion.div
                key={"project-overlay"}
                initial={{ x: '-100vw', y: '32px' }}
                animate={{ x: '40vw', y: '32px' }}
                exit={{ x: '-100vw', y: '32px' }}
                transition={{ type: 'tween', duration: 0.2 }}
                className='font-bold text-[128px] z-20 leading-none'
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', rotate: '180deg' }}
              >
                PROJECTS
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }
}

export default ProjectsPage

export async function getStaticProps() {
  const projects = (await getPosts('Projects')) ?? [];
  return {
    props: { projects }
  }
}