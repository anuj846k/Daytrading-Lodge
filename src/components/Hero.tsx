import { Link } from "react-router-dom";
const Hero = () => {
  const phoneNumber = "918826895731";
  const message = encodeURIComponent("I want to enroll in your mentorship program");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleDownload = () => {
    const pdfUrl = '../assets/trading_brochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'trading_brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="md:min-h-[80vh] min-h-screen flex flex-col md:flex-row md:mb-0 mb-20 bg-gradient-to-br from-gray-50 to-gray-100"
      aria-labelledby="hero-heading"
    >
      <div className="left w-full md:w-[70%] flex flex-col justify-center md:items-start items-center p-8 md:p-14 shadow-lg">
        <div className=" text-black ">
          <h1
            
            className="text-4xl -mt-6 md:-mt-2 md:mb-7 mb-6 md:text-[90px] md:leading-none font-bold "
          >
            <span className="text-[#D71E2E]">Empower</span> Your{" "}
            <span className="text-[#2866C4]">Trading</span> Journey
            
          </h1>
          <img
            className="md:hidden w-full rounded-full h-auto mb-12 "
            src="./man2.png"
            alt="Person representing trading"
            loading="lazy"
          />
        </div>
        <div>
          <p className="-mt-9 md:mt-10 text-black text-lg md:text-2xl font-medium leading-relaxed font-switzer tracking-tight">
            Your{" "}
            <span className="bg-yellow-200 px-1">
              One-Step Solution
            </span>{" "}
            For Establishing Your Currency Trading Foundation.
          </p>
        </div>
        <div className="mt-8 md:mt-10 flex flex-col items-center justify-center md:flex-row gap-4 md:gap-8">
          <button
            className="text-white px-8 md:px-12 py-3 text-lg md:text-xl bg-[#D71E2E] rounded-full shadow-lg hover:bg-[#b81a27] transition duration-300 hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b81a27]"
            aria-label="Download Brochure"
            onClick={handleDownload}
          >
            Download Brochure
          </button>
         <Link to={whatsappUrl} target="_blank">
         <button
            className="text-white px-18 md:px-12 py-3 text-lg md:text-xl bg-[#2866C4] rounded-full shadow-lg hover:bg-[#2459a3] transition duration-300 hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2459a3]"
            aria-label="Enroll now"
          >
            Enroll now
          </button>
         </Link>
        </div>
      </div>

      <div className="w-full md:w-[60%] flex justify-center items-center md:p-0 p-8">
        <img
          src="./bitcoin.gif"
          alt="Animation showing trading activity"
          className="h-full shadow-lg hidden md:block"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;