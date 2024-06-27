'use client'

import React, { useRef, useEffect, useState } from 'react'

import Image from 'next/image'

import { motion, Variants, animate, useInView, useAnimation } from "framer-motion";

import BlackStar from '@/public/assets/icons/b-star.webp'
import TextOne from '@/public/assets/images/img-text-1.webp'
import TextTwo from '@/public/assets/images/img-text-2.webp'
import TextThree from '@/public/assets/images/img-text-3.webp'
import TextFour from '@/public/assets/images/img-text-4.webp'
import TextFive from '@/public/assets/images/img-text-5.webp'
import BigCoinWithMoonCloudShadow from '@public/assets/images/BigCoinWithMoonCloudShadow.webp'

const TokenomicsSection = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-450px"})

  const [text, setText] = useState('0xa7F4195F10F1a62B102bD683eAB131');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Hide notification after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

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
        duration: 3,
        staggerChildren: 0.4,
      }
    },
  };

  const imageVariantsTextOne = {
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
        duration: 1.7,
        staggerChildren: 0.3,
      }
    },
  };

  const imageVariantsTextTwo = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotate: 30,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 2.5,
        staggerChildren: 0.6,
      }
    },
  };

  const imageVariantsTextThree = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotate: 60,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.4,
      }
    },
  };

  const imageVariantsTextFour = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotate: 40,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.3,
        staggerChildren: 0.8,
      }
    },
  };

  const imageVariantsTextFive = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotate: 25,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 3,
        staggerChildren: 0.5,
      }
    },
  };

  return (
    <div 
      id='tokenomicsSection' 
      className='tokenomicsSection relative xl:pb-[65px] m-[12px] md:mx-0'
      ref={ref}  
    >
      <div className="container max-w-[1150px] lg:px-0 mx-auto relative">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <div className="basis-full xl:basis-1/2 order-last mt-[30px] xl:mt-0 xl:order-first relative">
            <div className='img-container flex items-center justify-center xl:absolute rounded-[39px] md:rounded-[59px] bg-[#919CAF] width-[100%] xl:w-[718px] h-[464px] xl:h-[657px] xl:top-[-295px] xl:left-[-130px]'>
              {/* Big Coin */}
              <motion.div 
                className='bigCoinOnWings-container relative'
                variants={imageVariantsCoinOnWings}
                initial="initial"
                whileInView="animate"
                animate={isInView && "animate"}
              >
                <Image 
                  src={BigCoinWithMoonCloudShadow}
                  alt=''
                  className='relative z-[1] max-w-[242px] xl:max-w-full m-auto'
                />
              </motion.div>
              {/* Stars */}
              <div className="stars-container">
                <motion.div 
                  className="star-conntainer absolute w-[25px] h-auto top-[170px] left-[70px] xl:top-[180px] xl:left-[240px]"
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
                  className="star-conntainer absolute w-[25px] h-auto sm:w-[45px] top-[70px] right-[70px] xl:top-[60px] xl:right-[290px]"
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
                  className="star-conntainer absolute w-[12px] h-auto sm:w-[25px] bottom-[70px] left-[60px] xl:bottom-[200px] xl:left-[70px]"
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
                  className="star-conntainer absolute w-[12px] h-auto sm:w-[25px] bottom-[215px] right-[40px] xl:bottom-[330px] xl:right-[80px]"
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
              {/* Image Texts */}
              <div className='imgTexts-container'>
                <motion.div 
                  className='imgTextOne-container absolute w-[137px] h-auto sm:w-[260px] top-[125px] left-[0px] xl:top-[70px] xl:left-[100px]'
                  variants={imageVariantsTextOne}
                  initial="initial"
                  whileInView="animate"
                  animate={isInView && "animate"}
                >
                  <Image 
                    src={TextOne}
                    alt=''
                    className='relative z-[1]'
                  />
                </motion.div>
                <motion.div 
                  className='imgTextOne-container absolute w-[137px] h-auto sm:w-[260px] bottom-[110px] left-[0px] xl:bottom-[90px] xl:left-[80px]'
                  variants={imageVariantsTextTwo}
                  initial="initial"
                  whileInView="animate"
                  animate={isInView && "animate"}
                >
                  <Image 
                    src={TextTwo}
                    alt=''
                    className='relative z-[2]'
                  />
                </motion.div>
                <motion.div 
                  className='imgTextOne-container absolute w-[137px] h-auto sm:w-[260px] bottom-[110px] right-[30px] xl:bottom-[90px] xl:right-[80px]'
                  variants={imageVariantsTextThree}
                  initial="initial"
                  whileInView="animate"
                  animate={isInView && "animate"}
                >
                  <Image 
                    src={TextThree}
                    alt=''
                    className='relative z-[2]'
                  />
                </motion.div>
                <motion.div 
                  className='imgTextOne-container absolute w-[137px] h-auto sm:w-[260px] bottom-[160px] right-[21px] xl:bottom-[210px] xl:right-[18px]'
                  variants={imageVariantsTextFour}
                  initial="initial"
                  whileInView="animate"
                  animate={isInView && "animate"}
                >
                  <Image 
                    src={TextFour}
                    alt=''
                    className='relative z-[1]'
                  />
                </motion.div>
                <motion.div 
                  className='imgTextOne-container absolute w-[137px] h-auto sm:w-[260px] top-[108px] right-[30px] xl:top-[70px] xl:right-[18px]'
                  variants={imageVariantsTextFive}
                  initial="initial"
                  whileInView="animate"
                  animate={isInView && "animate"}
                >
                  <Image 
                    src={TextFive}
                    alt=''
                    className='relative z-[1]'
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="basis-full xl:basis-1/2 xl:mt-[50px] xl:pl-[65px]">
            <h2 className='text-[#36343C] text-[32px] md:text-[48px] mb-4'>Tokenomics</h2>
            <p className='text-[#34313A]/80'>Join the MoonTaurus army today and help us reshape the financial world. Remember, we’re here to prove that greed can be good. Unleash the memes, power the revolution, and let the financial world tremble at our unstoppable meme force. Together, we'll conquer the financial world, one meme at a time. Let the movement begin!</p>

            <div className='totalSupply-container text-center rounded-[39px] md:rounded-[59px] bg-[#34313A] pt-[30px] px-[10px] pb-[32px] lg:pt-[20px] lg:px-[30px] lg:pb-[40px] mt-6'>
              <p className='text-[13px] text-[#ffffff]/80 mb-0'>Total supply of the token</p>
              <p className='text-[24px] lg:text-[32px] text-[#ffffff] font-bold uppercase mb-8 lg:mb-6'>3,000,000,000 MNTR</p>

              <ul className='flex flex-row flex-nowrap items-center justify-between'>
                <li className='grid text-center'>
                  <p className='text-[13px] text-[#ffffff]/80 mb-0'>Blockchain</p>
                  <p className='text-[24px] lg:text-[32px] text-[#ffffff] font-bold uppercase '>ERC20</p>
                </li>
                <li className='grid text-center'>
                  <p className='text-[13px] text-[#ffffff]/80 mb-0'>Token Symbol</p>
                  <p className='text-[24px] lg:text-[32px] text-[#ffffff] font-bold uppercase '>$MBAG</p>
                </li>
                <li className='grid text-center'>
                  <p className='text-[13px] text-[#ffffff]/80 mb-0'>Token Decimals</p>
                  <p className='text-[24px] lg:text-[32px] text-[#ffffff] font-bold uppercase '>18</p>
                </li>
              </ul>

              <div className='tokenomincs_code-container relative mt-8 lg:mt-6'>
                <input
                  type="text"
                  value={text}
                  readOnly
                  className='text-[16px] text-[#ffffff] font-bold bg-[#74829A] rounded-[59px] py-[18px] pr-[120px] pl-[16px] w-full'
                />
                <button 
                  onClick={handleCopy} 
                  className='btn inline-block text-[16px] lg:text-[18px] rounded-[30px] text-[#36343C] hover:text-[#ffffff] bg-[#E7DBED] hover:bg-[#AD89B1] transition-all pt-[12px] px-[20px] pb-[13px] lg:pt-[10px] lg:px-[20px] lg:pb-[12px] min-w-[75px] lg:min-w-[110px] absolute top-[6px] right-[6px]'
                >
                  Copy
                </button>
                {isCopied && (
                  <div className="absolute top-[60px] right-[6px] bg-green-500 text-white rounded px-4 py-2">
                    Text copied!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenomicsSection