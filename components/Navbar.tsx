import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='h-full flex flex-row gap-4 sm:gap-0 items-center justify-around m-auto px-[10px]'>
        {/* <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
          <Image />
        </a> */}
        
        <span className='md:justify-center font-bold sm:text-2xl ml-[10px] flex text-white text-lg'>
          Vitor Gabriel Silva
        </span>

        <div className='h-full flex-row items-center justify-between md:mr-20 hidden sm:flex'>
          <div className='w-full max-w-[500px] list-none flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 gap-14'>
            <a href="#about-me" className='cursor-pointer transition-all duration-200 hover:bg-[#7042f861] rounded-full px-2'>About me</a>
            <a href="#skills" className='cursor-pointer transition-all duration-200 hover:bg-[#7042f861] rounded-full px-2'>Skills</a>
            <a href="#projects" className='cursor-pointer transition-all duration-200 hover:bg-[#7042f861] rounded-full px-2'>Projects</a>
            <a href="#contact" className='cursor-pointer transition-all duration-200 hover:bg-[#7042f861] rounded-full px-2'>Contact</a>
          </div>
        </div>

        <div className='flex flex-row gap-4 sm:gap-6'>
          {Socials.map((social) => (
            <Image src={social.src} alt={social.name} key={social.name} width={20} height={20} className='transitiona-all duration-200 cursor-pointer hover:scale-110' />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar