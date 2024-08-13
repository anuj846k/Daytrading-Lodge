import logo from "/logo.png";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa6";

interface SocialLinkProps {
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  hoverColor: string;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const Footer: React.FC = () => {
  const phoneNumber = "918826895731";
  const message = encodeURIComponent("I want to enroll in your mentorship program");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-center md:items-start">
          <img
            className="h-24 w-auto hover:scale-110 transform transition duration-300 ease-in-out"
            src={logo}
            alt="Daytradinglodge Logo"
          />
          <p className="mt-4 text-center md:text-left text-sm font-light">
            Trading squad built by the best for the aspirant
          </p>
          <div className="flex mt-6 space-x-6">
            <SocialLink href={whatsappUrl} Icon={FaWhatsapp} hoverColor="text-green-400" />
            <SocialLink href="https://www.instagram.com/daytradinglodge/" Icon={FaInstagram} hoverColor="text-pink-400" />
            <SocialLink href="https://www.youtube.com/@daytradinglodge" Icon={FaYoutube} hoverColor="text-red-400" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold text-2xl mb-6 text-white">Company</h2>
          <ul className="space-y-3 text-center md:text-left">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
          </ul>
        </div>

        <div className="flex flex-col items-center  md:items-start">
          <h2 className="font-bold text-2xl mb-6 text-white">Get in Touch</h2>
          <ul className="space-y-3 text-center md:text-left">
            <li className="flex items-center md:justify-start justify-center ">
              <FaPhone className="mr-3" />
              <a href="tel:+918826895731" className="hover:text-white transition duration-300 ease-in-out">+91 8826895731</a>
            </li>
            <li className="flex items-center ">
              <FaEnvelope className="mr-3" />
              <a href="mailto:daytradinglodge@gmail.com" className="hover:text-white transition duration-300 ease-in-out">daytradinglodge@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      <p className="text-center text-sm font-light">
        © {new Date().getFullYear()} <span className="text-[#D71E2E] font-normal">Daytradinglodge</span>. All Rights Reserved
      </p>
    </footer>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon, hoverColor }) => (
  <Link to={href} target="_blank" rel="noopener noreferrer" className="group">
    <Icon className={`text-2xl cursor-pointer group-hover:${hoverColor} transition duration-300 ease-in-out`} />
  </Link>
);

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link to={href} className="hover:text-white transition duration-300 ease-in-out">
      {children}
    </Link>
  </li>
);

export default Footer;
