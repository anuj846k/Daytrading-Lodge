import React from "react";
import { Navbar2 } from "../partials/Navbar";
import { Testimonial21 } from "../partials/Testimonials";
import { Header19 } from "./Cta";

import TradingViewWidget from "../partials/ticker";

const Home = () => {
  return (
    <div className=" h-full w-full  ">
      <Navbar2 />
      <TradingViewWidget />
      {/* Hero section  */}
      <div
        className="-mt-5 h-[80vh] flex flex-col md:flex-row"
        style={{
          background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),url(./trade.jpg )`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="left w-full md:w-[70%] flex flex-col justify-center items-start p-8 md:p-14">
          <div className="font-switzer tracking-tight text-white">
            <h1 className="text-5xl md:text-[70px] font-bold leading-tight mb-2">
              <span className="text-[#e82f3e]">'' Empower</span> Your
            </h1>
            <h1 className="text-5xl font-bold md:text-[70px] leading-none mb-4">
              <span className="text-6xl md:text-[100px] text-[#2866C4] leading-none">
                Trading
              </span>{" "}
              Journey ''
            </h1>
            <p className="mt-6 md:mt-10 text-xl md:text-2xl font-medium leading-relaxed">
              Your One-Step Solution For Establishing Your Forex Trading
              Foundation.
            </p>
          </div>
          <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-8">
            <button className="text-white px-6 md:px-12 py-3 text-lg md:text-xl bg-[#ca1c2b] rounded-full shadow-lg hover:bg-[#b81a27] transition duration-300">
              Learn more
            </button>
            <button className="text-white px-6 md:px-12 py-3 text-lg md:text-xl bg-[#2866C4] rounded-full shadow-lg hover:bg-[#2459a3] transition duration-300">
              Join Now
            </button>
          </div>
        </div>

        <div className="w-full md:w-[60%] flex justify-center items-center md:p-0 p-8">
          <img
            src="./bitcoin.gif"
            alt="Trading animation"
            className="h-full shadow-lg hidden md:block"
          />
        </div>
      </div>

      <Header19 />
      {/* <Testimonial21 /> */}
    </div>
  );
};

export default Home;
