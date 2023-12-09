"use client"

import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { SkillsDataProviderProps } from '@/types'
import Image from 'next/image'

const SkillsDataProvider = ({ source, width, height, index }: SkillsDataProviderProps) => {

  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const animationDelay = 0.3

  return (
    <motion.div ref={ref} initial="hidden" variants={imageVariants} animate={inView ? "visible" : "hidden"} custom={index} transition={{ delay: index * animationDelay }}>
      <Image src={source} width={width} height={height} alt='Skill Image' />
    </motion.div>
  )
}

export default SkillsDataProvider