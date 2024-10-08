import React from 'react'
import { motion } from 'framer-motion'
import TextScramble from './TextScrambler';
import Image from 'next/image';

/**
 * Single post component of the 'Diary' section of the website. This is the element displayed in the gallery.
 *  
 * @param story contains the post details to be displayed. 
 * @returns {ReactNode} A react element that showcases the title, image and excerpt of a post of the 'Diary' category.
 */
const Story = ({ story, idx }: any) => {
  return (
    <div className='overflow-hidden '>
      <motion.div className='h-[15vh] sm:h-[300px] overflow-hidden w-auto flex flex-row justify-center items-center'
        initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
        <div className=' w-full h-full overflow-hidden' >
          <Image loading={idx < 5 ? 'eager' : 'lazy'} priority={idx < 5 ? true : false} fetchPriority={idx < 5 ? "high" : "low"} alt="Story post image"
            width={720} height={720} sizes="(max-width: 768px) 80vw, 43vw"
            className='w-full h-full bg-cover object-cover object-center bg-center bg-no-repeat z-30 saturate-0 hover:saturate-100 hover:scale-110 brightness-50 hover:brightness-90 duration-200' src={`${story.image.url}`} />
        </div>
      </motion.div>
      <div className='flex flex-col h-auto pointer-events-none '>
        <h1 className='text-[4vw] py-1 whitespace-pre-wrap leading-none lg:text-[24px] text-left relative'>
          <span className='text-transparent invisible'>{story.title.toUpperCase()}</span>
          {idx < 5 ?
            <span className=' absolute left-0 top-1'>
              <TextScramble phrase={story.title.toUpperCase()} />
            </span>
            :
            <span className='absolute left-0 top-1'>{story.title.toUpperCase()}</span>}
        </h1>
        <div className='border-[0.5px] border-[#9f9f9c] w-4/5' />
        <div className='text-xs sm:text-sm my-2 whitespace-pre-wrap text-[#9f9f9c]'>
          {story.excerpt}
        </div>
      </div>
    </div>

  )
}

export default Story
