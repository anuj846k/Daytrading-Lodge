"use client";

import type { CarouselApi } from "@relume_io/relume-ui";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Testimonial23Defaults } from "../constants/TestimonialsDeafult";
import { MdStar, MdStarHalf } from "react-icons/md";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
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

export type Testimonial23Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial23 = (props: Testimonial23Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial23Defaults,
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 font-switzer">
      <div className="container">
        <div className="container  mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-[#ca1c2b]">
            {heading}
          </h1>
          <p className="md:text-lg">{description}</p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            duration: 20,
            align: "start",
          }}
          className="overflow-hidden bg-background-primary md:px-3.5"
        >
          <CarouselContent className="ml-0 md:flex-row">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="mr-4 basis-full pl-0 md:mr-0 md:basis-1/2 md:px-4 lg:basis-1/3"
              >
                <div className="flex bg-amber-50 h-[40vh] w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div>{renderStars(testimonial.numberOfStars)}</div>

                  <blockquote className="mb-5 md:mb-6 md:text-md">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                    <LazyLoadImage
                      
                      src={testimonial.avatar.src}
                      alt={testimonial.avatar.alt}
                      className="mb-4 mr-0 size-12 min-h-12 min-w-12
                      rounded-full object-cover md:mb-0 md:mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p>
                        {testimonial.position}, {testimonial.companyName}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-mt-2 hidden bg-white md:flex md:size-12 lg:size-14" />
          <CarouselNext className="-mt-2 hidden bg-white md:flex md:size-12 lg:size-14" />
        </Carousel>
        <div className="flex items-center justify-center pt-[30px] sm:pt-[30px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx(
                "relative mx-[3px] inline-block size-2 rounded-full",
                {
                  "bg-black": current === index + 1,
                  "bg-neutral-darker/40": current !== index + 1,
                }
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
