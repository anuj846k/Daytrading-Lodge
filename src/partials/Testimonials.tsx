import { BiSolidStar } from "react-icons/bi";
import { FaStarHalfAlt, FaStar } from "react-icons/fa"; // Import a half-star icon
import { Testimonial21Defaults } from "../constants/TestimonialsDeafult";



type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  testimonial: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial21Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial21 = (props: Testimonial21Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial21Defaults,
    ...props,
  } as Props;

  const handleTouchStart = () => {
    document.querySelector('.animate-loop-testimonials')?.classList.add('paused');
  };

  const handleTouchEnd = () => {
    document.querySelector('.animate-loop-testimonials')?.classList.remove('paused');
  };

    // Function to handle touch cancel event
    const handleTouchCancel = () => {
      document.querySelector('.animate-loop-testimonials')?.classList.remove('paused');
    };
  
  
  return (
    <section className="section overflow-hidden md:py-30 py-10 font-switzer ">
      <div className="container mb-12 max-w-lg px-[10%] text-center md:mb-18 lg:mb-20">
        <h1 className="mb-5 text-5xl md:-ml-30 -ml-0 flex flex-col  md:flex-row font-bold md:mb-6 md:text-1xl lg:text-[70px] text-[#ca1c2b]">
          {heading}
          <span className="md:ml-4  text-[#2866C4]">Feedback</span>
        </h1>
        <p className="md:text-md font-semibold">{description}</p>
      </div>
      <div className="flex animate-loop-testimonials md:hover:paused items-stretch"  onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd} onTouchCancel={handleTouchCancel}>
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="mr-8 flex w-[19rem] md:min-w-[25rem] flex-col items-start justify-between border border-border-primary p-6 md:p-8 rounded-md bg-amber-50"
              >
                <div className="mb-6 flex">
                  {Array(Math.floor(testimonial.numberOfStars)).fill(null).map((_, starIndex) => (
                    <BiSolidStar
                      key={starIndex}
                      className="mr-1 size-6 text-yellow-400"
                    />
                  ))}
                  {testimonial.numberOfStars % 1 !== 0 && (
                    <FaStarHalfAlt className="mr-1 size-6 text-yellow-400" />
                  )}
                  {Array(5 - Math.ceil(testimonial.numberOfStars)).fill(null).map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className="mr-1 size-6 text-gray-300"
                    />
                  ))}
                </div>
                <blockquote
                  className={`mb-5 before:content-['"'] after:content-['"'] md:mb-6 md:text-md`}
                >
                  {testimonial.testimonial}
                </blockquote>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt}
                    loading="lazy"
                    className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p>
                      {testimonial.position}, {testimonial.companyName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};



Testimonial21.displayName = "Testimonial21";
