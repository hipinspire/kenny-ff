"use client"

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CSSTransition } from 'react-transition-group';

import BigCow from '@/public/assets/images/big-cow.webp'
import Link from 'next/link'
import Links from './links/Links'
import Image from 'next/image'
import styles from './navbar.css'
import Logo from '@/public/assets/icons/MainLogo.webp'
import Stripes from '@/public/assets/icons/stripes.webp'


const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Function to handle link click
  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div className='container mx-auto max-w-[1182px] px-4 relative'>
      <div className='navbar bg-transparent absolute mx-auto top-0 left-0 z-50 w-full px-4'>
        <div className='flex justify-between items-center h-14 lg:h-24 mx-4 lg:mx-auto'>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={handleLinkClick}>
            <Image 
              src={Logo} 
              alt="MoonTourus" 
              className='w-[91px] h-auto lg:w-[147px]'
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden lg:flex flex-row flex-nowrap mx-auto'>
            <Links onLinkClick={handleLinkClick} />
          </ul>

          <ul className='hidden lg:flex'>
            <Link 
              className='btn text-[16px] rounded-[30px] text-[#34313A] hover:text-[#ffffff] bg-[#E7DBED] hover:bg-[#AD89B1] transition-all' 
              href="#" 
              alt="Connect Wallet" 
              onClick={handleLinkClick}
            >
                Connect Wallet
            </Link>
          </ul>

           {/* Mobile Navigation Icon */}
           <div 
              onClick={handleNav} 
              className={`toggle-btn block lg:hidden z-50 cursor-pointer transition-all ${nav ? 'fixed right-[30px]' : 'relative right-auto'}`}
            >
              <CSSTransition
                in={nav}
                timeout={2000}
                classNames="icon-transition"
                unmountOnExit
                appear
              >
                <AiOutlineClose size={20} />
              </CSSTransition>
              <CSSTransition
                in={!nav}
                timeout={2000}
                classNames="icon-transition"
                unmountOnExit
                appear
              >
                <AiOutlineMenu size={20} />
              </CSSTransition>
            </div>

           {/* <div 
            onClick={handleNav} 
            className={`toggle-btn block lg:hidden z-50 cursor-pointer transition-all delay-[2000ms] ${nav ? 'fixed right-[30px]' : 'relative right-auto'}`}
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div> */}

          {/* Mobile Navigation Menu */}
          <ul 
            className={
              nav
                ? 'fixed lg:hidden left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#36343C] ease-in-out duration-300 px-10 py-8 z-40'
                : 'ease-in-out w-[100%] duration-300 fixed top-0 bottom-0 left-[-100%]'
            }>
              {/* BG Images - Stripes */}
              <div className="bg-images-container absolute top-0 left-0 w-full h-full">
                <Image
                  src={Stripes}
                  alt=""
                  quality={100}
                  className="opacity-[0.1] z-[-1] absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Mobile Logo */}
              <Link href="/" className='relative z-30' onClick={handleLinkClick}>
                <Image src={Logo} alt="MoonTourus" className='w-[91px] h-auto lg:w-[147px]' />
              </Link>

              {/* Mobile Navigation Items */}
              <Links onLinkClick={handleLinkClick} />

              <Link 
                className='btn text-[16px] rounded-[30px] text-[#34313A] hover:text-[#ffffff] bg-[#E7DBED] hover:bg-[#AD89B1] transition-all relative z-50' 
                href="#" 
                alt="Connect Wallet"
                onClick={handleLinkClick}
              >
                Connect Wallet
              </Link>
              <li className='absolute bottom-0 left-0'>
                <Image 
                  src={BigCow}
                  alt=""
                  className="relative z-40"
                />
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar