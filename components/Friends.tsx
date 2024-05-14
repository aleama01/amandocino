import Link from 'next/link'
import React from 'react'
import Friend from './Friend'

/**
 * Main component of 'friends' page that displays the gallery of post of this section.
 * 
 * @param friends array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a gallery of posts of the 'friends' category.
 */
export const Friends = ({ friends }: { friends: Array<any> }) => {
  return (
    <div className='flex flex-row flex-wrap min-h-screen py-[5vh] w-full justify-around gap-y-6 items-start' >
      {friends.map((friend, idx) => (
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/sections/friends/${friend.node.slug}`} key={friend.node.title}
          className={`${idx % 5 < 1 ? 'basis-[80vw]' : 'basis-[40vw]'} ${idx % 8 < 2 ? 'lg:basis-[43vw]' : 'lg:basis-[27vw]'}`}>
          <Friend friend={friend.node} idx={idx} />
        </Link>
      ))}
    </div>
  )
}
