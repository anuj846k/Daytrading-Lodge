"use client";

import { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar2Defaults } from "../constants/NavbarDefault";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar2 = (props: Navbar2Props) => {
  const phoneNumber = "918826895731";
  const message = encodeURIComponent(
    "I want to enroll in your mentorship program"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const { logo, navLinks, buttons } = {
    ...Navbar2Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <nav className="flex w-full items-center border-b border-gray-300 bg-background-primary lg:min-h-18 lg:px-[5%] shadow-md sticky top-0 z-10">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center  justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a
            href={logo.url}
            className="md:h-20 md:w-40  h-16 w-28 flex items-center justify-center md:-ml-16 -ml-3"
          >
            <img src={logo.src} alt={logo.alt} />
          </a>
          <div className="flex items-center gap-4 lg:hidden">
            <Link to={whatsappUrl} target="_blank">
              <div>
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    className="w-full px-4 py-2 rounded-full "
                    {...button}
                  >
                    {button.title}
                  </Button>
                ))}
              </div>
            </Link>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          animate={isMobileMenuOpen ? "open" : "close"}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks.map((navLink, index) => (
            <div key={index} className="first:pt-4 lg:first:pt-0">
              <Link
                to={navLink.url}
                className="relative inline-block py-3 text-md focus-visible:outline-none lg:px-4 lg:py-2 lg:text-base text-black font-semibold"
              >
                {navLink.title}
                <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </div>
          ))}
        </motion.div>
        <div className="hidden justify-self-end lg:block">
          {buttons.map((button, index) => (
            <Button
              key={index}
              className="px-8 py-2 -mr-14 rounded-full bg-[#2866C4] text-white font-semibold shadow-lg hover:bg-[#ca1c2b] transition duration-300 ease-in-out transform hover:scale-105 border-none"
              {...button}
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

Navbar2.displayName = "Navbar2";
const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
