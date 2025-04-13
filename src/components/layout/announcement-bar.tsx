"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { usePopup } from "@/context/popup-context";

export function AnnouncementBar() {
  const { openContactForm } = usePopup();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Only show announcement bar when at the very top
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < 10);
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
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="fixed top-0 left-0 right-0 bg-secondary text-background z-50"
        >
          <div className="max-w-[1050px] mx-auto px-4 md:px-0">
            <div className="flex items-center justify-center py-2 text-sm md:text-base">
              <div
                className="flex items-center gap-x-2 group"
              >
                <span className="inline-block animate-pulse h-2.5 w-2.5 bg-background rounded-full"></span>
                <span className="text-xs md:text-sm">
                  Get Your First 10 Reviews <span className="hidden md:inline">Totally Free</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                >
                <Button onClick={openContactForm}
                  className="flex items-center justify-center rounded-full text-xs bg-secondary border border-background px-2.5 py-1 hover:px-3 transition-all duration-300 -z-0 cursor-pointer">
                  Start Now
                </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 