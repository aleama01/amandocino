import Link from 'next/link';
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import Projects from '../../components/Projects';
import { getPosts } from '../../services';
import Head from 'next/head';


/**
 * Container and wrapper of the 'Projects' component for this page section.
 * 
 * @param projects array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Projects component and the Head component of this page.
 */
const projects = ({ projects }: { projects: any }) => {
  return (
    <>
      <Head>
        <title>Amandocino | Projects</title>
        <meta name="description" content="Take a look at the projects I’ve embarked on, from academic pursuits to personal passions. This section showcases a range of activities that fuel my creativity and drive." />
      </Head>
      <div className='flex flex-col projects min-h-screen overflow-scroll justify-center relative overflow-x-hidden' >
        <Projects projects={projects} />
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/`} className='fixed font-thin left-2 sm:left-14 text-3xl top-2 sm:text-[32px] z-50' aria-label="Go back to homepage">
          <BsArrowLeft />
        </Link>
      </div>
    </>
  )
}

export default projects

export async function getStaticProps() {
  const projects = (await getPosts('Projects')) || [];
  return {
    props: { projects }
  }
}