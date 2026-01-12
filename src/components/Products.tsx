"use client";

import { motion } from "framer-motion";
import { Building2, Wrench, HardHat, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: Wrench,
    title: "Rehab Loans",
    description:
      "Finance fix and flip projects with flexible terms and fast funding to maximize renovation returns.",
    features: [
      "Fix & flip financing",
      "Up to 90% of purchase price",
      "100% of rehab costs",
      "Interest-only payments",
    ],
    href: "/products/rehab",
  },
  {
    icon: HardHat,
    title: "Construction Loans",
    description:
      "Ground-up construction financing with flexible draw schedules to bring development visions to life.",
    features: [
      "Ground-up construction",
      "Spec & custom builds",
      "Flexible draw schedules",
      "12-24 month terms",
    ],
    href: "/products/construction",
  },
  {
    icon: Building2,
    title: "DSCR Loans",
    description:
      "Finance single properties or entire portfolios based on rental income rather than personal income verification.",
    features: [
      "No personal income verification",
      "Purchase, refinance, or cash-out",
      "Up to 80% LTV",
      "30-year fixed options",
    ],
    href: "/products/dscr",
  },
  {
    icon: Layers,
    title: "Bridge Loans",
    description:
      "Strategic flexibility with short-term financing to execute an exit strategy or transition to permanent financing.",
    features: [
      "12 month terms",
      "No prepayment penalties",
      "Interest-only payments",
      "Quick closing",
    ],
    href: "/products/bridge",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 bg-cream">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 md:mb-20"
      >
        <span className="section-tag">Our Products</span>
        <h2 className="section-title">
          Financing Solutions for Every Investment Strategy
        </h2>
        <p className="section-subtitle">
          For purchasing, refinancing, or building from the ground up, we have
          the perfect loan product for every scenario.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white border border-cream-warm p-5 sm:p-6 md:p-8 relative overflow-hidden hover:shadow-xl transition-all duration-500"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 h-1 bg-gold w-0 group-hover:w-full transition-all duration-500" />

            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-forest-deep flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold transition-colors duration-500">
              <product.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gold group-hover:text-forest-deep transition-colors duration-500" />
            </div>

            {/* Content */}
            <h3 className="font-display text-xl sm:text-2xl text-forest-deep mb-2 sm:mb-3">
              {product.title}
            </h3>
            <p className="text-slate mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Link */}
            <Link
              href={product.href}
              className="inline-flex items-center gap-2 text-forest-deep font-semibold text-sm tracking-wide group/link hover:text-gold transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}