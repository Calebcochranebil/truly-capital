"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Navbar, InnerFooter } from "@/components";

const contactMethods = [
  "Speak with a loan specialist",
  "Get a personalized quote",
  "Learn about our programs",
  "Same-day response guaranteed",
  "No obligation consultation",
  "Available Monday - Friday",
];

const departments = [
  {
    title: "Customer Support & General Information",
    phone: "866-219-2294",
    email: "info@trulyinvestorcap.com",
    description: "For general inquiries, new loan applications, and program information.",
  },
  {
    title: "Draw Requests",
    phone: "866-219-2294",
    email: "draws@trulyinvestorcap.com",
    description: "To request a draw on active construction or rehab projects.",
  },
  {
    title: "Servicing & Payments",
    phone: "866-219-2294",
    email: "servicing@trulyinvestorcap.com",
    description: "For loan servicing questions, payoffs, and making payments.",
  },
  {
    title: "Customer Service Escalations",
    phone: "866-219-2294",
    email: "customersupport@trulyinvestorcap.com",
    description: "For escalations or urgent matters requiring attention.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative bg-forest-deep pt-40 pb-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/about-hero.jpg"
              alt="Contact Us"
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
                  Get in Touch
                </span>

                <h1 className="font-display text-5xl md:text-6xl text-white mb-6">
                  Get In <span className="text-gold">Touch</span>
                </h1>

                <p className="text-white/80 text-xl leading-relaxed mb-8">
                  One click or call away. Our team of lending professionals is ready to help
                  find the right financing solution for the next deal.
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {contactMethods.map((item) => (
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
                  <a href="mailto:info@trulyinvestorcap.com" className="btn-secondary flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </motion.div>

              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-lg"
              >
                <h3 className="text-gold font-display text-2xl mb-6">Main Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 py-3 border-b border-white/10">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white/70 text-sm block mb-1">Phone</span>
                      <a href="tel:8662192294" className="text-white font-semibold hover:text-gold transition-colors">
                        866-219-2294
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-3 border-b border-white/10">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white/70 text-sm block mb-1">Email</span>
                      <a href="mailto:info@trulyinvestorcap.com" className="text-white font-semibold hover:text-gold transition-colors">
                        info@trulyinvestorcap.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-3 border-b border-white/10">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white/70 text-sm block mb-1">Address</span>
                      <span className="text-white font-semibold">
                        3133 W Frye Road, Suite 205<br />
                        Chandler, AZ 85226
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white/70 text-sm block mb-1">Hours</span>
                      <span className="text-white font-semibold">
                        Mon - Fri: 8:00 AM - 5:00 PM MST
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="text-white/70 text-sm block mb-4">Follow Us</span>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/trulyinvestorcap/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors group"
                    >
                      <svg className="w-5 h-5 text-white group-hover:text-forest-deep transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/truly-investor-capital/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors group"
                    >
                      <svg className="w-5 h-5 text-white group-hover:text-forest-deep transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61552563339946"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors group"
                    >
                      <svg className="w-5 h-5 text-white group-hover:text-forest-deep transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="section-tag">Departments</span>
              <h2 className="section-title">How Can We Help?</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Reach the right team for specific needs. Our specialists are ready to assist.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-cream-warm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="bg-forest-deep px-6 py-4">
                    <h3 className="font-display text-xl text-white">{dept.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate mb-6">{dept.description}</p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="flex items-center gap-3 text-forest-deep hover:text-gold transition-colors"
                    >
                      <Mail className="w-4 h-4 text-gold" />
                      <span className="font-semibold">{dept.email}</span>
                    </a>
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
                Our team is standing by to help find the perfect financing solution.
                Reach out today to discuss the next deal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8662192294" className="btn-primary">
                  Call 866-219-2294
                </a>
                <Link href="/team" className="btn-secondary">
                  Meet Our Team
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
