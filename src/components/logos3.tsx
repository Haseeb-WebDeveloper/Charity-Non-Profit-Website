"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "400+ Local Businesses Trust Us",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "/clients/1.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "/clients/2.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "/clients/3.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "/clients/4.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "/clients/5.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "/clients/6.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "/clients/7.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "/clients/8.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-9",
      description: "Logo 9",
      image: "/clients/9.jpg",
      className: "h-12 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
     <>
       <div className=" mx-auto  md:px-0 flex flex-col items-center text-center">
        <h1 className="mb-4 text-pretty text-sm md:text-xl">
          {heading}
        </h1>
      </div>
      <div className="pt-5">
        <div className="relative mx-auto flex items-center justify-center">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="md:mx-10 mx-2 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 md:w-[20%] w-[10%] bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 md:w-[20%] w-[10%] bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
     </>
  );
};

export { Logos3 };
