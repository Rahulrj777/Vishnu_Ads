import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TypingAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = `"Our Success is Your Success, Your Goals Are Our Mission"`;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Infinite loop with delay

    // Clear and animate the text character by character
    text.split("").forEach((char, i) => {
      tl.to(textRef.current, {
        textContent: text.substring(0, i + 1),
        duration: 0.05, // Speed of typing each character
        ease: "none",
      });
    });

    // Erase animation (optional)
    tl.to({}, { duration: 1 }); // Pause before restart
  }, []);

  return (
    <div className="flex  ">
      <p
        ref={textRef}
        className="italic font-semibold text-[12px] md:text-[14px] text-gray-800"
      ></p>
    </div>
  );
};

export default TypingAnimation;
