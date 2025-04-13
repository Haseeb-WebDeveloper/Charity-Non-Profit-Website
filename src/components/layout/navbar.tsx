"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePopup } from "@/context/popup-context";

export function Navbar() {
  const { openContactForm } = usePopup();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  
  useEffect(() => {
    // Set initial scroll position
    setPrevScrollPos(window.scrollY);
    setIsAtTop(window.scrollY < 10);
    
    const handleScroll = () => {
      // Get current scroll position
      const currentScrollPos = window.scrollY;
      
      // Update isAtTop state
      setIsAtTop(currentScrollPos < 10);
      
      // Calculate the scroll direction and distance
      const scrollingUp = prevScrollPos > currentScrollPos;
      const scrollDistance = Math.abs(currentScrollPos - prevScrollPos);
      
      // Only trigger hide/show for significant scroll amounts (> 5px)
      if (scrollDistance > 5) {
        // Always show navbar at the top of the page
        if (currentScrollPos < 10) {
          setVisible(true);
        } 
        // Show when scrolling up, hide when scrolling down
        else {
          setVisible(scrollingUp);
        }
        
        // Update the previous scroll position
        setPrevScrollPos(currentScrollPos);
      }
    };

    // Add scroll event listener with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [prevScrollPos, mobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Always show navbar when mobile menu is open
    if (!mobileMenuOpen) {
      setVisible(true);
    }
  };

  // Navbar container styles with transition
  const navbarContainerStyles = `fixed ${
    isAtTop ? 'md:top-0' : '-top-2'
  } left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
    visible ? 'translate-y-0' : '-translate-y-full'
  }`;

  return (
    <header className={navbarContainerStyles}>
      <div className="max-w-[1050px] mx-auto px-4 md:px-0 w-full py-4">
        <div className="flex items-center justify-between px-3 py-2.5 gap-6 rounded-full border border-border bg-white relative shadow-sm">
          {/* Logo - Left */}
          <div className="flex items-center justify-start pl-1 md:pl-3">
            <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.webp" alt="Rateourjob" width={100} height={100} className="w-10 h-10" />
              <span className="flex items-center gap-2">
                <span className="text-lg md:text-xl font-bold">RateOurJob</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>

          {/* Navigation Items - Center (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-center w-full">
            <div className="flex items-center gap-2">
              <Link href="#how-it-works" className="text-sm py-2 px-4 text-nowrap bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-full">
                How it works
              </Link>

              <Link href="#testimonials" className="text-sm py-2 px-4 text-nowrap bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-full">
                Testimonials
              </Link>

            </div>
          </div>

          {/* Buttons - Right (Desktop) */}
          <div className="hidden md:flex items-center justify-end gap-4 ">
            <Button className="text-white rounded-full px-5 text-sm cursor-pointer" onClick={openContactForm}>
              Start Giving Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed top-full bg-white z-50 w-full left-0 right-0 p-4">
              <div className="flex flex-col space-y-2 w-full h-full ">
                <Link href="#how-it-works" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 text-lg font-medium text-center hover:bg-foreground/5 rounded-lg">
                  How it works
                </Link>
                <Link href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)} 
                  className="p-3 text-lg font-medium text-center hover:bg-foreground/5 rounded-lg">
                  Testimonials
                </Link>
                <div className="mt-4 pt-6 border-t">
                  <Button className="w-full text-white rounded-full px-5 py-6 text-base cursor-pointer" onClick={openContactForm}>
                    Start Giving Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}