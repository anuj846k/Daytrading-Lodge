import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardBaseProps = {
  tagline: string;
  image: ImageProps;
  heading: string;
  description: string;
};

type CardsSmallProps = CardBaseProps & {
  button: ButtonProps;
};

type CardsBigProps = CardBaseProps & {
  buttons: ButtonProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  cardsSmall: CardsSmallProps[];
  cardsBig: CardsBigProps[];
};

export type Layout366Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout366 = (props: Layout366Props) => {
  const { tagline, description, cardsSmall, cardsBig } = {
    ...Layout366Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-20 lg:py-28 bg-gradient-to-tr from-blue-100 via-white to-blue-300">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-14">
          <p className="mb-3 font-semibold text-blue-600">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-gray-900">
          <span className="text-[#2866C4]">Elevate</span> Your <span className="text-[#ca1c2b]">Trading Journey</span> with Our Experts Mentors
          </h2>
          <p className="md:text-md text-gray-700">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:gap-4 lg:grid-cols-2">
            {cardsBig.map((card, index) => (
              <div
                key={index}
                className="order-first flex flex-col items-stretch rounded-md border-[3px] border-zinc-400 shadow-lg lg:order-none lg:col-start-1 lg:col-end-1 lg:row-start-1 lg:row-end-3 bg-white"
              >
                <div>
                  <img src={card.image.src} alt={card.image.alt} className="w-full object-cover rounded-t-md" />
                </div>
                <div className="flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
                  <div>
                    <p className="mb-2 font-semibold text-blue-600">{card.tagline}</p>
                    <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl text-gray-900">
                      {card.heading}
                    </h3>
                    <p className="text-gray-700">{card.description}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4 md:mt-8">
                    {card.buttons.map((button, index) => (
                      <Button key={index} {...button}>
                        {button.title}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {cardsSmall.map((card, index) => (
              <div
                key={index}
                className="order-last flex flex-col items-stretch border-[3px] rounded-2xl overflow-hidden border-zinc-400 shadow-md bg-white md:grid md:grid-cols-2 lg:order-none"
              >
                <div className="flex w-full items-center justify-center">
                  <img src={card.image.src} alt={card.image.alt} className="w-full h-[45vh] object-cover  md:rounded-l-none md:r" />
                </div>
                <div className="flex-1 flex-col justify-center p-6 md:flex">
                  <div>
                    <p className="mb-2 font-semibold text-blue-600">{card.tagline}</p>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl text-gray-900">{card.heading}</h3>
                    <p className="text-gray-700">{card.description}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant={card.button.variant}
                      size={card.button.size}
                      iconRight={card.button.iconRight}
                      iconLeft={card.button.iconLeft}
                    >
                      {card.button.title}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout366Defaults: Layout366Props = {
  tagline: "Learn from the Experts",
  description: "Gain insights and strategies from top traders to improve your trading journey with DayTrading Lodge.",
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
    },
  ],
  cardsBig: [
    {
      tagline: "Our Expertise",
      image: {
        src: "./logo.png",
        alt: "DayTrading Lodge",
      },
      heading: "Master Trading with Our Courses",
      description:
        "Join DayTrading Lodge and gain access to premium trading courses designed by industry experts Milan Jaiswal and Piyush Sharma. Whether you're a beginner or an experienced trader, our courses offer valuable insights and practical strategies.",
      buttons: [
        { title: "Explore Courses", variant: "secondary" },
      ],
    },
  ],
};

Layout366.displayName = "Layout366";
