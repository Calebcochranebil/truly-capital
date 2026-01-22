"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, FileText } from "lucide-react";
import { Navbar, InnerFooter } from "@/components";

// Program overview data
const programOverview = [
  { label: "Loan Type", value: "Business Purpose RTL (Non-Owner Occupied)" },
  { label: "Eligible Collateral", value: "1-4 Units, SFR/PUD, Condo, NW Condo, Townhome, 5-8 Units, Raw/Entitled Land (exceptions: > 2 acres; Mixed-use; Modular)" },
  { label: "Lien Position", value: "1st position lien secured by a mortgage, deed of trust, or other security instrument" },
  { label: "Loan Term", value: "12 months" },
  { label: "Loan Purpose", value: "Acquisition & Entitlement, Recap & Stabilization Loan, Purchase, Delayed Purchase, Rate/Term Refinance, Cash-Out Refinance" },
  { label: "Ineligible States", value: "NV, ND, SD, VT (AK & HI considered on an exception basis)" },
  { label: "Interest Charged", value: "Fixed rate, Interest Only" },
  { label: "Reserve Requirement", value: "6 months of interest only payments (cash out may be used for reserves)" },
  { label: "Liquidity Requirement", value: "Cash to close (equity + closing costs)" },
  { label: "Cost Basis", value: "Seasoned Refinance: As-Is Appraised Value | Unseasoned Refinance: Lesser of (Purchase Price or As-Is Value)" },
  { label: "Prepayment Penalty", value: "Not Applicable" },
];

// Property type comparison data
const propertyComparison = [
  {
    label: "Minimum Loan Amount",
    smallUnit: "$100K",
    largeUnit: "$500K"
  },
  {
    label: "Maximum Loan Amount",
    smallUnit: "$5M",
    largeUnit: "$2M (Tier 3 & 4 Ineligible)"
  },
  {
    label: "Appraisal Requirement",
    smallUnit: "Full Appraisal (URAR, 1025, 1073) CDA may be required",
    largeUnit: "Commercial Narrative CDA may be required"
  },
];

const highlights = [
  "12-month terms",
  "No prepayment penalty",
  "Up To 80% LTV",
  "Quick closing",
  "620 Min. Score To Qualify",
  "Cash out for reserves",
];

export default function BridgePage() {
  return (
    <>
      <Navbar currentPage="/products/bridge" />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative bg-forest-deep pt-40 pb-20 overflow-hidden">
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
                  Short-Term Financing
                </span>

                <h1 className="font-display text-5xl md:text-6xl text-white mb-6">
                  Bridge <span className="text-gold">Loans</span>
                </h1>

                <p className="text-white/80 text-xl leading-relaxed mb-8">
                  Truly's Bridge Loan program is designed to provide business-purpose lending to professional and
                  emerging real estate investors for acquiring or refinancing properties intended for rent, resale, or stabilization.
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
                  <a href="/bridge-loan-matrix.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    View Matrix
                  </a>
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
                    <span className="text-white font-semibold">$100K - $5M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Loan Term</span>
                    <span className="text-white font-semibold">12 Months</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Interest Type</span>
                    <span className="text-white font-semibold">Fixed, Interest Only</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white/70">Property Types</span>
                    <span className="text-white font-semibold">SFR, Condo, Townhomes, 2-4, 5-9</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="section-tag">Program Details</span>
              <h2 className="section-title">Bridge Loan Overview</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Strategic short-term financing for acquisition, stabilization, and refinancing needs.
              </p>
            </motion.div>

            {/* Main Program Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-cream-warm overflow-hidden mb-12"
            >
              <div className="bg-forest-deep px-8 py-5">
                <h3 className="font-display text-2xl text-white">Loan Terms & Requirements</h3>
              </div>
              <div className="p-8">
                <div className="grid gap-4">
                  {programOverview.map((detail) => (
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

            {/* Property Type Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-cream-warm overflow-hidden"
            >
              <div className="bg-forest-deep px-8 py-5">
                <h3 className="font-display text-2xl text-white">Property Type Requirements</h3>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-forest-deep">
                        <th className="text-left py-4 px-4 font-semibold text-forest-deep"></th>
                        <th className="text-center py-4 px-4 font-semibold text-forest-deep bg-cream/50">
                          1-4 Unit Properties
                        </th>
                        <th className="text-center py-4 px-4 font-semibold text-forest-deep bg-gold/10">
                          5-8 Unit Properties
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {propertyComparison.map((row, index) => (
                        <tr key={row.label} className={index < propertyComparison.length - 1 ? "border-b border-cream-warm" : ""}>
                          <td className="py-4 px-4 font-semibold text-forest-deep">{row.label}</td>
                          <td className="py-4 px-4 text-center text-slate bg-cream/30">{row.smallUnit}</td>
                          <td className="py-4 px-4 text-center text-slate bg-gold/5">{row.largeUnit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
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
                Connect with one of our bridge loan specialists today for short-term financing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8662192294" className="btn-primary">
                  Call 866-219-2294
                </a>
                <a href="/bridge-loan-matrix.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  View Matrix
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
