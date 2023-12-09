import { ProjectProps } from '@/types'
import React from 'react'
import { My_Projects } from '@/constants'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center'>
        {My_Projects.map((project: ProjectProps) => (
          <ProjectCard source={project.source} title={project.title} description={project.description} key={project.title} />
        ))}
      </div>
    </div>
  )
}

export default Projects