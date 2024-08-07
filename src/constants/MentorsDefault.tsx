import type { Layout366Props } from "../components/Mentors";
import { RxChevronRight } from "react-icons/rx";

export const Layout366Defaults: Layout366Props = {
  tagline: "Learn from the Experts",
  description:
    "Gain insights and strategies from top traders to improve your trading journey with DayTrading Lodge.",
  cardsSmall: [
    {
      tagline: "Expert Guidance",
      image: {
        src: "./milan_jaiswal.jpeg",
        alt: "Milan Jaiswal",
      },
      heading: "Milan Jaiswal",
      description:
        "Milan Jaiswal brings years of experience in trading strategies and market analysis. Learn from his hands-on approach and expert insights.",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
      taglineColor: "text-blue-500",
    },
    {
        tagline: "Strategic Insights",
        image: {
          src: "./piyush_sharma.jpeg",
          alt: "Piyush Sharma",
        },
        heading: "Piyush Sharma",
        description:
          "Piyush Sharma offers a deep understanding of market trends and trading techniques. Discover his proven methods and strategies.",
        button: {
          title: "Learn More",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
        taglineColor: "text-[#ca1c2b]",
      },
      {
        tagline: "Strategic Insights",
        image: {
          src: "./piyush_sharma.jpeg",
          alt: "Piyush Sharma",
        },
        heading: "Piyush Sharma",
        description:
          "Piyush Sharma offers a deep understanding of market trends and trading techniques. Discover his proven methods and strategies.",
        button: {
          title: "Learn More",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
        taglineColor: "text-[#ca1c2b]",
      },
  ],
};