import {useEffect } from 'react';
import AOS from 'aos'
import gsap from 'gsap'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';

import Clients from '../../components/Clients';
import service1 from '../../images/main_service/cr/cr.png'
import service2 from '../../images/main_service/cr/gst.png'
import service3 from '../../images/main_service/cr/msme.png'
import service4 from '../../images/main_service/cr/tm.png'
import service5 from '../../images/main_service/cr/dr.png'
import service6 from '../../images/main_service/cr/cp.png'

import banner from '../../images/main_service/cr/1.jpg'

import banner1 from '../../images/main_service/cr/small.jpg'
import banner2 from '../../images/main_service/cr/small.jpg'
import banner3 from '../../images/main_service/cr/small.jpg'

const CompanyRegistration = () => {


    const services = [
        {
            img: service1,
            title: "Company Registration under ROC",
            desc: "Register your business with the Registrar of Companies to legally incorporate and comply with tax requirements.",
        },
        {
            img: service2,
            title: "GST Registration",
            desc: "Register your business with the Registrar of Companies to legally incorporate and comply with tax requirements."
        },
        {
            img: service3,
            title: "Design Registration",
            desc: "Register your business with the Registrar of Companies to legally incorporate and comply with tax requirements."
        },
        {
            img: service4,
            title: "MSME Registration",
            desc: "Register your business with the Registrar of Companies to legally incorporate and comply with tax requirements."
        },
        {
            img: service5,
            title: "Trademark Registration",
            desc: "Register your business with the Registrar of Companies to legally incorporate and comply with tax requirements."
        },
        {
            img: service6,
            title: "Copyrights",
            desc: "Register your business with the Registrar of Companies to legally incorporate and comply with tax requirements."
        },

    ]


    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    
    useEffect(() => {
        // GSAP 3D Rotation Animation
        gsap.to(".rotating-text", {
            rotationY: 360, // Rotate along X-axis
            duration: 2,    // Animation duration in seconds
            ease: "power2.out", // Smooth easing
            repeat: -1,     // Infinite loop
            yoyo: true,     // Reverses the animation on repeat
        });
    }, []);


    return (
        <>
            <div className='overflow-hidden font-[poppins]'>

                <section className='flex justify-center items-center'>
                    <div>
                        <img src={banner} className='w-full object-cover' alt='banner' />
                    </div>
                </section>


                {/* --------- hightlights ------------- */}

                <section className='w-full  bg-[#ffffff] pt-14 pb-20'>

                    <div className='w-full md:w-[90%] mx-auto'>

                        <div className="relative ">
                            <p className="rotating-text text-[4rem] md:text-[7rem] h-fit opacity-20 drop-shadow-md  text-center font-extrabold text-black/25">
                                V
                            </p>
                            <h2 className="absolute text-center text-black font-semibold z-20 top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-[20px] md:text-[2rem]">
                                OUR OFFERINGS
                            </h2>
                        </div>

                        <div className='flex justify-center items-center w-full'>
                            <div className='grid grid-cols-2 md:grid-cols-4  md:gap-x-8 w-full gap-y-4 md:gap-y-16'>


                                {
                                    services.map((service) => (
                                        <div key={service.title}>
                                            <div className="flex flex-col justify-center items-center gap-y-5 group">
                                                {/* <div className="bg-white/40 drop-shadow-lg backdrop-blur-sm size-16 md:size-28 flex justify-center items-center border border-gray-300/15 rounded-full "> */}
                                                <img src={service.img} className="w-10 md:w-20 object-cover" alt="service" />
                                                {/* </div> */}
                                                <div className="flex flex-col items-center gap-y-1 md:gap-y-2">
                                                    <h3 className="font-semibold text-center text-[10px] md:text-[16px] text-gray-700 group-hover:text-black">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-[9px] md:text-[12px] text-center font-[roboto] text-gray-400">
                                                        {service.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>

                    </div>
                </section >


                {/* -------------- content explain ------------- */}

                < section className='font-sans' >
                    <div className='w-full'>

                        <div className='flex items-center justify-center h-[55vh]'>

                            <div className='w-[50%] mx-auto h-full  bg-[#222222]  px-28'>
                                <div className='flex justify-center h-full items-center'>
                                    <div className='flex flex-col gap-y-8 '>
                                        <div className='flex items-center gap-x-4'>
                                            <div className='border-l-8 border-teal-400 h-9'></div>
                                            <span className='text-white text-[34px] font-bold'>House & Homes</span>
                                        </div>
                                        <div>
                                            <p className='text-gray-300 text-[14px] font-light '>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[50%] mx-auto'>
                                <div>
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
                                        modules={[Autoplay,]} // Pagination
                                        simulateTouch={true} // Enable mouse/touch tracking
                                        grabCursor={true} // Show a grab cursor when hovering
                                        className="mySwiper w-full  h-full  relative "
                                    >
                                        {/* Slide 1 */}
                                        <SwiperSlide className="flex items-center justify-center">
                                            <div className="relative w-full ">
                                                <img
                                                    src={banner1}
                                                    className="w-full h-[55vh]  object-cover"
                                                    alt="wave background"
                                                />

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="flex items-center justify-center">
                                            <div className="relative w-full ">
                                                <img
                                                    src={banner2}
                                                    className="w-full h-[55vh] object-cover"
                                                    alt="wave background"
                                                />

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="flex items-center justify-center">
                                            <div className="relative w-full ">
                                                <img
                                                    src={banner3}
                                                    className="w-full h-[55vh]  object-cover"
                                                    alt="wave background"
                                                />
                                            </div>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-col md:flex-row items-center justify-center  h-[30vh] md:h-[55vh] '>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div>
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
                                        modules={[Autoplay,]} // Pagination
                                        simulateTouch={true} // Enable mouse/touch tracking
                                        grabCursor={true} // Show a grab cursor when hovering
                                        className="mySwiper w-full  h-full  relative "
                                    >
                                        {/* Slide 1 */}
                                        <SwiperSlide className="flex items-center justify-center">
                                            <div className="relative w-full ">
                                                <img
                                                    src={banner1}
                                                    className="w-full h-[30vh] md:h-[55vh]  object-cover"
                                                    alt="wave background"
                                                />

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="flex items-center justify-center">
                                            <div className="relative w-full ">
                                                <img
                                                    src={banner2}
                                                    className="w-full h-[30vh] md:h-[55vh] object-cover"
                                                    alt="wave background"
                                                />

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="flex items-center justify-center">
                                            <div className="relative w-full ">
                                                <img
                                                    src={banner3}
                                                    className="w-full h-[30vh] md:h-[55vh]  object-cover"
                                                    alt="wave background"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>

                                </div>
                            </div>

                            <div className='w-full md:w-[50%] mx-auto h-full  bg-[#cfcfcf] py-8 md:py-0 px-2 md:px-28'>
                                <div className='flex justify-center h-full items-center'>
                                    <div className='flex flex-col  gap-y-3 md:gap-y-8 '>
                                        <div className='flex items-center  gap-x-2 md:gap-x-4'>
                                            <div className='border-l-4 md:border-l-8 border-teal-400  h-5 md:h-9'></div>
                                            <span className='text-black text-[20px] md:text-[34px] font-bold'>House & Homes</span>
                                        </div>
                                        <div>
                                            <p className='text-gray-600 text-[10px] md:text-[14px] font-light '>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >


                {/* -------------------- Clients -------------------- */}

                < section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-stone-100' >
                    <div className='w-full px-4 md:w-[90%] mx-auto'>

                        <div className='flex justify-center items-center font-sans mb-6  md:mb-12'>
                            <h3 className='font-medium text-[16px]  md:text-[28px] uppercase '>Our Clients</h3>
                        </div>

                        <div>
                            <Clients />
                        </div>

                    </div>
                </section >

                {/* ----------------- Get in touch --------------- */}

                < section className='bg-black pt-10 md:pt-20 pb-10 md:pb-20 relative' >

                    <div className='w-full px-4 md:w-[85%] mx-auto font-sans'>
                        <div className='flex flex-col '>

                            <div className='flex items-center gap-x-2 md:gap-x-4'>
                                <div className='border-l-4 md:border-l-8 border-teal-400 h-5 md:h-10 '></div>
                                <h2 className='font-extrabold  text-[1.2rem] md:text-[3rem] text-center tracking-tight leading-tight text-white uppercase'>Want to know more?</h2>
                            </div>

                            <div className='flex flex-col gap-y-4 md:gap-y-8 mt-4 md:mt-6'>
                                <p className='leading-4 md:leading-5 text-[10px] md:text-[12px] w-full md:w-[60%] text-gray-300'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                </p>
                                <div>
                                    <button className='px-4 md:px-8 py-1 md:py-2 rounded-md md:rounded-lg border border-white text-white text-[12px] md:text-[14px] hover:scale-105  hover:bg-violet-700 hover:border-none duration-700 shadow-lg drop-shadow-md'>Contact Now</button>
                                </div>
                            </div>



                        </div>
                    </div>
                </section >


            </div >

        </>
    );
};

export default CompanyRegistration