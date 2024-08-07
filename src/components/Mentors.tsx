import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { Layout366Defaults } from "../constants/MentorsDefault";
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
  taglineColor: string; // Add this property
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  cardsSmall: CardsSmallProps[];
};

export type Layout366Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout366 = (props: Layout366Props) => {
  const { tagline, description, cardsSmall } = {
    ...Layout366Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16  md:py-24 md:mt-20 mt-20 lg:py-28 bg-gradient-to-tr from-blue-100 via-white to-blue-300">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-14">
          <p className="mb-3 font-semibold text-blue-600">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-gray-900">
            <span className="text-[#2866C4]">Elevate</span> Your{" "}
            <span className="text-[#ca1c2b]">Trading Journey</span> with Our
            Expert Mentors
          </h2>
          <p className="md:text-md text-gray-700">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cardsSmall.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-stretch border-2  rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:shadow-2xl hover:scale-105  hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-400"
            >
              <div className="flex w-full items-center justify-center cursor-pointer ">
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  className="w-full md:h-[45vh] h-[30vh] object-cover transition-transform duration-300"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-6">
                <div>
                  <p className={`mb-2 font-semibold  ${card.taglineColor}`}>
                    {card.tagline}
                  </p>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {card.heading}
                  </h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
                <div className="mt-5 flex items-center gap-4">
                  <Button
                    variant={card.button.variant}
                    size={card.button.size}
                    iconRight={card.button.iconRight}
                    iconLeft={card.button.iconLeft}
                    className="hover:underline hover:text-blue-800 transition duration-300"
                  >
                    {card.button.title}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Layout366.displayName = "Layout366";
