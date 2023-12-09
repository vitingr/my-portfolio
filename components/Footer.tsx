import React from 'react'
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { footerLinks } from '@/constants/footer';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full h-full bg-transparent text-white shadow-lg p-[15px] mt-[150px]'>
      <div className='border-[#ffffff77] border-t-2 min-h-[400px] flex w-full p-16 flex-col sm:flex-row'>
        <div className='w-full xs:mb-12 flex flex-col items-center xs:justify-center'>
          <img src="/assets/logo.png" className='max-w-[125px]' alt="Logo" />
          <p className='text-white'>&copy; Vitor Gabriel Silva</p>
          <p className='text-white'>Fullstack Developer. All rights reserved</p>
        </div>
        <div className='w-full flex gap-6 flex-wrap sm:flex-nowrap mt-16 sm:mt-0'>
          {footerLinks.map((link) => (
            <div key={link.title} className='w-full flex flex-col gap-6 text-base min-w-[170px] justify-center items-center sm:justify-normal sm:items-start'>
              <h3 className='font-bold text-white'>{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className="text-white">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mb-[20px] text-[15px] text-center text-white mt-20">
        &copy; Vitor Gabriel Silva portfolio. All rights reserved
      </div> */}
    </footer>
  )
}

export default Footer