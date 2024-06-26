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
    <div className='flex flex-col sm:flex-row flex-wrap min-h-screen whitespace-nowrap w-[85vw] pt-[10vh] sm:w-[90vw] space-x-0 sm:space-x-4 space-y-10 sm:space-y-0 items-start mx-auto'>
      {projects.map((project: any, idx: number) => (
        <div key={project.node.title} className={`h-[25vh] sm:h-[50vh] w-full ${idx % 5 < 2 ? 'sm:w-[43vw]' : 'sm:w-[27vw]'}`} >
          <Project project={project.node} />
        </div>
      ))}
      <div className='w-full text-center text-sm mx-auto'>
        more coming...
      </div>
    </div>
  )
}

export default Projects