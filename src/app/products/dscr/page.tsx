"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, FileText, ChevronDown } from "lucide-react";
import { Navbar, InnerFooter } from "@/components";

const matrixOptions = [
  { label: "Investor Advantage", href: "/dscr-investor-advantage.pdf" },
  { label: "Cash Flow Advantage", href: "/dscr-cash-flow-advantage.pdf" },
  { label: "Professional Investor", href: "/dscr-professional-investor.pdf" },
];

function MatrixDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary flex items-center gap-2"
      >
        <FileText className="w-4 h-4" />
        View Matrix
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 bg-white border border-cream-warm rounded-lg shadow-xl overflow-hidden z-[100] min-w-[200px]"
          >
            {matrixOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-forest-deep hover:bg-cream transition-colors text-sm font-medium"
              >
                <FileText className="w-4 h-4 text-gold" />
                {option.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Program data
const programs = [
  {
    name: "Professional Investor - Multifamily / Mixed-Use Program",
    details: [
      { label: "Loan Type", value: "Business Purpose DSCR (Non-Owner Occupied)" },
      { label: "Eligible Collateral", value: "5-10 Units; 2-8 Units Mixed-Use (exceptions: > 2 acres; rural)" },
      { label: "Loan Amount", value: "$400k - $3M" },
      { label: "Loan Term", value: "15, 30-Yr Fixed; 30-Yr IO; 5, 7, 10-Yr ARM; 5, 7, 10-Yr ARM IO (30-Yr)" },
      { label: "Loan Purpose", value: "Purchase, Rate/Term Refinance, Cash-Out Refinance" },
      { label: "Ineligible States", value: "IL, NY, NV, ND, SD, VT (AK & HI considered on an exception basis)" },
      { label: "Minimum DSCR", value: "1.10" },
      { label: "Reserve Requirement", value: "6 - 12 months, see matrix for details (cash out may NOT be used for reserves)" },
      { label: "Housing History", value: "0x30x24" },
      { label: "Short-Term Rental", value: "Not Permitted" },
    ],
  },
  {
    name: "Professional Investor - Blanket Loan Program",
    details: [
      { label: "Loan Type", value: "Business Purpose DSCR (Non-Owner Occupied)" },
      { label: "Eligible Collateral", value: "1-4 Unit, Condo, Condotel (exceptions: > 2 acres; rural)" },
      { label: "Loan Amount", value: "$400k - $3M" },
      { label: "Loan Term", value: "Fixed: 15, 30 yrs; ARM: 5/6, 7/6, 10/6" },
      { label: "Loan Purpose", value: "Purchase, Rate/Term Refinance, Cash-Out Refinance" },
      { label: "Ineligible States", value: "NV, ND, SD, VT (AK & HI considered on an exception basis); IL, NY: 2-4 Units Ineligible" },
      { label: "Minimum DSCR", value: "Min. Property DSCR: ≥ 1.0 full AM or ≥ 1.2 I/O" },
      { label: "Reserve Requirement", value: "2 - 12 months, see matrix for details (cash out may be used for reserves)" },
      { label: "Housing History", value: "0x60x12" },
      { label: "Short-Term Rental", value: "Not Permitted" },
    ],
  },
  {
    name: "Cash Flow Advantage Program",
    details: [
      { label: "Loan Type", value: "Business Purpose DSCR (Non-Owner Occupied)" },
      { label: "Eligible Collateral", value: "SFR, 1-4 Units, PUD, Condo, Non-Warrantable Condo, Rural (Inquire about eligibility for DSCR up to 10 acres)" },
      { label: "Loan Amount", value: "$500k - $2M" },
      { label: "Loan Term", value: "30-Yr Fixed; IO (10-Yr IO, 20-Yr full AM); 40-Yr Fixed IO (10-Yr IO, 30-Yr full AM)" },
      { label: "Loan Purpose", value: "Purchase, Rate/Term Refinance, Cash-Out Refinance" },
      { label: "Ineligible States", value: "NV, ND, SD, VT (AK & HI considered on an exception basis)" },
      { label: "Minimum DSCR", value: "1.00 Purchase, R/T; 1.10 Cash Out" },
      { label: "Reserve Requirement", value: "3 - 12 months, see matrix for details (cash out may be used for reserves)" },
      { label: "Housing History", value: "0x30x12" },
    ],
  },
  {
    name: "Investor Advantage Program",
    details: [
      { label: "Loan Type", value: "Business Purpose DSCR (Non-Owner Occupied)" },
      { label: "Eligible Collateral", value: "SFR, 1-4 Units, PUD, Condo, Non-Warrantable Condo, Condotel, Rural (Inquire about eligibility for DSCR up to 20 acres)" },
      { label: "Loan Amount", value: "$150k - $3.5M" },
      { label: "Loan Term", value: "Fixed Rate: 30, 40-Yr (IO Only); ARM: 5/6, 7/6" },
      { label: "Loan Purpose", value: "Purchase, Rate/Term Refinance, Cash-Out Refinance" },
      { label: "Ineligible States", value: "NV, ND, SD, VT (AK & HI considered on an exception basis)" },
      { label: "Minimum DSCR", value: "0.50 (see guidelines for details)" },
      { label: "Reserve Requirement", value: "3 - 12 months, see matrix for details (cash out may be used for reserves)" },
      { label: "Eligible Borrowers/Guarantors", value: "US Citizen, Permanent Resident, Non-Permanent Resident (75/70: PRT/CO), Foreign National" },
    ],
  },
];

const highlights = [
  "No personal income verification",
  "Purchase, refinance, or cash-out",
  "Up to 80% LTV",
  "30-year fixed options",
  "Interest-only available",
  "Foreign nationals eligible",
];

export default function DSCRPage() {
  return (
    <>
      <Navbar currentPage="/products/dscr" />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative bg-forest-deep pt-40 pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/dscr-hero.jpg"
            alt="DSCR Rental Loans"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-deep/80" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back Link */}
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider uppercase">Back to Products</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-gold/10 text-gold px-6 py-2 text-xs tracking-[0.2em] uppercase mb-6 border border-gold/20">
                Long-Term Financing
              </span>

              <h1 className="font-display text-5xl md:text-6xl text-white mb-6">
                DSCR Rental <span className="text-gold">Loans</span>
              </h1>

              <p className="text-white/80 text-xl leading-relaxed mb-8">
                Long-term financing for rental property investors. Finance a Single Investment 
                Property or Portfolio for new Purchase, Refinance to stabilize terms or take cash-out.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:8662192294" className="btn-primary flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call 866-219-2294
                </a>
                <MatrixDropdown />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-lg"
            >
              <h3 className="text-gold font-display text-2xl mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Loan Amounts</span>
                  <span className="text-white font-semibold">$150K - $3.5M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Min. DSCR</span>
                  <span className="text-white font-semibold">As low as 0.50</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Loan Terms</span>
                  <span className="text-white font-semibold">15, 30, 40-Year</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Property Types</span>
                  <span className="text-white font-semibold">SFR, 1-10 Units</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white/70">Foreign Nationals</span>
                  <span className="text-gold font-semibold">Eligible ✓</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-tag">Program Details</span>
            <h2 className="section-title">Choose a Program</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We offer multiple DSCR programs to fit any investment strategy and property type.
            </p>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-cream-warm overflow-hidden"
              >
                <div className="bg-forest-deep px-8 py-5">
                  <h3 className="font-display text-2xl text-white">{program.name}</h3>
                </div>
                <div className="p-8">
                  <div className="grid gap-4">
                    {program.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="grid md:grid-cols-[250px_1fr] gap-2 py-3 border-b border-cream-warm last:border-0"
                      >
                        <span className="font-semibold text-forest-deep">{detail.label}</span>
                        <span className="text-slate">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-deep">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Connect with one of our DSCR specialists today and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8662192294" className="btn-primary">
                Call 866-219-2294
              </a>
              <MatrixDropdown />
            </div>
          </motion.div>
        </div>
      </section>
      </main>
      <InnerFooter />
    </>
  );
}
