
const Hero = () => {
  return (
    <div>
      <div className="h-[80vh] flex flex-col md:flex-row md:mb-0 mb-20">
        <div className="left w-full md:w-[70%] flex flex-col justify-center md:items-start items-center p-8 md:p-14 shadow-lg">
          <div className="font-switzer text-black">
            <h1 className="text-6xl -mt-4 md:-mt-2 md:mb-7 md:text-[90px] md:leading-none font-bold font-switzer">
              <span className="text-[#D71E2E]">Empower</span> Your{" "}
              <span className="text-[#2866C4]">Trading</span> Journey
            </h1>
            <img
              className="md:hidden w-full rounded-full"
              src="./man2.png"
              alt=""
            />
          </div>
          <div>
            <p className="-mt-9 md:mt-10 text-black text-lg md:text-2xl font-medium leading-relaxed font-switzer tracking-tight">
              Your <span className="bg-yellow-200 p-1">One-Step Solution</span>{" "}
              For Establishing Your Currency Trading Foundation.
            </p>
          </div>
          <div className="mt-8 md:mt-10 flex flex-col items-center justify-center md:flex-row gap-4 md:gap-8">
            <button className="text-white px-6 md:px-12 py-3 text-lg md:text-xl bg-[#D71E2E] rounded-full shadow-lg hover:bg-[#b81a27] transition duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              Download Brochure
            </button>
            <button className="text-white px-16 md:px-12 py-3 text-lg md:text-xl bg-[#2866C4] rounded-full shadow-lg hover:bg-[#2459a3] transition duration-300 hover:shadow-2xl transform hover:-translate-y-1">
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
    </div>
  );
};

export default Hero;
