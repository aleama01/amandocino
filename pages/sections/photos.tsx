import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import PhotosGallery from '../../components/PhotosGallery'
import { getPosts } from '../../services'
import Head from 'next/head'


/**
 * Container and wrapper of the 'Photos' component for this page section.
 * 
 * @param places array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a container for Photos component and the Head component of this page.
 */
const photos = ({ places }: { places: Array<any> }) => {
  return (
    <>
      <Head>
        <title>Amandocino | Photos</title>
        <meta name="description" content="Browse through my collection of favorite photos, capturing the essence of various places visited over the years. Enjoy this personal gallery of nature shots, from woods to wildlife." />
      </Head>
      <div className='flex flex-col photos justify-start pt-[5vh] overflow-x-hidden' >
        <div className='duration-300 pb-10' >
          <PhotosGallery places={places} />
        </div>
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/`} className='fixed font-thin left-2 sm:left-14 text-3xl top-2 sm:text-[32px] z-50' aria-label="Go back to homepage">
          <BsArrowLeft />
        </Link>
      </div>
    </>
  )
}

export default photos



export async function getStaticProps() {
  const places = (await getPosts('Travel')) || [];
  return {
    props: { places }
  }
}