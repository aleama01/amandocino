import Link from 'next/link';
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import TextScramble from './TextScrambler';
import Image from 'next/image';

/**
 * Details of the place post, containing a gallery of photos of that place.
 * 
 * @param post includes photo gallery and name of the place.
 * @returns {ReactNode} A react component with all the place post details, including gallery of photos of that place.
 */
const PlacePostDetail = ({ post }: any) => {
  return (
    <div className='flex flex-row pt-16 justify-center relative min-h-screen w-screen items-start' >

      <div className='flex z-20 basis-1/2 absolute top-16 sm:top-16 text-center flex-col items-center'>
        <h1 className='text-[15vw] sm:text-[20vh] leading-none' >
          <TextScramble phrase={post.title.toUpperCase()} />
        </h1>
        <p className='-mt-2 sm:-mt-4'>{post.date}</p>
      </div>

      <div className='flex-row flex flex-wrap justify-center items-center relative pt-[5vh] sm:pt-[10vh]' >
        {post.images.map((image: any, idx: any) => {
          return (
            <div className='basis-1/1 sm:basis-1/3 p-[0.5px] z-10' key={image.url}>
              <Image alt="Place image"
                loading={idx < 6 ? 'eager' : 'lazy'} priority={idx < 6 ? true : false} fetchPriority={idx < 6 ? "high" : "low"}
                width={1024} height={1024} sizes="(max-width: 768px) 300px, 400px"
                src={`${image.url}`} className='mx-auto w-screen h-[300px] sm:h-[400px] sm:w-full object-cover ' />
            </div>
          )
        })}
      </div>

      <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/sections/photos`} className='fixed font-thin left-2 sm:left-14 text-3xl top-2 sm:text-[32px] z-50' aria-label="Go back to photos page">
        <BsArrowLeft />
      </Link>
    </div>
  )
}

export default PlacePostDetail