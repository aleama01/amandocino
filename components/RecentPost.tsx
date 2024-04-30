import React from 'react'
import Image from 'next/image'

/**
 * Single recent post component in the gallery of recent posts.
 * 
 * @param post contains title and photo of the recent post. 
 * @returns {ReactNode} A react component that contains title and photo of a recent post.
 */
const RecentPost = ({ post }: { post: any }) => {
  return (
    <div className='flex flex-col items-start'>
      <div className='w-full h-[100px] sm:h-[150px] overflow-hidden'>
        <Image alt="Recent post image" width={200} height={200} className='w-full h-[100px] sm:h-[150px] object-cover z-30 saturate-0 hover:saturate-100 hover:scale-110 brightness-50 hover:brightness-90 duration-200' src={`${post.image.url}`} />
      </div>

      <h1 className=' py-2 text-[16px] leading-none sm:text-[18px] text-left'>
        {post.title.toUpperCase()}
      </h1>
    </div>
  )
}

export default RecentPost