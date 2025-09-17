import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import what from "../images/discover.png";

import big from "../images/service/big.png";

import company from "../images/service/company_reg.png";
import serviceTwo from "../images/service/Strategy.png";
import serviceThree from "../images/service/ad_shoots.png";
import serviceFour from "../images/service/Digital_marketing.png";
import serviceFive from "../images/service/TV_FM.png";
import serviceSix from "../images/service/website_development.png";
import serviceSeven from "../images/service/branding.png";
import serviceEight from "../images/service/CRM.png";
import serviceNine from "../images/service/Graphic_Design.png";
import serviceTen from "../images/service/Video_Creation.png";
import serviceEleven from "../images/service/chatbot.png";
import serviceTwele from "../images/service/marketing_sales.png";
import serviceThriten from "../images/service/movie_promotion.png";
import serviceFourteen from "../images/service/Outdooor.png";
import serviceFifteen from "../images/service/tv_setting.png";
import serviceSixten from "../images/service/event_management.png";
import serviceSeventen from "../images/service/franchise.png";
import serviceEithtin from "../images/service/media_outreach.png";
import serviceNightin from "../images/service/product_distribution.png";
import serviceTwnety from "../images/service/infrastructure.png";

import join from "../images/journey.png";
import understand from "../images/process/understanding.png";
import strategy from "../images/process/strategy.png";
import build from "../images/process/BUILDING.png";
import Brand from "../images/process/the_art.png";
import Design from "../images/process/dream_design.png";
import Best from "../images/process/best.png";
import Plan from "../images/process/planning.png";
import Bring from "../images/process/bringing.png";
import World from "../images/process/world_watches.png";
import Digital from "../images/process/digital.png";
import Influnce from "../images/process/power_of_influence.png";
import Globel from "../images/process/global.png";

import imgOne from "../images/service/company_reg_background.jpg";
import imgTwo from "../images/service/Strategy&Analytics_background.jpg";
import imgThree from "../images/service/ad_shoots_background.jpg";
import imgFour from "../images/service/digital_marketing_background.jpg";
import imgFive from "../images/service/Tv_and_FM_background.jpg";
import imgSix from "../images/service/web_development_background.jpg";
import imgSeven from "../images/service/branding_background.jpg";
import imgEight from "../images/service/crm_background.jpg";
import imgNine from "../images/service/graphic_design_background.jpg";
import imgTen from "../images/service/video_creation_background.jpg";
import imgElven from "../images/service/whatsapp_background.jpg";
import imgTwele from "../images/service/sales_marketing_background.jpg";
import imgThritin from "../images/service/movie_promotin_background.jpg";
import imgfourtin from "../images/service/outdoor_promotion_background.jpg";
import img15 from "../images/service/tv_setup_background.jpg";
import img16 from "../images/service/event_management_background.jpg";
import img17 from "../images/service/franchise_background.jpg";
import img18 from "../images/service/outreach_background.jpg";
import img19 from "../images/service/transport_background.jpg";
import img20 from "../images/service/infrastructure_background.jpg";

import Progressbar from "./Progressbar";

// icons
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { LuArrowUpRightSquare } from "react-icons/lu";
import Eye from "./Eye";

gsap.registerPlugin(ScrollTrigger);

