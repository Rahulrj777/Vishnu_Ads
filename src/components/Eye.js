import React, { useState, useEffect, useRef } from "react";

const Eye = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculatePupilPosition = (eye) => {
    if (!eye) return { top: "50%", left: "50%" };

    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Calculate distance between mouse and eye center
    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = mousePosition.y - eyeCenterY;

    // Limit pupil movement within eye boundary (set maximum offset)
    const maxOffset = 10; // Adjust this value for larger or smaller movement

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX);

    // Clamp the distance within the boundary
    const clampedDistance = Math.min(distance, maxOffset);

    // Calculate new pupil position within the eye
    const pupilX = Math.cos(angle) * clampedDistance;
    const pupilY = Math.sin(angle) * clampedDistance;

    return {
      transform: `translate(${pupilX}px, ${pupilY}px)`,
    };
  };

  return (
    <section className="flex justify-center items-center  ">
      <div className="relative flex  gap-x-32 md:gap-x-40 4k:gap-x-72    ml-14 md:ml-[68px]  4k:ml-32">
        {/* Left Eye */}
        <div className="relative w-8 md:w-11  h-8 md:h-11 4k:w-16 4k:h-16 bg-gray-300 rounded-full flex justify-center items-center">
          <div
            className="w-3 md:w-4 h-3 md:h-4 4k:w-6 4k:h-6 bg-black rounded-full"
            style={calculatePupilPosition(eyeRefs.current[0])}
            ref={(el) => (eyeRefs.current[0] = el)}
          />
        </div>

        {/* Right Eye */}
        <div className="relative w-8 md:w-11  h-8 md:h-11 4k:w-16 4k:h-16 bg-gray-300 rounded-full flex justify-center items-center">
          <div
            className="w-3 md:w-4 h-3 md:h-4 4k:w-6 4k:h-6 bg-black rounded-full"
            style={calculatePupilPosition(eyeRefs.current[1])}
            ref={(el) => (eyeRefs.current[1] = el)}
          />
        </div>
      </div>
    </section>
  );
};

export default Eye;
