import React, { useState, useEffect, useRef } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import what from '../images/discover.png'

import big from '../images/service/big.png'

import company from '../images/service/company_reg.png'
import serviceTwo from '../images/service/Strategy.png'
import serviceThree from '../images/service/ad_shoots.png'
import serviceFour from '../images/service/Digital_marketing.png'
import serviceFive from '../images/service/TV_FM.png'
import serviceSix from '../images/service/website_development.png'
import serviceSeven from '../images/service/branding.png'
import serviceEight from '../images/service/CRM.png'
import serviceNine from '../images/service/Graphic_Design.png'
import serviceTen from '../images/service/Video_Creation.png'
import serviceEleven from '../images/service/chatbot.png'
import serviceTwele from '../images/service/marketing_sales.png'
import serviceThriten from '../images/service/movie_promotion.png'
import serviceFourteen from '../images/service/Outdooor.png'
import serviceFifteen from '../images/service/tv_setting.png'
import serviceSixten from '../images/service/event_management.png'
import serviceSeventen from '../images/service/franchise.png'
import serviceEithtin from '../images/service/media_outreach.png'
import serviceNightin from '../images/service/product_distribution.png'
import serviceTwnety from '../images/service/infrastructure.png'


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


import imgOne from '../images/service/company_reg_background.jpg';
import imgTwo from '../images/service/Strategy&Analytics_background.jpg';
import imgThree from '../images/service/ad_shoots_background.jpg';
import imgFour from '../images/service/digital_marketing_background.jpg'
import imgFive from '../images/service/Tv_and_FM_background.jpg';
import imgSix from '../images/service/web_development_background.jpg';
import imgSeven from '../images/service/branding_background.jpg';
import imgEight from '../images/service/crm_background.jpg';
import imgNine from '../images/service/graphic_design_background.jpg';
import imgTen from '../images/service/video_creation_background.jpg';
import imgElven from '../images/service/whatsapp_background.jpg';
import imgTwele from '../images/service/sales_marketing_background.jpg';
import imgThritin from '../images/service/movie_promotin_background.jpg';
import imgfourtin from '../images/service/outdoor_promotion_background.jpg';
import img15 from '../images/service/tv_setup_background.jpg';
import img16 from '../images/service/event_management_background.jpg';
import img17 from '../images/service/franchise_background.jpg';
import img18 from '../images/service/outreach_background.jpg';
import img19 from '../images/service/transport_background.jpg';
import img20 from '../images/service/infrastructure_background.jpg';

import Progressbar from "./Progressbar";


// icons
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { LuArrowUpRightSquare } from "react-icons/lu";
import Eye from "./Eye";




gsap.registerPlugin(ScrollTrigger);

