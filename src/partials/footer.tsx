import logo from "/logo.png";
import { Link } from "react-router-dom";

import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const phoneNumber = "918826895731";
  const message = encodeURIComponent(
    "I want to enroll in your mentorship program"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <img
            className=" h-24 w-26 hover:scale-110 transform transition duration-300 lg:-mt-6 "
            src={logo}
            alt="Logo"
          />
          <p className="mt-4 text-center text-sm lg:text-base">
            Trading squad built by the best for the aspirant
          </p>
          <div className="flex justify-evenly w-full mt-4">
            <Link to={whatsappUrl} target="_blank">
              <FaWhatsapp
                className="mx-2 cursor-pointer hover:text-green-500"
                size={24}
              />
            </Link>
            <Link
              to="https://www.instagram.com/daytradinglodge/"
              target="_blank"
            >
              <FaInstagram
                className="mx-2 cursor-pointer hover:text-orange-400"
                size={24}
              />
            </Link>
            <Link to="https://www.youtube.com/@daytradinglodge">
              <FaYoutube
                className="mx-2 cursor-pointer hover:text-red-500"
                size={24}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <h2 className="font-bold text-xl lg:text-3xl mb-4">Company</h2>
          <ul className="text-sm lg:text-base list-none list-inside text-center lg:text-left">
            <Link to="/">
              <li className="mb-2 lg:mb-0">Home</li>
            </Link>
            <li className="mb-2 lg:mb-0">About Us</li>
            <li className="mb-2 lg:mb-0">contact us</li>
            <li className="mb-2 lg:mb-0">Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <h2 className="font-bold text-xl lg:text-3xl mb-4">Get in Touch</h2>
          <ul className="text-sm lg:text-base list-none list-inside text-center lg:text-left">
            <li className="mb-2 lg:mb-0">
              <a href="tel:+918826895731">+91 8826895731</a>
            </li>
            <li>
              <a href="mailto:daytradinglodge@gmail.com">
                daytradinglodge@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full my-8 border-gray-500" />
      <p className="text-center text-sm lg:text-base">
        © 2024 <span className="text-[#D71E2E]">Daytradinglodge</span>. All
        Rights Reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
