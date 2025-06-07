import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import TextScramble from './TextScrambler'
import Image from 'next/image'

/**
 * Single post component of the 'Friends' section of the website. This is the element displayed in the gallery.
 *  
 * @param friend contains the post details to be displayed. 
 * @returns {ReactNode} A react element that showcases the title, image and excerpt of a post of the 'Friends' category.
 */
const Friend = ({ friend, idx }: any) => {
  return (
    <div className='overflow-hidden'>
      <motion.div className='h-[15vh] md:h-[300px] overflow-hidden w-auto flex flex-row justify-center items-center'
        initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}
        style={{ willChange: "opacity" }}>
        <div className=' h-full w-full overflow-hidden' >
          <Image loading={idx < 5 ? 'eager' : 'lazy'} priority={idx < 5 ? true : false} fetchPriority={idx < 5 ? "high" : "low"} alt="friend post image"
            width={720} height={720} sizes="(max-width: 768px) 80vw, 43vw"
            src={`${friend.image.url}`} className='h-full w-full bg-cover object-cover bg-center bg-no-repeat z-30 saturate-0 hover:saturate-100 hover:scale-110 brightness-50 hover:brightness-90 duration-200' />
        </div>
      </motion.div>
      <div className='flex flex-col h-auto pointer-events-none '>
        <h1 className='text-[4vw] py-1 whitespace-pre-wrap leading-none lg:text-[24px] text-left relative'>
          <span className='text-transparent invisible'>{friend.title.toUpperCase()}</span>
          {idx < 5 ?
            <span className=' absolute left-0 top-1'>
              <TextScramble phrase={friend.title.toUpperCase()} />
            </span>
            :
            <span className='absolute left-0 top-1'>{friend.title.toUpperCase()}</span>}
        </h1>
        <div className='border-[0.5px] border-[#9f9f9c] w-4/5' />
        <div className='text-xs md:text-sm  my-2 whitespace-pre-wrap text-[#9f9f9c]'>
          {friend.excerpt}
        </div>
      </div>
    </div>
  )
}

export default Friend