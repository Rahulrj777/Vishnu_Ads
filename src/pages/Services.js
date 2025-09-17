import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import service_banner from '../images/main_service/Moon-Slider.webm'
import service_banne_1 from '../images/main_service/cloud.mp4'

import banner1 from '../images/main_service/banner2.jpg'
import banner2 from '../images/main_service/banner1.jpg'

import befor1 from "../images/main_service/compmany_registration.jpg";
import befor2 from "../images/main_service/strategy&analysis.jpg";
import befor3 from "../images/main_service/ad_shoots.jpg";
import befor4 from "../images/main_service/digital_marketing.jpg";
import befor5 from "../images/main_service/fm_ads.jpg";
import befor6 from "../images/main_service/web.jpg";
import befor7 from "../images/main_service/brand.jpg";
import befor8 from "../images/main_service/crm.jpg";
import befor9 from "../images/main_service/graphic_design.jpg";
import befor10 from "../images/main_service/video_content.jpg";


import after1 from "../images/main_service/whatsapp_chatbot.jpg";
import after2 from "../images/main_service/sales.jpg";
import after3 from "../images/main_service/movie_promo.jpg";
import after4 from "../images/main_service/outdoor_promotion.jpg";
import after5 from "../images/main_service/channel_setup.jpg";
import after6 from "../images/main_service/event_mangement.jpg";
import after7 from "../images/main_service/franchise_management.jpg";
import after8 from "../images/main_service/pr.jpg";
import after9 from "../images/main_service/product.jpg";
import after10 from "../images/main_service/infrastructure_setup.jpg";

import { HiSpeakerWave } from "react-icons/hi2";

import Partners from '../components/Partners';

