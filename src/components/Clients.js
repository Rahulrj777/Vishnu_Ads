import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Clients.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import One from '../images/clients/herbocare.png'
import Two from '../images/clients/kolors.png'
import Three from '../images/clients/naptol.png'
import Four from '../images/clients/sk.png'
import Five from '../images/clients/vlcc.png'
import Six from '../images/clients/buy_happy.png'
import Seven from '../images/clients/tele_one.png'
import Eight from '../images/clients/v_care.png'
import Nine from '../images/clients/naga.png'
import Ten from '../images/clients/central.png'
import Elven from '../images/clients/your_mama.png'
import Twelve from '../images/clients/skandaguru.png'
import Thirteen from '../images/clients/sidbi.png'


// Define responsive settings for the carousel
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 12,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
    },
};

const Clients = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (

        <div className='flex flex-col  gap-y-8 md:gap-y-14 '>

            <div data-aos='fade-up' data-aos-delay="50" data-aos-duration="3000">
                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} keyBoardControl={true} className='pb-6 ' >
                    <div className="px-2 text-center ">
                        <div className=' duration-300 px-4 py-2'  >
                            <img src={One} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Two} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Three} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Four} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Five} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Six} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Seven} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Eight} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Nine} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Ten} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Elven} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Twelve} className='w-full' />
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <div className=' px-4 py-2' style={{ boxShadow: '14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;' }}  >
                            <img src={Thirteen} className='w-full' />
                        </div>
                    </div>
                    
                </Carousel>
            </div>

         
        </div>

    );
};

export default Clients;