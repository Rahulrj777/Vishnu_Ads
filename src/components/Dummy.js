import React, { useState, useEffect } from 'react';
import { useScroll, animated } from '@react-spring/web';
import { LuArrowUp } from "react-icons/lu";
import { TiArrowUpThick } from "react-icons/ti";


function Dummy() {
  // Use `useScroll` to get scrollYProgress, a value between 0 and 1
  const { scrollYProgress } = useScroll();
  
  // State to control the visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Effect to monitor scroll position and update visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 md:bottom-12 right-4 md:right-6 flex items-center justify-center z-50">
      {/* Scroll button, hidden initially and visible after scrolling down */}
      {isVisible && (
        <animated.div
          className="flex items-center justify-center rounded-full w-6 md:w-10  h-6 md:h-10 bg-white cursor-pointer drop-shadow-lg shadow-lg inner-shadow hover-inner-shadow"
          style={{
            background: scrollYProgress.to(
              (y) => `conic-gradient(#01b0b2 ${y * 100}%, transparent ${y * 100}%)`
            ),
            border: '3px solid #01b0b2', // Red border
          }}
          onClick={scrollToTop} // Click handler to scroll to top
        >
          {/* Centered arrow icon */}
          <TiArrowUpThick className="text-white text-[20px] font-bold" />
        </animated.div>
      )}
    </div>
  );
}

export default Dummy;
