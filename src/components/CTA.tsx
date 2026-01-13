"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-40 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-forest to-forest-deep text-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[radial-gradient(circle,rgba(201,169,98,0.1)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <span className="inline-block bg-gold/20 text-gold px-4 sm:px-6 py-2 text-xs tracking-[0.2em] uppercase mb-4 sm:mb-6">
          Ready to Get Started?
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight mb-4 sm:mb-6 text-balance">
          Let's Fund the Next Deal
        </h2>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 text-balance max-w-2xl mx-auto">
          Speak with one of our lending experts today and discover how Truly Investor Capital can help achieve real estate investment goals.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <a href="https://applications.trulyinvestorcapital.com/form-6571272/?N8yvhYgdEG4zFKZ5cu5pWA1Z" target="_blank" rel="noopener noreferrer" className="btn-primary">Apply Now</a>
          <a href="tel:8662192294" className="btn-secondary">Call 866-219-2294</a>
        </div>
      </motion.div>
    </section>
  );
}
