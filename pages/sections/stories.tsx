import React from 'react'
import Link from 'next/link'
import { getPosts } from '../../services'
import { Stories } from '../../components/Stories'
import { BsArrowLeft, BsChevronDoubleDown, BsChevronDown } from 'react-icons/bs'
import Head from 'next/head'

/**
 * Container and wrapper of the 'Stories' component for this page section.
 * 
 * @param stories array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Stories component and the Head component of this page.
 */
const stories = ({ stories }: { stories: Array<any> }) => {
  return (
    <>
      <Head>
        <title>Amandocino | Diary</title>
        <meta name="description" content="Discover the personal stories and reflections in our archive, featuring a virtual diary filled with entries in Italian. Dive into the pages that track the passage of time and personal experiences." />
      </Head>
      <div className='flex stories flex-col min-h-screen justify-center pt-[5vh] px-[5vw] overflow-x-hidden ' >
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/`} className='fixed font-thin left-2 sm:left-14 text-3xl top-2 sm:text-[32px] z-40' aria-label="Go back to homepage">
          <BsArrowLeft />
        </Link>
        <Stories stories={stories} />
        <BsChevronDown className='scale-[1.5] z-10 fixed bottom-10 left-1/2 -translate-x-1/2 text-xs sm:text-sm animate-pulse' />
      </div>
    </>
  )
}

export default stories

export async function getStaticProps() {
  const stories = (await getPosts('Stories')) || [];
  return {
    props: { stories }
  }
}