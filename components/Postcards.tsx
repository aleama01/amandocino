import Link from 'next/link'
import React, { useContext } from 'react'
import PlacePost from './PlacePost'
import Image from 'next/image'
import PostcardsRow from './PostcardsRow'
import { AnimatePresence, motion } from 'framer-motion'
import { Context } from '../Context'

/**
 * Gallery component of the photos section of the website showing the list of places the user can watch the photos of.
 * 
 * @param places list of photos of the different places
 * @returns {ReactNode} A react component with a gallery of places the user can watch the photos of. Each place can be selected to watch the photos in detail.
 */
const Postcards = ({ places }: { places: Array<any> }) => {
  const { expandStory, setExpandStory, showContent, setShowContent } = useContext(Context);
  return (
    <AnimatePresence>
      {showContent &&
        <div className='flex flex-col h-screen overflow-hidden w-full justify-start pt-[10vh] pb-[128px] gap-2 items-center'>
          <motion.div
            initial={{ x: "-200vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-200vw", transition: { delay: 0 } }}
            transition={{ duration: 1, delay: 0.4 }}
            className='h-[18dvh] flex-grow'
          >
            <PostcardsRow places={places.slice(5, 9)} direction={false} duration={100} />
          </motion.div>
          <motion.div
            initial={{ x: "200vw" }}
            animate={{ x: 0 }}
            exit={{ x: "200vw", transition: { delay: 0 } }}
            transition={{ duration: 1, delay: 0.4 }}
            className='h-[18dvh] flex-grow'
          >
            <PostcardsRow places={places.slice(0, 4)} direction={true} duration={100} />
          </motion.div>
          <motion.div
            initial={{ x: "-200vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-200vw", transition: { delay: 0 } }}
            transition={{ duration: 1, delay: 0.4 }}
            className='h-[18dvh] flex-grow'>
            <PostcardsRow places={places.slice(5, 9)} direction={false} duration={100} />
          </motion.div>
          <motion.div
            initial={{ x: "200vw" }}
            animate={{ x: 0 }}
            exit={{ x: "200vw", transition: { delay: 0 } }}
            transition={{ duration: 1, delay: 0.4 }}
            className='h-[18dvh] flex-grow'>
            <PostcardsRow places={places.slice(0, 4)} direction={true} duration={100} />
          </motion.div>
        </div>
      }
    </AnimatePresence>
  )
}

export default Postcards