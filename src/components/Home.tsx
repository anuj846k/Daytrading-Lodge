import React from "react";
import { Navbar2 } from "../partials/Navbar";
import { Testimonial21 } from "../partials/Testimonials";
import { Header19 } from "./Cta";
import TradingViewWidget from "../partials/ticker";
import { Layout366 } from "../partials/Mentors";

const Home = () => {
  return (
    <div className="h-full w-full ">
      <Navbar2 />
      <TradingViewWidget />
      {/* Hero section */}
      <div
        className="h-[80vh] flex flex-col md:flex-row   "
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="left w-full md:w-[70%] flex flex-col justify-center items-start p-8 md:p-14 b shadow-lg n">
          <div className="font-switzer  text-black">
            <h1 className="text-4xl md:text-[70px] tracking-tighter font-bold leading-none">
              <span className="text-[#2866C4] shadow-lg   ">'' Empower</span> Your
            </h1>
            <h1 className="text-5xl font-bold md:text-[80px] leading-none mb-4">
              <span className="text-8xl md:text-[120px] text-[#ca1c2b] leading-none">
                Trading
              </span>{" "}
              Journey ''
            </h1>
          </div>
          <div>
            <p className="mt-6 md:mt-10 text-black text-xl md:text-2xl font-medium leading-relaxed font-switzer tracking-tight">
              Your One-Step Solution For Establishing Your Currency Trading
              Foundation.
            </p>
          </div>
          <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-8">
            <button className="text-white px-6 md:px-12 py-3 text-lg md:text-xl bg-[#ca1c2b] rounded-full shadow-lg hover:bg-[#b81a27] transition duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              Learn more
            </button>
            <button className="text-white px-6 md:px-12 py-3 text-lg md:text-xl bg-[#2866C4] rounded-full shadow-lg hover:bg-[#2459a3] transition duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              Enroll now
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
      <Testimonial21 />
      <Layout366/>
    </div>
  );
};

export default Home;  