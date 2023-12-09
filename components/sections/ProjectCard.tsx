import { ProjectProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ source, title, description }: ProjectProps) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg max-w-[500px] bg-[#33333354]'>
      <Image src={source} alt={title} width={1000} height={1000} className='h-[300px] w-full object-cover' />
      <div className='relative p-4 h-[225px] max-w-[500px] break-normal'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300 break-all w-full text-justify'>{description}</p>
      </div>
      <div className='p-4 w-full mb-3'>
        <Link href={"/"} className='w-full bg-gradient-to-r from-purple-500 to-indigo-600 py-2 px-4 rounded-full text-white'>
          See Project
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard  