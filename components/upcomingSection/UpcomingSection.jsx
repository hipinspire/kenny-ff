'use client'

import React, { useRef } from 'react'
import Image from 'next/image'

import { motion, useInView } from 'framer-motion'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import IconOne from '@/public/assets/icons/PhaseIcon-1.webp'
import IconTwo from '@/public/assets/icons/PhaseIcon-2.webp'
import IconThree from '@/public/assets/icons/PhaseIcon-3.webp'
import IconFour from '@/public/assets/icons/PhaseIcon-4.webp'
import ChevronLeft from '@/public/assets/icons/chevron-left.webp'
import ChevronRight from '@/public/assets/icons/chevron-right.webp'
import BgPattern from '@/public/assets/images/phase-bg-pattern.webp'
import BgPatternMob from '@/public/assets/images/phase-bg-pattern-mob.webp'
import CoolCowLottieAnim from '@/public/assets/lottie/Kennylais con traje.json'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const imageVariantsCoolCowUp = {
  initial: {
    y: 350,
    x: -24,
    opacity: 0
  },
  animate: {
    y: 460,
    x: -12,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5
    }
  }
};

const imageVariantsCoolCowUpMob = {
  initial: {
    y: 400,
    x: -10,
    opacity: 0
  },
  animate: {
    y: 500,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5
    }
  }
};

const UpcomingSection = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-450px"})

  return (
    <section 
      id="upcomingSection" 
      className='upcomingSection relative m-[12px] md:mx-0 rounded-[39px] md:rounded-[59px] bg-[#34313A] pt-[25px] lg:pt-[80px] lg:pb-0'
      ref={ref}
    >
      {/* BG Pattern, CoolCow Image */}
      <div className='bg-pattern'>
        <Image 
          src={BgPattern}
          alt=""
          quality={100}
          className="z-0 rounded-[59px] absolute inset-0 w-full h-full object-cover hidden lg:block"
        />
        <Image 
          src={BgPatternMob}
          alt=""
          quality={100}
          className="z-0 rounded-[59px] absolute inset-0 w-full h-full object-cover lg:hidden"
        />
      </div>
      {/* CoolCow */}
      <div className='coolCow-container z-10 absolute top-0 left-0 w-full h-auto'>
        <motion.div 
          className="hidden lg:inline-block"
          initial="initial"
          whileInView="animate"
          animate={isInView && "animate"}
          variants={imageVariantsCoolCowUp}
        >
          <Player
            autoplay
            loop
            src={CoolCowLottieAnim}
            style={{ height: '250px', width: '250px' }}
          >
          </Player>
        </motion.div>
        <motion.div 
          className="inline-block lg:hidden"
          initial="initial"
          whileInView="animate"
          animate={isInView && "animate"}
          variants={imageVariantsCoolCowUpMob}
        >
          <Player
            autoplay
            loop
            src={CoolCowLottieAnim}
            style={{ height: '129px', width: '129px' }}
          >
          </Player>
        </motion.div>
      </div>
      <div className="container max-w-[1150px] pl-4 pr-0 md:px-4 lg:px-0 mx-auto relative">
        <div className='title-container mb-4 pr-4 text-center lg:max-w-[530px] mx-auto'>
          <h2 className='text-[#E7DBED] text-[32px] md:text-[48px] mb-2'>Upcoming: Phase 1</h2>
          <p className='text-[#E7DBED]/80'>Together, we’ll demonstrate that MoonTaurus is here to stay, backed by a solid strategy that will guide us throughout this venture.</p>
        </div>

        <div className='upcomingSectionSwiper-container'>
          <Swiper
              modules={[Navigation]}
              navigation= {{
                nextEl: '.swiper-button-nextTwo',
                prevEl: '.swiper-button-prevTwo',
              }}
              slidesPerView={'auto'}
              spaceBetween={12}
              loop={true}
              onSwiper={swiper => console.log(swiper)}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              className='upcomingSectionSwiper w-full'
            >
                <SwiperSlide>
                  <div className='phase-card-box text-center rounded-[45px] bg-[#E7DBED] pt-[60px] px-[30px] pb-[30px] min-h-[329px]'>
                    <div className='flex items-center justify-center mb-10'>
                      <Image 
                        src={IconOne}
                        alt=""
                        className=""
                      />
                    </div>
                    <h4 className='text-[16px] text-[#34313A] mb-2'>Smart Contract Development</h4>
                    <p className='text-[13px] text-[#34313A]/80'>Design a secure and fully audited smart contract for the MNTR token to maintain transparency and build trust.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='phase-card-box text-center rounded-[45px] bg-[#E7DBED] pt-[60px] px-[30px] pb-[30px] min-h-[329px]'>
                    <div className='flex items-center justify-center mb-10'>
                      <Image 
                        src={IconTwo}
                        alt=""
                        className=""
                      />
                    </div>
                    <h4 className='text-[16px] text-[#34313A] mb-2'>Community Engagement</h4>
                    <p className='text-[13px] text-[#34313A]/80'> Activate your presence on social media platforms such as Twitter, Telegram, Discord, and Instagram. Get ready to board the excitement train with a vibrant and active MoonTaurus community.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='phase-card-box text-center rounded-[45px] bg-[#E7DBED] pt-[60px] px-[30px] pb-[30px] min-h-[329px]'>
                    <div className='flex items-center justify-center mb-10'>
                      <Image 
                        src={IconThree}
                        alt=""
                        className=""
                      />
                    </div>
                    <h4 className='text-[16px] text-[#34313A] mb-2'>Marketing and Branding</h4>
                    <p className='text-[13px] text-[#34313A]/80'>Launch an extensive marketing initiative for MoonTaurus, managed by skilled marketers. Time to make a splash and go viral!</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='phase-card-box text-center rounded-[45px] bg-[#E7DBED] pt-[60px] px-[30px] pb-[30px] min-h-[329px]'>
                    <div className='flex items-center justify-center mb-10'>
                      <Image 
                        src={IconFour}
                        alt=""
                        className=""
                      />
                    </div>
                    <h4 className='text-[16px] text-[#34313A] mb-2'>Merchandise</h4>
                    <p className='text-[13px] text-[#34313A]/80'>Showcase your support for MoonTaurus with stylish branded merchandise and gear. Flaunt your MoonTaurus spirit!</p>
                  </div>
                </SwiperSlide>

                <div className="upcomingSectionSwiper-arrows universal-arrows-container relative bottom-[-50px]">
                  <div className="swiper-button-prevTwo relative flex flex-row items-center justify-center bg-white rounded-[15px] w-[44px] h-[44px] min-w-[44px] min-h-[44px]">
                    <Image 
                      src={ChevronLeft}
                      alt=''
                    />
                  </div>
                  <div className="swiper-button-nextTwo relative flex flex-row items-center justify-center bg-white rounded-[15px] w-[44px] h-[44px] min-w-[44px] min-h-[44px]">
                    <Image 
                      src={ChevronRight}
                      alt=''
                    />
                  </div>
                </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default UpcomingSection