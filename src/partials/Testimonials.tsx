import { BiSolidStar } from "react-icons/bi";
import { FaStarHalfAlt, FaStar } from "react-icons/fa"; // Import a half-star icon



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
  
  return (
    <section className="section overflow-hidden py-30 font-switzer ">
      <div className="container mb-12 max-w-lg px-[10%] text-center md:mb-18 lg:mb-20">
        <h1 className="mb-5 text-5xl md:-ml-30 -ml-0 flex flex-col  md:flex-row font-bold md:mb-6 md:text-1xl lg:text-[70px] text-[#ca1c2b]">
          {heading}
          <span className="md:ml-4  text-[#2866C4]">Feedback</span>
        </h1>
        <p className="md:text-md font-semibold">{description}</p>
      </div>
      <div className="flex animate-loop-testimonials hover:paused  items-stretch"  onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
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

export const Testimonial21Defaults: Testimonial21Props = {
  heading: "Community",
  description:
    "Hear from our successful students and industry professionals about their experiences with DayTrading Lodge.",
  testimonials: [
    {
      testimonial: `Daytrading lodge is simply the best place to be. I've personally
tried so many chat rooms and mentoring sites but whether you
are completely new to trading or you have been around for
some time, ForexSignals.com has the best mentors`,
      avatar: {
        src: "./person1.jpg",
        alt: "Tomas Bakos",
      },
      name: "Tomas Bakos",
      position: "Full-Time Trader",
      companyName: "Independent Trader",
      numberOfStars: 5,
    },
    {
      testimonial: `No hype, no BS, straight facts, set realistic expectations for
newbies, and says it how it is, love his teaching style. Keep up
the good work team:-)`,
      avatar: {
        src: "./person2.jpeg",
        alt: "Arjun Reddy",
      },
      name: "Arjun Reddy",
      position: "Financial Analyst",
      companyName: "FinTech Solutions",
      numberOfStars: 5,
    },
    {
      testimonial: `The information available is helpful and easy to understand as
a beginner, you can reach out to the mentors and they respond
promptly. The live trading sessions and breakdown of the
charts and trades are very helpful. The analysis is great.`,
      avatar: {
        src: "./person3.jpg",
        alt: "Michael Brown",
      },
      name: "Jefery Thatcher",
      position: "Professional Trader",
      companyName: "TradeSmart Inc.",
      numberOfStars: 4.5,
    },
    {
      testimonial:
        `I have never written a review for a trading company before, I
have been a member for less than 1 month but I must say they
offer an incredible amount of training.`,
      avatar: {
        src: "person4.jpg",
        alt: "Samuel John",
      },
      name: "Suman Garg",
      position: "Senior Trader",
      companyName: "Market Movers",
      numberOfStars: 4.5,
    },
    {
      testimonial: `After researching months for a valuable forex tutorial platform
I finally found it. . This platform is very good value for money
compare to thousands of pound's others are charging. I am
enjoying the learning content and the genuine community. I
highly recommend this team.`,
      avatar: {
        src: "person5.jpg",
        alt: "Suri Arora",
      },
      name: "Suri Arora",
      position: "Senior Trader",
      companyName: "Elite Trading Group",
      numberOfStars: 5,
    },
  ],
};

Testimonial21.displayName = "Testimonial21";
