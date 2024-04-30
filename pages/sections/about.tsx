import React from 'react'
import Head from 'next/head';
import { AboutMe } from '../../components/AboutMe';


/**
 * Container and wrapper of the 'AboutMe' component for this page section.
 * 
 * @returns {ReactNode} A react component that is a container for AboutMe component and the Head component of this page.
 */
const about = () => {
  return (
    <>
      <Head>
        <title>Amandocino | About</title>
        <meta name="description" content="Dive into my story—from my passions and projects to my personal and professional milestones. Discover what drives my creativity and commitment." />
      </Head>
      <div className='about pb-[10vh] sm:pb-0'>
        <AboutMe />
      </div>
    </>

  )
}

export default about