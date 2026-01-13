"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Truly made the entire process seamless. From application to closing, they were responsive and professional. Closed on my rental property in just 12 days.",
    name: "Michael Rodriguez",
    role: "Real Estate Investor, TX",
    initials: "MR",
  },
  {
    quote:
      "The DSCR loan product was exactly what I needed to scale my portfolio. No income verification meant a much faster approval process.",
    name: "Sarah Kim",
    role: "Portfolio Investor, CA",
    initials: "SK",
  },
  {
    quote:
      "Outstanding communication throughout my fix & flip project. The draw process was quick and the team truly understands investor needs.",
    name: "James Thompson",
    role: "Fix & Flip Investor, FL",
    initials: "JT",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 md:mb-20"
      >
        <span className="section-tag">Testimonials</span>
        <h2 className="section-title">Trusted by Investors Nationwide</h2>
        <p className="section-subtitle">
          See what our clients have to say about working with Truly Investor
          Capital.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group p-5 sm:p-8 md:p-10 bg-cream shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-forest"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-base sm:text-lg leading-relaxed text-forest-deep mb-5 sm:mb-8 italic transition-colors duration-300 group-hover:text-white text-balance">
              {testimonial.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-display text-xl font-semibold text-forest-deep">
                {testimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-forest-deep transition-colors duration-300 group-hover:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-slate transition-colors duration-300 group-hover:text-white/70">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
