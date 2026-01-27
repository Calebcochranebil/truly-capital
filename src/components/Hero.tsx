"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3500, label: "Loans Funded", suffix: "+" },
  { value: 2, label: "Billion Funded", suffix: "B+", isDecimal: false },
  { value: 46, label: "States Served", suffix: "+" },
  { value: 20, label: "Day Avg Close", suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix,
  isDecimal = false,
}: {
  value: number;
  suffix: string;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gold leading-none">
      {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-forest-deep via-forest to-[#2d5a4a] relative flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(201, 169, 98, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201, 169, 98, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 30%)
          `,
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201, 169, 98, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 169, 98, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Shapes - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] right-[10%] w-[300px] h-[300px] border border-gold/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-float-slow will-change-transform"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] border border-gold/20 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-float-medium will-change-transform"
          style={{ animationDelay: '-5s' }}
        />
        <div
          className="absolute top-[40%] right-[25%] w-[150px] h-[150px] border border-gold/20 rounded-[40%_60%_65%_35%_/_40%_45%_55%_60%] animate-float-fast will-change-transform"
          style={{ animationDelay: '-10s' }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pt-32 sm:pt-40 pb-16 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-4 sm:mb-6">
            <span className="block">Investor Lending</span>
            <span className="text-gold relative inline-block">
              Made Simple
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-1 left-0 w-full h-[3px] bg-gold origin-left"
              />
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 sm:mb-10 max-w-lg mx-auto lg:mx-0 text-balance">
            We provide fast, streamlined real estate lending solutions for direct borrowers and broker partners, built to support investor success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="https://applications.trulyinvestorcapital.com/form-6571272/?N8yvhYgdEG4zFKZ5cu5pWA1Z" target="_blank" rel="noopener noreferrer" className="btn-primary">Apply Now</a>
            <a href="/#products" className="btn-secondary">Explore Products</a>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 md:p-10 relative"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold to-gold-light" />

          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-3 sm:p-4 md:p-6 border border-white/5 bg-white/[0.02] transition-all duration-300 hover:bg-gold/10 hover:border-gold/30 hover:-translate-y-1"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
                <span className="block text-white/70 text-xs sm:text-sm mt-1 sm:mt-2 tracking-wider sm:tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex-col items-center">
        <motion.div
          className="relative"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="24"
            height="60"
            viewBox="0 0 24 60"
            fill="none"
            className="overflow-visible"
          >
            {/* Main vertical line */}
            <motion.line
              x1="12"
              y1="0"
              x2="12"
              y2="45"
              stroke="url(#scrollGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
              }}
            />
            {/* Left arrow leg */}
            <motion.line
              x1="12"
              y1="45"
              x2="4"
              y2="35"
              stroke="#C9A962"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 0, 1, 1, 0],
                opacity: [0, 0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.4, 0.7, 0.85],
              }}
            />
            {/* Right arrow leg */}
            <motion.line
              x1="12"
              y1="45"
              x2="20"
              y2="35"
              stroke="#C9A962"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 0, 1, 1, 0],
                opacity: [0, 0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.4, 0.7, 0.85],
              }}
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="scrollGradient" x1="12" y1="0" x2="12" y2="45" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C9A962" />
                <stop offset="1" stopColor="#C9A962" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}