const Services = () => {

    const [currentImages, setCurrentImages] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]); // Initial state for 5 rows
    const textRefs = useRef([]); // Array of references for all card texts
    const intervalsRef = useRef([]); // Store intervals to clean them up later
    const borderRefs = useRef([]);
    const nameRefs = useRef([]);
    const descRefs = useRef([]);
    const ageRefs = useRef([]);

    const cardsData = [
        {
            images: [befor1, after1],
            before: {
                title: "company registration",
                description: "Start with Legal Registration",
                button: "explore more",
                link: "/services/company_registration"
            },
            after: {
                title: "WhatsApp ChatBot Integration",
                description: "Engage Customers, Automate Conversations",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 6000, // 6 seconds for each image
        },
        {
            images: [befor2, after2],
            before: {
                title: "strategy analytics",
                description: "Transform Data Into Action",
                button: "explore more",
                link: "https://github.com/murugaveldev/scipl_project/blob/master/src/pages/Projects.js"
            },
            after: {
                title: "Sales And Marketing",
                description: "Start with Legal Registration",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 8000, // 8 seconds for each image
        },
        {
            images: [befor3, after3],
            before: {
                title: "Ad Shoots",
                description: "Capture Impactful Visual Moments",
                button: "explore more",
                link: "https://github.com/murugaveldev/scipl_project/blob/master/src/pages/Projects.js"
            },
            after: {
                title: "Movie Promotion",
                description: "Turning Screens into Dreams!",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 4000, // 4 seconds for each image
        },
        {
            images: [befor4, after4],
            before: {
                title: "digital marketing",
                description: "Boosting Brands with Digital",
                button: "explore more",
                link: "https://github.com/murugaveldev/scipl_project/blob/master/src/pages/Projects.js"
            },
            after: {
                title: "Outdoor Promotion",
                description: "Visibility That Drives Results",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 3000, // 3 seconds for each image
        },
        {
            images: [befor5, after5],
            before: {
                title: "TV FM Ads",
                description: "Broadcast Your Brand Everywhere",
                button: "explore more",
                link: "https://github.com/murugaveldev/scipl_project/blob/master/src/pages/Projects.js"
            },
            after: {
                title: "Television Setup",
                description: "Bringing Clear Vision Home",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 9000, // 9 seconds for each image
        },
        {
            images: [befor6, after6],
            before: {
                title: "Website Developement",
                description: "Building Your Digital Future!",
                button: "explore more",
                link: "https://github.com/murugaveldev/scipl_project/blob/master/src/pages/Projects.js"
            },
            after: {
                title: "Event Management",
                description: "Expertly Managed, Promoted Events",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 9000, // 9 seconds for each image
        },
        {
            images: [befor7, after7],
            before: {
                title: "Branding Designing",
                description: "Design Your Brand’s Future",
                button: "explore more",
                link: "https://github.com/murugaveldev/scipl_project/blob/master/src/pages/Projects.js"
            },
            after: {
                title: "Franchise Management",
                description: "Franchise Growth, Global Reach",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 5000, // 5 seconds for each image
        },
        {
            images: [befor8, after8],
            before: {
                title: "CRM & ERP",
                description: "Streamline Operations, Maximize Efficiency",
                button: "explore more",
                link: "https://github.com/murugaveldev/scipl_project/blob/master/src/pages/Projects.js"
            },
            after: {
                title: "PR & Media Out Reach",
                description: "Strategic Media for Visibility",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 7000, // 7 seconds for each image
        },
        {
            images: [befor9, after9],
            before: {
                title: "Graphic Designing",
                description: "Designs That Speak Volumes",
                button: "explore more",
                link: "https://github.com/murugaveldev/scipl_project/blob/master/src/pages/Projects.js"
            },
            after: {
                title: "Global Product Distribution",
                description: "Optimizing Supply Chain Success",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 3000, // 3 seconds for each image
        },
        {
            images: [befor10, after10],
            before: {
                title: "Video Content Creation",
                description: "Photography and Video Excellence",
                button: "explore more",
                link: "https://github.com/murugaveldev/scipl_project/blob/master/src/pages/Projects.js"
            },
            after: {
                title: "Infrastruture Setup and Training",
                description: "Laying Foundations, Empowering Growth!",
                button: "explore more",
                link: "https://www.youtube.com/"
            },
            duration: 6000, // 6 seconds for each image
        },

    ];

    // Set intervals to change images for each card
    useEffect(() => {
        // Clear any previous intervals if they exist
        if (intervalsRef.current.length > 0) {
            intervalsRef.current.forEach(clearInterval);
        }

        const newIntervals = cardsData.map((card, cardIndex) =>
            setInterval(() => {
                setCurrentImages((prev) => {
                    const updated = [...prev];
                    updated[cardIndex] = (updated[cardIndex] + 1) % card.images.length;
                    return updated;
                });
            }, card.duration)
        );

        // Store intervals in ref to clear them later
        intervalsRef.current = newIntervals;

        // Cleanup intervals on unmount
        return () => {
            newIntervals.forEach(clearInterval);
        };
    }, []); // Empty dependency array ensures this effect runs once when the component mounts



    // GSAP animation for hover effect
    const handleMouseEnter = (index) => {

        gsap.to(nameRefs.current[index], {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
        });

        gsap.to(ageRefs.current[index], {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.2,
        });

        gsap.to(borderRefs.current[index], {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.4,
        });

    };

    // ------------------


    const handleMouseLeave = (index) => {
        gsap.to(nameRefs.current[index], {
            y: 280,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
        });


        gsap.to(ageRefs.current[index], {
            y: -130,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
        });

        gsap.to(borderRefs.current[index], {
            scaleX: 0,
            duration: 1.5,
            ease: "power2.in",
        });
    };

    function topPage() {
        window.top(0.0)
    }


    return (
        <>

            <div className=' '>

                <section className='w-full h-[400vh] md:h-[290vh]'>

                    <div className='sticky top-0  md:h-[90vh]'>

                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            modules={[Autoplay, Pagination]}
                            simulateTouch={true} // Enable mouse/touch tracking
                            grabCursor={true} // Show a grab cursor when hovering
                            className="mySwiper w-full relative"
                        >
                            {/* Slide 1 */}
                            <SwiperSlide className="flex items-center justify-center">
                                <div className="relative w-full md:h-screen">
                                    <img
                                        src={banner1}
                                        className="w-full  object-cover"
                                        alt="wave background"
                                    />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                <div className="relative w-full md:h-screen">
                                    <img
                                        src={banner2}
                                        className="w-full  object-cover"
                                        alt="wave background"
                                    />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                <div className="relative w-full md:h-screen">
                                    <div className='relative w-full '>

                                        <div className='flex justify-center items-center '>
                                            <video className='w-full ' autoPlay loop muted>
                                                <source src={service_banne_1} type="video/mp4" />
                                            </video>
                                        </div>

                                        <div className='absolute top-12 md:top-40 right-0 w-fit h-full  font-sans '>
                                            <div className='w-full px-4 md:w-[70%] mx-auto flex flex-col  gap-y-1 md:gap-y-3 pr-8'>
                                                <h2 className='font-bold text-[14px] md:text-[40px] text-white'>Empowering Your Brand, Elevating Your Reach</h2>
                                                <p className='text-white  text-[8px] md:text-[14px] italic'>Discover tailored advertising solutions to captivate your audience and drive results. From creative strategy to impactful campaigns, we bring your vision to life.</p>

                                                <div className='mt-4 md:mt-8'>
                                                    <button className='text-[8px] md:text-[12px]  px-6 md:px-10  py-1.5 md:py-2.5 uppercase rounded-md border border-gray-100 text-white'>Explore More </button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="flex items-center justify-center">
                                <div className="relative w-full md:h-screen">
                                    <div className='relative w-full '>

                                        <div className='flex justify-center items-center '>
                                            <video className='w-full ' autoPlay loop muted>
                                                <source src={service_banner} type="video/mp4" />
                                            </video>
                                        </div>

                                        <div className='absolute top-12 md:top-40 right-0 w-fit h-full  font-sans '>
                                            <div className='w-full px-4 md:w-[70%] mx-auto flex flex-col  gap-y-1 md:gap-y-3 pr-8'>
                                                <h2 className='font-bold text-[14px] md:text-[40px] text-white'>Empowering Your Brand, Elevating Your Reach</h2>
                                                <p className='text-white  text-[8px] md:text-[14px] italic'>Discover tailored advertising solutions to captivate your audience and drive results. From creative strategy to impactful campaigns, we bring your vision to life.</p>

                                                <div className='mt-4 md:mt-8'>
                                                    <button className='text-[8px] md:text-[12px]  px-6 md:px-10  py-1.5 md:py-2.5 uppercase rounded-md border border-gray-100 text-white'>Explore More </button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>

                    <section className='w-full h-[360vh]  md:h-[213vh] z-30 sticky top-0 bg-gray-800 font-sans overflow-clip'>


                        <section className='py-20 bg-slate-100'>
                            <div className='text-white z-50 w-[80%] mx-auto'>
                                <div className='grid grid-cols-4 gap-x-8 w-full'>
                                    <div className='flex justify-center items-center'>
                                        <div className='bg-white p-2 w-20 h-20 rounded-full flex justify-center items-center'>
                                            <HiSpeakerWave className='text-[35px]  drop-shadow-2xl text-black' />
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='bg-white p-2 w-20 h-20 rounded-full flex justify-center items-center'>
                                            <HiSpeakerWave className='text-[35px]  drop-shadow-2xl text-black' />
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='bg-white p-2 w-20 h-20 rounded-full flex justify-center items-center'>
                                            <HiSpeakerWave className='text-[35px]  drop-shadow-2xl text-black' />
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='bg-white p-2 w-20 h-20 rounded-full flex justify-center items-center'>
                                            <HiSpeakerWave className='text-[35px]  drop-shadow-2xl text-black' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>


                        <div className='flex justify-center items-center w-full'>

                            <div className="w-full   mx-auto">
                                <div className="grid  grid-cols-1 md:grid-cols-3 ">
                                    {cardsData.map((card, cardIndex) => (
                                        <div
                                            key={cardIndex}
                                            className="relative w-full h-60 md:h-[45vh] group overflow-hidden shadow-lg group cursor-pointer"
                                        >
                                            {card.images.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`absolute  top-0 left-0 w-full h-full transition-opacity duration-1000 cursor-pointer ${currentImages[cardIndex] === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                                        }`}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`Slide ${index}`}
                                                        className="w-full h-full object-cover group-hover:grayscale group-hover:scale-105 duration-500 cursor-pointer"
                                                    />

                                                    {/* Hover effect to show text */}
                                                    <div
                                                        className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                        onMouseEnter={() => handleMouseEnter(cardIndex)}
                                                        onMouseLeave={() => handleMouseLeave(cardIndex)}
                                                    >

                                                        <span
                                                            ref={(el) => {
                                                                if (el) textRefs.current[cardIndex] = el;
                                                            }}
                                                            className="absolute  text-white text-[14px]  md:text-[14px] flex flex-col justify-center items-center  p-2 rounded-lg"
                                                        >
                                                            {currentImages[cardIndex] === 0
                                                                ? (
                                                                    <Link to={currentImages[cardIndex] === 0 ? card.before.link : card.after.link} onClick={topPage}>
                                                                        <div className="flex flex-col  items-center text-[20px] font-sans gap-y-2">
                                                                            <span ref={(el) => (nameRefs.current[cardIndex] = el)} className='font-semibold text-[14px] md:text-[18px] capitalize'>{card.before.title}</span>
                                                                            <div ref={(el) => (borderRefs.current[cardIndex] = el)} className='border md:border-2 border-white w-full code '></div>
                                                                            <span ref={(el) => (descRefs.current[cardIndex] = el)} className="text-[10px] md:text-[12px] font-sans capitalize text-gray-200 tracking-[1px] md:tracking-[3px]" >{card.before.description}</span>
                                                                            <span ref={(el) => (ageRefs.current[cardIndex] = el)} className="text-[8px] md:text-[10px] font-sans capitalize text-teal-100" >{card.before.button}</span>
                                                                        </div>
                                                                    </Link>
                                                                )
                                                                : (
                                                                    <Link to={currentImages[cardIndex] === 0 ? card.before.link : card.after.link} onClick={topPage}>
                                                                        <div className="flex flex-col gap-y-2 items-center text-[20px]">
                                                                            <span ref={(el) => (nameRefs.current[cardIndex] = el)} className='font-semibold text-[14px] md:text-[18px] capitalize '>{card.after.title}</span>
                                                                            <div ref={(el) => (borderRefs.current[cardIndex] = el)} className='border md:border-2 border-white w-full'></div>
                                                                            <span ref={(el) => (descRefs.current[cardIndex] = el)} className="text-[10px] md:text-[12px] font-sans capitalize text-gray-200 tracking-[1px] md:tracking-[3px]" >{card.after.description}</span>
                                                                            <span ref={(el) => (ageRefs.current[cardIndex] = el)} className='text-[8px] md:text-[10px] font-sans capitalize text-teal-100' >{card.after.button} </span>
                                                                        </div>
                                                                    </Link>
                                                                )
                                                            }
                                                        </span>
                                                    
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </section>


                </section>

                {/*----------- partners -----------*/}

                <section className='pt-10 pb-8 md:pt-32   bg-gray-200' id='fourth-border'>
                    <div className='w-full px-4 md:w-[80%] mx-auto h-full' >


                        <div className=' mx-auto flex flex-col gap-y-4 mb-2 '>

                            <div className='mb-2 md:mb-6'>
                                <h2 className='text-[14px] font-semibold md:text-[24px]  text-start  text-gray-800 ' data-aos="flip-up" data-aos-duration='1000'>Our Partners</h2>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-full ">
                            <div className='w-full h-full'>
                                <Partners />
                            </div>
                        </div>

                    </div>
                </section>


            </div >

        </>
    )
}

export default Services