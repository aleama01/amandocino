import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const Story = ({ story, idx, isVisible }: {
  story: any,
  idx: number,
  isVisible: boolean
}) => {
  return (
    <div className='overflow-hidden text-[#edf0d884] hover:text-[#EDF0D8] duration-200'>
      <motion.div
        className='h-[200px] md:h-[300px] overflow-hidden w-auto flex flex-row justify-center items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
      >
        <div className='w-full h-full overflow-hidden'>
          <Image
            loading="lazy"
            alt="Story post image"
            width={512}
            height={512}
            sizes="(max-width: 768px) 80vw, 43vw"
            className='w-full h-full bg-cover object-cover object-center bg-center bg-no-repeat z-30 
                     saturate-0 hover:saturate-100 brightness-50 hover:brightness-90 duration-200'
            src={story.image.url}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            // Only load when component is visible
            {...(!isVisible && { loading: "lazy" })}
          />
        </div>
      </motion.div>
      <div className='flex flex-col h-auto pointer-events-none'>
        <h2 className='pt-1 whitespace-pre-wrap text-left relative'>
          <span>{story.title.toUpperCase()}</span>
        </h2>
      </div>
    </div>
  )
}

// Add these helper functions for blur placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default Story