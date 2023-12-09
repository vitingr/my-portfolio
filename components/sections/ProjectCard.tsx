import { ProjectProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const ProjectCard = ({ source, title, description }: ProjectProps) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg max-w-[500px]'>
      <Image src={source} alt={title} width={1000} height={1000} className='w-full object-contain' />
      <div className='relative p-4 bg-[#33333354] h-[225px] max-w-[500px] break-normal'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300 break-all w-full text-justify'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard  