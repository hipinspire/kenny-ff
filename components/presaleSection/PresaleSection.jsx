'use client'

import Image from 'next/image'

import ChevronLeft from '@/public/assets/icons/chevron-left.webp'
import ChevronRight from '@/public/assets/icons/chevron-right.webp'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const PresaleSection = () => {
  return (
    <section id='presaleSection' className='presaleSection relative m-[12px] md:mx-0 rounded-[39px] md:rounded-[59px] bg-[#E7DBED] pt-[25px] pb-[50px] lg:pb-[50px]'>
      <div className="container max-w-[1290px] px-4 lg:px-0 mx-auto relative">
        <div className='flex flex-row flex-wrap items-center justify-between mb-8'>
          <div className='basis-full md:basis-2/3'>
            <div className='title-container'>
              <h2 className='text-[#36343C] text-[32px] lg:text-[48px] uppercase'>Presale schedule</h2>
              <p className='text-[#34313A]/80'>Our goal is crystal clear: to empower the everyday enthusiast and shake up the conventional financial scene. We are convinced that memes possess an incredible ability to connect, motivate, and challenge the established order. With the power of decentralization, we are spearheading a revolution that returns control to the people - to whom it truly belongs.</p>
            </div>
          </div>
          <div className='basis-full md:basis-1/3'>
           
          </div>
        </div>
        
        <div className='presaleSectionSwiper-container'>
          <Swiper
            modules={[Navigation]}
            navigation= {{
              nextEl: '.swiper-button-nextThree',
              prevEl: '.swiper-button-prevThree',
            }}
            slidesPerView={1}
            spaceBetween={12}
            loop={true}
            onSwiper={swiper => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            className='presaleSectionSwiper w-full'
          >
            <SwiperSlide>
              {/* Stage 1 */}
              <div className='presale-card-box rounded-[39px] md:rounded-[59px] bg-[#ffffff] pt-[25px] px-[23px] pb-[50px]'>
                <div className='flex flex-row flex-nowrap items-center justify-between mb-6'>
                  <div className='basis-1/2 flex justify-start'>
                    <h3 className='text-[24px] lg:text-[36px] text-[#36343C]'>Stage 1</h3>
                  </div>
                  <div className='basis-1/2 flex justify-end'>
                    <button className='btn inline-block text-[16px] lg:text-[18px] rounded-[30px] text-[#36343C] hover:text-[#ffffff] bg-[#919CAF] transition-all pt-[12px] px-[20px] pb-[13px] lg:pt-[10px] lg:px-[18px] lg:pb-[12px] min-w-[75px] min-w-[110px] disabled' href="#">Sold Out</button>
                  </div>
                </div>
                <div className='progress-bar mb-8'>
                  <div className="w-full h-6 bg-gradient-to-r from-transparent to-[#D2B8E3] rounded-full flex items-center justify-center">
                    <span className="text-[#36343C] font-bold">100%</span>
                  </div>
                </div>
                <div className='flex flex-row flex-wrap items-start justify-between'>
                  <div className="basis-full lg:basis-2/3">
                    <p className='text-[13px] text-[#58535E]/80'>Allocation for this stage</p>
                    <p className='uppercase text-[24px] lg:text-[32px] text-[#58535E] font-bold'>1,200,000,000 MNTR</p>
                  </div>
                  <div className="basis-full lg:basis-1/3 grid lg:justify-end">
                    <p className='text-[13px] text-[#58535E]/80'>Purchase Price</p>
                    <p className='uppercase text-[24px] lg:text-[32px] text-[#58535E] font-bold'>1 $MBAG</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Stage 2 */}
              <div className='presale-card-box rounded-[39px] md:rounded-[59px] bg-[#ffffff] pt-[25px] px-[23px] pb-[50px]'>
                <div className='flex flex-row flex-nowrap items-center justify-between mb-6'>
                  <div className='basis-1/2 flex justify-start'>
                    <h3 className='text-[24px] lg:text-[36px] text-[#36343C]'>Stage 2</h3>
                  </div>
                  <div className='basis-1/2 flex justify-end'>
                    <button className='btn inline-block text-[16px] lg:text-[18px] rounded-[30px] text-[#36343C] hover:text-[#ffffff] bg-[#D2B8E3] transition-all pt-[12px] px-[20px] pb-[13px] lg:pt-[10px] lg:px-[20px] lg:pb-[12px] min-w-[75px] lg:min-w-[110px] disabled' href="#">Live</button>
                  </div>
                </div>
                <div className='progress-bar mb-8'>
                  <div className="w-full h-6 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div
                      className="absolute rounded-full top-0 left-0 h-full"
                      style={{
                        width: '50%',
                        background: 'linear-gradient(to right, transparent, #D2B8E3)',
                        zIndex: 1
                      }}
                    ></div>
                    <div
                      className="absolute rounded-full  top-0 right-0 h-full"
                      style={{
                        width: '55%',
                        backgroundColor: '#F5F0F8',
                        zIndex: 0
                      }}
                    ></div>
                    <span className="text-[#36343C] font-bold z-10">50%</span>
                  </div>
                </div>
                <div className='flex flex-row flex-wrap items-start justify-between'>
                  <div className="basis-full lg:basis-2/3">
                    <p className='text-[13px] text-[#58535E]/80'>Allocation for this stage</p>
                    <p className='uppercase text-[24px] lg:text-[32px] text-[#58535E] font-bold'>900,000,000 MNTR</p>
                  </div>
                  <div className="basis-full lg:basis-1/3 grid lg:justify-end">
                    <p className='text-[13px] text-[#58535E]/80'>Purchase Price</p>
                    <p className='uppercase text-[24px] lg:text-[32px] text-[#58535E] font-bold'>0.5 $MBAG</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Stage 3 */}
              <div className='presale-card-box rounded-[39px] md:rounded-[59px] bg-[#ffffff] pt-[25px] px-[23px] pb-[50px]'>
                <div className='flex flex-row flex-nowrap items-center justify-between mb-6'>
                  <div className='basis-1/2 flex justify-start'>
                    <h3 className='text-[24px] lg:text-[36px] text-[#36343C]'>Stage 3</h3>
                  </div>
                  <div className='basis-1/2 flex justify-end'>
                    <button className='btn inline-block text-[16px] lg:text-[18px] rounded-[30px] text-[#36343C] hover:text-[#ffffff] bg-[#919CAF] transition-all pt-[12px] px-[20px] pb-[13px] lg:pt-[10px] lg:px-[20px] lg:pb-[12px] min-w-[75px] lg:min-w-[110px] disabled' href="#">Sold Out</button>
                  </div>
                </div>
                <div className='progress-bar mb-8'>
                  <div className="w-full h-6 bg-gradient-to-r from-transparent to-[#D2B8E3] rounded-full flex items-center justify-center">
                    <span className="text-[#36343C] font-bold">100%</span>
                  </div>
                </div>
                <div className='flex flex-row flex-wrap items-start justify-between'>
                  <div className="basis-full lg:basis-2/3">
                    <p className='text-[13px] text-[#58535E]/80'>Allocation for this stage</p>
                    <p className='uppercase text-[24px] lg:text-[32px] text-[#58535E] font-bold'>1,200,000,000 MNTR</p>
                  </div>
                  <div className="basis-full lg:basis-1/3 grid lg:justify-end">
                    <p className='text-[13px] text-[#58535E]/80'>Purchase Price</p>
                    <p className='uppercase text-[24px] lg:text-[32px] text-[#58535E] font-bold'>1 $MBAG</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="presaleSectionSwiper-arrows flex flex-row flex-nowrap items-center justify-center relative top-[25px] md:top-[27px]">
          <div className="swiper-button-prevThree relative flex flex-row items-center justify-center bg-white rounded-[15px] w-[44px] h-[44px] min-w-[44px] min-h-[44px]">
            <Image 
              src={ChevronLeft}
              alt=''
            />
          </div>
          <div className="swiper-button-nextThree relative flex flex-row items-center justify-center bg-white rounded-[15px] w-[44px] h-[44px] min-w-[44px] min-h-[44px]">
            <Image 
              src={ChevronRight}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresaleSection