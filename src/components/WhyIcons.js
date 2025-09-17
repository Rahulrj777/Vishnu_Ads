import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Clients.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import whyOne from '../images/passion.png'
import whyTwo from '../images/creativit.png'
import whyThree from '../images/result_focused.png'
import whyFour from '../images/impact.png'


// Define responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const WhyIcons = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (

    <div className='flex flex-col  gap-y-8 md:gap-y-14 '>

      <div data-aos='fade-up' data-aos-delay="50" data-aos-duration="1500">
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} keyBoardControl={true} className='pb-6 ' >

          <div className="px-2 text-center">
            <div>
              <img src={whyOne} className='w-[50%] md:w-[50%] mx-auto' alt='none' />
            </div>
          </div>
          <div className="px-2 text-center">
            <div>
              <img src={whyThree} className='w-[48%] md:w-[48%] mx-auto' alt='none' />
            </div>
          </div>
          <div className="px-2 text-center">
            <div>
              <img src={whyTwo} className='w-[50%] md:w-[60%] mx-auto' alt='none' />
            </div>
          </div>
          <div className="px-2 text-center">
            <div>
              <img src={whyFour} className='w-[50%] md:w-[50%] mx-auto' alt='none' />
            </div>
          </div>



        </Carousel>
      </div>


    </div>

  );
};

export default WhyIcons