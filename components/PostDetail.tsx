import Link from 'next/link';
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'
import TextScramble from './TextScrambler';
import RecentPosts from './RecentPosts';
import Image from 'next/image';

/**
 * Post detail structure for posts in the friends and stories sections.
 * 
 * @param post post details such as text, images, title, authors.
 * @returns {ReactNode} A react component displaying all the details of a post: text, images, title, cover image, author, recent post.
 */
const PostDetail = ({ post, posts }: any) => {

  // Function to transform text from post body to HTML components
  const getContentFragment = (index: any, text: any, obj: any, type: any) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>)
      }
      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>)
      }
      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>)
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className='mb-3 '>{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
      case 'paragraph':
        return <p key={index} className='mb-3 '>{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
      case 'heading-four':
        return <h4 key={index} className="mb-4">{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            className='my-4 lg:my-8 mx-auto '
            key={index}
            alt={obj.title}
            height={obj.height * 0.4}
            width={obj.width * 0.4}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className='flex flex-col text-[#ffffe9]' >
      <div className='flex flex-col sm:flex-row px-[7vw] py-[5vh]'>
        <div className=' justify-self-start sm:pt-20 basis-3/5 relative mt-1 sm:pr-[5vw]' >

          <div className=' w-full h-[50vh] sm:w-[50vw] sm:h-[60vh] overflow-hidden' >
            <Image alt="Post main image" width={720} height={720} src={`${post.image.url}`}
              loading='eager' priority={true} fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
              className='w-full h-full object-center object-cover z-10 duration-200' />
          </div>

          <div className='border-[0.5px] border-[#c8c8b6] mx-auto sm:mx-0 w-4/5 my-4' />

          <h1 className='-mt-2 sm:-mt-0 z-30 text-center sm:text-left overflow-hidden leading-5 sm:leading-normal' >
            <span className='text-[6vw] sm:text-[30px]'>
              <TextScramble phrase={post.title.toUpperCase()} />
            </span>
          </h1>
        </div>


        <div className='mx-auto text-justify w-[80vw] text-sm pt-4 sm:w-2/5 sm:pt-20 z-20'>

          <div className='text-[#c8c8b6] text-right py-1 text-sm pl-0 sm:pl-0 '>
            {post.authors.map((author: any) => (
              <div className='flex flex-row gap-x-1 items-center cursor-pointer ' key={author.name}>
                <a href={author.link} target="_blank" rel="noreferrer" aria-label="External link to author's social media">
                  {author.name}
                </a>
                <HiOutlineExternalLink className=' scale-120' />
              </div>
            ))}
          </div>

          {post.content.raw.children.map((typeObj: any, index: any) => {
            const children = typeObj.children.map((item: any, itemIndex: any) => getContentFragment(itemIndex, item.text, item, typeObj))

            return getContentFragment(index, children, typeObj, typeObj.type)
          })}

          {post.images.map((image: any, index: any) => {
            return (
              <div className=' basis-1/2 z-10 my-4 lg:my-8' key={image.url}>
                <Image alt="Post gallery image" width={512} height={512} src={`${image.url}`} className='mx-auto w-[300px] h-auto sm:w-full object-cover' />
              </div>
            )
          })}

          <div className='m-2 text-[#c8c8b6] text-sm text-right'>
            {post.date}
          </div>


          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/sections/${post.category.slug}`} className='fixed font-thin left-2 sm:left-14 text-3xl top-2 sm:text-[32px] z-50' aria-label="Go back to previous page">
            <BsArrowLeft />
          </Link>
        </div>

      </div>
      <RecentPosts post={post} posts={posts} />
    </div >
  )
}

export default PostDetail