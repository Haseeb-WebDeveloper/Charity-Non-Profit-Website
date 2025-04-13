'use client'

import { ContactForm } from "@/components/layout/contact-form";
import { Hero } from "@/components/layout/hero";
import { HowItWorks } from "@/components/layout/how-it-works";
import { Testmonial } from "@/components/layout/testmonial";
import { useEffect } from "react";

export default function Home() {
  // smooth scroll while click on any nav menu link with id (#)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && (target as HTMLAnchorElement).hash) {
        e.preventDefault();
        const element = document.querySelector((target as HTMLAnchorElement).hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <Testmonial />
      <ContactForm />
    </>
  );
}
