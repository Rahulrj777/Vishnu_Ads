import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BorderAnimation from "../components/BorderAnimation";
import marketing from "../images/blog/markting.jpg";
import idea from "../images/blog/idea.jpg";
import bgimg from "../images/banner/tredingbgimg.jpg";

gsap.registerPlugin(ScrollTrigger);

const TrendsSection = () => {
  const heading1Ref = useRef(null);
  const para1Ref = useRef(null);
  const img1Ref = useRef(null);

  const heading2Ref = useRef(null);
  const para2Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    // helper to safely create an animation only if element exists
    const safeFromTo = (target, fromVars, toVars) => {
      if (!target) return null;
      return gsap.fromTo(target, fromVars, toVars);
    };

    const an1 = safeFromTo(
      heading1Ref.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading1Ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const an2 = safeFromTo(
      para1Ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: para1Ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const an3 = safeFromTo(
      img1Ref.current,
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const an4 = safeFromTo(
      img2Ref.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img2Ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const an5 = safeFromTo(
      heading2Ref.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading2Ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const an6 = safeFromTo(
      para2Ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: para2Ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      // cleanup all ScrollTriggers and tweens created by this component
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf([
        heading1Ref.current,
        para1Ref.current,
        img1Ref.current,
        heading2Ref.current,
        para2Ref.current,
        img2Ref.current,
      ]);
    };
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat font-sans min-h-[100vh]"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* content */}
      <div className="relative z-10 w-full md:w-[80%] mx-auto py-16 px-6">
        {/* Top border */}
        <div className="flex relative flex-col mb-10">
          <div className="absolute top-0 flex border-t-2 md:border-t-4 w-[10%] border-black"></div>
          <BorderAnimation />
          <div className="absolute flex justify-center items-center top-0 border-t border-black w-full"></div>
        </div>

        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
          <div className="w-full md:w-1/2">
            <h2
              ref={heading1Ref}
              className="text-[20px] md:text-[34px] text-black font-light mb-4"
            >
              5 Marketing Trends You Can’t Ignore in 2024
            </h2>
            <div className="border border-gray-600 w-full mb-6"></div>
            <p ref={para1Ref} className="text-[14px] md:text-[16px] text-gray-800">
              Stay ahead of the curve with the top marketing trends. We’ll show
              you how to incorporate these trends into your campaigns and keep
              your brand relevant.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              ref={img1Ref}
              src={marketing}
              alt="Marketing"
              className="w-full md:w-[80%] rounded-md shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              ref={img2Ref}
              src={idea}
              alt="Creative process"
              className="w-full md:w-[80%] rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-end">
            <h2
              ref={heading2Ref}
              className="text-[20px] md:text-[34px] text-black font-light mb-4"
            >
              Behind the Scenes: How We Create Magic
            </h2>
            <div className="border border-gray-600 w-full mb-6"></div>
            <p ref={para2Ref} className="text-[14px] md:text-[16px] text-gray-800">
              Ever wondered what goes into a creative campaign? We pull back the
              curtain and show you how our team brings big ideas to life — from
              brainstorming sessions to the final launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;
