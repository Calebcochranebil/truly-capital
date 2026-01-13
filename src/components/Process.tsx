"use client";

import { motion } from "framer-motion";
import { FileEdit, CheckCircle, Banknote } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Complete our simple application in minutes. No extensive documentation needed upfront.",
    icon: FileEdit,
  },
  {
    number: "02",
    title: "Get Pre-Approved",
    description:
      "Receive a pre-approval decision within 24 hours to move fast on opportunities.",
    icon: CheckCircle,
  },
  {
    number: "03",
    title: "Close & Fund",
    description:
      "Our streamlined process means closing in as few as 20 days.",
    icon: Banknote,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 bg-cream-warm">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 md:mb-20"
      >
        <span className="section-tag">How It Works</span>
        <h2 className="section-title">Simple Process, Fast Results</h2>
        <p className="section-subtitle">
          A streamlined lending process designed for faster funding.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto">
        <div className="relative flex flex-col md:flex-row justify-between">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold via-forest to-gold" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex-1 text-center px-4 sm:px-8 mb-8 md:mb-0"
            >
              {/* Icon Circle */}
              <div className="relative z-10 mx-auto mb-4 sm:mb-6 md:mb-8 group">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] bg-white border-[3px] border-gold rounded-full flex items-center justify-center mx-auto shadow-lg transition-all duration-300 group-hover:bg-gold group-hover:scale-110 group-hover:shadow-[0_10px_40px_rgba(201,169,98,0.4)]">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gold transition-colors duration-300 group-hover:text-white" />
                </div>
                {/* Step number badge */}
                <span className="absolute -top-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 bg-forest-deep text-white text-xs sm:text-sm font-bold rounded-full flex items-center justify-center shadow-md">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-forest-deep mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed text-balance max-w-[250px] mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
