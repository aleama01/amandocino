import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { Context } from '../Context'
import ProjectModal from './ProjectModal'
import TextScramble from './TextScrambler'
import Image from 'next/image'

/**
 * Single post component of the 'Projects' section of the website. This is the element displayed in the gallery.
 *  
 * @param project contains the post details to be displayed. 
 * @returns {ReactNode} A react element that showcases the title and image of a post of the 'Projects' category.
 */
const Project = ({ project }: { project: any }) => {


  return (
    <div className='overflow-x-hidden '>
      <div>
        <motion.div className='h-[400px] overflow-hidden w-auto flex flex-row justify-center items-center'
          initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} >
          <div className=' h-full w-full overflow-hidden' >
            <Image alt="Project post image"
              loading='eager' priority={true} fetchPriority="high"
              width={720} height={720} sizes="(max-width: 768px) 85vw, 90vw"
              src={`${project.image.url}`} className='h-full w-full bg-cover object-cover bg-center bg-[#f5f5f5] bg-no-repeat z-30 saturate-0 hover:saturate-100 hover:scale-110 brightness-50 hover:brightness-90 duration-200' />
          </div>
        </motion.div>

        <div className='flex flex-col'>
          <h2 className=' py-2 whitespace-pre-wrap text-left'>
            {project.title.toUpperCase()}
          </h2>
          <div className='whitespace-pre-wrap text-[#9f9f9c]'>
            {project.roles}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project