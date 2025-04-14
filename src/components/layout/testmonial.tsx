'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        quote: "I used to feel guilty forgetting sadaqah on busy days. Now my thawab never stops!",
        author: "Faisalabad"
    },
    {
        quote: "My 8-year-old set his Rs. 5/day allowance to donate. When he saw the orphan's thank you video, he cried and doubled it.",
        author: "Yusuf & Zainab, Lahore"
    },
    {
        quote: "As a doctor working night shifts, I missed giving. Now my salary deducts Rs. 50 daily",
        author: "Dr. Hamza R., Karachi"
    },
    {
        quote: "Since automating my RS 30/day, my business increased unexpectedly. Allah keeps His promises!",
        author: "Fatima A., Sahiwal"
    },
    {
        quote: "When my father passed, we continued his Rs 100/day as sadaqah jariyah. Getting his monthly reward notifications comforts us.",
        author: "The Malik, Gilgit"
    },
    {
        quote: "My kids now compete to increase their daily amount! We turned Ramadan's spirit into a year-round habit.",
        author: "Hussain, Lahore"
    }
];

export function Testmonial() {
    return (
        <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Our Donors Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real stories from people making a difference through regular charitable giving
                    </p>
                </div>
                
                <div className="max-w-xl mx-auto">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="testimonial-swiper flex justify-between items-center"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="bg-white cursor-grab rounded-xl shadow-sm border border-foreground/20 p-8 md:p-10 mb-10 flex flex-col h-full">
                                    <div className="text-emerald-600 mb-6">
                                        <FaQuoteLeft size={36} />
                                    </div>
                                    <blockquote className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6 flex-grow">
                                        {testimonial.quote}
                                    </blockquote>
                                    <footer className="text-right mt-auto">
                                        <cite className="text-gray-600 font-medium not-italic">
                                            — {testimonial.author}
                                        </cite>
                                    </footer>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}