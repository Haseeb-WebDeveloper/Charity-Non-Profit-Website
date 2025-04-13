// src/components/layout/footer.tsx
"use client";

import { useEffect, useRef } from "react";
import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// Improved text splitter function with TypeScript typing
const splitText = (element: HTMLElement | null): HTMLSpanElement[] => {
  if (!element) return [];
  
  const text = element.textContent || '';
  const chars = text.split('');
  element.textContent = '';
  
  return chars.map(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char; // Preserve spaces
    span.style.display = 'inline-block';
    element.appendChild(span);
    return span;
  });
};
    
export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;

    if (!footer || !heading || !content) return;

    // Split the heading text into characters
    const chars = splitText(heading);

    // Create a timeline for the animations with better performance settings
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom-=100",
        toggleActions: "play none none none", // Only play once
        once: true // Trigger only once
      }
    });

    // Animate the heading characters with improved performance
    tl.from(chars, {
      opacity: 0,
      y: 50, // Reduced for subtlety
      stagger: 0.02,
      duration: 0.6,
      ease: "back.out(1.5)",
    });

    // Animate the content sections
    tl.from(content.children, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
    }, "-=0.3");

    // Cleanup function to prevent memory leaks
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="pt-12 md:pt-16 bg-foreground border-t border-background/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading with improved styling */}
        <h2 
          ref={headingRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12 text-primary"
        >
          Rateourjob
        </h2>

        {/* Content Container with better responsive layout */}
        <div 
          ref={contentRef}
          className="flex flex-col md:flex-row gap-12 items-center justify-between text-background"
        >
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <Link 
                href="mailto:info@rateourjob.com"
                className="flex items-center gap-2 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="size-4" />
                info@rateourjob.com
              </Link>
              <Link 
                href="https://wa.me/923144174625"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="size-4" />
                +923144174625
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                href="#how-it-works"
                className="block text-sm text-background/80 hover:text-primary transition-colors"
              >
                Who it works
              </Link>
              <Link 
                href="#pricing"
                className="block text-sm text-background/80 hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link 
                href="#testimonial"
                className="block text-sm text-background/80 hover:text-primary transition-colors"
              >
                Testimonial
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-3">
              <Link 
                href="https://www.instagram.com/rateourjob/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </Link>
              <Link 
                href="https://www.facebook.com/profile.php?id=61574592760873"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/rateourjob/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-12 pb-8 text-center text-sm text-background/70">
          &copy; {new Date().getFullYear()} Rateourjob. All rights reserved.
        </div>
      </div>

    </footer>
  );
}