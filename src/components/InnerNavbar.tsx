"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function InnerNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? "bg-forest-deep/95 backdrop-blur-xl shadow-2xl shadow-black/10"
            : "bg-forest-deep"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-20" : "h-24"
          }`}>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/trulylogo.png"
                alt="Truly Investor Capital"
                width={200}
                height={65}
                className={`transition-all duration-300 ${isScrolled ? "h-11 w-auto" : "h-14 w-auto"}`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center">
              {/* Main Links */}
              <div className="flex items-center gap-1 mr-8">
                {[
                  { label: "Home", href: "/" },
                  { label: "Products", href: "/#products" },
                  { label: "About", href: "/about" },
                  { label: "Team", href: "/team" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative px-5 py-2 text-[15px] text-white/90 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-6 transition-all duration-300" />
                  </Link>
                ))}

                {/* Partners Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsPartnersOpen(true)}
                  onMouseLeave={() => setIsPartnersOpen(false)}
                >
                  <button className="relative px-5 py-2 text-[15px] text-white/90 hover:text-white transition-colors group flex items-center gap-1">
                    Partners
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPartnersOpen ? "rotate-180" : ""}`} />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-6 transition-all duration-300" />
                  </button>

                  <AnimatePresence>
                    {isPartnersOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="bg-white rounded-xl shadow-2xl shadow-black/20 py-2 min-w-[200px]">
                          <Link
                            href="/brokerpartners"
                            className="block px-4 py-3 text-[15px] text-forest-deep hover:bg-cream hover:text-gold transition-colors"
                          >
                            Broker Partners
                          </Link>
                          <Link
                            href="/referralpartners"
                            className="block px-4 py-3 text-[15px] text-forest-deep hover:bg-cream hover:text-gold transition-colors"
                          >
                            Referral Partners
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-white/20 mr-8" />

              {/* Login Links */}
              <div className="flex items-center gap-6 mr-8">
                <a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">
                  Borrower Login
                </a>
                <a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">
                  Broker Login
                </a>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <a
                  href="tel:8662192294"
                  className="flex items-center gap-2 text-[15px] text-white/90 hover:text-gold transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="hidden xl:inline">866-219-2294</span>
                </a>

                <a
                  href="https://applications.trulyinvestorcapital.com/form-6571272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-forest-deep px-6 py-3 text-[15px] font-semibold rounded-lg hover:bg-white transition-all duration-300 hover:shadow-lg"
                >
                  Get a Quote
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="xl:hidden w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] xl:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-forest-deep"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="relative h-full flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6">
                <Image
                  src="/trulylogo.png"
                  alt="Truly Investor Capital"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-6 py-8 overflow-y-auto">
                <div className="space-y-2">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/#products" },
                    { label: "Our Process", href: "/#process" },
                    { label: "About Us", href: "/about" },
                    { label: "Our Team", href: "/team" },
                    { label: "Broker Partners", href: "/brokerpartners" },
                    { label: "Referral Partners", href: "/referralpartners" },
                  ].map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center justify-between py-4 px-4 text-xl text-white hover:bg-white/5 rounded-xl transition-colors group"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Login Section */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-sm text-white/40 uppercase tracking-wider mb-4 px-4">Account</p>
                  <div className="space-y-2">
                    <a href="#" className="flex items-center justify-between py-3 px-4 text-lg text-white/70 hover:text-gold hover:bg-white/5 rounded-xl transition-colors">
                      Borrower Login
                    </a>
                    <a href="#" className="flex items-center justify-between py-3 px-4 text-lg text-white/70 hover:text-gold hover:bg-white/5 rounded-xl transition-colors">
                      Broker Login
                    </a>
                  </div>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <a
                  href="tel:8662192294"
                  className="flex items-center justify-center gap-3 py-4 mb-3 text-lg text-gold border border-gold/30 rounded-xl hover:bg-gold/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  866-219-2294
                </a>
                <a
                  href="https://applications.trulyinvestorcapital.com/form-6571272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-4 bg-gold text-forest-deep text-lg font-semibold rounded-xl hover:bg-white transition-colors"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
