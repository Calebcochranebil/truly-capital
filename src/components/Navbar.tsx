"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Building2, Clock, MessageSquare, ArrowRight, Menu, LogIn, Briefcase, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const dropdownItems = [
  {
    number: "01",
    title: "Products",
    description: "Rehab, Construction, DSCR & Bridge loans",
    href: "/#products",
    icon: Building2,
  },
  {
    number: "02",
    title: "Process",
    description: "From application to funding in 3 steps",
    href: "/#process",
    icon: Clock,
  },
  {
    number: "03",
    title: "Testimonials",
    description: "Hear from successful investors nationwide",
    href: "/#testimonials",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "Contact Us",
    description: "info@trulyinvestorcap.com",
    href: "/contact",
    icon: Phone,
  },
];

const navLinks = [
  { label: "Broker Partners", href: "/brokerpartners" },
  { label: "Referral Partners", href: "/referralpartners" },
  { label: "Our Team", href: "/team" },
  { label: "About", href: "/about" },
];

const phoneNumbers = [
  { label: "Sales", number: "866-219-2294", tel: "8662192294" },
  { label: "Servicing", number: "1-800-968-5773", tel: "18009685773", note: "Option 3" },
  { label: "Customer Service", number: "866-219-2294", tel: "8662192294" },
];

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDropdownOpen]);

  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-forest-deep/90 z-[998]"
            onClick={closeDropdown}
          />
        )}
      </AnimatePresence>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-forest-deep z-[1001] overflow-y-auto"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              onClick={closeDropdown}
              className="absolute top-6 right-6 md:right-12 w-11 h-11 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:border-gold hover:scale-110 group z-[1001]"
            >
              <X className="w-4 h-4 text-white/70 group-hover:text-forest-deep transition-colors" />
            </motion.button>

            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 sm:pt-28 pb-24">
              <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-16">
                {/* Left Side */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="lg:border-r border-white/5 lg:pr-12"
                >
                  <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                    Navigation
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-white mb-4 leading-[1.15]">
                    Explore Our
                    <span className="block text-gold">Solutions</span>
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                    Discover tailored financing products and resources designed for savvy real estate investors.
                  </p>
                  <a
                    href="https://applications.trulyinvestorcapital.com/form-6571272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white text-sm font-medium group"
                  >
                    <span className="border-b border-gold/50 pb-0.5 group-hover:border-gold transition-colors">
                      Get Started Today
                    </span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Quick Links - Mobile */}
                  <div className="xl:hidden mt-8 pt-6 border-t border-white/10">
                    <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                      Quick Links
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {navLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={closeDropdown}
                          className="bg-white/[0.02] border border-white/[0.06] px-4 py-3 text-white/70 hover:text-gold hover:border-gold/20 text-sm transition-all duration-300"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Cards */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {dropdownItems.map((item, index) => (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeDropdown}
                        className="group relative block bg-white/[0.02] border border-white/[0.06] p-6 transition-all duration-300 hover:bg-gold/5 hover:border-gold/20 overflow-hidden"
                      >
                        {/* Subtle corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Number watermark */}
                        <span className="absolute -bottom-2 -right-1 font-display text-6xl font-bold text-white/[0.03] group-hover:text-gold/10 transition-colors duration-300 select-none">
                          {item.number}
                        </span>

                        <div className="relative z-10">
                          {/* Icon */}
                          <div className="w-10 h-10 bg-gradient-to-br from-gold/90 to-gold-light rounded-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                            <item.icon className="w-5 h-5 text-forest-deep" />
                          </div>

                          <h3 className="font-display text-xl text-white mb-1.5 group-hover:text-gold transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-white/40 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Numbers - Mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.12, duration: 0.2 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  Contact Us
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone.label}
                      href={`tel:${phone.tel}`}
                      className="bg-white/[0.02] border border-white/[0.06] px-4 py-3 hover:bg-gold/10 hover:border-gold/20 transition-all duration-300"
                    >
                      <span className="block text-white/50 text-[10px] uppercase tracking-wider mb-1">{phone.label}</span>
                      <span className="block text-white font-semibold text-sm">
                        {phone.number}
                        {phone.note && <span className="text-white/50 font-normal text-xs ml-1">({phone.note})</span>}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Login Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.2 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <span className="text-white/40 text-sm text-center sm:text-left">Already a partner? Access the portal</span>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <a
                      href="https://tmadvantage.my.site.com/Borrower/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-6 py-3 hover:bg-gold hover:border-gold transition-all duration-300"
                    >
                      <LogIn className="w-4 h-4 text-gold group-hover:text-forest-deep transition-colors" />
                      <span className="text-white group-hover:text-forest-deep text-sm font-medium transition-colors">Borrower Login</span>
                    </a>
                    <a
                      href="https://tmadvantage.my.site.com/Broker/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-6 py-3 hover:bg-gold hover:border-gold transition-all duration-300"
                    >
                      <Briefcase className="w-4 h-4 text-gold group-hover:text-forest-deep transition-colors" />
                      <span className="text-white group-hover:text-forest-deep text-sm font-medium transition-colors">Broker Login</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 z-[1000] transition-all duration-500 ${
          currentPage ? "top-0" : "top-8 sm:top-9"
        } ${
          isScrolled
            ? "bg-white shadow-lg shadow-black/5"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? "h-[70px]" : "h-[90px]"
          }`}>
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src="/trulylogo.png"
                alt="Truly Investor Capital"
                width={190}
                height={65}
                className={`h-auto w-[140px] sm:w-[160px] md:w-[190px] transition-all duration-300 ${isScrolled ? "scale-90" : ""}`}
                priority
              />
            </Link>

            {/* Center Nav Links */}
            <div className="hidden xl:flex items-center">
              <ul className="flex items-center gap-1">
                {/* Explore Dropdown Trigger */}
                <li>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onMouseEnter={() => setHoveredLink("explore")}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 py-2 flex items-center gap-1.5 text-[0.8rem] font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
                      isDropdownOpen ? "text-gold" : "text-forest-deep/90 hover:text-forest-deep"
                    }`}
                  >
                    {/* Hover background */}
                    <motion.span
                      className="absolute inset-0 bg-forest-deep/5 rounded-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredLink === "explore" || isDropdownOpen ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="relative">Explore</span>
                    <ChevronDown
                      className={`relative w-3 h-3 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </li>

                {/* Divider */}
                <li className="w-px h-4 bg-forest-deep/20 mx-2" />

                {/* Other Nav Links */}
                {navLinks.filter((item) => item.href !== currentPage).map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHoveredLink(item.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="relative px-4 py-2 block text-[0.8rem] font-medium tracking-[0.1em] uppercase text-forest-deep/70 hover:text-forest-deep transition-colors duration-300"
                    >
                      {/* Hover background */}
                      <motion.span
                        className="absolute inset-0 bg-forest-deep/5 rounded-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredLink === item.label ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                      {/* Gold underline on hover */}
                      <motion.span
                        className="absolute bottom-1 left-4 right-4 h-px bg-gold"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredLink === item.label ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="relative">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Phone Dropdown */}
              <div
                className="hidden xl:block relative"
                onMouseEnter={() => setIsPhoneDropdownOpen(true)}
                onMouseLeave={() => setIsPhoneDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-2 text-forest-deep/80 hover:text-gold font-medium text-sm tracking-wide transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  Contact Us
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isPhoneDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isPhoneDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 bg-white border border-cream-warm rounded-lg shadow-xl overflow-hidden w-[220px] z-50"
                    >
                      {phoneNumbers.map((phone, index) => (
                        <a
                          key={phone.label}
                          href={`tel:${phone.tel}`}
                          className={`block px-4 py-3 hover:bg-cream transition-colors ${
                            index !== phoneNumbers.length - 1 ? 'border-b border-cream-warm' : ''
                          }`}
                        >
                          <span className="block text-forest-deep/50 text-[10px] uppercase tracking-wider mb-0.5">{phone.label}</span>
                          <span className="block text-forest-deep font-semibold text-sm">
                            {phone.number}
                            {phone.note && <span className="text-forest-deep/50 font-normal text-xs ml-1">({phone.note})</span>}
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <a href="https://applications.trulyinvestorcapital.com/form-6571272/" target="_blank" rel="noopener noreferrer" className="hidden sm:block relative group px-4 sm:px-6 py-2 sm:py-2.5 bg-gold text-forest-deep text-xs sm:text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Get Started</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="xl:hidden w-10 h-10 flex items-center justify-center text-forest-deep/80 hover:text-forest-deep transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}