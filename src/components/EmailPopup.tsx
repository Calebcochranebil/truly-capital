"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, CheckCircle, ChevronDown, Download } from "lucide-react";
import Image from "next/image";

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    clientType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const STORAGE_KEY = "truly-popup-data";
    const MAX_VISITS = 3;
    const RESET_DAYS = 30;

    const storedData = localStorage.getItem(STORAGE_KEY);
    let popupData = storedData ? JSON.parse(storedData) : null;

    // Check if we need to reset (30 days have passed)
    if (popupData) {
      const daysSinceStart = (Date.now() - popupData.startTimestamp) / (1000 * 60 * 60 * 24);
      if (daysSinceStart >= RESET_DAYS) {
        // Reset the data after 30 days
        popupData = null;
      }
    }

    // Initialize if no data exists
    if (!popupData) {
      popupData = {
        visitCount: 0,
        startTimestamp: Date.now(),
      };
    }

    // Increment visit count
    popupData.visitCount += 1;

    // Save updated data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(popupData));

    // Show popup only for the first 3 visits
    if (popupData.visitCount <= MAX_VISITS) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mvzzwwkn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          clientType: formData.clientType === "direct" ? "Direct Client" : "Broker Client",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const pdfDownloads = [
    { name: "DSCR Rental Loans", file: "/pdfs/DSCR%20Rental%20Loans.pdf" },
    { name: "Standard Rehab", file: "/pdfs/Standard%20Rehab.pdf" },
    { name: "Bridge Loans", file: "/pdfs/Bridge%20Loans.pdf" },
    { name: "New Construction", file: "/pdfs/New%20Construction.pdf" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        >
          <div
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-cream hover:bg-cream-warm transition-colors z-10"
              >
                <X className="w-5 h-5 text-forest-deep" />
              </button>

              <div className="h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />

              <div className="p-6 sm:p-8">
                {!isSubmitted ? (
                  <>
                    <div className="flex justify-center mb-5">
                      <Image
                        src="/trulylogo.png"
                        alt="Truly Investor Capital"
                        width={200}
                        height={67}
                        className="h-14 w-auto"
                      />
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl text-forest-deep text-center mb-2">
                      Free Marketing Materials
                    </h2>

                    <p className="text-slate text-center mb-5 leading-relaxed text-sm">
                      Get white-label marketing materials for all our loan products
                      and stay updated on everything Truly.
                    </p>

                    <div className="bg-cream/50 rounded-lg p-3 mb-5">
                      <div className="space-y-1.5">
                        {[
                          "White-label flyers for each product",
                          "Social media ready content",
                          "Exclusive updates & announcements",
                        ].map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-forest">
                            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            required
                            className="w-full pl-10 pr-3 py-3 border border-cream-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-forest-deep placeholder:text-slate/50 text-sm"
                          />
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            required
                            className="w-full px-3 py-3 border border-cream-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-forest-deep placeholder:text-slate/50 text-sm"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email address"
                          required
                          className="w-full pl-10 pr-3 py-3 border border-cream-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-forest-deep placeholder:text-slate/50 text-sm"
                        />
                      </div>

                      <div className="relative">
                        <select
                          name="clientType"
                          value={formData.clientType}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-3 border border-cream-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-forest-deep text-sm appearance-none bg-white cursor-pointer"
                        >
                          <option value="" disabled>Select client type...</option>
                          <option value="direct">Direct Client</option>
                          <option value="broker">Broker Client</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50 pointer-events-none" />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-forest-deep hover:bg-forest text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-forest-deep/25 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Get Free Marketing Materials"
                        )}
                      </button>
                    </form>

                    <button
                      onClick={handleClose}
                      className="w-full mt-3 text-sm text-slate/60 hover:text-slate transition-colors"
                    >
                      No thanks, maybe later
                    </button>
                  </>
                ) : (
                  <div className="py-4 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <h2 className="font-display text-2xl text-forest-deep mb-2">
                      You&apos;re All Set!
                    </h2>
                    <p className="text-slate text-sm mb-6">
                      Download your free marketing materials below.
                    </p>

                    <div className="space-y-2">
                      {pdfDownloads.map((pdf, i) => (
                        <a
                          key={i}
                          href={pdf.file}
                          download
                          className="flex items-center justify-between w-full px-4 py-3 bg-cream hover:bg-cream-warm rounded-lg transition-colors group"
                        >
                          <span className="text-forest-deep text-sm font-medium">{pdf.name}</span>
                          <Download className="w-4 h-4 text-gold group-hover:text-forest-deep transition-colors" />
                        </a>
                      ))}
                    </div>

                    <button
                      onClick={handleClose}
                      className="w-full mt-6 bg-forest-deep hover:bg-forest text-white font-semibold py-3 rounded-lg transition-all duration-300 text-sm"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