const AllServicesone = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can set a global duration if needed
    });
  }, []);

  return (
    <>
      <section className="bg-black font-sans w-full ">
        <div className="flex flex-col md:flex-row items-start w-full">
          <div className="w-full md:w-[50%] ">
            {/*-------- process one ----------*/}
            <div
              className="flex justify-end items-end  opacity-1 group"
              id="profour"
            >
              <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full md:w-full   bg-white  drop-shadow-sm box flex justify-start items-start ">
                <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">
                  <img
                    src={imgOne}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105 "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

                  <div className="content-section flex flex-col space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto ">
                    <div
                      className="w-full text-left transition-opacity  px-4 py-6 md:px-0 md:py-0 duration-700 ease-in-out  "
                      data-aos="fade-up"
                    >
                      <div className="">
                        <img
                          src={company}
                          className=" w-[50%] md:w-[40%] object-cover "
                          alt="none"
                        />
                      </div>

                      <div className="desc mt-2 " data-aos="fade-up">
                        x
                        <p className="text-[12px] md:text-[14px] italic md:pr-20 md:tracking-[1px]">
                          "Every big story begins with a single signature"
                        </p>
                      </div>

                      <div
                        className=" flex items-center  gap-x-3 mt-7 md:mt-10"
                        data-aos="fade-up"
                      >
                        <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">
                          {" "}
                          <span>Explore More</span>{" "}
                        </button>
                        <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*-------- process two ----------*/}

            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start group">
              <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">
                <img
                  src={imgSeven}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

                <div className="content-section flex flex-col gap-y-6 justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">
                  <div
                    className="w-full   md:text-left text-right flex flex-col justify-end md:justify-start items-end md:items-start duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 "
                    data-aos="fade-up"
                  >
                    <div className="flex justify-end md:justify-start">
                      <img
                        src={serviceSeven}
                        className="w-[60%] md:w-[45%] object-cover "
                        alt="none"
                      />
                    </div>
                    <div className="desc mt-4" data-aos="fade-up">
                      <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pr-20">
                        "Your brand is more than a logo—it’s a legacy”
                      </p>
                    </div>
                    <div
                      className=" flex items-center  gap-x-3 mt-7 md:mt-10"
                      data-aos="fade-up"
                    >
                      <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">
                        {" "}
                        <span>Explore More</span>{" "}
                      </button>
                      <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*-------- process three ----------*/}

            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start group">
              <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">
                <img
                  src={imgThree}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform group-hover:grayscale group-hover:scale-105 "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

                <div className="content-section flex flex-col md:flex-row gap-y-6 items-end md:items-start  space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">
                  <div
                    className="w-full md:text-left text-right flex flex-col justify-end md:justify-start items-end md:items-start  transition-opacity   duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 "
                    data-aos="fade-up"
                  >
                    <div className=" flex justify-end md:justify-start">
                      <img
                        src={serviceThree}
                        className=" w-[45%] md:w-[30%] object-cover "
                        alt="none"
                      />
                    </div>

                    <div className="desc mt-2" data-aos="fade-up">
                      <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pr-20">
                        "Every frame tells a story."
                      </p>
                    </div>
                    <div
                      className=" flex items-center  gap-x-3 mt-7 md:mt-10"
                      data-aos="fade-up"
                    >
                      <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">
                        {" "}
                        <span>Explore More</span>{" "}
                      </button>
                      <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*-------- process Five ----------*/}
            <div
              className="flex justify-end items-end  opacity-1 group"
              id="profive"
            >
              <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full md:w-full   bg-white  drop-shadow-sm box flex justify-start items-start ">
                <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">
                  <img
                    src={imgFive}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

                  <div className="content-section flex flex-col gap-y-6 md:flex-row  items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">
                    <div
                      className="w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0"
                      data-aos="fade-up"
                    >
                      <div className="">
                        <img
                          src={serviceFive}
                          className="w-[40%] md:w-[30%] object-cover "
                          alt="none"
                        />
                      </div>
                      <div className="desc mt-2" data-aos="fade-up">
                        <p className="text-[12px] md:text-[14px] italic md:tracking-[2px] md:pr-20">
                          "Stand out where it counts."
                        </p>
                      </div>
                      <div
                        className=" flex items-center  gap-x-3 mt-7 md:mt-10"
                        data-aos="fade-up"
                      >
                        <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">
                          {" "}
                          <span>Explore More</span>{" "}
                        </button>
                        <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*-------- process Nine ----------*/}
            {/* <div className="flex justify-end items-end  opacity-1 group" id="pronine"  >
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full md:w-full border-r-2 border-teal-500  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgNine}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105'
                                    />

                                  
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col justify-between  md:flex-row items-start  space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0' data-aos='fade-up'>

                                            <div className="">
                                                <img src={serviceNine} className="w-[55%] md:w-[40%] object-cover " alt="none" />
                                            </div>

                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pr-20">
                                                    "Design that speaks louder than words."
                                                </p>
                                            </div>
                                            <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                                <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                                <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process Elven ----------*/}

            {/* <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full md:w-full border-r-2 border-teal-500  bg-white  drop-shadow-sm box flex justify-start items-start group">
                            <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgElven}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105'
                                />

                               
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col gap-y-6 justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">


                                    <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>


                                        <div className="">
                                            <img src={serviceEleven} className="w-[55%] md:w-[40%] object-cover " alt="none" />
                                        </div>

                                        <div className="desc mt-2" data-aos='fade-up'>
                                            <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pr-20">
                                                "Speak to your customers, any time, any place."
                                            </p>
                                        </div>
                                        <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                            <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                            <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process thriteen ----------*/}
            {/* <div className="flex justify-end items-end group" id="pro13" >
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full md:w-full border-r-2 border-teal-500 bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgThritin}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform group-hover:grayscale group-hover:scale-105 '
                                    />

                                
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

                                    <div className="content-section flex flex-col md:flex-row gap-y-6 justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="">
                                                <img src={serviceThriten} className="w-[50%] md:w-[35%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[14px] italic md:tracking-[1px]  md:pr-20">
                                                    "Promoting your film, from trailer to red carpet."
                                                </p>
                                            </div>
                                            <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                                <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                                <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process fifitin ----------*/}

            {/* <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full md:w-full border-r-2 border-teal-500  bg-white  drop-shadow-sm box flex justify-start items-start group">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={img15}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105'
                                />

                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col md:flex-row gap-y-6 justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                    <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>


                                        <div className="mt-4">
                                            <img src={serviceFifteen} className="w-[40%] md:w-[35%] object-cover " alt="none" />
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pr-20">
                                                "Your content, your channel."
                                            </p>
                                        </div>
                                        <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                            <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                            <LuArrowUpRightSquare className="text-[#c382f8]   text-[26px] md:text-[30px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process seventin ----------*/}
            {/* <div className="flex justify-end items-end group" id="pro17" >
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full md:w-full border-r-2 border-teal-500 bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img17}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105'
                                    />

                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col md:flex-row gap-y-6 justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="">
                                                <img src={serviceSeventen} className="w-[50%] md:w-[40%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pr-20">
                                                    "Bring your brand to every corner."
                                                </p>
                                            </div>
                                            <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                                <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                                <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process ninetin ----------*/}
            {/* <div className="flex justify-end items-end group">
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full md:w-full border-r-2 border-teal-500 bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img19}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105'
                                    />

                                    
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col md:flex-row gap-y-6 justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">
                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="">
                                                <img src={serviceNightin} className="w-[50%] md:w-[40%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[14px] italic md:tracking-[1px]  md:pr-20">
                                                    "Bringing your products to the world."
                                                </p>
                                            </div>
                                            <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                                <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                                <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>

          {/* ================================================================    off section   =============================================================== */}

          <div className="w-full md:w-[50%] ">
            {/*-------- process two ----------*/}

            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full md:w-full    shadow-lg drop-shadow-sm  group  ">
              <div className="relative   h-full w-full  text-white overflow-hidden  font-sans ">
                <img
                  src={imgTwo}
                  alt="Background"
                  className="absolute  inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform group-hover:grayscale group-hover:scale-105 "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-0 w-full"></div>

                <div className="content-section flex flex-col-reverse  gap-y-6 md:flex-row items-start justify-between space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">
                  <div
                    className="w-full md:w-full text-right transition-opacity flex flex-col justify-start md:justify-end  items-start md:items-end duration-700 ease-in-out  px-4 py-6 md:px-0 md:py-0 "
                    data-aos="fade-up"
                  >
                    <div className="flex justify-start md:justify-end md:items-end">
                      <img
                        src={serviceTwo}
                        className=" w-[45%] md:w-[35%] object-cover "
                        alt="none"
                      />
                    </div>
                    <div className="desc mt-2" data-aos="fade-up">
                      <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pl-20">
                        "Success thrives where insight meets action."
                      </p>
                    </div>
                    <div
                      className=" flex items-center  gap-x-3 mt-7 md:mt-10"
                      data-aos="fade-up"
                    >
                      <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90  text-[26px] md:text-[30px]" />
                      <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">
                        {" "}
                        <span>Explore More</span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*-------- process Four ----------*/}
            <div
              className="flex justify-end items-end  opacity-1 group"
              id="profour"
            >
              <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">
                  <img
                    src={imgFour}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

                  <div className="content-section flex  gap-y-6 md:flex-row justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto ">
                    <div
                      className="w-full text-right flex flex-col justify-end  items-end transition-opacity  duration-700 ease-in-out  px-4 py-6 md:px-0 md:py-0"
                      data-aos="fade-up"
                    >
                      <div className="flex justify-end items-end">
                        <img
                          src={serviceFour}
                          className=" w-[45%] md:w-[35%] object-cover "
                          alt="none"
                        />
                      </div>

                      <div className="desc mt-2" data-aos="fade-up">
                        <p className="text-[12px] md:text-[14px] italic md:tracking-[4px] md:pl-20">
                          "Meet your audience."
                        </p>
                      </div>
                      <div
                        className=" flex items-center  gap-x-3 mt-7 md:mt-10"
                        data-aos="fade-up"
                      >
                        <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90  text-[26px] md:text-[30px]" />
                        <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">
                          {" "}
                          <span>Explore More</span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*-------- process Six ----------*/}

            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm  group">
              <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">
                <img
                  src={imgSix}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

                <div className="content-section flex gap-y-6 justify-between md:flex-row  items-start space-y-8 z-20 w-full md:w-[90%] md:mt-14 mx-auto">
                  <div
                    className="w-full  text-left md:text-right flex flex-col md:justify-end md:items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 "
                    data-aos="fade-up"
                  >
                    <div className="flex justify-start md:justify-end md:items-end">
                      <img
                        src={serviceSix}
                        className="w-[55%] md:w-[38%] object-cover "
                        alt="none"
                      />
                    </div>
                    <div className="desc mt-2" data-aos="fade-up">
                      <p className="text-[12px] md:text-[14px] italic md:tracking-[2px] md:pl-20">
                        "Your brand’s digital home"
                      </p>
                    </div>
                    <div
                      className=" flex items-center  gap-x-3 mt-7 md:mt-10"
                      data-aos="fade-up"
                    >
                      <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90 text-[26px] md:text-[30px]" />
                      <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">
                        {" "}
                        <span>Explore More</span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*-------- process Eight ----------*/}
            <div
              className="flex justify-end items-end opacity-1 group"
              id="proeight"
            >
              <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">
                  <img
                    src={imgEight}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

                  <div className="content-section flex  gap-y-6 justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">
                    <div
                      className="w-full text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 "
                      data-aos="fade-up"
                    >
                      <div className="flex justify-end items-end">
                        <img
                          src={serviceEight}
                          className="w-[45%] md:w-[35%] object-cover "
                          alt="none"
                        />
                      </div>
                      <div className="desc mt-2" data-aos="fade-up">
                        <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pl-20">
                          "Efficiency is an experience."
                        </p>
                      </div>
                      <div
                        className=" flex items-center  gap-x-3 mt-7 md:mt-10"
                        data-aos="fade-up"
                      >
                        <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90  text-[26px] md:text-[30px]" />
                        <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">
                          {" "}
                          <span>Explore More</span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*-------- process Ten ----------*/}

            {/* <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh] w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm group ">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgTen}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105'
                                />

                    
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex  justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                    <div className='w-full text-right flex flex-col justify-end items-end  transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0' data-aos='fade-up'>

                                        <div className="flex justify-end items-end">
                                            <img src={serviceTen} className="w-[45%] md:w-[35%] object-cover " alt="none" />
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pl-20">
                                                "Transform raw footage into a cinematic masterpiece."
                                            </p>
                                        </div>
                                        <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                            <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90 text-[26px] md:text-[30px]" />
                                            <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process Twele ----------*/}
            {/* <div className="flex justify-end items-end opacity-1 group" id="protwele" >

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgTwele}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105'
                                    />

                                    
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section  gap-y-6 justify-between  md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                        <div className='w-full text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0' data-aos='fade-up'>


                                            <div className="flex justify-end items-end">
                                                <img src={serviceTwele} className="w-[45%] md:w-[35%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[14px] italic md:tracking-[1px]  md:pl-20">
                                                    "Sales build lasting connections."
                                                </p>
                                            </div>
                                            <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                                <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90  text-[26px] md:text-[30px]" />
                                                <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process fourteen ----------*/}

            {/* <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm  group">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgfourtin}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform group-hover:grayscale group-hover:scale-105 '
                                />

                              
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section   md:flex-row justify-between gap-y-6 items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                    <div className='text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                        <div className="flex justify-end items-end">
                                            <img src={serviceFourteen} className="w-[50%] md:w-[45%] object-cover " alt="none" />
                                        </div>
                                        <div className="desc mt-2" data-aos='fade-up'>
                                            <p className="text-[12px] md:text-[14px] italic md:tracking-[1px]  md:pl-20">
                                                "Where your brand reaches beyond the screen."
                                            </p>
                                        </div>
                                        <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                            <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90  text-[26px] md:text-[30px]" />
                                            <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process sixteen ----------*/}
            {/* <div className="flex justify-end items-end group" id="pro16" >

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img16}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105'
                                    />

                                    
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section   md:flex-row justify-between gap-y-6 items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">


                                        <div className='text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className=" flex justify-end items-end">
                                                <img src={serviceSixten} className="w-[45%] md:w-[35%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-4" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pl-20">
                                                    “Every event, unforgettable.”
                                                </p>
                                            </div>
                                            <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                                <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90  text-[26px] md:text-[30px]" />
                                                <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process eightin ----------*/}

            {/* <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm group ">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={img18}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105'
                                />

                               
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section   md:flex-row justify-between gap-y-6 items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">


                                    <div className='text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                        <div className="flex justify-end items-end">
                                            <img src={serviceEithtin} className="w-[50%] md:w-[38%] object-cover " alt="none" />
                                        </div>
                                        <div className="desc mt-2" data-aos='fade-up'>
                                            <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pl-20">
                                                "Connecting you with the world”
                                            </p>
                                        </div>
                                        <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                            <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90  text-[26px] md:text-[30px]" />
                                            <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/*-------- process 20 ----------*/}
            {/* <div className="flex justify-end items-end group">

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[60vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img20}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  group-hover:grayscale group-hover:scale-105 '
                                    />

                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section   md:flex-row justify-between gap-y-6 items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">


                                        <div className='text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="flex justify-end items-end">
                                                <img src={serviceTwnety} className="w-[60%] md:w-[45%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[14px] italic md:tracking-[1px] md:pl-20">
                                                    "The best-built brands are made to last."
                                                </p>
                                            </div>
                                            <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                                <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                                <LuArrowUpRightSquare className="text-[#c382f8]  text-[26px] md:text-[30px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllServicesone;
