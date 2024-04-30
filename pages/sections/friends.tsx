import React, { useContext, useEffect, useState } from 'react'
import { getPosts } from '../../services'
import { Friends } from '../../components/Friends'
import Link from 'next/link'
import { BsArrowLeft, BsChevronDown } from 'react-icons/bs'
import Head from 'next/head'


/**
 * Container and wrapper of the 'Friends' component for this page section.
 * 
 * @param friends array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Friends component and the Head component of this page.
 */
const friends = ({ friends }: { friends: Array<any> }) => {
  return (
    <>
      <Head>
        <title>Amandocino | Friends</title>
        <meta name="description" content="Explore the amazing works and projects of my friends who inspire me with their creativity and brilliance. Though it might not reach the whole world, here is a spotlight on their greatness." />
      </Head>
      <div className='flex flex-col friends min-h-screen justify-center pt-[5vh] px-[5vw] overflow-x-hidden' >
        <Friends friends={friends} />
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/`} className='fixed font-thin left-2 sm:left-14 text-3xl top-2 sm:text-[32px] z-50' aria-label="Go back to homepage">
          <BsArrowLeft />
        </Link>
        <BsChevronDown className='scale-[1.5] z-10 fixed bottom-10 left-1/2 -translate-x-1/2 text-xs sm:text-sm animate-pulse' />
      </div>
    </>
  )
}

export default friends


export async function getStaticProps() {
  const friends = (await getPosts('Friends')) || [];
  return {
    props: { friends }
  }
}