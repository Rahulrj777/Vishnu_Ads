import logo from "../images/logo/vishnu_ads_logo-2.png";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-10 pb-12 bg-gray-100 font-sans" id="footer-section">
      <div className="w-[92%] md:w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* 1) Logo */}
          <div className="flex items-center">
            <img
              src={logo || "/placeholder.svg"}
              alt="logo"
              className="w-84px] md:w-[150px] object-contain"
            />
          </div>

          {/* 2) Follow Our Pages */}
          <div className="flex flex-col">
            <p className="text-gray-600 uppercase tracking-wide text-[12px] md:text-[14px]">
              Follow Our Pages
            </p>

            <div className="mt-3 flex gap-3 items-center">
              {[
                { icon: <FaInstagram />, label: "Instagram", href: "#" },
                { icon: <FaFacebookF />, label: "Facebook", href: "#" },
                { icon: <FaTwitter />, label: "X / Twitter", href: "#" },
                { icon: <FaPinterest />, label: "Pinterest", href: "#" },
                { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm hover:scale-105 transition-transform"
                >
                  <span className="text-gray-700 text-lg">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 3) Reach Out */}
          <div className="flex flex-col">
            <p className="text-purple-700 font-semibold text-[16px] md:text-[18px]">
              Reach Out
            </p>

            <div className="mt-3 text-gray-700 text-[13px] md:text-[14px]">
              <p className="font-medium">+91 85318 18181</p>
              <p className="mt-2">contact@vishnuads.com</p>
              <p className="mt-3 leading-6 text-sm md:text-[14px]">
                9, David Towers, 5th floor, Ashoknagar main Road,
                <br />
                Kodambakkam, Chennai, Tamil Nadu 600024
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
