import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Story from './Story';

/**
 * Main component of 'Diary' page that displays the gallery of post of this section.
 * 
 * @param stories array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a gallery of posts of the 'Diary' category.
 */
export const Stories = ({ stories }: { stories: Array<any> }) => {
  return (
    <div className='flex flex-row flex-wrap min-h-screen py-[5vh] w-full justify-around gap-y-6 items-start'>
      {stories.map((story, idx) => (
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/sections/stories/${story.node.slug}`} key={story.node.title}
          className={`${idx % 5 < 1 ? 'basis-[80vw]' : 'basis-[40vw]'} ${idx % 8 < 2 ? 'lg:basis-[43vw]' : 'lg:basis-[27vw]'}`}>
          <Story story={story.node} idx={idx} />
        </Link>
      ))}
    </div>
  )
}
