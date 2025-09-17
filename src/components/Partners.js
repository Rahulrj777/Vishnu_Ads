import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Clients.css";

import AOS from "aos";
import "aos/dist/aos.css";

import One from "../images/partner/phone.png";
import Two from "../images/partner/razerpay.png";
import Three from "../images/partner/SHIPYARI.png";
import Four from "../images/partner/shiprocket.png";
import Five from "../images/partner/jaya_tv.png";
import Six from "../images/partner/k_tv.png";
import Seven from "../images/partner/sun_tv.png";
import Eight from "../images/partner/cf.png";
import Nine from "../images/partner/whats.png";
import Ten from "../images/partner/cf_1.png";

import partner1 from "../images/partner/kalaignar.png";
import partner2 from "../images/partner/new 7.png";
import partner3 from "../images/partner/news18.png";
import partner4 from "../images/partner/polimer.png";
import partner5 from "../images/partner/pudhiathalai.png";
import partner6 from "../images/partner/jio.png";
import partner7 from "../images/partner/colors_tamil.png";
import partner8 from "../images/partner/thanthi_tv.png";
import partner9 from "../images/partner/zee_tamil.png";

// Define responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const Partners = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col  gap-y-8 md:gap-y-14 ">
      <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          className=" md:pb-6 "
        >
          <div className="px-2 text-center ">
            <div className=" duration-300 px-1 md:px-4 py-2">
              <img src={One} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Two} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Three} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Four} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Five} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Six} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Seven} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Three} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Eight} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Nine} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={Ten} className="w-full" />
            </div>
          </div>

          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={partner1} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={partner2} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={partner3} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={partner4} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={partner5} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={partner6} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={partner7} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={partner8} className="w-full" />
            </div>
          </div>
          <div className="px-2 text-center">
            <div
              className=" px-1 md:px-4 py-2"
              style={{
                boxShadow: "14px 14px 28px #c7c7c7, -14px -14px 28px #f9f9f9;",
              }}
            >
              <img src={partner9} className="w-full" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Partners;
