import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { isMobile } from '../scripts/isMobile';
import RecentPost from './RecentPost';

/**
 * Component displayed at the end of friends and diary posts detail to give links to other recent posts.
 * 
 * @param posts list of the last five post not including the one the user is already reading.
 * @returns {ReactNode} A react component with a gallery of the recent posts with links to read them.
 */
const RecentPosts = ({ post, posts }: { post: any, posts: Array<any> }) => {
  const [ismobile, setismobile] = useState(false)
  useEffect(() => {
    const res = isMobile()
    setismobile(res)
  }, [])

  return (
    <div className='w-screen items-start border-t-[0.5px] bg-[#09090973] px-[10vw] sm:px-[5vw] pb-6 flex flex-col'>
      <h1 className='text-xl sm:text-2xl text-center mx-auto py-3'> RECENT POSTS </h1>
      <div className='flex flex-row flex-wrap text-[#ffffe9] justify-between w-full'>
        {
          posts.filter((p) => p.node.slug != post.slug).slice(0, ismobile ? 3 : 4).map((p) => {
            return (
              <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} scroll={false} href={`/sections/${p.node.category.slug}/${p.node.slug}`} key={p.node.title} className='basis-[100%] sm:basis-1/4 px-1 '>
                <RecentPost post={p.node} />
              </Link>
            )
          })
        }

      </div>
    </div>
  )
}

export default RecentPosts