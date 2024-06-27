import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DotsSeparators from '@/public/assets/icons/dots-separators.png';

const CountdownTimer = () => {
  // Initial time in seconds (1 hour)
  const initialTime = 1500 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          console.log('Presale over!');
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Function to pad numbers with leading zeros and split them into individual digits
  const getDigitsArray = (number, digitCount) => {
    const paddedNumber = String(number).padStart(digitCount, '0');
    return paddedNumber.split('').map((digit, index) => (
      <span key={index} className="timer-digit text-[#332010] text-[13px] lg:text-[20px] font-medium rounded-[20px] bg-white p-2 lg:px-5 lg:py-4 mr-2 w-[30px] lg:w-[49px]">
        {digit}
      </span>
    ));
  };

  // Convert seconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className='myTimerContainer mt-4 mb-10 lg:mt-8 lg:mb-20'>
      <div className='flex items-center justify-center'>
        {/* Hours */}
        {getDigitsArray(hours, 2)}
        <span className="timer-separator m-2 lg:m-4">
          <Image className='w-[8px] min-w-[8px]' src={DotsSeparators} alt="dots" />
        </span>

        {/* Minutes */}
        {getDigitsArray(minutes, 2)}
        <span className="timer-separator m-2 lg:m-4">
          <Image className='w-[8px] min-w-[8px]' src={DotsSeparators} alt="dots" />
        </span>

        {/* Seconds */}
        {getDigitsArray(seconds, 2)}
      </div>
    </div>
  );
};

export default CountdownTimer;
