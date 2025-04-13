"use client"

import { Play, XIcon } from "lucide-react";
import Iphone15Pro from "../magicui/iphone-15-pro";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const testimonials = [
    {
        title: "Tired of pricing?",
        thumbnailSrc: "thumbnails/1.png",
        videoSrc: "/testimonials/1.mp4",
        stats: {
            percentage: "+181%",
            timeframe: "127 → 357 Reviews in 4 Months"
        }
    },
    {
        title: "Get termendous response",
        thumbnailSrc: "/thumbnails/2.png",
        videoSrc: "/testimonials/2.mp4",
        stats: {
            percentage: "+997%",
            timeframe: "39 → 428 Reviews in 2 Month"
        }
    },
    {
        title: "Get new customers an autoplot",
        thumbnailSrc: "/thumbnails/3.png",
        videoSrc: "/testimonials/3.mp4",
        stats: {
            percentage: "+263%",
            timeframe: "40 → 145 Reviews in 4 months"
        }
    },
    {
        title: "Increase your reviews exponentially",
        thumbnailSrc: "/thumbnails/4.png",
        videoSrc: "/testimonials/4.mp4",
        stats: {
            percentage: "+2,878%",
            timeframe: "23 → 685 Reviews in 22 Months"
        }
    }
];

export function Testmonial() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const handleVideoClick = (videoSrc: string) => {
        setActiveVideo(videoSrc);
        setIsVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
        setActiveVideo(null);
    };

    return (
        <section id="testimonials" className="py-20 bg-foreground/5 overflow-hidden">
            <div className="max-w-[1050px] overflow-hidden mx-auto px-4 md:px-0 space-y-12">
                <div>
                    <h2 className="text-5xl w-full text-center sm:text-6xl lg:text-7xl font-bold tracking-tight">
                        Testimonials
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="space-y-2 relative group cursor-pointer"
                            onClick={() => handleVideoClick(testimonial.videoSrc)}
                        >
                            <Iphone15Pro
                                className="size-full max-h-[80vh] cursor-pointer"
                                src={testimonial.thumbnailSrc}
                            />
                            <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                                <div className={`relative flex size-16 scale-100 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-200 ease-out z-50`}>
                                    <Play
                                        className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out"
                                        style={{
                                            filter:
                                                "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="absolute top-0 lef-0 w-full h-full rounded-[2rem] bg-gradient-to-b from-transparent from-70% to-foreground"></div>
                            <div className="text-background absolute bottom-[0%] py-4 rounded-b-4xl left-1/2 -translate-x-1/2 bg-primary w-full mx-auto text-center px-4">
                                <p className="text-[2.5rem] font-semibold">{testimonial.stats.percentage}</p>
                                <p className="font-medium text-xs">{testimonial.stats.timeframe}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <AnimatePresence>
                    {isVideoOpen && activeVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseVideo}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                        >
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                                className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
                            >
                                <motion.button 
                                    onClick={handleCloseVideo}
                                    className="absolute -top-12 right-0 rounded-full bg-secondary p-2 text-xl text-background ring-1 backdrop-blur-md cursor-pointer"
                                >
                                    <XIcon className="size-5" />
                                </motion.button>
                                <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white">
                                    <video
                                        src={activeVideo}
                                        className="size-full rounded-2xl"
                                        controls
                                        autoPlay
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
