import { Backend_skill, Frontend_skill, Other_skill } from '@/constants'
import React from 'react'
import SkillsDataProvider from './SkillsDataProvider'
import SkillText from './SkillText'

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-4 lg:py-12"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            source={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            source={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            source={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="h-full w-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="flase"
            playsInline
            loop
            muted
            autoPlay
            src="/assets/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills