type ImageProps = {
  src: string;
  alt?: string ;
};

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

export type Testimonial23Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export const Testimonial23Defaults: Testimonial23Props = {
  heading: "Community",
  description:
    "Hear from our successful students and industry professionals about their experiences with DayTrading Lodge.",
  testimonials: [
    {
      quote: `DayTrading Lodge is the best. I've tried many chat rooms and mentoring sites, but DayTrading Lodge offers the top mentors for all experience levels`,
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
      quote: `No hype, no BS, straight facts, set realistic expectations for newbies, and says it how it is, love his teaching style. Keep up the good work team:-)`,
      avatar: {
        src: "./person2.jpeg",
        alt: "Arjun Reddy",
      },
      name: "Arjun Reddy",
      position: "Financial Analyst",
      companyName: "FinTech Solutions",
      numberOfStars: 4.5,
    },
    {
      quote: `The information is clear and easy for beginners. Mentors respond promptly, and the live trading sessions and chart breakdowns are very helpful.`,
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
      quote: `I have never written a review for a trading company before, I have been a member for less than 1 month but I must say they offer an incredible amount of training.`,
      avatar: {
        src: "person4.jpg",
        alt: "Samuel John",
      },
      name: "Suman Garg",
      position: "Senior Trader",
      companyName: "Market Movers",
      numberOfStars: 5,
    },
    {
      quote: `After researching months for a valuable forex tutorial platform I finally found it. I am enjoying the learning content and the genuine community.`,
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