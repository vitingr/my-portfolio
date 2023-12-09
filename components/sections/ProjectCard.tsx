"use client"

import { ProjectProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const ProjectCard = ({ source, title, description, technologies, index }: ProjectProps) => {
  
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
      <Image src={source} alt={title} width={1000} height={1000} className='h-[300px] w-full object-cover' />
      <div className='p-4 flex flex-wrap gap-4 items-center cursor-default break-all h-[80px] overflow-y-hidden'>
        {technologies.includes("html") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>css</p> : <></>}
        {technologies.includes("css") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>html</p> : <></>}
        {technologies.includes("javascript") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>javascript</p> : <></>}
        {technologies.includes("typescript") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>typescript</p> : <></>}
        {technologies.includes("golang") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>go</p> : <></>}
        {technologies.includes("python") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>python</p> : <></>}
        {technologies.includes("nodejs") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>nodejs</p> : <></>}
        {technologies.includes("nestjs") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>nestjs</p> : <></>}
        {technologies.includes("tailwind") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>tailwindcss</p> : <></>}
        {technologies.includes("mongodb") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>mongodb</p> : <></>}
        {technologies.includes("firebase") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>firebase</p> : <></>}
        {technologies.includes("react") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>react</p> : <></>}
        {technologies.includes("next") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>nextjs</p> : <></>}
        {technologies.includes("prisma") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>prisma</p> : <></>}
        {technologies.includes("chartjs") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>chartjs</p> : <></>}   
        {technologies.includes("motion") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>motion</p> : <></>}     {technologies.includes("api") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>api</p> : <></>}
        {technologies.includes("clerk") ? <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-widest text-xs uppercase'>clerk</p> : <></>}
      </div>
      <div className='relative px-4 h-[225px] max-w-[500px] break-normal cursor-default'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300 break-all w-full text-justify'>{description}</p>
      </div>
      <div className='p-4 w-full mb-3 cursor-default'>
        <button className='w-full bg-gradient-to-r from-purple-500 to-indigo-600 py-2 px-4 rounded-full text-white cursor-pointer'>
          See Project
        </button>
      </div>
    </motion.div>
  ) : (
    <></>
  )
}

export default ProjectCard  