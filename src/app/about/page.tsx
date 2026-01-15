"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  MapPin,
  AlertCircle,
  XCircle,
  ExternalLink,
  Building2,
  Users,
  Target,
  Award,
  Briefcase,
  Home,
  Hammer,
  TrendingUp,
  DollarSign,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, InnerFooter } from "@/components";

const leadership = [
  {
    name: "Kristopher Martin",
    title: "Co-CEO",
    initials: "KM",
  },
  {
    name: "Stephen Lippens",
    title: "Co-CEO",
    initials: "SL",
  },
  {
    name: "Darin Judis",
    title: "President",
    initials: "DJ",
  },
  {
    name: "Shahin Ilbeig",
    title: "EVP of Operations",
    initials: "SI",
  },
];

const loanTypes = [
  { icon: Hammer, label: "Fix & Flip" },
  { icon: Building2, label: "Bridge" },
  { icon: Home, label: "New Construction" },
  { icon: TrendingUp, label: "Fix & Hold" },
  { icon: Briefcase, label: "Build for Rent" },
  { icon: DollarSign, label: "Single Property Rental" },
  { icon: Users, label: "Portfolio Rental" }
];

const values = [
  {
    icon: Target,
    title: "Streamlined Process",
    description: "We've eliminated the red tape. Our technology-driven approach means faster approvals and less paperwork."
  },
  {
    icon: Users,
    title: "Partnership First",
    description: "We succeed when our partners succeed. Every decision we make is guided by what's best for our investors and partners."
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Founded by commercial lending professionals with decades of combined experience in real estate finance."
  }
];

const lendingStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
  "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Virginia", "Washington", "Wisconsin", "Wyoming",
  "Washington D.C."
];

const notLendingStates = ["Mississippi", "Missouri", "New York", "Vermont", "West Virginia"];
const creditExceptionStates = ["Alaska", "Hawaii"];

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

export default function AboutPage() {
  return (
    <>
      <Navbar currentPage="/about" />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="Modern architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-deep/70" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
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
                About Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Meet Truly
              <span className="block text-gold mt-2">Investor Capital</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed max-w-2xl"
            >
              Built by lending professionals who understand what real estate investors 
              and brokers actually need—speed, reliability, and respect.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-tight">
              The Leaders Behind
              <span className="block text-gold">The Truly Difference</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-5 bg-forest-deep text-white rounded-full flex items-center justify-center font-display text-2xl group-hover:bg-gold transition-colors duration-300">
                  {leader.initials}
                </div>
                <h3 className="font-display text-xl text-forest-deep mb-1">
                  {leader.name}
                </h3>
                <p className="text-gold font-medium text-sm tracking-wide">
                  {leader.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/50 -skew-x-12 origin-top-right" />
        
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
                  src="/about-property.jpg"
                  alt="Beautiful property"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-gold" />
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-6 bg-forest-deep text-white p-6 shadow-xl hidden md:block">
                <div className="font-display text-4xl text-gold mb-1">15+</div>
                <div className="text-white/70 text-sm">Years of Experience</div>
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
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-[1.15] mb-6">
                Created by Lenders,
                <span className="block text-gold">For Investors</span>
              </h2>
              <p className="text-forest/70 text-lg leading-relaxed mb-6">
                Truly Investor Capital was created by commercial lending professionals 
                to deliver a streamlined, faster, and more dependable way for Real Estate 
                Investors & Broker Partners to power their businesses.
              </p>
              <p className="text-forest/60 leading-relaxed mb-8">
                We specialize in Business Purpose Lending, offering a comprehensive suite 
                of loan products designed specifically for the needs of today's real estate 
                investors.
              </p>
              
              {/* Loan types */}
              <div className="flex flex-wrap gap-2">
                {loanTypes.map((type, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 bg-cream px-4 py-2 border border-forest-deep/10"
                  >
                    <type.icon className="w-4 h-4 text-gold" />
                    <span className="text-forest text-sm font-medium">{type.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-forest-deep relative overflow-hidden">
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
              What Drives Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <value.icon className="w-9 h-9 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Where We Lend Section */}
      <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Coverage Area
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-tight mb-4">
              Where We Lend
            </h2>
            <p className="text-forest/60 max-w-2xl mx-auto">
              Truly Investor Capital lends in all states except those listed below. 
              See additional details for exceptions and restrictions.
            </p>
          </motion.div>

          {/* Map Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 shadow-lg mb-12"
          >
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/10]">
              <Image
                src="/lending-map.png"
                alt="US Lending Map"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Legend and Details */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Lending States */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-forest-deep rounded-sm" />
                <h3 className="font-display text-lg text-forest-deep">We Lend Here</h3>
              </div>
              <p className="text-forest/60 text-sm mb-4">
                Truly lends in {lendingStates.length} states plus Washington D.C.
              </p>
              <div className="flex items-start gap-2 text-forest/70 text-sm">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Full lending services available</span>
              </div>
            </motion.div>

            {/* Not Lending States */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-gray-200 rounded-sm" />
                <h3 className="font-display text-lg text-forest-deep">Not Available</h3>
              </div>
              <p className="text-forest/60 text-sm mb-4">
                States where Truly does NOT lend:
              </p>
              <ul className="space-y-2">
                {notLendingStates.map((state, i) => (
                  <li key={i} className="flex items-center gap-2 text-forest/70 text-sm">
                    <XCircle className="w-4 h-4 text-red-400" />
                    {state}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Credit Exception States */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-gray-400 rounded-sm" />
                <h3 className="font-display text-lg text-forest-deep">Credit Exception</h3>
              </div>
              <p className="text-forest/60 text-sm mb-4">
                Approval subject to Credit Exception & Collateral Review:
              </p>
              <ul className="space-y-2">
                {creditExceptionStates.map((state, i) => (
                  <li key={i} className="flex items-center gap-2 text-forest/70 text-sm">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    {state}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* NMLS Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-forest/50 text-sm max-w-3xl mx-auto">
              Truly Investor Capital is a division of Oaktree Funding Corp., NMLS# 71640. 
              For a comprehensive list of where we lend, please visit{" "}
              <a 
                href="https://www.nmlsconsumeraccess.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:underline inline-flex items-center gap-1"
              >
                NMLS Consumer Access
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-forest/60 mb-4">
              Call <a href="tel:8662192294" className="text-gold font-semibold hover:underline">866-219-2294</a> today
            </p>
            <p className="text-forest/40 mb-10">
              or reach out to learn more about our lending solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/brokerpartners"
                className="group relative inline-flex items-center justify-center gap-3 bg-forest-deep text-white px-10 py-4 font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-forest-deep/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Become a Broker Partner</span>
                <ChevronRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/referralpartners"
                className="inline-flex items-center justify-center gap-3 border-2 border-forest-deep text-forest-deep px-10 py-4 font-semibold tracking-wide hover:bg-forest-deep hover:text-white transition-all duration-300"
              >
                Referral Program
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
      <InnerFooter />
    </>
  );
}
