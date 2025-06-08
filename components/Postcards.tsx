import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import PostcardsRow from './PostcardsRow'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { Context } from '../Context'

/**
 * Gallery component of the photos section of the website showing the list of postcards the user can watch the photos of.
 * 
 * @param postcards list of photos of the different postcards
 * @returns {ReactNode} A react component with a gallery of postcards the user can watch the photos of. Each place can be selected to watch the photos in detail.
 */
const Postcards = ({ postcards }: { postcards: Array<any> }) => {
  const { expandStory, setExpandStory, showContent, setShowContent, mobile } = useContext(Context);
  let [batchsize, setBatchSize] = useState(0)

  useEffect(() => {
    setBatchSize(Math.floor(postcards.length / 3))
  }, [showContent])

  if (mobile) {
    return (
      <AnimatePresence>
        {showContent &&
          <div className='flex flex-col h-[100dvh] overflow-hidden w-full justify-center py-2 gap-2 items-center'>
            <motion.div
              initial={{ x: "-200vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-200vw", transition: { delay: 0 } }}
              transition={{ duration: 1, delay: 0.4 }}
              className='h-[8dvh] flex-grow'
            >
              <PostcardsRow postcards={postcards.slice(0, batchsize)} direction={false} duration={100} />
            </motion.div>
            <motion.div
              initial={{ x: "200vw" }}
              animate={{ x: 0 }}
              exit={{ x: "200vw", transition: { delay: 0 } }}
              transition={{ duration: 1, delay: 0.4 }}
              className='h-[8dvh] flex-grow'
            >
              <PostcardsRow postcards={postcards.slice(batchsize, 2 * batchsize)} direction={true} duration={100} />
            </motion.div>
            <motion.div
              initial={{ x: "-200vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-200vw", transition: { delay: 0 } }}
              transition={{ duration: 1, delay: 0.4 }}
              className='h-[8dvh] flex-grow'>
              <PostcardsRow postcards={postcards.slice(2 * batchsize, 3 * batchsize)} direction={false} duration={100} />
            </motion.div>
          </div>
        }
      </AnimatePresence>
    )
  } else {
    return (
      <AnimatePresence>
        {showContent &&
          <div className='flex flex-col h-[100dvh] overflow-hidden w-full justify-start pt-[10dvh] pb-[128px] gap-2 items-center'>
            <motion.div
              initial={{ x: "-200vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-200vw", transition: { delay: 0 } }}
              transition={{ duration: 1, delay: 0.4 }}
              className='h-[18dvh] flex-grow'
            >
              <PostcardsRow postcards={postcards.slice(0, batchsize)} direction={false} duration={100} />
            </motion.div>
            <motion.div
              initial={{ x: "200vw" }}
              animate={{ x: 0 }}
              exit={{ x: "200vw", transition: { delay: 0 } }}
              transition={{ duration: 1, delay: 0.4 }}
              className='h-[18dvh] flex-grow'
            >
              <PostcardsRow postcards={postcards.slice(batchsize, 2 * batchsize)} direction={true} duration={100} />
            </motion.div>
            <motion.div
              initial={{ x: "-200vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-200vw", transition: { delay: 0 } }}
              transition={{ duration: 1, delay: 0.4 }}
              className='h-[18dvh] flex-grow'>
              <PostcardsRow postcards={postcards.slice(2 * batchsize, 3 * batchsize)} direction={false} duration={100} />
            </motion.div>
          </div>
        }
      </AnimatePresence>
    )
  }
}

export default Postcards