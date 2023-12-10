import { ProjectProps } from '@/types'
import React from 'react'
import { My_Projects } from '@/constants'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row md:flex-wrap gap-12 px-4 sm:px-10 justify-center z-30'>
        {My_Projects.map((project: ProjectProps | any, index) => (
          <ProjectCard source={project.source} title={project.title} description={project.description} technologies={project.technologies} key={project.title} projectLink={project.link} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects