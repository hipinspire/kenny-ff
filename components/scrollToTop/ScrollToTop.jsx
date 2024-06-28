import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }

    const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scroll = (window.pageYOffset / totalScroll) * 100
    setScrollPercentage(scroll);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="circle" style={{ background: `conic-gradient(#919CAF ${scrollPercentage}%, #ddd ${scrollPercentage}%)` }} onClick={scrollToTop}>
          <FaArrowUp className="arrow-icon" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop
