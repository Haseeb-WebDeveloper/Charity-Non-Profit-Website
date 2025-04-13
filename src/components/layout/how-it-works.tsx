"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePopup } from "@/context/popup-context";

const steps = [
  {
    number: "01",
    title: "Sign Up & Set Your Daily Amount",
    description: "From ₹1 to any amount you choose. Change anytime.",
    image: "/steps/signup-step-1.jpg",
    buttonText: "Start Now",
    buttonLink: "#contact"
  },
  {
    number: "02", 
    title: "Securely Connect Your Payment",
    description: "Bank account, Jazz Cash EasyPaisa, Fully encrypted.",
    image: "/steps/payment-step-2.jpg",
    buttonText: "Start Now",
    buttonLink: "#contact"
  },
  {
    number: "03",
    title: "Automatic Daily Impact",
    description: "Every morning at Fajr, your donation is sent to vetted Islamic charities.",
    image: "/steps/impact-step-3.jpg",
    buttonText: "Start Now",
    buttonLink: "#contact"
  }
];

export function HowItWorks() {
  const { openContactForm } = usePopup();
  return (
    <section id="how-it-works" className="py-24 relative  bg-foreground/5">

      <div className="max-w-[1050px] mx-auto px-4 md:px-0 ">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Four simple steps to boost your online presence
          </motion.p>
        </div>

        {/* Steps Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={step.number}>
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center">
                    {/* Left Column - Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      <div className="space-y-6">
                        <span className="text-5xl font-bold text-secondary">
                          {step.number}
                        </span>
                        <h3 className="text-3xl font-semibold">{step.title}</h3>
                        <p className="text-lg text-muted-foreground">
                          {step.description}
                        </p>
                      </div>

                        <Button size="lg" className="group cursor-pointer" onClick={openContactForm}>
                          {step.buttonText}
                          <ArrowRight className="ml-2 h-4 w-4 cursor-pointer transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="relative flex items-center justify-center h-full"
                    >
                      <div className="relative h-full w-full rounded-2xl overflow-hidden max-h-[400px] border-4 border-foreground/10">
                        <Image
                          src={step.image}
                          alt={`Step ${index + 1} - ${step.title}`}
                          width={400}
                          height={400}
                          className="rounded-xl object-contain shadow-2xl h-full w-full bg-[#EEE8F1]"
                        />
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex size-10 bg-background/50 backdrop-blur border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex size-10 bg-background/50 backdrop-blur border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />

            {/* Progress dots for mobile */}
            <div className="flex md:hidden justify-center gap-2 mt-8">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="size-2 rounded-full bg-primary/20"
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
} 
