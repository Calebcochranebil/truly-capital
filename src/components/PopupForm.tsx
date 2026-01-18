"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your Zapier webhook URL
    const ZAPIER_WEBHOOK_URL = "YOUR_ZAPIER_WEBHOOK_URL";

    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          email,
          firstName,
          source: "popup-form",
          timestamp: new Date().toISOString(),
        }),
      });

      setIsSubmitted(true);
      setEmail("");
      setFirstName("");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-deep/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-cream border border-gold/20 shadow-2xl relative overflow-hidden">
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate hover:text-forest-deep transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 sm:p-10">
                {!isSubmitted ? (
                  <>
                    {/* Header */}
                    <div className="text-center mb-8">
                      <span className="section-tag">Stay Connected</span>
                      <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mt-2">
                        Get Free Marketing Resources
                      </h3>
                      <p className="text-slate mt-3">
                        Sign up to keep up to date on all things Truly and receive exclusive insights.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-forest-deep mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Enter your first name"
                          className="w-full px-4 py-3 border border-cream-warm bg-white text-forest-deep placeholder:text-slate/50 focus:outline-none focus:border-gold transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-forest-deep mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 border border-cream-warm bg-white text-forest-deep placeholder:text-slate/50 focus:outline-none focus:border-gold transition-colors"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Subscribe"}
                      </button>
                    </form>

                    <p className="text-xs text-slate text-center mt-4">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </>
                ) : (
                  /* Success State */
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-forest-deep rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-forest-deep mb-2">
                      You&apos;re In!
                    </h3>
                    <p className="text-slate">
                      Thanks for subscribing. We&apos;ll be in touch soon.
                    </p>
                    <button
                      onClick={onClose}
                      className="btn-secondary mt-6"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
