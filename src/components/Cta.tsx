import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Trading from "../partials/Trading";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header19Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header19 = (props: Header19Props) => {
  const { heading, description, buttons, image } = {
    ...Header19Defaults,
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28 font-switzer">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-40 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 ">
            <Trading />
          </div>
          <div className="order-1 lg:order-2  p-10 w-full bg-gradient-to-br from-[#2866C4] text-black rounded-3xl">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="md:text-md text-xs">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  className="bg-[#ca1c2b] rounded-full border-none "
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Header19Defaults: Header19Props = {
  heading: "Introducing Daytrading lodge",
  description: `Daytrading Lodge has been trusted platform for people who are
  newbies in the financial market, who have no idea how to start into it
  or where to start. At this community, we take care of building a strong
  foundation for your trading journey with interactive live sessions and
  no recording. Everything here is real, raw and transparent.`,
  buttons: [{ title: "Read more" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};

Header19.displayName = "Header19";
