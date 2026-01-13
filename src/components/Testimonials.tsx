"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

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
  const [startIndex, setStartIndex] = useState(0);

  // Auto-rotate testimonials - slower (6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Get 3 testimonials starting from current index (with wrap-around)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
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

      {/* Testimonial Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${startIndex}-${index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream p-6 sm:p-8"
              >
                {/* Header with type and stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-forest-deep">
                    {testimonial.type} | {testimonial.role} | {testimonial.location}
                  </span>
                </div>

                {/* Star Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-forest-deep text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === startIndex
                  ? "bg-gold w-6"
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
