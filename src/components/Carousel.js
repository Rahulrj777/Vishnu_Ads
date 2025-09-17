import React, { useState, useEffect } from "react";

import join from '../images/journey.png'

import imgOne from '../images/ad.jpg';
import imgTwo from '../images/about.png';
import imgThree from '../images/brand.jpg';
import imgFour from '../images/about.png';
import imgFive from '../images/ad.jpg';
import imgSix from '../images/about.png';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  const slides = [
    {
      place: "Innovate",
      title1: "From Spark to Spotlight: The Journey of a Fresh Brand",
      // title2: "ANTONIEN",
      desc: "A brand waiting to be born—an idea brimming with potential but needing a guiding hand to bring it to life. That’s where we come in.",
      image: imgOne,
    },
    {
      place: "Innovate",
      title1: "It Begins with a Conversation ",
      // title2: "FJORD",
      desc: "We start by listening. Deeply. Understanding your vision, your dreams, and your goals. Your story is our first chapter, and we can’t wait to write it with you",
      image: imgTwo,
    },
    {
      place: "Innovate",
      title1: "Strategy That Sets the Stage  ",
      title2: "LOUISE",
      desc: "With a clear understanding of your brand, we craft a strategy that feels like magic. A roadmap that positions your brand to stand out, resonate, and engage. We set the stage for greatness.",
      image: imgThree,
    },
    {
      place: "Innovate",
      title1: "Building the Foundation",
      title2: "BAMBOO",
      desc: "Now that we have your brand’s heartbeat, we make it official. The legalities are handled, and your company stands tall, ready to conquer the world.",
      image: imgFour,
    },
    {
      place: "Innovate",
      title1: "The Art of Branding  ",
      title2: "COAST",
      desc: "We dive into the creative depths to design your brand’s identity—a look, a feel, and a voice that captures who you are and speaks to those you seek to connect with. Every detail is meticulously crafted to tell your story at first sight.",
      image: imgFive,
    },
    {
      place: "Innovate",
      title1: "Sourcing the Best  ",
      title2: "ROCK",
      desc: "We then set out on a quest to find the finest products that embody your brand’s promise. Only the best will do, and we make sure every product aligns with the story we’re telling.",
      image: imgOne,
    },
    {
      place: "Innovate",
      title1: "Designing the Dream   ",
      title2: "ROCK",
      desc: "From concept to creation, we bring your product to life. Designs that aren’t just functional—they’re pieces of art that showcase your brand in its best light.",
      image: imgOne,
    },
    {
      place: "Innovate",
      title1: "Planning the Big Reveal    ",
      title2: "ROCK",
      desc: "Now it’s time to make your brand known. We design a comprehensive advertising plan that’s bold, strategic, and impactful. This is where the magic starts to unfold.",
      image: imgOne,
    },
    {
      place: "Innovate",
      title1: "Bringing It to Life  ",
      title2: "ROCK",
      desc: "Lights, camera, action! We capture your brand’s essence through powerful ads that speak volumes. Every shot is designed to leave a lasting impression.",
      image: imgOne,
    },
    {
      place: "Innovate",
      title1: "The World Watches ",
      title2: "ROCK",
      desc: "With your ads in place, we release them to the world, ensuring your message reaches the right eyes at the right time. Your brand is no longer just a name—it’s a movement.",
      image: imgOne,
    },
    {
      place: "Innovate",
      title1: "Digital Dominance  ",
      title2: "ROCK",
      desc: "We take your brand into the digital world, where clicks turn into conversations. Through tailored digital marketing strategies, we ensure your brand stays top-of-mind across platforms.",
      image: imgOne,
    },
    {
      place: "Innovate",
      title1: "The Power of Influence  ",
      title2: "ROCK",
      desc: "We then harness the voices of influencers who align with your brand, amplifying your message and creating authentic connections with your audience.",
      image: imgOne,
    },
    {
      place: "Innovate",
      title1: "Global Expansion    ",
      title2: "ROCK",
      desc: "Finally, your brand is no longer local—it’s global. We take your products to every corner of the world, ensuring your brand becomes a household name everywhere.",
      image: imgOne,
    },
    {
      place: "Innovate",
      title1: "And So the Story Goes.  ",
      title2: "ROCK",
      desc: "Lights, camera, action! We capture your brand’s essence through powerful ads that speak volumes. Every shot is designed to leave a lasting impression.",
      image: imgOne,
    },
  ];

  const totalSlides = slides.length;

  const showSlide = (index) => {
    setAnimateText(false); // Reset text animation
    setAnimateImage(false); // Reset image animation

    setTimeout(() => {
      setCurrentSlide((index + totalSlides) % totalSlides);
      setAnimateText(true);  // Trigger text animation
      setAnimateImage(true); // Trigger image animation
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen text-white overflow-hidden flex font-sans">
      {/* Background Image with Animation */}
      <img
        src={slides[currentSlide].image}
        alt="Background"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform transition-transform ${animateImage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

      {/* Fixed Content Section with Animation */}
      <div className="content-section flex flex-col space-y-8 z-20 w-full md:w-[90%] md:mt-16 mx-auto">
        <div className={` w-[95%] md:w-[50%] text-left transition-opacity transition-transform duration-700 ease-in-out ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="place-box text-[12px] font-light uppercase">
            {slides[currentSlide].place}
          </div>
          <div className="title-box-1 text-[40px] font-bold text-yellow-400 font-oswald">
            {slides[currentSlide].title1}
          </div>
          <div className="desc mt-4">
            {slides[currentSlide].desc}
          </div>
          <div className="cta flex items-center mt-16 space-x-4 ">
            <button className="p-2 rounded-full bg-yellow-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="px-8 py-2 border border-white rounded-full uppercase text-xs">
              Connect Now
            </button>
          </div>

          <div className="mt-16">
            <img src={join} className="w-60 object-cover  drop-shadow-lg" alt="join" />
          </div>

        </div>
      </div>

      {/* Pagination */}
      <div className="pagination absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-30">
        <button
          onClick={() => showSlide(currentSlide - 1)}
          className="arrow-left cursor-pointer text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="progress-sub-container w-48 h-1 bg-gray-600 rounded-full overflow-hidden">
          <div
            className="progress-sub-foreground bg-yellow-500 h-full rounded-full"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          ></div>
        </div>
        <span className="slide-numbers text-white text-sm">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button
          onClick={() => showSlide(currentSlide + 1)}
          className="arrow-right cursor-pointer text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
