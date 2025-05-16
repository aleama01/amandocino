import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Story from './Story';
import { useTransition } from './TransitionProvider';

/**
 * Main component of 'Diary' page that displays the gallery of post of this section.
 * 
 * @param stories array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a gallery of posts of the 'Diary' category.
 */
export const Stories = ({ stories }: { stories: Array<any> }) => {

  return (
    <div className='flex flex-col py-[5vh] w-full gap-y-3 items-start'>
      {stories.map((story, idx) => (
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/sections/diary/${story.node.slug}`} key={story.node.title}
          className={"w-full"}>
          <Story story={story.node} idx={idx} />
        </Link>
      ))}
    </div>
  )
}
