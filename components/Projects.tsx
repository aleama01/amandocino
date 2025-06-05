import Link from 'next/link'
import React, { useContext } from 'react'
import Project from './Project'
import { Context } from '../Context'

/**
 * Main component of 'projects' page that displays the gallery of post of this section.
 * 
 * @param projects array containing all the posts of this category.
 * @returns {ReactNode} A react component that is a gallery of posts of the 'projects' category.
 */
const Projects = ({ projects, onClick }: { projects: any, onClick: Function }) => {

  return (
    <div className='flex flex-col w-full space-y-3 items-start mx-auto py-[2vh]'>
      {projects.map((project: any, idx: number) => (
        <div onClick={() => onClick(project.node.slug)} key={project.node.title} className={`w-full`} >
          <Project project={project.node} />
        </div>
      ))}
    </div>
  )
}

export default Projects