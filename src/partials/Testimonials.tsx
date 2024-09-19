import React, { useState, useEffect } from "react";
import {
  MdStar,
  MdStarHalf,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md";
import { useSwipeable } from "react-swipeable";

interface Props {
  heading: string;
  description: string;
  testimonials: {
    numberOfStars: number;
    quote: string;
    avatar: {
      src: string;
      alt?: string;
    };
    name: string;
    position: string;
    companyName: string;
  }[];
}

const Testimonial23: React.FC<Props> = ({
  heading,
  description,
  testimonials,
}) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen size and update `isMobile` state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is at 768px
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up
    };
  }, []);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <MdStar key={index} size={30} className="text-yellow-500" />
        ))}
        {halfStar && <MdStarHalf size={30} className="text-yellow-500" />}
        {[...Array(totalStars - Math.ceil(rating))].map((_, index) => (
          <MdStar
            key={index + fullStars + (halfStar ? 1 : 0)}
            className="text-neutral-darker"
          />
        ))}
      </div>
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  });
  
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 font-switzer select-none bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-[#ca1c2b]">
            {heading}
          </h1>
          <p className="md:text-lg">{description}</p>
        </div>

        <div className="relative overflow-hidden" {...handlers}>
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{
              transform: isMobile
                ? `translateX(-${current * 100}%)`
                : `translateX(-${current * (100 / testimonials.length)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
              >
                <div className="flex bg-white  h-[40vh] w-full flex-col items-start justify-between border border-gray-300 rounded-xl p-6 md:p-8">
                  <div>{renderStars(testimonial.numberOfStars)}</div>

                  <blockquote className="mb-6 md:mb-6 md:text-md text-sm">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex w-full items-start text-left md:w-fit md:flex-row md:items-center">
                    <img
                      src={testimonial.avatar.src}
                      alt={testimonial.avatar.alt || "User avatar"}
                      className="mb-10 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                    />
                    <div className=" ml-2 md:ml-0">
                      <p className="font-semibold md:text-md text-sm ">
                        {testimonial.name}
                      </p>
                      <p className="text-xs md:text-sm">
                        {testimonial.position}, {testimonial.companyName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 border  bg-white p-1 md:p-2 rounded-full shadow-md md:block hidden"
          >
            <MdArrowBack size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border  p-1 md:p-2  rounded-full shadow-md md:block hidden"
          >
            <MdArrowForward size={24} />
          </button>
        </div>

        <div className="flex items-center justify-center pt-[30px] sm:pt-[30px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative mx-[3px] inline-block size-2 rounded-full ${
                current === index ? "bg-black" : "bg-neutral-darker/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial23;
