'use client'

import Image from 'next/image'

import HowBgPattern from '@/public/assets/images/howToBuyPattern.webp'
import HowBgPatternMob from '@/public/assets/images/howToBuyPatternMobile.webp'
import CoolCowOne from '@/public/assets/images/Kennylais_ILLUST_4.webp'
import CoolCowTwo from '@/public/assets/images/Kennylais_ILLUST_5.webp'
import CoolCowThree from '@/public/assets/images/Kennylais_ILLUST_6.webp'

const HowToBuySection = () => {
  return (
    <section id="howToBuySection" className='howToBuySection relative my-4 rounded-[39px] md:rounded-[59px] bg-[#34313A] pt-[35px] pb-[45px] md:pt-[70px] md:pb-[110px]'>
      {/* BG Pattern, CoolCow Image */}
      <div className='bg-pattern'>
        <Image 
          src={HowBgPattern}
          alt=""
          quality={100}
          className="z-0 rounded-[59px] absolute inset-0 w-full h-full object-cover hidden lg:block"
        />
        <Image 
          src={HowBgPatternMob}
          alt=""
          quality={100}
          className="z-0 rounded-[59px] absolute inset-0 w-full h-full object-cover lg:hidden"
        />
      </div>
      <div className="container max-w-[1150px] px-4 lg:px-0 mx-auto relative">
        <div className='title-container text-center mb-36'>
          <h2 className='text-[#E7DBED] text-[32px] lg:text-[48px]'>How to buy</h2>
        </div>

        <div className='flex flex-row flex-wrap items-start justify-between text-center'>
          <div className="basis-full md:basis-[49%] lg:basis-[32%] mb-36 lg:mb-0">
            <div className='howToBuy-card-box rounded-[26px] bg-[#919CAF] py-[25px] px-[23px]'>
              <div className='img-container flex items-center justify-center mt-[-140px]'>
                <Image 
                  src={CoolCowOne}
                  alt=''
                  className=''
                />
              </div>
              <h4 className='text-[24px] text-[#34313A] mb-6'>Title  1</h4>
              <p className='text-[13px] text-[#34313A]/80'>Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque faucibus duis nibh. Orci interdum turpis pretium quam neque viverra euismod. Sed habitant odio molestie ac.</p>
            </div>
          </div>
          <div className="basis-full md:basis-[49%] lg:basis-[32%] mb-36 lg:mb-0">
            <div className='howToBuy-card-box rounded-[26px] bg-[#919CAF] py-[25px] px-[23px]'>
              <div className='img-container flex items-center justify-center mt-[-140px]'>
                <Image 
                  src={CoolCowTwo}
                  alt=''
                  className=''
                />
              </div>
              <h4 className='text-[24px] text-[#34313A] mb-6'>Title  2</h4>
              <p className='text-[13px] text-[#34313A]/80'>Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque faucibus duis nibh. Orci interdum turpis pretium quam neque viverra euismod. Sed habitant odio molestie ac.</p>
            </div>
          </div>
          <div className="basis-full md:basis-[49%] lg:basis-[32%]">
            <div className='howToBuy-card-box rounded-[26px] bg-[#919CAF] py-[25px] px-[23px]'>
              <div className='img-container flex items-center justify-center mt-[-140px]'>
                <Image 
                  src={CoolCowThree}
                  alt=''
                  className=''
                />
              </div>
              <h4 className='text-[24px] text-[#34313A] mb-6'>Title  3</h4>
              <p className='text-[13px] text-[#34313A]/80'>Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque faucibus duis nibh. Orci interdum turpis pretium quam neque viverra euismod. Sed habitant odio molestie ac.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToBuySection