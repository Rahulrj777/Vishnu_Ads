import { FaArrowRightLong } from "react-icons/fa6";

// ✅ Service data array
import company from "../images/service/1.png";
import serviceTwo from "../images/service/2.png";
import serviceThree from "../images/service/3.png";
import serviceFour from "../images/service/4.png";
import serviceFive from "../images/service/5.png";
import serviceSix from "../images/service/6.png";
import serviceSeven from "../images/service/7.png";
import serviceEight from "../images/service/8.png";
import serviceNine from "../images/service/9.png";
import serviceTen from "../images/service/10.png";
import serviceEleven from "../images/service/11.png";
import serviceTwele from "../images/service/12.png";
import serviceThriten from "../images/service/13.png";
import serviceFourteen from "../images/service/14.png";
import serviceFifteen from "../images/service/15.png";
import serviceSixten from "../images/service/16.png";
import serviceSeventen from "../images/service/17.png";
import serviceEithtin from "../images/service/18.png";
import serviceNightin from "../images/service/19.png";
import serviceTwnety from "../images/service/20.png";
import BorderAnimation from "./BorderAnimation";
import bgimg from "../images/banner/whatweofferbgbanner.png";

const services = [
  {
    img: company,
    title: "Company Registration",
    quote: "Every big story begins with a single signature",
  },
  {
    img: serviceTwo,
    title: "Strategy & Analytics",
    quote: "Success thrives where insight meets action.",
  },
  {
    img: serviceThree,
    title: "AD shoots",
    quote: "Every frame tells a story.",
  },
  {
    img: serviceFour,
    title: "Television & FM Ad Releases",
    quote: "Stand out where it counts.",
  },
  {
    img: serviceFive,
    title: "Digital Marketing",
    quote: "Meet your audience.",
  },
  {
    img: serviceSix,
    title: "Website & App Development",
    quote: "Your brand’s digital home",
  },
  {
    img: serviceSeven,
    title: "Branding & Design",
    quote: "Your brand is more than a logo—it’s a legacy",
  },
  {
    img: serviceEight,
    title: "CRM & ERP Support",
    quote: "Efficiency is an experience.",
  },
  {
    img: serviceNine,
    title: "Graphics Designing",
    quote: "Design that speaks louder than words.",
  },
  {
    img: serviceTen,
    title: "Video Content Creation",
    quote: "Transform raw footage into a cinematic masterpiece.",
  },
  {
    img: serviceEleven,
    title: "WhatsApp Chatbot Integration",
    quote: "Speak to your customers, any time, any place.",
  },
  {
    img: serviceTwele,
    title: "Movie Promotion",
    quote: "Promoting your film, from trailer to red carpet.",
  },
  {
    img: serviceThriten,
    title: "Outdoor Promotion",
    quote: "Where your brand reaches beyond the screen.",
  },
  {
    img: serviceFourteen,
    title: "Sales & Marketing Support",
    quote: "Sales build lasting connections.",
  },
  {
    img: serviceFifteen,
    title: "Television Channel Setup",
    quote: "Your content, your channel.",
  },
  {
    img: serviceSixten,
    title: "Event Management",
    quote: "Every event, unforgettable.",
  },
  {
    img: serviceSeventen,
    title: "Franchise Management",
    quote: "Bring your brand to every corner.",
  },
  {
    img: serviceEithtin,
    title: "PR & Media Outreach",
    quote: "Connecting you with the Tech world.",
  },
  {
    img: serviceNightin,
    title: "Product Distribution Across the Globe",
    quote: "Bringing your products to the world.",
  },
  {
    img: serviceTwnety,
    title: "Infrastructure Setup & Training",
    quote: "The best-built brands are made to last.",
  },
];

const AllServices = () => {
  return (
    <div
      className="w-full bg-fixed bg-center bg-cover relative py-16"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-[80%] mx-auto flex flex-col">
        {/* Border Top Animation */}
        <div
          className="flex relative flex-col mb-4"
          data-aos="fade-right"
          data-aos-duration="300"
        >
          <div className="absolute top-0 flex border-t-2 md:border-t-4 w-[10%] border-white"></div>
          <div>
            <BorderAnimation />
          </div>
          <div className="absolute flex justify-center items-center top-0 border-t border-white w-full"></div>
        </div>

        {/* Title Section */}
        <div className="flex flex-col gap-y-1 items-start font-sans mb-8 md:mb-12">
          <p
            className="text-[28px] md:text-[58px] font-light tracking-[1px] font-sans text-white"
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            Discover What We Offer
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-16 w-full">
          {services.map((service, index) => (
            <div key={index} className="h-full group">
              <div
                className="flex flex-col gap-y-6 justify-between items-center h-full cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="flex justify-center items-center group-hover:scale-105 transition-transform duration-2000">
                  <img
                    src={service.img}
                    className="w-[25%] object-cover rounded-md"
                    alt={service.title}
                  />
                </div>
                <div className="flex flex-col items-center gap-y-1 w-full">
                  <h2
                    className="font-medium text-center text-white text-[12px] md:text-[14px] animate-bounce duration-2000"
                    data-aos="flip-up"
                    data-aos-duration="3000"
                  >
                    {service.title}
                  </h2>
                  <div className="border border-gray-300 w-full"></div>
                  <p className="text-[10px] md:text-[11px] italic font-[poppins] text-center text-white">
                    {service.quote}
                  </p>
                  {/* <div>
                  <button
                    data-aos="flip-up"
                    data-aos-duration="2000"
                    className="group-hover:rotate-[360deg] transition-transform duration-300 flex items-center gap-x-2 font-ocr uppercase border border-gray-300 rounded-full p-1.5 md:p-2 bg-white shadow-md drop-shadow-md"
                  >
                    <FaArrowRightLong className="text-[8px] md:text-[12px]" />
                  </button>
                </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
