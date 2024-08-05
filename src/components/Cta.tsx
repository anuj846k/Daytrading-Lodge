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
    const { heading, description, buttons, } = {
      ...Header19Defaults,
      ...props,
    } as Props;
    return (
      <header className="px-[5%] py-20 md:py-24 font-switzer">
        <div className="container mx-auto">
          <div className="grid grid-cols-1  gap-x-48 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <Trading />
            </div>
            <div className="order-1 lg:order-2 p-4 lg:p-6 w-full lg:w-[80%] md:ml-48  rounded-3xl shadow-lg bg-yellow-50 ">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold md:mb-6 text-[#ca1c2b]">
                {heading} <span className="text-[#2866C4]">Daytrading Lodge</span>
              </h1>
              <img src="./Trading.gif" alt="" className="md:hidden block h-40 w-40" />
              <p className="md:text-lg text-base mb-4">{description}</p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    {...button}
                    className="bg-[#ca1c2b] rounded-full border-none px-4 py-2 text-white"
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
    heading: "Introducing",
    description: `Daytrading Lodge has been a trusted platform for people who are
    new in the financial market, who have no idea how to start or where to start. At this community, we take care of building a strong
    foundation for your trading journey with interactive live sessions and
    no recordings. Everything here is real, raw, and transparent.`,
    buttons: [{ title: "Read more" }],
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image",
    },
  };

  Header19.displayName = "Header19";
