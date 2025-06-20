import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

/**
 * Post detail structure for posts in the friends and diary sections.
 * 
 * @param post post details such as text, images, title, authors.
 * @returns {ReactNode} A react component displaying all the details of a post: text, images, title, cover image, author, recent post.
 */
const PostDetailMobile = ({ post, postCategory }: any) => {

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
        return <h3 key={index} className=' '>{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
      case 'paragraph':
        return <p key={index} className=''>{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
      case 'heading-four':
        return <h4 key={index} className="">{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
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

  if (postCategory === 'projects') {
    return (
      <div className='flex flex-col w-[100dvw] pt-[12dvh] pb-[7dvh] overflow-y-auto overflow-x-hidden px-[5vw] '>
        <div className='flex flex-col'>
          <div className=' justify-self-start relative mt-1 mb-8' >

            <div className=' w-full h-[200px] overflow-hidden' >
              <Image alt="Post main image" width={720} height={720} src={`${post.image.url}`}
                loading='eager' priority={true} fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
                className='w-full h-full object-center object-cover z-10 duration-200' />
            </div>

            <h2 className='mt-2 z-30 text-center lg:text-left overflow-hidden leading-5 lg:leading-normal' >
              <span className='text-base'>
                {post.title.toUpperCase()}
              </span>
            </h2>

            <div className='flex-row flex flex-wrap justify-center text-xs gap-x-1'>
              {post.tag.map((t: any, index: number) => {
                return (
                  <div className='' key={index}>
                    {t.name}
                  </div>
                )
              })}
            </div>

          </div>


          <div className='text-left text-sm z-20 whitespace-pre-wrap' style={{ direction: "ltr" }} >
            {post.content.raw.children.map((typeObj: any, index: any) => {
              const children = typeObj.children.map((item: any, itemIndex: any) => getContentFragment(itemIndex, item.text, item, typeObj))

              return getContentFragment(index, children, typeObj, typeObj.type)
            })}

            {post.images.map((image: any, index: any) => {
              const randomMarginLeft = Math.floor(Math.random() * 0);
              const randomMarginRight = Math.floor(Math.random() * 0);
              return (
                <div className={`my-8`} style={{ marginLeft: `${randomMarginLeft}px` }} key={image.url}>
                  <Image alt="Post gallery image" width={512} height={512} src={`${image.url}`} className={`h-full object-cover`} />
                </div>
              )
            })}

            <div className='m-2 text-[#EDF0D8] text-left text-xs'>
              {post.date}
            </div>


          </div>
        </div>
      </div >
    )
  } else if (postCategory === 'diary') {
    return (
      <div className='flex flex-col w-[100dvw] pt-[12dvh] pb-[7dvh] overflow-y-auto overflow-x-hidden px-[5vw] ' >
        <div className='flex flex-col'>
          <div className=' justify-self-start relative mt-1 mb-8' >

            <div className=' w-full h-[200px] overflow-hidden' >
              <Image alt="Post main image" width={720} height={720} src={`${post.image.url}`}
                loading='eager' priority={true} fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
                className='w-full h-full object-center object-cover z-10 duration-200' />
            </div>

            <h2 className='mt-2 z-30 text-center lg:text-left overflow-hidden leading-5 lg:leading-normal' >
              <span className='text-base'>
                {post.title.toUpperCase()}
              </span>
            </h2>
          </div>


          <div className='text-left text-sm z-20 whitespace-pre-wrap'>
            {post.content.raw.children.map((typeObj: any, index: any) => {
              const children = typeObj.children.map((item: any, itemIndex: any) => getContentFragment(itemIndex, item.text, item, typeObj))

              return getContentFragment(index, children, typeObj, typeObj.type)
            })}

            {post.images.map((image: any, index: any) => {
              return (
                <div className=' basis-1/2 z-10 my-4 lg:my-8' key={image.url}>
                  <Image alt="Post gallery image" width={512} height={512} src={`${image.url}`} className='mx-auto w-[300px] h-auto lg:w-full object-cover' />
                </div>
              )
            })}

            <div className='m-2 text-[#EDF0D8] text-xs text-right'>
              {post.date}
            </div>


          </div>
        </div>
      </div >
    )
  }

}

export default PostDetailMobile