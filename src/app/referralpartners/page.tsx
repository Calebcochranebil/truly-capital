"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  DollarSign,
  RefreshCw,
  ChevronRight,
  Users,
  Briefcase,
  Home,
  Calculator,
  Phone,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, InnerFooter } from "@/components";

const steps = [
  {
    icon: Handshake,
    title: "Refer",
    description: "Send us investor borrowers looking for business purpose lending.",
    features: [
      "Register as a Referral Partner",
      "Refer real estate investors to Truly",
      "Warm handoff call with our sales team"
    ]
  },
  {
    icon: DollarSign,
    title: "Receive",
    description: "Get paid quickly once the loan funds. Simple as that.",
    features: [
      "Receive a check after loan funding",
      "Earn up to 1% of loan amount",
      "Payments delivered bi-weekly"
    ]
  },
  {
    icon: RefreshCw,
    title: "Repeat",
    description: "Keep referring, keep earning. No limits on earning potential.",
    features: [
      "Refer additional investors anytime",
      "Get paid after every funded loan",
      "See Referral Agreement for full details"
    ]
  }
];

const whoCanRefer = [
  { icon: Briefcase, label: "Lawyers" },
  { icon: Home, label: "Real Estate Agents" },
  { icon: Calculator, label: "Financial Planners" },
  { icon: Users, label: "General Contractors" },
  { icon: Handshake, label: "Originators & Brokers" },
  { icon: Sparkles, label: "Anyone!" }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function ReferralPartnersPage() {
  return (
    <>
      <Navbar currentPage="/referralpartners" />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/referral-hero.jpg"
            alt="Modern architecture"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-forest-deep/60" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        {/* Vertical accent */}
        <div className="absolute left-12 top-1/3 hidden lg:flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
            Partner Program
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-gold to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
                Referral Partners
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Investor Referrals
              <span className="block text-gold mt-2">Made Easy.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-white/90 font-display mb-6"
            >
              Refer. Receive. Repeat.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl"
            >
              Turn a network into income. Earn competitive compensation for every
              investor referred who closes a loan with Truly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://applications.trulyinvestorcapital.com/form-6544746/?T8yvhYgdEG4zFKZ5cu5pWA1Z"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gold text-forest-deep px-8 py-4 font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Start Earning Today</span>
                <ChevronRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:8662192294"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 font-medium text-sm tracking-wide hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                866-219-2294
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating earning highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden xl:block absolute right-16 bottom-24"
        >
          <div className="bg-gold text-forest-deep p-8 shadow-2xl max-w-xs">
            <div className="text-5xl font-display font-bold mb-2">1%</div>
            <div className="text-forest-deep/80 font-medium">
              Earn up to 1% of the total loan amount on every funded deal
            </div>
          </div>
        </motion.div>
      </section>

      {/* Program Overview Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cream/50 -skew-x-12 origin-top-right" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                <Image
                  src="/referral-property.jpg"
                  alt="Luxury property with pool"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-gold" />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                The Truly Referral Program
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-[1.15] mb-6">
                One of the Most
                <span className="block text-gold">Rewarding in the Industry</span>
              </h2>
              <p className="text-forest/70 text-lg leading-relaxed mb-6">
                Truly Investor Capital offers one of the most aggressive referral programs 
                in the industry, allowing <strong>anyone</strong> to refer investor borrowers 
                and earn compensation.
              </p>
              <p className="text-forest/60 leading-relaxed mb-8">
                Lawyers, real estate agents, financial planners, general contractors,
                originators, and brokers—anyone who knows investors needing business purpose lending
                can partner with us and earn.
              </p>
              
              <div className="bg-cream p-6 border-l-4 border-gold">
                <p className="text-forest/80 italic">
                  "We are committed to making the lending process stress-free, clear, simple, 
                  and transparent for everyone involved."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Refer Section */}
      <section className="py-16 bg-forest-deep">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div>
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                Open to Everyone
              </span>
              <h3 className="font-display text-2xl text-white mt-2">
                Who Can Become a Referral Partner?
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {whoCanRefer.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-forest-deep/[0.02] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Simple Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-tight">
              How It Works
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/50 to-transparent z-0" />
                )}
                
                <div className="relative bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/20">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-forest-deep text-gold font-display text-xl font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-forest-deep" />
                  </div>

                  <h3 className="font-display text-3xl text-forest-deep mb-3">
                    {step.title}
                  </h3>
                  <p className="text-forest/60 mb-6">
                    {step.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-3">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-forest/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Earnings Highlight */}
      <section className="py-20 bg-forest-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(212,175,55,0.1) 40px,
              rgba(212,175,55,0.1) 80px
            )`
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-gold/50" />
              <DollarSign className="w-8 h-8 text-gold" />
              <div className="w-16 h-px bg-gold/50" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Earn Up to <span className="text-gold">1%</span> of the Loan Amount
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Payments are delivered bi-weekly. There's no cap on how much you can earn—the 
              more you refer, the more you make.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {[
                { value: "$5M", label: "Loan = $50K earned" },
                { value: "$2M", label: "Loan = $20K earned" },
                { value: "$500K", label: "Loan = $5K earned" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 px-8 py-6">
                  <div className="font-display text-3xl text-gold mb-1">{item.value}</div>
                  <div className="text-white/50 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="register" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1a3a2f 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Get Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-[1.1] mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-forest/60 mb-4">
              Call <a href="tel:8662192294" className="text-gold font-semibold hover:underline">866-219-2294</a> today
            </p>
            <p className="text-forest/40 mb-10">
              or register online to join our referral program
            </p>

            <a
              href="https://applications.trulyinvestorcapital.com/form-6544746/?T8yvhYgdEG4zFKZ5cu5pWA1Z"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-forest-deep text-white px-12 py-5 font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-forest-deep/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">Register Now</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-8 text-forest/40 text-sm">
              See Referral Agreement for full program details and terms
            </p>
          </motion.div>
        </div>
      </section>
      </main>
      <InnerFooter />
    </>
  );
}
