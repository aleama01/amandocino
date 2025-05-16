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
    <div className='flex flex-col w-[90%] space-y-2 items-start mx-auto py-4'>
      {projects.map((project: any, idx: number) => (
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/sections/projects/${project.node.slug}`} key={project.node.title} className={`w-full`} >
          <Project project={project.node} />
        </Link>
      ))}
    </div>
  )
}

export default Projects