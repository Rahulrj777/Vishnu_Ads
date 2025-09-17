import React from "react";
import { useSpring, animated } from "@react-spring/web";

function TextAnimations() {
  const text = "React Spring with Tailwind CSS!".split(" ");

  // React Spring animation
  const animation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: {
      opacity: 0,
      transform: "translateX(-100px)", // Start with the text off-screen
    },
    config: { duration: 1000 }, // Duration of the animation
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center space-x-2">
        {text.map((word, i) => (
          <animated.span
            key={i}
            style={{
              ...animation,
              transitionDelay: `${i * 0.2}s`, // Stagger animation by word
            }}
            className="text-2xl font-semibold text-gray-800"
          >
            {word}
          </animated.span>
        ))}
      </div>
    </div>
  );
}

export default TextAnimations;
