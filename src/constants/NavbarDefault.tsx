import { Navbar2Props } from "../partials/Navbar";



export const Navbar2Defaults: Navbar2Props = {
    logo: {
      url: "#",
      src: "./logo.png",
      alt: "Logo image",
    },
    navLinks: [
      { title: "Home", url: "/" },
      { title: "About", url: "/about" },
      { title: "Services", url: "/services" },
      { title: "Contact", url: "/contact" },
    ],
    buttons: [
      {
        title: "Join Us",
        size: "sm",
      },
    ],
  };
  
 