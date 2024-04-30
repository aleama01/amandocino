import { motion } from 'framer-motion'
import React from 'react'
import TextScramble from './TextScrambler'
import Image from 'next/image'

/**
 * Single element of the list in the photo gallery.
 * 
 * @param place single place photos and name.
 * @returns {ReactNode} A react component representing an element in the places photos gallery, it displays the name of the place with a photo. If clicked you can see the details and photos of that place.
 */
const PlacePost = ({ place }: { place: any }) => {
  return (
    <div className='overflow-hidden'>
      <motion.div className='h-[25vh] sm:h-[35vh] w-[85vw] sm:w-[90vw] flex flex-row justify-center items-center'
        initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>

        <h1 className='text-[40px] sm:text-[90px] text-center absolute text-[#ffffe9] z-20 pointer-events-none w-full '>
          <TextScramble phrase={place.title.toUpperCase()} />
        </h1>

        <div className=' w-full h-full overflow-hidden' >
          <Image loading='eager' priority={true} fetchPriority="high" alt="Place post image"
            width={720} height={510} src={`${place.image.url}`}
            sizes="(max-width: 768px) 85vw, 90vw"
            className=' w-full blur-[1px] h-full bg-cover object-cover object-center bg-center bg-no-repeat z-30 saturate-0 hover:saturate-100 hover:scale-110 brightness-50 hover:brightness-90 duration-500' />
        </div>
      </motion.div>
    </div>
  )
}

export default PlacePost