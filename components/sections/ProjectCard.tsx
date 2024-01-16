"use client"

import { ProjectProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const ProjectCard = ({ source, title, description, technologies, index, projectLink }: ProjectProps) => {

  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const animationDelay = 0.25

  return technologies ? (
    <motion.div ref={ref} initial="hidden" variants={imageVariants} animate={inView ? "visible" : "hidden"} custom={index} transition={{ delay: index * animationDelay }} className='relative overflow-hidden rounded-lg shadow-lg max-w-[500px] bg-[#3333336e] transition-all duration-300 hover:scale-[1.05] cursor-pointer'>
      <Link href={projectLink} target='__blank'>
        <Image src={source} alt={title} width={1000} height={1000} className='h-[300px] w-full object-cover' />
        <div className='p-4 flex flex-wrap gap-4 items-center cursor-default break-all h-[80px] overflow-y-hidden'>
          {technologies.includes("html") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>css</p> : <></>}
          {technologies.includes("css") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>html</p> : <></>}
          {technologies.includes("javascript") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>javascript</p> : <></>}
          {technologies.includes("typescript") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>typescript</p> : <></>}
          {technologies.includes("golang") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>go</p> : <></>}
          {technologies.includes("python") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>python</p> : <></>}
          {technologies.includes("nodejs") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>nodejs</p> : <></>}
          {technologies.includes("nestjs") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>nestjs</p> : <></>}
          {technologies.includes("tailwind") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>tailwindcss</p> : <></>}
          {technologies.includes("mongodb") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>mongodb</p> : <></>}
          {technologies.includes("firebase") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>firebase</p> : <></>}
          {technologies.includes("react") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>react</p> : <></>}
          {technologies.includes("next") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>nextjs</p> : <></>}
          {technologies.includes("prisma") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>prisma</p> : <></>}
          {technologies.includes("chartjs") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>chartjs</p> : <></>}
          {technologies.includes("motion") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>motion</p> : <></>}     {technologies.includes("api") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>api</p> : <></>}
          {technologies.includes("clerk") ? <p className='text-xs tracking-widest bg-[#333] text-white px-3 py-1 rounded-xl min-w-[50px] text-center uppercase'>clerk</p> : <></>}
        </div>
        <div className='relative px-4 h-[225px] max-w-[500px] break-normal cursor-default mt-6'>
          <h1 className='text-2xl font-semibold text-white'>{title}</h1>
          <p className='mt-2 text-gray-300 break-all w-full text-justify'>{description}</p>
        </div>
        <div className='p-4 w-full mb-3 cursor-default'>
          <button type='button' className='w-full bg-gradient-to-r from-purple-500 to-indigo-600 py-2 px-4 rounded-full text-white cursor-pointer'>
            See Project
          </button>
        </div>
      </Link>
    </motion.div>
  ) : (
    <></>
  )
}

export default ProjectCard  