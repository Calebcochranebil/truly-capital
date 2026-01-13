"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Keep up the great work! The service received, knowledge of the team members and professionalism is above and beyond. Not many lenders service the Hawaiian Islands with competence, Truly Investor Capital will have NO-ISSUES obtaining the majority of market share within the state. You are the #1 referral to all investors and new clients.",
    type: "SPR",
    role: "Investor",
    location: "HI",
  },
  {
    quote:
      "The Truly team is extremely professional, detail oriented, quick and pleasant to deal with. I highly recommend working with Truly Investor Capital!",
    type: "SPR",
    role: "Investor",
    location: "VA",
  },
  {
    quote:
      "Thank you so much for jumping on so quickly for us. You went above and beyond helping us set up our Servicing account for all these loans. So, appreciate and enjoy very much working with all of you.",
    type: "28-Pack",
    role: "Investor",
    location: "NY",
  },
  {
    quote:
      "Glad we are done and as always – Truly kicked butt. Truly had this approved in 13 days!",
    type: "Rehab",
    role: "Broker",
    location: "IL",
  },
  {
    quote:
      "Everything was so smooth and easy! The team made the entire process stress-free from start to finish, and we funded in just 10 days.",
    type: "SPR",
    role: "Investor",
    location: "NJ",
  },
  {
    quote:
      "The Truly team is the best – can't thank you enough for your patience and flexibility in getting this one completed. Can't wait for the next one either.",
    type: "Rehab",
    role: "Investor",
    location: "FL",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 bg-white overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
      >
        <span className="section-tag">Testimonials</span>
        <h2 className="section-title">Trusted by Investors Nationwide</h2>
        <p className="section-subtitle">
          Real feedback from real clients across the country.
        </p>
      </motion.div>

      {/* Testimonial Carousel */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Main testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-cream p-8 sm:p-12 md:p-16 text-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-forest-deep leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center justify-center gap-2 text-slate">
                <span className="font-semibold text-forest-deep">
                  {testimonials[current].type}
                </span>
                <span className="text-gold">|</span>
                <span>{testimonials[current].role}</span>
                <span className="text-gold">|</span>
                <span>{testimonials[current].location}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:translate-x-0 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg flex items-center justify-center text-forest-deep hover:bg-gold hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-0 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg flex items-center justify-center text-forest-deep hover:bg-gold hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-gold w-8"
                  : "bg-forest-deep/20 hover:bg-forest-deep/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
