import React, { useState, useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import join from '../images/journey.png'
import understand from '../images/process/understanding.png'
import strategy from '../images/process/strategy.png'
import build from '../images/process/BUILDING.png'
import Brand from '../images/process/the_art.png'
import Design from '../images/process/dream_design.png'
import Best from '../images/process/best.png'
import Plan from '../images/process/planning.png'
import Bring from '../images/process/bringing.png'
import World from '../images/process/world_watches.png'
import Digital from '../images/process/digital.png'
import Influnce from '../images/process/power_of_influence.png'
import Globel from '../images/process/global.png'


import imgOne from '../images/ad.jpg';
import imgTwo from '../images/process/convo.jpg';
import imgThree from '../images/process/srategy.jpg';
import imgFour from '../images/process/foudation.jpg'
import imgFive from '../images/process/brand.jpg';
import imgSix from '../images/process/sourcing.jpg';
import imgSeven from '../images/process/designing.jpg';
import imgEight from '../images/process/planning.jpg';
import imgNine from '../images/process/bringing.jpg';
import imgTen from '../images/process/world_ad.jpg';
import imgElven from '../images/process/Digital_media.jpg';
import imgTwele from '../images/process/influencer.jpg';
import imgThritin from '../images/process/global_expansion.jpg';
import imgfourtin from '../images/process/last.jpg';


// icons
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Progressbar from "./Progressbar";



gsap.registerPlugin(ScrollTrigger);

const Process = () => {



    useEffect(() => {
        AOS.init({
            duration: 1000, // You can set a global duration if needed
        });
    }, []);

    return (
        <>

            <section className="bg-black font-sans">

                <div>

                    <div className="">


                        <div className='w-full px-4 md:w-[90%] mx-auto sticky top-20 md:top-24 z-40 h-[13vh] md:h-[20vh]  mb-2 md:mb-12 '>

                            <div className="flex relative flex-col mb-4" data-aos="fade-right" data-aos-duration='1000'>
                                <div className="border-t-2 md:border-t-4 border-white w-[10%] flex justify-center items-center "></div>
                                <div>
                                    <Progressbar />
                                </div>
                                <div className="absolute flex justify-center items-center top-0 border-t border-white w-full"></div>
                            </div>


                            <div className='flex flex-col gap-y-1 items-start font-triumvirate'>
                                <p className="text-gray-100 uppercase  tracking-wide font-sans text-[12px] md:text-[13px]">Our Process</p>
                                <h2 className=' text-[18px] md:text-[45px] text-white font-light  font-sans' data-aos="flip-up" data-aos-duration='1000'>What We do From Vision to Victory</h2>
                            </div>
                        </div>




                        {/*-------- process one ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white  drop-shadow-sm box ">
                            <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgOne}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col  md:flex-row   space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto ">
                                    <div className={` w-[100%] md:w-[50%] text-left transition-opacity  px-4 py-6 md:px-0 md:py-0 duration-700 ease-in-out  `} data-aos='fade-up' >
                                        <div className="place-box text-[12px] font-light uppercase font-signika">
                                            Step 1
                                        </div>
                                        <div className="title-box-1  text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            From Spark to Spotlight: The Journey of a Fresh Brand
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                A brand waiting to be born—an idea brimming with potential but needing a guiding hand to bring it to life. That’s where we come in
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-[50%] mx-auto">
                                        <div className="flex justify-center ">
                                            <img src={join} className="w-40 md:w-80 object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*-------- process two ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgTwo}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col-reverse  gap-y-6 md:flex-row items-start justify-between space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                    <div className="w-full md:w-[50%] mx-auto">
                                        <div className="flex justify-center md:justify-start pb-10 md:pb-0">
                                            <img src={understand} className="w-[40%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>

                                    <div className='w-[100%] md:w-[50%] text-right transition-opacity flex flex-col justify-end items-end duration-700 ease-in-out  px-4 py-0 md:px-0 md:py-0' data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika" >
                                            Step 2
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            It Begins with a Conversation

                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                We start by listening. Deeply. Understanding your vision, your dreams, and your goals. Your story is our first chapter, and we can’t wait to write it with you.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        {/*-------- process three ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgThree}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col md:flex-row  items-start  space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">



                                    <div className={` w-[100%] md:w-[50%] text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 `} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika" >
                                            Step 3
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            Strategy That Sets the Stage
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                With a clear understanding of your brand, we craft a strategy that feels like magic. A roadmap that positions your brand to stand out, resonate, and engage. We set the stage for greatness.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>


                                    </div>


                                    <div className="w-full md:w-[50%] mx-auto">
                                        <div className=" flex justify-center md:justify-end " >
                                            <img src={strategy} className="w-[50%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*-------- process four ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh]  w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgFour}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col-reverse gap-y-6 md:flex-row justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto ">

                                    <div className="w-full md:w-[50%] mx-auto">
                                        <div className=" flex justify-center md:justify-start  pb-10 md:pb-0" >
                                            <img src={build} className="w-[40%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>

                                    <div className={` w-[100%] md:w-[50%] text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out  px-4 py-0 md:px-0 md:py-0`} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika" >
                                            Step 4
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            Building the Foundation
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                Now that we have your brand’s heartbeat, we make it official. The legalities are handled, and your company stands tall, ready to conquer the world.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>

                                    </div>
                                </div>



                            </div>

                        </div>

                        {/*-------- process five ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgFive}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col gap-y-6 md:flex-row  items-start  z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                    <div className={` w-[100%] md:w-[50%] text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0`} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika">
                                            Step 5
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            The Art of Branding
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                We dive into the creative depths to design your brand’s identity—a look, a feel, and a voice that captures who you are and speaks to those you seek to connect with. Every detail is meticulously crafted to tell your story at first sight.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>


                                    </div>


                                    <div className="w-full md:w-[50%] mx-auto">
                                        <div className=" flex  justify-center md:justify-end " >
                                            <img src={Brand} className="w-[40%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/*-------- process Six ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgSix}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col-reverse gap-y-6 justify-between md:flex-row  items-start space-y-8 z-20 w-full md:w-[90%] md:mt-16 mx-auto">

                                    <div className="w-full md:w-[50%] mx-auto pb-6 md:pb-0">
                                        <div className=" flex  justify-center md:justify-start " >
                                            <img src={Best} className="w-[40%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>


                                    <div className={` w-[100%] md:w-[50%] text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-0 md:px-0 md:py-0 `} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika">
                                            Step 6
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            Sourcing the Best
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                We then set out on a quest to find the finest products that embody your brand’s promise. Only the best will do, and we make sure every product aligns with the story we’re telling.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>



                                    </div>
                                </div>

                            </div>
                        </div>



                        {/*-------- process seven ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgSeven}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col gap-y-6 justify-between md:flex-row items-start  z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                    <div className={` w-[95%] md:w-[50%] text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 `} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika">
                                            Step 7
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            Designing the Dream
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                From concept to creation, we bring your product to life. Designs that aren’t just functional—they’re pieces of art that showcase your brand in its best light.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>


                                    </div>


                                    <div className="w-full m:w-[50%] mx-auto pb-6 md:pb-0">
                                        <div className=" flex justify-center md:justify-end pb-10 md:pb-0" >
                                            <img src={Design} className="w-[40%] md:w-[45%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/*-------- process eight ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgEight}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col-reverse gap-y-6 justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">


                                    <div className="w-full md:w-[50%] mx-auto pb-8 mb:pb-0">
                                        <div className=" flex  justify-center md:justify-start" >
                                            <img src={Plan} className="w-[50%]  md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>



                                    <div className={` w-[100%] md:w-[50%] text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-0 md:px-0 md:py-0 `} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika">
                                            Step 8
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            Planning the Big Reveal
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                Now it’s time to make your brand known. We design a comprehensive advertising plan that’s bold, strategic, and impactful. This is where the magic starts to unfold.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*-------- process nine ----------*/}
                        <div className="sticky top-40 md:top-56 z-10  h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgNine}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col justify-between  md:flex-row items-start  z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                    <div className={` w-[100%] md:w-[50%] text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0`} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika">
                                            Step 9
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            Bringing It to Life
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                Lights, camera, action! We capture your brand’s essence through powerful ads that speak volumes. Every shot is designed to leave a lasting impression.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>



                                    </div>

                                    <div className="w-full md:w-[50%] mx-auto pb-8 md:pb-0">
                                        <div className=" flex  justify-center md:justify-end" >
                                            <img src={Bring} className="w-[40%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>


                        {/*-------- process Ten ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgTen}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col-reverse justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">


                                    <div className="w-full md:w-[50%] mx-auto pb-8 md:pb-0">
                                        <div className=" flex  justify-center md:justify-start" >
                                            <img src={World} className="w-[40%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>

                                    <div className={` w-[100%] md:w-[50%] text-right flex flex-col justify-end items-end  transition-opacity  duration-700 ease-in-out px-4 py-0 md:px-0 md:py-0`} data-aos='fade-up'>
                                        <div className="place-box text-[12px]  font-light uppercase font-signika">
                                            Step 10
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            The World Watches
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                With your ads in place, we release them to the world, ensuring your message reaches the right eyes at the right time. Your brand is no longer just a name—it’s a movement.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*-------- process Elven ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh]  w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgElven}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col gap-y-6 justify-between md:flex-row items-start  z-20 w-full md:w-[85%] md:mt-16 mx-auto">


                                    <div className={` w-[100%] md:w-[50%] text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 `} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika">
                                            Step 11
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            Digital Dominance
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                We take your brand into the digital world, where clicks turn into conversations. Through tailored digital marketing strategies, we ensure your brand stays top-of-mind across platforms.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>



                                    </div>

                                    <div className="w-full md:w-[50%] mx-auto pb-8 md:pb-0">
                                        <div className=" flex justify-center md:justify-end pb-10 md:pb-0" >
                                            <img src={Digital} className="w-[40%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/*-------- process Tewel ----------*/}
                        <div className="sticky top-40 md:top-56 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgTwele}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col-reverse gap-y-6 justify-between  md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">


                                    <div className="w-full md:w-[50%] mx-auto pb-8 md:pb-0">
                                        <div className=" flex justify-center md:justify-start" >
                                            <img src={Influnce} className="w-[50%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>

                                    <div className={` w-[100%] md:w-[50%] text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-0 md:px-0 md:py-0`} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika">
                                            Step 12
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            The Power of Influence
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                We then harness the voices of influencers who align with your brand, amplifying your message and creating authentic connections with your audience.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*-------- process Thriten ----------*/}
                        <div className="sticky top-40 md:top-56 z-10  h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgThritin}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section flex flex-col md:flex-row gap-y-6 justify-between items-start  z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                    <div className={` w-[100%] md:w-[50%] text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 `} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika" >
                                            Step 13
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            Global Expansion
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                Finally, your brand is no longer local—it’s global. We take your products to every corner of the world, ensuring your brand becomes a household name everywhere.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>


                                    </div>

                                    <div className="w-full md:w-[50%] mx-auto pb-8 md:pb-0">
                                        <div className=" flex justify-center md:justify-end pb-10 md:pb-0" >
                                            <img src={Globel} className="w-[40%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*-------- process Fouteen ----------*/}
                        <div className="sticky  top-40 md:top-28 z-10 h-[75vh] md:h-[80vh] w-full mx-auto  bg-white rounded-3xl shadow-lg drop-shadow-sm ">
                            <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                <img
                                    src={imgfourtin}
                                    alt="Background"
                                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform'
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                <div className="content-section  flex flex-col-reverse md:flex-row justify-between gap-y-6 items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                    <div className="w-full md:w-[50%] mx-auto pb-8 md:pb-0">
                                        <div className=" flex justify-center md:justify-start" >
                                            <img src={join} className="w-[40%] md:w-[55%] object-cover  drop-shadow-lg" alt="join" />
                                        </div>
                                    </div>


                                    <div className={` w-[100%] md:w-[50%] text-right transition-opacity  duration-700 ease-in-out px-4 py-0 md:px-0 md:py-0 `} data-aos='fade-up'>
                                        <div className="place-box text-[12px] font-light uppercase font-signika">
                                            Step 14
                                        </div>
                                        <div className="title-box-1 text-[24px] md:text-[40px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                            And So the Story Goes.
                                        </div>
                                        <div className="desc mt-4" data-aos='fade-up'>
                                            <p className="text-[10px] md:text-[14px]">
                                                From the first spark of an idea to a globally recognized brand, together we’ve turned your dream into a reality. And this? This is only the beginning. The story of your brand is just getting started, and it’s destined for greatness.
                                            </p>
                                        </div>
                                        <div className="cta flex items-center justify-end mt-6 md:mt-16 space-x-4 ">
                                            <button className="p-2 rounded-full bg-yellow-500 text-white">
                                                <FaExternalLinkSquareAlt className="text-white text-[16px] md:text-[20px]" />
                                            </button>
                                            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-white rounded-full uppercase text-[10px] md:text-[12px]">
                                                Connect Now
                                            </button>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>




            </section>

        </>
    )
}

export default Process