const AllServicesNew = () => {

    const firstProcess = useRef(null)
    const secondProcess = useRef(null)
    const thirdProcess = useRef(null)
    const fourthProcess = useRef(null)
    const fifthProcess = useRef(null)
    const sixthProcess = useRef(null)
    const seventhProcess = useRef(null)
    const eighthProcess = useRef(null)
    const ninethProcess = useRef(null)
    const tenthProcess = useRef(null)
    const eleventhProcess = useRef(null)
    const twelethProcess = useRef(null)
    const thirteenProcess = useRef(null)
    const fourteenProcess = useRef(null)
    const fifteenProcess = useRef(null)
    const sixteenProcess = useRef(null)
    const seventeenProcess = useRef(null)
    const eighteenProcess = useRef(null)


    useEffect(() => {
        AOS.init({
            duration: 1000, // You can set a global duration if needed
        });
    }, []);



    useEffect(() => {

        const animation = gsap.matchMedia()


        animation.add("(min-width:800px)", () => {

            //one
            const first = gsap.timeline({
                scrollTrigger: {
                    trigger: "#proone",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            first.to(firstProcess.current, {
                x: 0,
                opacity: 0,

            })

            //two
            const second = gsap.timeline({
                scrollTrigger: {
                    trigger: "#protwo",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            second.to(secondProcess.current, {
                x: 0,
                opacity: 0,

            })


            //three
            const three = gsap.timeline({
                scrollTrigger: {
                    trigger: "#prothree",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            three.to(thirdProcess.current, {
                x: 0,
                opacity: 0,

            })

            //four
            const four = gsap.timeline({
                scrollTrigger: {
                    trigger: "#profour",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            four.to(fourthProcess.current, {
                x: 0,
                opacity: 0,
            })


            //five
            const five = gsap.timeline({
                scrollTrigger: {
                    trigger: "#profive",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            five.to(fifthProcess.current, {
                x: 0,
                opacity: 0,
            })

            //six
            const six = gsap.timeline({
                scrollTrigger: {
                    trigger: "#prosix",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            six.to(sixthProcess.current, {
                x: 0,
                opacity: 0,
            })


            //six
            const seven = gsap.timeline({
                scrollTrigger: {
                    trigger: "#proseven",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            seven.to(seventhProcess.current, {
                x: 0,
                opacity: 0,
            })


            //eight
            const eight = gsap.timeline({
                scrollTrigger: {
                    trigger: "#proeight",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            eight.to(eighthProcess.current, {
                x: 0,
                opacity: 0,
            })


            //nine
            const nine = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pronine",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            nine.to(ninethProcess.current, {
                x: 0,
                opacity: 0,
            })


            //ten
            const ten = gsap.timeline({
                scrollTrigger: {
                    trigger: "#proten",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            ten.to(tenthProcess.current, {
                x: 0,
                opacity: 0,
            })


            //11
            const elven = gsap.timeline({
                scrollTrigger: {
                    trigger: "#proelven",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            elven.to(eleventhProcess.current, {
                x: 0,
                opacity: 0,
            })


            //12
            const twele = gsap.timeline({
                scrollTrigger: {
                    trigger: "#protwele",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            twele.to(twelethProcess.current, {
                x: 0,
                opacity: 0,
            })

            //13
            const thriteen = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pro13",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            thriteen.to(thirteenProcess.current, {
                x: 0,
                opacity: 0,
            })

            //14
            const fourteen = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pro14",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            fourteen.to(fourteenProcess.current, {
                x: 0,
                opacity: 0,
            })


            //15
            const fifteen = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pro15",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            fifteen.to(fifteenProcess.current, {
                x: 0,
                opacity: 0,
            })


            //16
            const sixteen = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pro16",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            sixteen.to(sixteenProcess.current, {
                x: 0,
                opacity: 0,
            })

            //17
            const seventeen = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pro17",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            seventeen.to(seventeenProcess.current, {
                x: 0,
                opacity: 0,
            })

            //18
            const eighteen = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pro18",
                    start: "top 10%",
                    end: "bottom 80%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                    // markers: true
                },
            })

            eighteen.to(eighteenProcess.current, {
                x: 0,
                opacity: 0,
            })

        })

        //mobile view

        animation.add("(max-width:799px)", () => {

            //one
            // const first = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: "#proone",
            //         start: "60% 10%",
            //         end: "bottom 80%",
            //         scrub: 1,
            //         toggleActions: "play none none reverse",
            //         // markers: true
            //     },
            // })

            // first.to(firstProcess.current, {
            //     x: 0,
            //     rotation: 200,
            //     duration: 80,
            //     opacity: 0,
            // })


            //two
            // const second = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: "#protwo",
            //         start: "60% 10%",
            //         end: "bottom 80%",
            //         scrub: 1,
            //         toggleActions: "play none none reverse",
            //         // markers: true
            //     },
            // })

            // second.to(secondProcess.current, {
            //     x: 0,
            //     rotation: 200,
            //     duration: 80,
            //     opacity: 0,
            // })


            //three
            // const three = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: "#prothree",
            //         start: "60% 10%",
            //         end: "bottom 80%",
            //         scrub: 1,
            //         toggleActions: "play none none reverse",
            //         // markers: true
            //     },
            // })

            // three.to(thirdProcess.current, {
            //     x: 0,
            //     rotation: 200,
            //     duration: 80,
            //     opacity: 0,

            // })

            //four
            // const four = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: "#profour",
            //         start: "60% 10%",
            //         end: "bottom 80%",
            //         scrub: 1,
            //         toggleActions: "play none none reverse",
            //         // markers: true
            //     },
            // })

            // four.to(fourthProcess.current, {
            //     x: 0,
            //     rotation: 200,
            //     duration: 80,
            //     opacity: 0,
            // })


            //five
            // const five = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: "#profive",
            //         start: "60% 10%",
            //         end: "bottom 80%",
            //         scrub: 1,
            //         toggleActions: "play none none reverse",
            //         // markers: true
            //     },
            // })

            // five.to(fifthProcess.current, {
            //     x: 0,
            //     rotation: 200,
            //     duration: 80,
            //     opacity: 0,
            // })
            
        })

        return () => animation.revert();

    }, []);


    return (
        <>
            <section className="bg-black font-sans w-full">

                <div className="flex flex-col md:flex-row items-start w-full">


                    {/*-------- process Title ----------*/}

                    <div className="sticky top-28 z-0 md:z-10 h-[85vh] md:h-screen w-full md:w-[50%] px-10 py-8  bg-white  drop-shadow-sm box ">
                        <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">

                            {/* Overlay */}
                            {/* <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div> */}

                            <div className="flex items-stretch gap-x-6 md:gap-x-16 h-full    ">

                                {/* right Border */}
                                <div className="flex relative flex-col items-center justify-center" data-aos="fade-down" data-aos-delay='500' data-aos-duration='4000'>
                                    <div className="border-l-2 md:border-l-4 border-black h-[30%] z-10" data-aos="fade-down" data-aos-duration='1000'></div>
                                    <div className=''>
                                        <Progressbar />
                                    </div>
                                    <div className="border-l border-black h-full absolute top-0 z-0"></div>
                                </div>

                                {/* WHY Title */}

                                <div className='flex flex-col gap-y-1 items-start justify-start  md:ml-16'>
                                    <p className="text-gray-900 uppercase  tracking-wide font-[roboto] text-[14px] md:text-[16px]  mt-6">Our Services</p>
                                    {/* <h2 className=' text-[28px] md:text-[52px] text-black font-light  font-sans' data-aos="flip-up" data-aos-duration='1000'>What We do From Vision to Victory</h2> */}

                                    <div className="relative mt-4 md:mt-7" data-aos='fade-right' data-aos-duration='1000'>
                                        <img src={what} className=" w-full md:w-[85%] object-cover" alt="none" />

                                        <div className="absolute  -bottom-2 md:-bottom-4 right-10 md:right-28">
                                            <h2 className="text-black text-[2.8rem] md:text-[4.5rem] animate-bounce">?</h2>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-[50%] ">

                        {/*-------- process one ----------*/}
                        <div className="flex justify-end items-end opacity-1" id="proone" ref={firstProcess} >
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full md:w-full   bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgOne}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto ">
                                        <div className='w-full text-left transition-opacity  px-4 py-6 md:px-0 md:py-0 duration-700 ease-in-out  ' data-aos='fade-up' >
                                            {/* <div className="place-box text-[12px] font-light uppercase font-signika">
                                                Step 1
                                            </div> */}
                                            {/* <div className="title-box-1  text-[24px] md:text-[30px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                                Company Registration
                                            </div> */}

                                            <div className="">
                                                <img src={company} className=" w-[50%] md:w-[40%] object-cover " alt="none" />
                                            </div>

                                            <div className="desc mt-2 " data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:pr-20 md:tracking-[1px]">
                                                    "Every big story begins with a single signature"
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
                        </div>


                        {/*-------- process two ----------*/}
                        <div className="flex justify-end items-end opacity-1" id="protwo" ref={secondProcess} >

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full md:w-full    shadow-lg drop-shadow-sm   " >
                                <div className="relative   h-full w-full  text-white overflow-hidden  font-sans ">


                                    <img
                                        src={imgTwo}
                                        alt="Background"
                                        className='absolute  inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-0 w-full"></div>


                                    <div className="content-section flex flex-col-reverse  gap-y-6 md:flex-row items-start justify-between space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">


                                        <div className='w-full md:w-full text-right transition-opacity flex flex-col justify-end items-end duration-700 ease-in-out  px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            {/* <div className="title-box-1 text-[24px] md:text-[30px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                                Strategy & Analytics
                                            </div> */}

                                            <div className="flex justify-end items-end">
                                                <img src={serviceTwo} className=" w-[45%] md:w-[50%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pl-20">
                                                    "Success thrives where insight meets action."
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
                        </div>


                        {/*-------- process three ----------*/}
                        <div className="flex justify-end items-end  opacity-1" id="prothree" ref={thirdProcess} >
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgThree}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col md:flex-row gap-y-6 items-start  space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className=" flex">
                                                <img src={serviceThree} className=" w-[45%] md:w-[40%] object-cover " alt="none" />
                                            </div>

                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pr-20">
                                                    "Every frame tells a story."
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
                        </div>

                        {/*-------- process Four ----------*/}
                        <div className="flex justify-end items-end  opacity-1" id="profour" ref={fourthProcess} >

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgFour}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex  gap-y-6 md:flex-row justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto ">


                                        <div className='w-full text-right flex flex-col justify-end  items-end transition-opacity  duration-700 ease-in-out  px-4 py-6 md:px-0 md:py-0' data-aos='fade-up'>
                                            {/* <div className="place-box text-[12px] font-light uppercase font-signika" >
                                                Step 4
                                            </div> */}

                                            <div className="flex justify-end items-end">
                                                <img src={serviceFour} className=" w-[45%] md:w-[50%] object-cover " alt="none" />
                                            </div>

                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[4px] md:pl-20">
                                                    "Meet your audience."
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
                        </div>



                        {/*-------- process Five ----------*/}
                        <div className="flex justify-end items-end  opacity-1" id="profive" ref={fifthProcess} >
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgFive}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col gap-y-6 md:flex-row  items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0' data-aos='fade-up'>
                                            {/* <div className="place-box text-[12px] font-light uppercase font-signika">
                                                Step 5
                                            </div> */}


                                            <div className="">
                                                <img src={serviceFive} className="w-[40%] md:w-[40%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[2px] md:pr-20">
                                                    "Stand out where it counts."
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
                        </div>

                        {/*-------- process Six ----------*/}
                        <div className="flex justify-end items-end opacity-1" id="prosix" ref={sixthProcess}>

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgSix}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex gap-y-6 justify-between md:flex-row  items-start space-y-8 z-20 w-full md:w-[90%] md:mt-14 mx-auto">


                                        <div className='w-full  text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            {/* <div className="title-box-1 text-[24px] md:text-[30px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                                Website & App Development
                                            </div> */}

                                            <div className="flex justify-end items-end">
                                                <img src={serviceSix} className="w-[55%] md:w-[60%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[2px] md:pl-20">
                                                    "Your brand’s digital home"
                                                </p>
                                            </div>
                                            <div className=" flex items-center  gap-x-3 mt-7 md:mt-10" data-aos='fade-up'>
                                                <LuArrowUpRightSquare className="text-[#c382f8] -rotate-90 text-[26px] md:text-[30px]" />
                                                <button className=" text-[10px] md:text-[12px] rounded-md  px-4 md:px-5  py-1.5 text-white border border-gray-100 flex items-center gap-x-2">   <span>Explore More</span>  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*-------- process Seven ----------*/}
                        <div className="flex justify-end items-end  opacity-1" id="proseven" ref={seventhProcess} >
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full  text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgSeven}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col gap-y-6 justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full  text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>


                                            <div className="">
                                                <img src={serviceSeven} className="w-[60%] md:w-[55%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-4" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pr-20">
                                                    "Your brand is more than a logo—it’s a legacy”
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
                        </div>

                        {/*-------- process Eight ----------*/}
                        <div className="flex justify-end items-end opacity-1" id="proeight" ref={eighthProcess}>

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgEight}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex  gap-y-6 justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">


                                        <div className='w-full text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            {/* <div className="title-box-1 text-[24px] md:text-[32px] font-bold text-yellow-400 font-oswald" data-aos='fade-up'>
                                                CRM & ERP Support
                                            </div> */}
                                            <div className="flex justify-end items-end">
                                                <img src={serviceEight} className="w-[45%] md:w-[50%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pl-20">
                                                    "Efficiency is an experience."
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
                        </div>


                        {/*-------- process Nine ----------*/}
                        <div className="flex justify-end items-end  opacity-1" id="pronine" ref={ninethProcess} >
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgNine}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col justify-between  md:flex-row items-start  space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0' data-aos='fade-up'>

                                            <div className="">
                                                <img src={serviceNine} className="w-[55%] md:w-[55%] object-cover " alt="none" />
                                            </div>

                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pr-20">
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
                        </div>


                        {/*-------- process Ten ----------*/}
                        <div className="flex justify-end items-end opacity-1" id="proten" ref={tenthProcess}>

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgTen}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex  justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-right flex flex-col justify-end items-end  transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0' data-aos='fade-up'>

                                            <div className="flex justify-end items-end">
                                                <img src={serviceTen} className="w-[45%] md:w-[50%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-4" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pl-20">
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
                            </div>
                        </div>


                        {/*-------- process Elven ----------*/}
                        <div className="flex justify-end items-end  opacity-1" id="proelven" ref={eleventhProcess}>
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full  h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgElven}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col gap-y-6 justify-between md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">


                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>


                                            <div className="">
                                                <img src={serviceEleven} className="w-[55%] md:w-[60%] object-cover " alt="none" />
                                            </div>

                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pr-20">
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
                            </div>
                        </div>


                        {/*-------- process Twele ----------*/}
                        <div className="flex justify-end items-end opacity-1" id="protwele" ref={twelethProcess}>

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgTwele}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section  gap-y-6 justify-between  md:flex-row items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                        <div className='w-full text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0' data-aos='fade-up'>


                                            <div className="flex justify-end items-end">
                                                <img src={serviceTwele} className="w-[45%] md:w-[50%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px]  md:pl-20">
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
                        </div>


                        {/*-------- process thriteen ----------*/}
                        <div className="flex justify-end items-end " id="pro13" ref={thirteenProcess}>
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgThritin}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>

                                    <div className="content-section flex flex-col md:flex-row gap-y-6 justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="">
                                                <img src={serviceThriten} className="w-[50%] md:w-[55%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px]  md:pr-20">
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
                        </div>

                        {/*-------- process fourteen ----------*/}
                        <div className="flex justify-end items-end" id="pro14" ref={fourteenProcess}>

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={imgfourtin}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section   md:flex-row justify-between gap-y-6 items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">

                                        <div className='text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="flex justify-end items-end">
                                                <img src={serviceFourteen} className="w-[50%] md:w-[50%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px]  md:pl-20">
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
                            </div>
                        </div>


                        {/*-------- process fifitin ----------*/}
                        <div className="flex justify-end items-end " id="pro15" ref={fifteenProcess}>
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img15}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col md:flex-row gap-y-6 justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>


                                            <div className="mt-4">
                                                <img src={serviceFifteen} className="w-[40%] md:w-[50%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-4" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pr-20">
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
                            </div>
                        </div>


                        {/*-------- process sixteen ----------*/}
                        <div className="flex justify-end items-end" id="pro16" ref={sixteenProcess}>

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img16}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section   md:flex-row justify-between gap-y-6 items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">


                                        <div className='text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className=" flex justify-end items-end">
                                                <img src={serviceSixten} className="w-[45%] md:w-[50%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-4" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pl-20">
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
                        </div>


                        {/*-------- process seventin ----------*/}
                        <div className="flex justify-end items-end " id="pro17" ref={seventeenProcess}>
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img17}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col md:flex-row gap-y-6 justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">

                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="">
                                                <img src={serviceSeventen} className="w-[50%] md:w-[55%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pr-20">
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
                        </div>

                        {/*-------- process eightin ----------*/}
                        <div className="flex justify-end items-end" id="pro18" ref={eighteenProcess}>

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img18}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section   md:flex-row justify-between gap-y-6 items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">


                                        <div className='text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="flex justify-end items-end">
                                                <img src={serviceEithtin} className="w-[50%] md:w-[50%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pl-20">
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
                            </div>
                        </div>


                        {/*-------- process ninetin ----------*/}
                        <div className="flex justify-end items-end ">
                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh] w-full md:w-full  bg-white  drop-shadow-sm box flex justify-start items-start ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img19}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section flex flex-col md:flex-row gap-y-6 justify-between items-start space-y-8 z-20 w-full md:w-[85%] md:mt-14 mx-auto">
                                        <div className='w-full text-left transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="">
                                                <img src={serviceNightin} className="w-[50%] md:w-[50%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px]  md:pr-20">
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
                        </div>

                        {/*-------- process 20 ----------*/}
                        <div className="flex justify-end items-end">

                            <div className="sticky top-28 z-10 h-[45vh] md:h-[65vh]  w-full  md:w-full   bg-white  shadow-lg drop-shadow-sm ">
                                <div className="relative w-full h-full text-white overflow-hidden flex font-sans">

                                    <img
                                        src={img20}
                                        alt="Background"
                                        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform  '
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 w-full"></div>


                                    <div className="content-section   md:flex-row justify-between gap-y-6 items-start space-y-8 z-20 w-full md:w-[85%] md:mt-16 mx-auto">


                                        <div className='text-right flex flex-col justify-end items-end transition-opacity  duration-700 ease-in-out px-4 py-6 md:px-0 md:py-0 ' data-aos='fade-up'>

                                            <div className="flex justify-end items-end">
                                                <img src={serviceTwnety} className="w-[60%] md:w-[65%] object-cover " alt="none" />
                                            </div>
                                            <div className="desc mt-2" data-aos='fade-up'>
                                                <p className="text-[12px] md:text-[18px] italic md:tracking-[1px] md:pl-20">
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AllServicesNew