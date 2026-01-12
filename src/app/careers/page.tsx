"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Users, TrendingUp, Award, Heart, Briefcase } from "lucide-react";
import { Navbar, InnerFooter } from "@/components";

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Build a career in a fast-growing company with clear paths for advancement and professional development.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Join a team that values collaboration, innovation, and mutual support in achieving shared goals.",
  },
  {
    icon: Award,
    title: "Industry Leaders",
    description: "Work alongside experienced professionals who are shaping the future of real estate investment lending.",
  },
  {
    icon: Heart,
    title: "People First",
    description: "We believe our people are our greatest asset. Experience a workplace that invests in its team members.",
  },
];

const values = [
  "Integrity in every transaction",
  "Excellence in service delivery",
  "Innovation in lending solutions",
  "Partnership-driven approach",
  "Commitment to investor success",
  "Continuous improvement mindset",
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
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
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Back to Home</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-gold/10 text-gold px-6 py-2 text-xs tracking-[0.2em] uppercase mb-6 border border-gold/20">
                  Join Our Team
                </span>

                <h1 className="font-display text-5xl md:text-6xl text-white mb-6">
                  Build Your <span className="text-gold">Career</span> With Us
                </h1>

                <p className="text-white/80 text-xl leading-relaxed mb-8">
                  Truly Investor Capital is always seeking exceptional talent to join our growing team.
                  If passion for real estate finance and a drive for excellence define your work ethic,
                  we want to hear from you.
                </p>

                <a
                  href="mailto:careers@trulyinvestorcap.com"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Apply Now
                </a>
              </motion.div>

              {/* Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-gold" />
                  <h3 className="text-gold font-display text-2xl">Open Positions</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Interested in joining a dynamic team at the forefront of real estate investment lending?
                  Send your resume and a brief introduction to learn about current opportunities.
                </p>
                <div className="flex items-center gap-3 py-4 border-t border-white/10">
                  <Mail className="w-5 h-5 text-gold" />
                  <a
                    href="mailto:careers@trulyinvestorcap.com"
                    className="text-white font-semibold hover:text-gold transition-colors"
                  >
                    careers@trulyinvestorcap.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="section-tag">Why Truly</span>
              <h2 className="section-title">Why Join Our Team?</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Be part of a company that values innovation, integrity, and the success of every team member.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-cream-warm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-forest-deep flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-forest-deep mb-2">{benefit.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-cream-warm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-tag">Our Values</span>
                <h2 className="section-title">What We Stand For</h2>
                <p className="text-slate leading-relaxed mb-8">
                  At Truly Investor Capital, our values guide everything we do. We're looking for
                  team members who share our commitment to excellence and want to make a meaningful
                  impact in the real estate investment industry.
                </p>
                <ul className="space-y-3">
                  {values.map((value) => (
                    <li key={value} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-forest-deep">{value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-forest-deep p-8 rounded-lg"
              >
                <h3 className="font-display text-2xl text-white mb-4">Ready to Make an Impact?</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  We're building something special at Truly Investor Capital, and the right people
                  make all the difference. If you're ready to grow, contribute, and be part of a
                  winning team, reach out today.
                </p>
                <p className="text-white/70 leading-relaxed mb-8">
                  Send your resume and tell us why you'd be a great fit. We review every application
                  and respond to all qualified candidates.
                </p>
                <a
                  href="mailto:careers@trulyinvestorcap.com"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Your Resume
                </a>
              </motion.div>
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
                Your Next Chapter Starts Here
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                Join a team that's transforming real estate investment lending.
                Inquire about open positions and take the first step toward an exciting career.
              </p>
              <a
                href="mailto:careers@trulyinvestorcap.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Us About Opportunities
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
