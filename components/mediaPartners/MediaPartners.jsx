'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import { images } from '@/lib/images'
import ArrowLeft from '@/public/assets/icons/Arrow-left.png'
import ArrowRight from '@/public/assets/icons/Arrow-right.png'
import one from '@/public/assets/icons/PartnersLogo.webp'
import two from '@/public/assets/icons/PartnersLogo-1.webp'
import three from '@/public/assets/icons/PartnersLogo-2.webp'
import four from '@/public/assets/icons/PartnersLogo-3.webp'
import five from '@/public/assets/icons/PartnersLogo-4.webp'
import six from '@/public/assets/icons/PartnersLogo-5.webp'

import 'swiper/css'
import 'swiper/css/navigation'


const MediaPartners = () => {
  return (
    <div id='mediaPartners' className='mediaPartners relative rounded-[39px] md:rounded-[59px] bg-[#919CAF] py-[40px] lg:py-[65px] m-[12px] md:mx-0'>
      <div className="container max-w-[1383px] px-4 lg:px-0 mx-auto relative">
        <div className='title-container text-center'>
          <h2 className='text-white text-[36px] md:text-[40px]'>Media Partners</h2>
        </div>
        <div className='desktop_tablet-swiper'>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation= {{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={2}
            loop={true}
            onSwiper={swiper => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className='MediaPartnersSwiper w-full'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image 
                  src={image.src}
                  alt={image.alt}
                  className='max-w-[125px] lg:max-w-auto'
                />
              </SwiperSlide>
            ))}

              <div className="mediaPartners-arrows universal-arrows-container relative bottom-[-50px]">
                <div className="swiper-button-prev relative flex flex-row items-center justify-center bg-white rounded-[15px] w-[44px] h-[44px] min-w-[44px] min-h-[44px]">
                  <Image 
                    src={ArrowLeft}
                    alt=''
                  />
                </div>
                <div className="swiper-button-next relative flex flex-row items-center justify-center bg-white rounded-[15px] w-[44px] h-[44px] min-w-[44px] min-h-[44px]">
                  <Image 
                    src={ArrowRight}
                    alt=''
                  />
                </div>
              </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default MediaPartners