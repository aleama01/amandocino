import React, { useContext, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Context } from '../Context'

const Stamp = () => {
  return (
    <div className='w-[45px] h-[60px] border border-[#101411]' />
  )
}

const PostcardsRow = ({ places, direction, duration }: { places: Array<any>, direction: Boolean, duration: number }) => {
  const { flippedIdx, setFlippedIdx } = useContext(Context)
  const rowRef = useRef<HTMLDivElement>(null);
  const placesLoop = [...places, ...places, ...places];

  const handleClick = (isFlipped: Boolean, place: any) => {
    setFlippedIdx(isFlipped ? null : place.node.image.url.split('.com/')[1])
  }

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        ref={rowRef}
        className="flex flex-row h-full gap-x-2 overflow-hidden"
        style={{ x: 0, cursor: 'grab' }}
        drag="x"
        dragConstraints={{ left: -places.length * 300, right: places.length * 300 }}
        animate={{ x: direction ? -places.length * 300 : places.length * 300 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear"
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {placesLoop.map((place, idx) => {
          const isFlipped = flippedIdx === place.node.image.url.split('.com/')[1];
          return (
            <motion.div
              key={place.node.image.url.split('.com/')[1]}
              className="w-[300px] h-full perspective-1000 flex items-center justify-center"
              style={{ perspective: 1000 }}
              onClick={() => handleClick(isFlipped, place)}
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
                    alt="Place post image"
                    width={720}
                    height={510}
                    src={`${place.node.image.url}`}
                    className='w-full h-full pointer-events-none object-cover object-center z-30 duration-500'
                  />
                </motion.div>
                {/* Back */}
                <motion.div
                  className="absolute w-full h-full px-4 py-4 gap-4 flex flex-row text-[#101411] bg-[#EDF0D8] z-10"
                  style={{
                    transform: 'rotateX(180deg)'
                  }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ delay: 0.3, duration: 0 }}
                >
                  <Stamp />
                  <div className='border-l h-full w-[0px] border-[#101411]' />
                  <div className='basis-2/3 flex flex-col gap-y-2
                  '>
                    <h3 className='font-medium'>{place.node.title}</h3>
                    <p className='text-xs leading-3'>Insert here a small description of the picture and the memories that this moment brings up to you everytime you see it. </p>
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