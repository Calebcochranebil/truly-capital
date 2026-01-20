"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  BarChart3,
  Users,
  Award,
  DollarSign,
  Clock,
  ChevronRight,
  Zap,
  Shield,
  Target,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, InnerFooter } from "@/components";

const benefits = [
  {
    icon: Calculator,
    title: "Intelligent Pricing Tools",
    description: "Access our suite of calculators and quick-quote systems. Get accurate pricing in 30 seconds with automated pre-qualifications and product eligibility checks.",
    features: ["Real-time rate calculators", "Instant product matching", "30-second pre-quals", "One-click applications"]
  },
  {
    icon: TrendingUp,
    title: "Scale Your Business",
    description: "Leverage our POS client portal and branded marketing resources. We provide the tools and support to help you close more deals and expand your reach.",
    features: ["White-label client portal", "Co-branded marketing assets", "Lead generation support", "Client nurture campaigns"]
  },
  {
    icon: BarChart3,
    title: "Complete Pipeline Control",
    description: "Our Advantage AUS gives you 24/7 access to pricing, eligibility, and your entire loan pipeline. Manage all relationships from one powerful dashboard.",
    features: ["Unified loan dashboard", "Real-time status tracking", "Automated notifications", "Relationship CRM"]
  }
];

const stats = [
  { icon: Users, value: "10,000+", label: "Satisfied Partners" },
  { icon: Award, value: "15+ Years", label: "Industry Experience" },
  { icon: DollarSign, value: "$5B+", label: "Loans Funded" },
  { icon: Clock, value: "20 Days", label: "Average Close Time" }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function BrokerPartnersPage() {
  return (
    <>
      <Navbar currentPage="/brokerpartners" />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/broker-hero.jpg"
            alt="Luxury property"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-deep/70" />
          
          {/* Decorative grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Gold accent line */}
        <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />

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
                Broker Partnership Program
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Built for Brokers.
              <span className="block text-gold mt-2">Backed by Trust.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 leading-relaxed mb-10 max-w-2xl font-light"
            >
              Partner with a lender who respects your client relationships. 
              Get the technology, transparency, and pricing tools you need to grow with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://applications.trulyinvestorcapital.com/form-6571272/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gold text-forest-deep px-8 py-4 font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Become a Partner</span>
                <ChevronRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:8662192294"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 font-medium text-sm tracking-wide hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Call 866-219-2294
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating stats preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 w-72">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-white/60 text-sm">Why brokers choose us</span>
            </div>
            <div className="space-y-4">
              {[
                { label: "Partner retention rate", value: "97%" },
                { label: "Commission payout", value: "At Funding" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-white/50 text-sm">{item.label}</span>
                  <span className="text-gold font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1a3a2f 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

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
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/broker-meeting.jpg"
                  alt="Professional meeting"
                  fill
                  className="object-cover"
                />
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-gold" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-gold" />
              </div>
              
              {/* Overlapping card */}
              <div className="absolute -bottom-8 -right-8 bg-forest-deep text-white p-6 shadow-2xl max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="font-semibold">Your Clients. Your Business.</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  We never compete for your clients. Your relationships stay yours—always.
                </p>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Why Partner With Truly
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-[1.15] mb-6">
                A Lender That
                <span className="block text-gold">Respects the Relationship</span>
              </h2>
              <p className="text-forest/70 text-lg leading-relaxed mb-6">
                At Truly Investor Capital, we understand that your client relationships are everything. 
                That's why we've built our entire broker program around protecting and strengthening 
                those bonds—not competing with them.
              </p>
              <p className="text-forest/60 leading-relaxed mb-8">
                We're committed to making the lending process stress-free, clear, and simple. 
                Our technology, efficient processes, transparency, and competitive pricing give you 
                the tools to grow your business with confidence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {["No client poaching", "Same-day decisions", "Dedicated support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-cream px-4 py-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-forest text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 bg-forest-deep relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Partner Benefits
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">
              Everything You Need to Close More Deals
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Our platform is designed to make your job easier and your business more profitable.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white/[0.03] border border-white/[0.08] p-8 transition-all duration-500 hover:bg-white/[0.06] hover:border-gold/20"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 font-display text-7xl font-bold text-white/[0.03] group-hover:text-gold/10 transition-colors duration-500">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="w-7 h-7 text-forest-deep" />
                </div>

                <h3 className="font-display text-2xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/40 text-sm">
                      <Zap className="w-3 h-3 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cream relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <span className="inline-flex items-center gap-2 text-forest/50 text-sm">
              <Target className="w-4 h-4 text-gold" />
              Why Truly? Experience.
            </span>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-forest-deep/5 rounded-full flex items-center justify-center group-hover:bg-forest-deep transition-colors duration-300">
                  <stat.icon className="w-7 h-7 text-forest-deep group-hover:text-gold transition-colors duration-300" />
                </div>
                <div className="font-display text-3xl md:text-4xl text-forest-deep mb-1">
                  {stat.value}
                </div>
                <div className="text-forest/50 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="register" className="py-24 md:py-32 bg-forest-deep relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gold/10 text-gold px-4 sm:px-6 py-2 text-xs tracking-[0.2em] uppercase mb-4 sm:mb-6 border border-gold/20">
              Ready to Grow?
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Take the Next Step
            </h2>
            <p className="text-xl text-white/70 mb-4">
              Call <a href="tel:8662192294" className="text-gold font-semibold hover:underline">866-219-2294</a> today
            </p>
            <p className="text-white/50 mb-10">
              or register online to get started
            </p>

            <a
              href="https://applications.trulyinvestorcapital.com/form-6571272/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-3"
            >
              <span>Register Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-8 text-white/40 text-sm">
              Join thousands of successful brokers already partnering with Truly
            </p>
          </motion.div>
        </div>
      </section>
      </main>
      <InnerFooter />
    </>
  );
}
