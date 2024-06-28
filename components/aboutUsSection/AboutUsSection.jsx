'use client'

import React, { useRef, useEffect } from 'react'

import Image from 'next/image'

import { motion, Variants, animate, useInView, useAnimation } from "framer-motion";

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import StripesAboutUs from '@/public/assets/icons/stripes_about_section.webp'
import BlackStar from '@/public/assets/icons/b-star.webp'
import BigCoinOnWingsImg from '@/public/assets/images/coin-with-wings.webp'
import CoolCowLottieAn from '@/public/assets/lottie/Kennylais bolsa de monedas.json'


const starVariants = {
  shine: {
    opacity: [0.7, 1, 1.5, 1, 0.7],
    scale: [0.7, 1, 1.2, 1, 0.7],
    rotate: 360,
    transition: {
      duration: 7,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const starVariantsTwo = {
  shine: {
    opacity: [0.5, 1, 1.7, 1, 0.5],
    scale: [0.7, 1, 1.2, 1, 0.7],
    rotate: 360,
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const starVariantsThree = {
  shine: {
    opacity: [0.7, 1, 1.5, 1, 0.7],
    scale: [0.7, 1, 1.2, 1, 0.7],
    rotate: -360,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const imageVariantsCoinOnWings = {
  initial: {
    opacity: 0,
    scale: 0.5,
    rotate: 45,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.4,
    }
  },
};

const imageVariantsCoolCowOnClouds = {
  initial: {
    y: 400,
    x: -30,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    y: 315,
    x: -30,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.6,
    }
  },
};

const imageVariantsCoolCowOnCloudsMob = {
  initial: {
    y: 200,
    x: -30,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    y: 150,
    x: -30,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.6,
    }
  },
};

const AboutUsSection = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-450px"})

  return (
    <section 
      id='aboutUsSection' 
      className="aboutUsSection relative xl:pb-[65px] m-[12px] md:mx-0"
      ref={ref}  
    >
      <div className="container max-w-[1150px] xl:px-0 mx-auto relative">
        <div className="flex flex-row flex-wrap items-center-justify-center">
          <div className="basis-full xl:basis-[49%] xl:mt-[70px]">
            <h2 className='text-[#36343C] text-[32px] md:text-[48px] mb-4'>About MoonTaurus</h2>
            <p className='mb-4 text-[#34313A]/80'>Long before humans gazed at the stars with telescopes, when the cosmos was a vast mystery, the legend of MoonTaurus began. According to ancient astrologers, during a cosmic event of unparalleled magnitude, a brilliant shard was torn from the moon. This wasn't an ordinary piece of rock, but one imbued with the moon’s deepest energies and the shimmering light of nearby celestial bodies.</p>
            <p className='mb-4 text-[#34313A]/80'>As this luminous fragment journeyed through the cosmos, it encountered various energies and cosmic mysteries. Over eons, these forces coalesced around the shard, forging it into a majestic white bull, glowing with a soft silver light. This creature was named MoonTaurus, derived from its lunar origins and its strong, bull-like form.</p>
            <p className='text-[#34313A]/80'>MoonTaurus roamed the celestial fields across the universe, where its paths became known as lines of fortune. Wherever MoonTaurus went, it left behind a trail of stardust that turned into precious metals and stones, seeding planets with the raw materials for life and prosperity. It was said that seeing MoonTaurus in the night sky was an omen of great fortune and abundance to come.</p>

            <ul className='btn-container mt-10 flex flex-row flex-nowrap items-center justify-center md:justify-start'>
              <li className='mr-4'>
                <a className='btn inline-block text-[16px] xl:text-[18px] rounded-[30px] text-[#E7DBED] bg-[#36343C] hover:bg-[#AD89B1] transition-all pt-[18px] px-[30px] pb-[19px] xl:pt-[16px] xl:px-[46px] xl:pb-[18px] min-w-[160px] xl:min-w-[193px]' href="#">How To Buy</a>
              </li>
              <li>
                <a className='btn inline-block text-[16px] xl:text-[18px] rounded-[30px] text-[#36343C] hover:text-[#ffffff] bg-[#E7DBED] hover:bg-[#AD89B1] transition-all pt-[18px] px-[50px] pb-[19px] xl:pt-[16px] xl:px-[62px] xl:pb-[18px] min-w-[160px] xl:min-w-[193px]' href="#">Staking</a>
              </li>
            </ul>
          </div>
          <div className="basis-full xl:basis-[49%] mt-12 xl:mt-0 relative">
            <div className='img-container flex items-center justify-center xl:absolute rounded-[39px] md:rounded-[59px] bg-[#EDE4F1] width-[100%] xl:w-[714px] h-[358px] xl:h-[734px] xl:left-[6px]'>
              {/* BG Images - Stripes */}
              <div className="bg-images-container absolute top-0 left-0 w-full h-full rounded-[39px] md:rounded-[59px] overflow-hidden">
                <Image
                  src={StripesAboutUs}
                  alt=""
                  quality={100}
                  className="opacity-[0.8] z-0 absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Big Coin */}
              <motion.div 
                className='bigCoinOnWings-container relative left-[20px] lg:left-[75px]'
                variants={imageVariantsCoinOnWings}
                initial="initial"
                whileInView="animate"
                animate={isInView && "animate"}
              >
                <Image 
                  src={BigCoinOnWingsImg}
                  alt=''
                  className='relative z-[1] sm:max-w-[70%] xl:max-w-full m-auto'
                />
              </motion.div>
              {/* Cool Cow */}
              <motion.div 
                className="coolCow-container w-[100px] xl:w-[205px] hidden xl:inline-block"
                variants={imageVariantsCoolCowOnClouds}
                initial="initial"
                whileInView="animate"
                animate={isInView && "animate"}
              >
                <Player
                  autoplay
                  loop
                  src={CoolCowLottieAn}
                  style={{ height: '205px', width: '205px' }}
                >
                </Player>
              </motion.div>
              <motion.div 
                className="coolCow-container w-[100px] xl:w-[100px] inline-block xl:hidden"
                variants={imageVariantsCoolCowOnCloudsMob}
                initial="initial"
                whileInView="animate"
                animate={isInView && "animate"}
              >
                <Player
                  autoplay
                  loop
                  src={CoolCowLottieAn}
                  style={{ height: '100px', width: '100px' }}
                >
                </Player>
              </motion.div>
              {/* Stars */}
              <div className="stars-container">
                <motion.div 
                  className="star-conntainer absolute w-[25px] h-auto sm:w-[45px] top-[100px] left-[70px] xl:top-[150px] xl:left-[100px]"
                  variants={starVariants}
                  animate="shine"
                >
                  <Image 
                    src={BlackStar}
                    alt=""
                    className=""
                  />
                </motion.div>
                <motion.div 
                  className="star-conntainer absolute w-[25px] h-auto sm:w-[45px] top-[70px] right-[70px] xl:top-[80px] xl:right-[60px]"
                  variants={starVariantsTwo}
                  animate="shine"
                >
                  <Image 
                    src={BlackStar}
                    alt=""
                    className=""
                  />
                </motion.div>
                <motion.div 
                  className="star-conntainer absolute w-[12px] h-auto sm:w-[25px] bottom-[70px] left-[60px] xl:bottom-[100px] xl:left-[80px]"
                  variants={starVariantsThree}
                  animate="shine"
                >
                  <Image 
                    src={BlackStar}
                    alt=""
                    className=""
                  />
                </motion.div>
                <motion.div 
                  className="star-conntainer absolute w-[12px] h-auto sm:w-[25px] bottom-[115px] right-[60px] xl:bottom-[200px] xl:right-[80px]"
                  variants={starVariants}
                  animate="shine"
                >
                  <Image 
                    src={BlackStar}
                    alt=""
                    className=""
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection