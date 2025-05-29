import React, { useContext, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Context } from '../Context'

const Stamp = (stampName: any) => {
  const url = `/stamps/${stampName}.png`;
  return (
    <Image src={'/test.png'} alt={stampName} width={128} height={128} className='w-[45px] h-auto object-contain bg-transparent' />
  )
}

const PostcardsRow = ({ postcards, direction, duration }: { postcards: Array<any>, direction: Boolean, duration: number }) => {
  const { flippedIdx, setFlippedIdx } = useContext(Context)
  const rowRef = useRef<HTMLDivElement>(null);
  const postcardsLoop = [...postcards, ...postcards, ...postcards];

  const handleClick = (isFlipped: Boolean, postcard: any) => {
    setFlippedIdx(isFlipped ? null : postcard.node.image.url.split('.com/')[1])
  }

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
        return <p key={index} className='text-xs'>{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
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

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        ref={rowRef}
        className="flex flex-row h-full gap-x-2 overflow-hidden"
        style={{ x: 0, cursor: 'grab' }}
        drag="x"
        dragConstraints={{ left: -postcards.length * 300, right: postcards.length * 300 }}
        animate={{ x: direction ? -postcards.length * 300 : postcards.length * 300 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear"
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {postcardsLoop.map((postcard, idx) => {
          const isFlipped = flippedIdx === postcard.node.image.url.split('.com/')[1];
          return (
            <motion.div
              key={postcard.node.image.url.split('.com/')[1]}
              className="w-[300px] h-full perspective-1000 flex items-center justify-center"
              style={{ perspective: 1000 }}
              onClick={() => handleClick(isFlipped, postcard)}
              animate={{ rotateX: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [.42, 0, .58, 0.6] }}
            >
              <div className="relative w-full h-full">
                {/* Front */}
                <motion.div
                  className="absolute w-full h-full backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                  animate={{ opacity: isFlipped ? 0 : 1 }}
                  transition={{ delay: 0.3, duration: 0 }}
                >
                  <Image
                    loading='eager'
                    priority={true}
                    fetchPriority="high"
                    alt="postcard post image"
                    width={720}
                    height={510}
                    src={`${postcard.node.image.url}`}
                    className='w-full h-full pointer-events-none object-cover object-center z-30 duration-500'
                  />
                </motion.div>
                {/* Back */}
                <motion.div
                  className="absolute w-full h-full px-4 py-4 gap-4 flex flex-row items-start text-[#101411] bg-[#EDF0D8] z-10"
                  style={{
                    transform: 'rotateX(180deg)'
                  }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ delay: 0.3, duration: 0 }}
                >
                  <Stamp stampName={postcard.node.tag[0].name} />
                  <div className='border-l h-full w-[0px] border-[#101411]' />
                  <div className='basis-2/3 flex flex-col gap-y-2
                  '>
                    <h3 className='font-medium'>{postcard.node.title}</h3>
                    {postcard.node.content.raw.children.map((typeObj: any, index: any) => {
                      const children = typeObj.children.map((item: any, itemIndex: any) => getContentFragment(itemIndex, item.text, item, typeObj))

                      return getContentFragment(index, children, typeObj, typeObj.type)
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )
        }
        )}
      </motion.div>
    </div>
  )
}

export default PostcardsRow