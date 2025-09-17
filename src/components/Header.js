import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../images/logo/vishnu_ads_logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 80) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else if (currentScrollY <= 80) {
        // Always show at the very top
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-black">
        {/* Left: Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Right: Menu + Icons */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex gap-8 text-sm font-bold">
            <li>
              <a
                href="#home"
                className="transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#8274a7] hover:to-[#84c7c5]"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#8274a7] hover:to-[#84c7c5]"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#8274a7] hover:to-[#84c7c5]"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#8274a7] hover:to-[#84c7c5]"
              >
                CONTACT
              </a>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 text-xl"
            >
              <FaWhatsapp />
            </a>

            {/* Email icon toggle on hover */}
            <a
              href="mailto:example@gmail.com"
              className="relative text-xl group"
            >
              {/* Closed mail icon (default) */}
              <HiOutlineMail className="transition-opacity duration-300 opacity-100 group-hover:opacity-0" />

              {/* Open mail icon (on hover) */}
              <HiOutlineMailOpen className="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
