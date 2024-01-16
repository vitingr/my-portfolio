import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SocialProps = {
  name: string;
  src: string;
  link: string;
}

const Navbar = () => {
  return (
    <header className="w-full h-[65px] fixed justify-center flex items-center top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 sm:px-10">
      <nav className="sm:max-w-[1800px] max-w-[350px] w-full">
        <div className="w-full h-full flex flex-row gap-4 sm:gap-0 items-center justfify-center sm:justify-around m-auto px-[10px]">
          {/* <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
          <Image />
        </a> */}

          <span className="md:justify-center font-bold sm:text-2xl ml-[10px] flex w-full text-white text-base justify-center">
            Vitor Gabriel Silva
          </span>

          <div className="h-full w-full flex-row items-center justify-center md:mr-20 hidden md:flex">
            <div className="w-full sm:max-w-[500px] list-none flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] lg:px-[20px] lg:py-[10px] px-[10px] py-[5px] rounded-full text-gray-200 gap-14">
              <a
                href="#about-me"
                className="cursor-pointer transition-all duration-200 hover:bg-[#7042f861] rounded-full px-2 lg:text-base text-sm"
              >
                About
              </a>
              <a
                href="#skills"
                className="cursor-pointer transition-all duration-200 hover:bg-[#7042f861] rounded-full px-2 lg:text-base text-sm"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="cursor-pointer transition-all duration-200 hover:bg-[#7042f861] rounded-full px-2 lg:text-base text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="cursor-pointer transition-all duration-200 hover:bg-[#7042f861] rounded-full px-2 lg:text-base text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-4 sm:gap-6 w-full justify-center">
            {Socials.map((social: SocialProps, index: number) => (
              <Link key={index} href={social.link} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={20}
                  height={20}
                  className="transition-all duration-200 cursor-pointer hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
