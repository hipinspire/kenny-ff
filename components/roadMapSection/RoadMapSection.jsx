'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'

import ChevronLeft from '@/public/assets/icons/chevron-left.webp'
import ChevronRight from '@/public/assets/icons/chevron-right.webp'
import Icon from '@/public/assets/icons/roadmap-icon.webp'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const RoadMapSection = () => {

  const ref = useRef(null)
  // const isInView = useInView(ref, { margin: "0px" })
  const controls = useAnimation()

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Use the hook to determine if the element is in view
  const isInView = useInView(ref, {
    margin: isMobile ? '0px' : '-450px',
  })

  const transition = { type: 'spring', stiffness: 30, damping: 60 }

  useEffect(() => {
    if (isInView) {
      controls.start({ x: isMobile ? -70 : -170, transition })
    } else {
      controls.start({ x: 0, transition })
    }
  }, [isMobile, isInView, controls, transition])


  return (
    <motion.section 
      id="roadMap" 
      className='roadMapSection relative my-4 rounded-[39px] md:rounded-[59px] bg-[#49404F] pt-[35px] pb-[65px] md:pt-[70px] md:pb-[110px]'
      ref={ref}
    >
      <div className="container max-w-[1150px] px-4 lg:px-0 mx-auto relative">
        <div className='title-container text-center mb-10'>
          <h2 className='text-[#E7DBED] text-[32px] lg:text-[48px]'>Road Map</h2>
        </div>
        {/* Progress Bar */}
        <div className="relative w-full h-2.5 rounded-full bg-gradient-to-r from-[#E7DBED] via-[#B996CA_97%] to-[#B996CA] mb-10">
          <div className="absolute top-[-4px] md:top-[-62px] left-0 md:left-[15px] transform -translate-y-0 -translate-x-1/2 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center sm:hidden">
            <div className="w-2 h-2 md:w-4 md:h-4 bg-[#D2B8E3] rounded-full"></div>
          </div>
          <motion.div
            initial={{ x: 0 }}
            animate={controls}
          >
            <Image 
              src={Icon}
              alt=''
              className='relative max-w-[34px] top-[-21px] left-[70px] md:max-w-full md:top-[-52px] md:left-[170px]'
            />
          </motion.div>
        </div>

        <div className='roadMapSwiper-container'>
          <Swiper
            modules={[Navigation]}
            navigation= {{
              nextEl: '.swiper-button-nextFour',
              prevEl: '.swiper-button-prevFour',
            }}
            slidesPerView={1}
            spaceBetween={85}
            loop={true}
            onSwiper={swiper => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            className='roadMapSwiper w-full'
          >
            <SwiperSlide>
              {/* Phase 1 */}
              <div className='roadMap-card-box'>
                {/* Dot on progress bar */}
                <div className="absolute top-[-53px] md:top-[-62px] left-0 md:left-[15px] transform -translate-y-0 -translate-x-1/2 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full items-center justify-center hidden sm:flex">
                  <div className="w-2 h-2 md:w-4 md:h-4 bg-[#D2B8E3] rounded-full"></div>
                </div>
                <div className='rounded-[28px] bg-[#E7DBED] pt-[25px] px-[23px] pb-[30px] min-h-[190px] mb-4'>
                  <h4 className='text-[24px] text-[#34313A] mb-2'>Phase 1</h4>
                  <p className='text-[13px] text-[#34313A]/80'>Foundation will focus on developing a secure smart contract, fostering a robust community, and initiating an extensive branding and marketing strategy.</p>
                </div>
                <div className='rounded-[28px] bg-[#E7DBED] pt-[16px] px-[20px] pb-[20px] min-h-[190px]'>
                  <h5 className='text-[16px] text-[#34313A] mb-2'>Benefits</h5>
                  <ul className='list-disc pl-6'>
                    <li className='text-[13px] text-[#34313A]/80 mb-4'>Smart Contract Development</li>
                    <li className='text-[13px] text-[#34313A]/80 mb-4'>Community Engagement</li>
                    <li className='text-[13px] text-[#34313A]/80 mb-4'>LMarketing and Branding</li>
                    <li className='text-[13px] text-[#34313A]/80'>Merchandise</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Phase 2 */}
              <div className='roadMap-card-box'>
                {/* Dot on progress bar */}
                <div className="absolute top-[-53px] md:top-[-62px] left-0 md:left-[15px] transform -translate-y-0 -translate-x-1/2 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full items-center justify-center hidden sm:flex">
                  <div className="w-2 h-2 md:w-4 md:h-4 bg-[#D2B8E3] rounded-full"></div>
                </div>
                <div className='rounded-[28px] bg-[#E7DBED] pt-[25px] px-[23px] pb-[30px] min-h-[190px] mb-4'>
                  <h4 className='text-[24px] text-[#34313A] mb-2'>Phase 2</h4>
                  <p className='text-[13px] text-[#34313A]/80'>Launch will mark the official debut of the MNTR token, the formation of strategic alliances, listings on exchanges, and promotional campaigns to propel MoonTaurus into the mainstream.</p>
                </div>
                <div className='rounded-[28px] bg-[#E7DBED] pt-[16px] px-[20px] pb-[20px] min-h-[190px]'>
                  <h5 className='text-[16px] text-[#34313A] mb-2'>Benefits</h5>
                  <ul className='list-disc pl-6'>
                    <li className='text-[13px] text-[#34313A]/80 mb-4'>Token Launch</li>
                    <li className='text-[13px] text-[#34313A]/80 mb-4'>Partnerships</li>
                    <li className='text-[13px] text-[#34313A]/80 mb-4'>Token Listings</li>
                    <li className='text-[13px] text-[#34313A]/80'>Exchange Listings</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Phase 3 */}
              <div className='roadMap-card-box'>
                {/* Dot on progress bar */}
                <div className="absolute top-[-53px] md:top-[-62px] left-0 md:left-[15px] transform -translate-y-0 -translate-x-1/2 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full items-center justify-center hidden sm:flex">
                  <div className="w-2 h-2 md:w-4 md:h-4 bg-[#D2B8E3] rounded-full"></div>
                </div>
                <div className='rounded-[28px] bg-[#E7DBED] pt-[25px] px-[23px] pb-[30px] min-h-[190px] mb-4'>
                  <h4 className='text-[24px] text-[#34313A] mb-2'>Phase 3</h4>
                  <p className='text-[13px] text-[#34313A]/80'>Community Empowerment will provide exclusive perks to our community, aim to reach a market capitalization of $1 billion, and achieve listings on leading exchanges.</p>
                </div>
                <div className='rounded-[28px] bg-[#E7DBED] pt-[16px] px-[20px] pb-[20px] min-h-[190px]'>
                  <h5 className='text-[16px] text-[#34313A] mb-2'>Benefits</h5>
                  <ul className='list-disc pl-6'>
                    <li className='text-[13px] text-[#34313A]/80 mb-4'>Exclusive Community</li>
                    <li className='text-[13px] text-[#34313A]/80 mb-4'>Ambitious Market Cap Target</li>
                    <li className='text-[13px] text-[#34313A]/80'>Premier CEX Listings</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <div className="roadMapSwiper-arrows flex flex-row flex-nowrap items-center justify-end relative top-[30px] md:top-[30px]">
              <div className="swiper-button-prevFour relative flex flex-row items-center justify-center bg-white rounded-[15px] w-[44px] h-[44px] min-w-[44px] min-h-[44px]">
                <Image 
                  src={ChevronLeft}
                  alt=''
                />
              </div>
              <div className="swiper-button-nextFour relative flex flex-row items-center justify-center bg-white rounded-[15px] w-[44px] h-[44px] min-w-[44px] min-h-[44px]">
                <Image 
                  src={ChevronRight}
                  alt=''
                />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </motion.section>
  )
}

export default RoadMapSection