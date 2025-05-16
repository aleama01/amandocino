import Link from 'next/link';
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import Projects from '../../components/Projects';
import { getPosts } from '../../services';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { overlayDirectionMap, SectionKey } from '../../components/Layout';


/**
 * Container and wrapper of the 'Projects' component for this page section.
 * 
 * @param projects array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Projects component and the Head component of this page.
 */
const projects = ({ projects, showContent = true }: { projects: any, showContent?: boolean }) => {
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
              initial={{ x: '-100vw' }}
              animate={overlayDirectionMap['projects' as SectionKey]}
              exit={{ x: '-100vw' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='flex flex-col bg-black justify-center z-10 px-[2vw] w-[40vw] max-h-screen overflow-y-auto absolute top-0'
            >
              <Projects projects={projects} />
            </motion.div>
            <motion.div
              key={"project-overlay"}
              initial={{ x: '-100vw', y: '32px' }}
              animate={{ x: '40vw', y: '32px' }}
              exit={{ x: '-100vw', y: '32px' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='font-bold text-[128px] z-20'
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

export default projects

export async function getStaticProps() {
  const projects = (await getPosts('Projects')) ?? [];
  return {
    props: { projects }
  }
}