import Link from 'next/link'
import React from 'react'
import Project from './Project'

/**
 * Main component of 'projects' page that displays the gallery of post of this section.
 * 
 * @param projects array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a gallery of posts of the 'projects' category.
 */
const Projects = ({ projects }: { projects: any }) => {

  return (
    <div className='flex flex-col sm:flex-row flex-wrap min-h-screen whitespace-nowrap w-[85vw] pt-[10vh] sm:w-[90vw] space-x-0 sm:justify-around space-y-10 sm:space-y-0 items-start mx-auto pb-[10vh]'>
      {projects.map((project: any, idx: number) => (
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/sections/projects/${project.node.slug}`} key={project.node.title} className={`w-full ${idx % 5 < 2 ? 'sm:w-[43vw]' : 'sm:w-[27vw]'}`} >
          <Project project={project.node} />
        </Link>
      ))}
    </div>
  )
}

export default Projects