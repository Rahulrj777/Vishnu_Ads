import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick Slider CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Slider Theme CSS
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"; // Import arrow icons from react-icons
import gsap from "gsap"; // Import GSAP for animation

import titleOne from "../images/new_proces/journey.png";
import titleTwo from "../images/new_proces/begins.png";
import titleThree from "../images/new_proces/strategy.png";
import titleFour from "../images/new_proces/building.png";
import titleFive from "../images/new_proces/art_of_branding.png";
import titleSix from "../images/new_proces/sourcing.png";
import titleSeven from "../images/new_proces/design.png";
import titleEight from "../images/new_proces/planning.png";
import titleNine from "../images/new_proces/bringing.png";
import titleTen from "../images/new_proces/world_watches.png";
import title11 from "../images/new_proces/digital.png";
import title12 from "../images/new_proces/power_of_influence.png";
import title13 from "../images/new_proces/global.png";
import title14 from "../images/new_proces/and.png";

import icon from "../images/new_proces/icon.png";

const AllProcess = () => {
  const [centerIndex, setCenterIndex] = useState(2); // Initially setting the center slide to 2 (0-indexed)
  const sliderRef = useRef(null); // Create a reference for the Slider component
  const waveRef = useRef(null); // Reference for the wave SVG element
  const descriptionRef = useRef([]); // Array of refs for descriptions

  const slidesData = [
    {
      title: titleOne,
      description:
        "A brand waiting to be born—an idea brimming with potential but needing a guiding hand to bring it to life. That’s where we come in.",
      icon: icon,
    },

    {
      title: titleTwo,
      description:
        "We start by listening. Deeply. Understanding your vision, your dreams, and your goals. Your story is our first chapter, and we can’t wait to write it with you",
      icon: "https://controleur.ca/wp-content/uploads/2021/11/performance.svg",
    },

    {
      title: titleThree,
      description:
        "With a clear understanding of your brand, we craft a strategy that feels like magic. A roadmap that positions your brand to stand out, resonate, and engage. We set the stage for greatness.",
      icon: "https://controleur.ca/wp-content/uploads/2021/11/compass.svg",
    },

    {
      title: titleFour,
      description:
        "Now that we have your brand’s heartbeat, we make it official. The legalities are handled, and your company stands tall, ready to conquer the world.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },

    {
      title: titleFive,
      description:
        "We craft your brands identity with a unique look, feel, and voice that instantly connects with your audience, telling your story with every detail.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/rocket.svg",
    },

    {
      title: titleSix,
      description:
        "We then set out on a quest to find the finest products that embody your brand’s promise. Only the best will do, and we make sure every product aligns with the story we’re telling.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },

    {
      title: titleSeven,
      description:
        "From concept to creation, we bring your product to life. Designs that aren’t just functional—they’re pieces of art that showcase your brand in its best light.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },

    {
      title: titleEight,
      description:
        "Now it’s time to make your brand known. We design a comprehensive advertising plan that’s bold, strategic, and impactful. This is where the magic starts to unfold.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },
    {
      title: titleNine,
      description:
        "Lights, camera, action! We capture your brand’s essence through powerful ads that speak volumes. Every shot is designed to leave a lasting impression.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },
    {
      title: titleTen,
      description:
        "With your ads in place, we release them to the world, ensuring your message reaches the right eyes at the right time. Your brand is no longer just a name—it’s a movement.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },
    {
      title: title11,
      description:
        "We take your brand into the digital world, where clicks turn into conversations. Through tailored digital marketing strategies, we ensure your brand stays top-of-mind across platforms.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },
    {
      title: title12,
      description:
        "We then harness the voices of influencers who align with your brand, amplifying your message and creating authentic connections with your audience.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },
    {
      title: title13,
      description:
        "Finally, your brand is no longer local—it’s global. We take your products to every corner of the world, ensuring your brand becomes a household name everywhere.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },
    {
      title: title14,
      description:
        "From idea to global brand, we turned your dream into reality. And this is just the beginning—your brands journey to greatness has only started.",
      icon: "https://controleur.ca/wp-content/uploads/2021/10/expand.svg",
    },
  ];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop of slides
    speed: 500, // Animation speed in milliseconds
    slidesToShow: 3, // Show 3 slides at a time
    autoplay: true,
    slidesToScroll: 1, // Move one slide at a time
    autoplaySpeed: 3000, // Slide every 2 seconds
    centerMode: true, // Center the active slide
    focusOnSelect: true, // Allow clicking on slides to navigate
    beforeChange: (current, next) => {
      setCenterIndex(next); // Update centerIndex when the slide is changing
    },
    responsive: [
      {
        breakpoint: 1024, // For laptops and desktops
        settings: {
          slidesToShow: 3, // Show 3 slides at a time on larger screens
          centerMode: true, // Keep center mode for consistency
          focusOnSelect: true, // Keep focus on select
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide at a time for mobile
          centerMode: true, // Keep center mode for mobile
          focusOnSelect: true, // Keep focus on select
        },
      },
    ],
  };

  // Function to move to the previous slide
  const moveLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Use slickPrev to go to the previous slide
    }
  };

  // Function to move to the next slide
  const moveRight = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Use slickNext to go to the next slide
    }
  };

  // Use GSAP to animate the number when the slide is in the center
  useEffect(() => {
    gsap.to(".step-number", {
      scale: 1, // Reset scale to 1
      rotation: 0, // Reset rotation to 0
      opacity: 0.7, // Set opacity to 0.7 for inactive numbers
      duration: 0.3,
      ease: "power2.out",
    });

    if (sliderRef.current) {
      gsap.to(`.step-number-${centerIndex}`, {
        scale: 1.2, // Scale up the centered number
        rotation: 360, // Rotate the centered number 360 degrees
        opacity: 1, // Set opacity to 1 for the active number
        duration: 2,
        ease: "power2.out",
      });
    }
  }, [centerIndex]); // Re-run the animation on centerIndex change

  // GSAP animation for the wave (continuous movement)
  useEffect(() => {
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        duration: 10, // Duration for one complete cycle of the wave
        x: 300, // Move the wave horizontally
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Make the animation reverse after reaching the end
        ease: "power1.inOut", // Smooth easing for the movement
      });
    }

    gsap.fromTo(
      ".wave-path",
      { strokeDashoffset: 1000 }, // Start from a "drawn" path offset
      { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    // Check if descriptionRef has a valid reference for the current slide
    if (descriptionRef.current[centerIndex]) {
      gsap.fromTo(
        descriptionRef.current[centerIndex],
        { opacity: 0, y: 100 }, // Starting from invisible and 50px down
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" } // Fade in and move up
      );
    }
  }, [centerIndex]); // Trigger animation whenever the centerIndex changes

  return (
    <div className="relative w-full md:w-[90%] mx-auto overflow-hidden px-1 ">
      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="w-full flex justify-center items-center transition-all duration-500 ease-in-out relative"
          >
            <div className="text-center relative pb-8 md:pb-12 w-full">
              {/* Title and Image for each slide */}
              <div className="flex justify-center items-center w-full">
                <img
                  src={slide.title}
                  alt=""
                  className="text-3xl font-bold text-white mb-2 w-28  md:w-40 object-cover"
                />
              </div>

              {/* Description visibility based on whether the slide is the center one */}

              <p
                ref={(el) => (descriptionRef.current[index] = el)} // Assign the ref to each description
                className={` text-[10px] md:text-[12px] text-white transition-opacity duration-500 ease-in-out ${
                  centerIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {slide.description}
              </p>

              {/* Slide Number */}
              <div className="w-full flex justify-center mt-2  md:mt-10 z-20 items-center relative">
                <p
                  className={`step-number step-number-${index} text-2xl text-black font-bold mr-4 mt-4
                                        ${
                                          centerIndex === index
                                            ? "scale-120 rotate-180 text-black flex justify-center items-center rounded-full bg-white border-4 md:border-[6px] border-[#42cabc] w-10 md:w-16 h-10 md:h-16 text-[12px] md:text-[14px]"
                                            : "bg-gray-50 border-2 border-[#4ac6b9] text-gray-900 text-[10px] md:text-[12px]  w-6 md:w-6 h-6 md:h-6 flex justify-center items-center"
                                        }`}
                >
                  {index + 1}
                </p>
              </div>
            </div>
            <svg
              className="absolute w-full h-12 top-28 md:top-44 -z-20 "
              viewBox="0 0 300 50"
              preserveAspectRatio="none"
              ref={waveRef}
            >
              <path
                className="wave-path"
                d="M0,30 C50,70 100,0 150,30 C200,60 250,0 300,30"
                stroke="#aaefff"
                fill="transparent"
                strokeWidth="1.8"
                strokeDasharray="0.9,1"
              />
            </svg>
          </div>
        ))}
      </Slider>

      {/* Left and Right Arrows */}
      <div className="flex items-center gap-x-4 md:gap-x-8  justify-start w-full px-4 md:w-[80%] mx-auto">
        <div className="z-10">
          <button
            onClick={moveLeft}
            className="bg-white hover:bg-transparent hover:border hover:border-gray-100 text-black hover:text-gray-50 p-2 hover:scale-105 duration-100 rounded-full shadow-lg"
          >
            <TiArrowLeftThick className="text-[12px] md:text-[18px]" />
          </button>
        </div>

        <div className="z-10">
          <button
            onClick={moveRight}
            className="bg-white hover:bg-transparent hover:border hover:border-gray-100 text-black hover:text-gray-50 p-2 hover:scale-105 duration-100 rounded-full shadow-lg"
          >
            <TiArrowRightThick className="text-[12px] md:text-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProcess;
