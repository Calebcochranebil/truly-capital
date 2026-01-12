"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Calculator() {
  const [propertyValue, setPropertyValue] = useState(500000);
  const [ltv, setLtv] = useState(75);
  const [rate, setRate] = useState(8);
  const [loanAmount, setLoanAmount] = useState(0);

  useEffect(() => {
    setLoanAmount(Math.round(propertyValue * (ltv / 100)));
  }, [propertyValue, ltv]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handlePropertyValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPropertyValue(Number(value) || 0);
  };

  return (
    <section id="calculator" className="py-32 px-8 md:px-16 bg-forest-deep relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-24 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gold/20 text-gold px-6 py-2 text-xs tracking-[0.2em] uppercase mb-6">
            Quick Estimate
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white leading-tight mb-4">
            See Potential Loan Amounts
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Get an instant estimate on potential loan amounts and monthly
            payments. Our team is ready to help secure the right financing.
          </p>
        </motion.div>

        {/* Calculator Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative border */}
          <div className="absolute -top-5 -left-5 right-5 bottom-5 border-2 border-gold -z-10" />

          <div className="bg-white p-10">
            {/* Property Value */}
            <div className="mb-8">
              <label className="block text-xs font-semibold tracking-widest uppercase text-forest mb-3">
                Property Value
              </label>
              <input
                type="text"
                value={formatCurrency(propertyValue)}
                onChange={handlePropertyValueChange}
                className="w-full px-6 py-4 border-2 border-black/10 bg-cream font-sans text-lg transition-all duration-300 focus:outline-none focus:border-gold focus:bg-white"
              />
            </div>

            {/* LTV Slider */}
            <div className="mb-8">
              <label className="block text-xs font-semibold tracking-widest uppercase text-forest mb-3">
                Loan-to-Value Ratio
              </label>
              <input
                type="range"
                min="50"
                max="80"
                value={ltv}
                onChange={(e) => setLtv(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-sm text-slate">
                <span>50%</span>
                <span className="font-semibold text-forest">{ltv}%</span>
                <span>80%</span>
              </div>
            </div>

            {/* Rate Slider */}
            <div className="mb-8">
              <label className="block text-xs font-semibold tracking-widest uppercase text-forest mb-3">
                Interest Rate
              </label>
              <input
                type="range"
                min="6"
                max="12"
                step="0.25"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-sm text-slate">
                <span>6%</span>
                <span className="font-semibold text-forest">{rate}%</span>
                <span>12%</span>
              </div>
            </div>

            {/* Result */}
            <div className="bg-forest text-white p-8 text-center mt-4">
              <div className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                Estimated Loan Amount
              </div>
              <div className="font-display text-5xl font-semibold">
                {formatCurrency(loanAmount)}
              </div>
            </div>

            <button className="btn-primary w-full mt-6">
              Get a Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
