import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clients from "../components/Clients";
import video from "../images/video.mp4";
import innov from "../images/Innovation.png";
import about from "../images/about.png";
import sir from "../images/about/MD_Sir.png";
import corner from "../images/corner.png";
import { FaArrowRightLong } from "react-icons/fa6";
import BorderAnimation from "../components/BorderAnimation";
import Partners from "../components/Partners";
import TypingAnimation from "../components/TypingAnimation";
import Eye from "../components/Eye";
import WhyIcons from "../components/WhyIcons";
import Ball from "../components/Ball";
import AllServices from "../components/AllServices";
import AllProcessNew from "../components/AllProcessNew";
import TrendsSection from "../components/TrendsSection";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const videoContainerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoContainerRef.current,
      {
        scale: 1,
        width: "30%",
      },
      {
        scale: 1,
        width: "100%",
        marginTop: "30",
        duration: 4.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "top 10%",
          end: "top 90%",
          duration: 4,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <Ball />

        <div className="fixed top-0  -z-40"></div>

        {/*---------- header ------------*/}

        <section className="relative w-full h-[100vh]">
          {/* Front Text Content */}
          <div className="absolute font-[poppins] top-1/3 left-20">
            <div className="text-[4.5vw] font-extrabold leading-tight tracking-tight text-gray-900">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#2b2b2b] to-[#666666]">
                We Register Your Dream,
              </p>
              <p>Design Its Face,</p>
              <p>Code Its Engine, and</p>
              <p className="text-[#00bcd4]">Launch It Across Continents.</p>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute top-20 right-2 flex justify-end items-end w-full z-10">
            <div
              ref={videoContainerRef}
              className="w-40 transform scale-40 rounded-md shadow-md drop-shadow-md transition-all duration-1000 overflow-hidden"
            >
              <video
                className="w-full h-auto rounded-md"
                autoPlay
                playsInline
                loop
                muted
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/*------- about -------*/}

        <section
          className="bg-white pt-10 md:pt-20  pb-10 md:pb-20 mt-10"
          id="second-section"
        >
          <div
            className="w-full px-4 md:w-[80%] mx-auto h-full font-sans"
            id="border-section"
          >
            <div
              className="flex relative flex-col mb-4"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {/* Animated Border */}

              <div className=" absolute top-0 flex  border-t-2 md:border-t-4 w-[10%] border-black "></div>
              <div className="">
                <BorderAnimation />
              </div>
              <div className="absolute flex justify-center items-center top-0 border-t border-black w-full"></div>
            </div>

            {/* ABOUT Title */}
            <div className="flex flex-col gap-y-1 items-start font-sans">
              <p className="text-gray-700 uppercase  tracking-wide font-sans text-[12px] md:text-[14px]">
                About
              </p>
              <h2
                className="text-[28px] md:text-[58px]  font-light tracking-[1px] font-sans"
                data-aos="flip-up"
                data-aos-duration="1000"
              >
                We, Humanize the Brand
              </h2>
            </div>

            <div className="flex flex-col gap-y-10 md:flex-row items-center justify-center mt-6 md:mt-0 ">
              <div
                className="w-full md:w-[50%] mx-auto"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                <div className="flex  h-full justify-start  text-white">
                  <img
                    src={about || "/placeholder.svg"}
                    className="w-full md:w-[90%] object-cover"
                    alt="about"
                  />
                </div>
              </div>

              <div
                className="w-full md:w-[50%] mx-auto font-sans"
                data-aos-duration="3000"
                data-aos="fade-up"
              >
                <div className="w-full md:px-10">
                  <div className="w-full flex flex-col  gap-y-2 md:gap-y-4">
                    <p className="text-[20px] md:text-[28px] text-start font-light leading-[34px] text-gray-900">
                      We don't just create ads - we build experiences that
                      engage and drive results
                    </p>
                    <div className="border-t md:border-t-2 border-gray-700 w-full mt-2 md:mt-4 mb-2"></div>
                    <p className="text-[14px] md:text-[16px] text-start leading-6 md:leading-7 text-black font-light">
                      With over 18+ years of experience, we specialize in
                      transforming ideas into memorable campaigns. Whether
                      you're a startup or an established brand,
                    </p>

                    {/* <div className="border-b border-gray-500 mt-4 md:mt-6 w-fit group">
                      <button className="flex items-center gap-x-6 md:gap-x-20 font-ocr uppercase text-[14px] md:text-[18px]">
                        <span>Read More</span>{" "}
                        <span>
                          <FaArrowRightLong className="group-hover:rotate-45 duration-500 text-[14px] md:text-[16px]" />
                        </span>{" "}
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div
              className=" text-[12px] md:text-[16px] font-[poppins] mt-4 md:mt-0"
              data-aos-duration="2000"
              data-aos="fade-right"
            >
              <p className="italic">
                "We Don't Just Tell Stories, We Create Legendary
              </p>
              <p className="italic">Brand Experiences"</p>
            </div>
          </div>
        </section>

        {/*------ MD Sir Promo ---------- */}

        <section id="third-section" className="bg-white ">
          <div className="w-full px-4 md:w-[80%] mx-auto h-full font-sans">
            <div
              className="flex relative flex-col mb-4"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="absolute top-0 flex border-t-2 md:border-t-4 w-[10%] border-black"></div>
              <div className="">
                <BorderAnimation />
              </div>
              <div className="absolute flex justify-center items-center top-0 border-t border-black w-full"></div>
            </div>

            <div className="flex flex-col gap-y-1 items-start font-sans mb-8 md:mb-12">
              <p className="text-gray-700 uppercase tracking-wide font-sans text-[12px] md:text-[14px]">
                Leadership
              </p>
              <h2
                className="text-[20px] md:text-[52px] text-black font-light  font-sans"
                data-aos="flip-up"
                data-aos-duration="2500"
              >
                Meet The Mind Behind The Magic
              </h2>
            </div>

            <div className="flex flex-col gap-y-10 md:flex-row items-center justify-center mt-6 md:mt-0">
              <div
                className="w-full md:w-[50%] mx-auto"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                <div className="flex h-full justify-center items-center">
                  <div className="relative flex justify-center items-center overflow-hidden rounded-2xl min-h-[26rem] group border border-gray-200 shadow-xl transition-transform duration-300 hover:scale-105">
                    <img
                      src={sir || "/placeholder.svg"}
                      alt="Dr. Rajesh Ravindran - Managing Director"
                      className="relative z-10 w-80 h-96 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              <div
                className="w-full md:w-[50%] mx-auto font-sans"
                data-aos-duration="3000"
                data-aos="fade-up"
              >
                <div className="w-full md:px-10">
                  <div className="w-full flex flex-col gap-y-2 md:gap-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      Rajesh R
                    </h3>
                    <span className="block text-lg md:text-xl text-[#00bcd4] font-semibold uppercase">
                      Chairman and Managing Director
                    </span>
                    <p className="text-[20px] md:text-[28px] text-start font-light leading-[34px] text-gray-900 mt-4">
                      The spark behind our wildest ideas. If you can dream it,
                      he can make it happen.
                    </p>
                    <div className="border-t md:border-t-2 border-gray-700 w-full mt-2 md:mt-4 mb-2"></div>
                    <p className="text-[14px] md:text-[16px] text-start leading-6 md:leading-7 text-black font-light">
                      With over 18+ years of transformative leadership in media
                      and advertising, Dr. Rajesh Ravindran has built bridges
                      between creativity and commerce, tradition and technology.
                    </p>

                    <div className="border-b border-gray-500 mt-4 md:mt-6 w-fit group">
                      <button
                        onClick={() => setShowMore(!showMore)}
                        className="flex items-center gap-x-6 md:gap-x-20 font-ocr uppercase text-[14px] md:text-[18px]"
                      >
                        <span>{showMore ? "Show Less" : "Read More"}</span>
                        <span>
                          <FaArrowRightLong className="group-hover:rotate-45 duration-500 text-[14px] md:text-[16px]" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showMore && (
              <div className="mt-8 md:mt-12">
                <div className="relative bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                    About Dr. Rajesh Ravindran
                  </h4>

                  <div className="text-gray-700 leading-relaxed text-[14px] md:text-[16px] space-y-4">
                    <p>
                      Two decades ago in Chennai, before AI met advertising and
                      before cinema met classrooms, one man set out to change
                      how stories are told — and sold. That man is Dr. Rajesh
                      Ravindran.
                    </p>
                    <p>
                      From launching Vishnu Ads as a one-man mission to becoming
                      the driving force behind Vishnu Ads & Ventures Private
                      Limited and BigBay Cinema Factory, Rajesh didn't just
                      build businesses — he built bridges. Between creativity
                      and commerce. Between tradition and technology. Between
                      brands and the people they long to reach.
                    </p>
                    <p>
                      His agency has powered 300+ film promotions, delivered 50+
                      tech-first digital solutions, and mentored hundreds of
                      media professionals. Whether it's a campaign for a retail
                      giant, a digital push for a healthcare brand, or crafting
                      India's first AI-integrated film academy, he leads with
                      one belief — that every brand is a story waiting to be
                      told right.
                    </p>
                    <p>
                      But Rajesh isn't just a marketer. He's a media educator, a
                      digital innovator, and a brand architect. His Cinema
                      Factory Junior program brought film education to children,
                      his AR/VR tools made advertising immersive, and his
                      partnerships with South Indian cinema unions bridged the
                      classroom with the soundstage.
                    </p>
                    <p>
                      For his transformative work in media and storytelling, he
                      was awarded an Honorary Doctorate in Journalism in 2018.
                    </p>
                    <p className="text-[#00bcd4] font-semibold italic">
                      "Today, from Chennai to campaign boards across India,
                      Rajesh remains the beating heart of Vishnu Ads — shaping
                      brands, building futures, and redefining what it means to
                      lead in an ever-evolving media world."
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div
              className="text-[12px] md:text-[16px] font-[poppins] mt-4 md:mt-8"
              data-aos-duration="2000"
              data-aos="fade-right"
            >
              <p className="italic">
                "We Don't Just Tell Stories, We Create Legendary
              </p>
              <p className="italic">Brand Experiences"</p>
            </div>
          </div>
        </section>

        {/*-------------- why choose us ------------------*/}

        <section className="pt-10 md:pt-20 " id="fourth-section">
          <div
            className="w-full px-4 md:w-[80%] pb-8 md:pb-10 mx-auto bg-gray-100 md:px-12 pt-6 md:pt-8  rounded-t-2xl font-sans"
            id="first-border"
          >
            <div
              className="flex relative flex-col mb-4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {/* Animated Border */}
              <div className=" absolute top-0 flex border-t-2 md:border-t-4 w-[10%] border-black "></div>
              <div className="">
                <BorderAnimation />
              </div>
              <div className="absolute flex justify-center items-center top-0 border-t border-black w-full"></div>
            </div>

            {/* WHY Title */}
            <div className="flex flex-col gap-y-1 items-start font-triumvirate">
              <p className="text-gray-700 uppercase  tracking-wide font-sans text-[12px] md:text-[14px]">
                Why Choose Us
              </p>
              <h2
                className="text-[20px] md:text-[52px] text-black font-light  font-sans"
                data-aos="flip-up"
                data-aos-duration="2500"
              >
                Because Ordinary Isn't in Our Vocabulary
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-y-10 justify-center items-center mt-5 md:mt-16">
              <div
                className="w-full md:w-[50%] mx-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="font-sans  text-[12px] md:text-[14px]  text-gray-900">
                  We believe that great ideas don't just live on paper - they
                  come to life through collaboration, bold thinking, and a lot
                  of coffee. We started as a small team with a big vision: to
                  break through the noise with ads that spark conversation.
                  Today, we partner with brands who want to create not just
                  awareness, but a movement.
                </p>

                <div className="mt-6 md:mt-8 w-full ">
                  <p className="italic font-semibold text-[12px] md:text-[14px] ">
                    "We’re not here to simply follow trends. We set them."
                  </p>

                  <div className="mt-10 md:mt-7">
                    <WhyIcons />
                  </div>

                  <div>
                    <TypingAnimation />
                  </div>
                </div>
              </div>

              <div
                className="w-full md:w-[50%] mx-auto"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="2000"
              >
                <div className="flex justify-center items-center md:mb-9 relative">
                  <img
                    src={innov}
                    className="w-full md:w-[78%]  object-cover"
                    alt="why"
                  />
                  <div className="absolute  top-6  md:top-7 4k:top-10 ">
                    <div>
                      <Eye />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------- Discover What We Offers ------------- */}

        <AllServices />

        {/*----------Our Process----------*/}

        <AllProcessNew />

        {/* -------------------- Our valuable clients ----------------- */}

        <section
          className="pt-10 md:pt-20 pb-7 md:pb-20  bg-gradient-to-b from-[#FAF9F6] to-white font-sans"
          id="sixth-section"
        >
          <div
            className="w-full px-4 md:w-[90%] mx-auto relative"
            id="client-border"
          >
            <div className=" mx-auto flex flex-col gap-y-4 mb-2 z-50">
              <div
                className="flex relative flex-col "
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {/* Animated Border */}

                <div className=" absolute top-0 flex  border-t-2 md:border-t-4 w-[10%] border-black "></div>
                <div className="">
                  <BorderAnimation />
                </div>
                <div className="absolute flex justify-center items-center top-0 border-t border-black w-full"></div>
              </div>

              <div className="mb-4 md:mb-6">
                <h2
                  className="text-[14px] md:text-[24px] font-semibold text-start  text-gray-800 "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  Our Clients
                </h2>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="relative"
            >
              <Clients />

              <div
                className="absolute -left-4 top-0 z-20"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={corner || "/placeholder.svg"}
                  className="w-[12%] object-cover"
                  alt="none"
                />
              </div>
            </div>
          </div>
        </section>

        {/*----------- Trending  -----------*/}

        <TrendsSection />

        {/*----------- partners -----------*/}

        <section
          className="pt-10 md:pt-20 pb-10 md:pb-10 h-full bg-white"
          id="fourth-border"
        >
          <div className="w-full px-4 md:w-[80%] mx-auto h-full">
            <div className=" mx-auto flex flex-col gap-y-4 mb-2 z-50">
              {/* Top border */}
              <div className="flex relative flex-col mb-10">
                <div className="absolute top-0 flex border-t-2 md:border-t-4 w-[10%] border-black"></div>
                <BorderAnimation />
                <div className="absolute flex justify-center items-center top-0 border-t border-black w-full"></div>
              </div>

              <div className="mb-2 md:mb-6">
                <h2
                  className="text-[28px] md:text-[58px] font-light tracking-[1px] font-sans text-gray-800 "
                  data-aos="flip-up"
                  data-aos-duration="3000"
                >
                  Our Partners
                </h2>
              </div>
            </div>

            <div className="flex justify-center items-center w-full ">
              <div className="w-full h-full">
                <Partners />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
