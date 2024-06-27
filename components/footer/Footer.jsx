'use client'

import React, { useEffect, useState, useRef } from 'react';

import Image from 'next/image'
import Link from 'next/link'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import LogoFooter from '@/public/assets/icons/MainLogo.webp'
import CoolCowFooter from '@/public/assets/images/Kennylais_ILLUST_FOOTER.webp'
import PhoneIcon from '@/public/assets/icons/phone-ring.png'
import Facebook from '@/public/assets/icons/facebook-fill.webp'
import Twitter from '@/public/assets/icons/twitter.webp'
import Youtube from '@/public/assets/icons/youtube.webp'
import Linkedin from '@/public/assets/icons/linkedin-alt.webp'
import CoolCowLottie from '@/public/assets/lottie/coolCowFooter2.json'

const socials = [
  { link: '#facebook', icon: Facebook, alt: 'Facebook' },
  { link: '#twitter', icon: Twitter, alt: 'Twitter' },
  { link: '#youtube', icon: Youtube, alt: 'Youtube' },
  { link: '#linkedin', icon: Linkedin, alt: 'Linkedin' },
]

const Footer = () => {
  return (
    <section 
      id='footer' 
      className='footer relative rounded-t-[39px] md:rounded-[59px] bg-[#232127] pt-[135px] pb-4 mt-24 md:my-[12px] md:mx-0'
    >
      <div className="container max-w-[1150px] px-4 lg:px-0 mx-auto relative">
        <div className='footer_top'>
          <div className="flex flex-row flex-wrap items-start jusify-between">
            <div className="basis-full md:basis-3/12 mb-10 md:mb-0">
              {/* Logo */}
              <Link href="/">
                <Image src={LogoFooter} alt="MoonTourus" width={143} height={33} />
              </Link>
              <p className='text-[#E7DBED] my-6'>Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.</p>
              <a className='phone-num text-[#E7DBED] hover:text-[#ffffff]' href="tel:+012 (345) 678 99">
                <div className='flex flex-row flex-no-wrap items-center'>
                  <Image 
                    src={PhoneIcon}
                    alt=''
                    className='mr-4'
                  />
                  +012 (345) 678 99
                </div>
              </a>
            </div>
            <div className="basis-full md:basis-3/12 h-0 md:h-full relative">
              <div className='absolute mt-[-540px] ml-[-7%] md:mt-[-280px] md:ml-[-80px]'>
                <div>
                  <Player
                    autoplay
                    loop
                    src={CoolCowLottie}
                    style={{ height: '400px', width: '400px' }}
                  >
                  </Player>
                </div>
              </div>
            </div>
            <div className="basis-full md:basis-6/12">
              <div className="flex flex-row flex-wrap items-start justify-between">
                <div className="basis-1/2 md:basis-4/12 mb-6 md:mb-0">
                  <p className='text-[#E7DBED] font-medium mb-8'>Resources</p>
                  <ul>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2 md:basis-4/12 mb-6 md:mb-0">
                  <p className='text-[#E7DBED] font-medium mb-8'>Company</p>
                  <ul>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Contact & Support</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Success History</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Setting & Privacy</a>
                    </li>
                  </ul>
                </div>
                <div className="basis-full md:basis-4/12">
                  <p className='text-[#E7DBED] font-medium mb-8'>Quick Links</p>
                  <ul>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Premium Support</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Our Services</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Know Our Team</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom bg-[#34313A] rounded-[39px] md:rounded-[59px] py-4 md:py-7 mt-12 md:mt-10 mx-4'>
        <div className="container max-w-[1150px] px-4 lg:px-0 mx-auto relative">
          <div className="flex flex-row flex-wrap items-center justify-between">
            <div className="basis-full md:basis-1/2 flex items-center justify-between md:justify-normal">
              <p className='text-[#E7DBED] font-medium mr-2 md:mr-6'>Follow Us On</p>
              <ul className='flex flex-row items-center justify-between'>
                {socials.map((social, index) => (
                  <li 
                    key={index}
                    className='bg-[#E7DBED]/[0.11] hover:bg-[#E7DBED]/[0.3] rounded-full w-[32px] h-[32px] flex items-center justify-center mr-2 md:mr-4'
                  >
                    <a href={social.link}>
                      <Image 
                        src={social.icon}
                        alt={social.alt}
                        className='relative z-50 hover:scale-125 transition-all'
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-full md:basis-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
              <p className='text-[#E7DBED]/[.39]'>© 2024 Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer