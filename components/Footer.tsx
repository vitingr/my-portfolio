import React from 'react'
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full h-full bg-transparent text-white shadow-lg p-[15px] mt-[150px]'>
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-white text-xl mb-4">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube className="white-icon" />
              <span className="text-[15px] ml-[6px] text-white">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo className="white-icon" />
              <span className="text-[15px] ml-[6px] text-white">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo className="white-icon" />
              <span className="text-[15px] ml-[6px] text-white">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-white text-xl mb-4">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube className="white-icon" />
              <span className="text-[15px] ml-[6px] text-white">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo className="white-icon" />
              <span className="text-[15px] ml-[6px] text-white">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo className="white-icon" />
              <span className="text-[15px] ml-[6px] text-white">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-white text-xl mb-4">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px] text-white">Santa Bárbara d'Oeste, SP - Brasil</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px] text-white">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px] text-white">vitorgabrielsbo1460@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center text-white mt-20">
          &copy; Vitor Gabriel Silva portfolio. All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer