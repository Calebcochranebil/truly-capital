"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink, Instagram, Linkedin, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Broker Partners", href: "/brokerpartners" },
  { label: "Referral Partners", href: "/referralpartners" },
];

const productLinks = [
  { label: "DSCR Loans", href: "/products/dscr" },
  { label: "Bridge Loans", href: "/products/bridge" },
  { label: "Rehab Loans", href: "/products/rehab" },
  { label: "Construction Loans", href: "/products/construction" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/trulyinvestorcap/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/truly-investor-capital/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61552563339946", label: "Facebook" },
];

export default function InnerFooter() {
  return (
    <footer className="bg-white text-forest-deep">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16">
        {/* Brand & Contact - Centered on mobile */}
        <div className="text-center sm:text-left mb-10 sm:hidden">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/trulylogo.png"
              alt="Truly Investor Capital"
              width={180}
              height={60}
              className="h-auto w-[160px] mx-auto"
            />
          </Link>
          <a
            href="tel:8662192294"
            className="inline-flex items-center gap-2 text-forest-deep/70 hover:text-gold transition-colors text-sm mb-4"
          >
            <Phone className="w-4 h-4 text-gold" />
            866-219-2294
          </a>
          <div className="flex gap-3 justify-center mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 border border-forest-deep/20 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:border-gold"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand & Contact - Desktop only */}
          <div className="hidden sm:block lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/trulylogo.png"
                alt="Truly Investor Capital"
                width={220}
                height={75}
                className="h-auto w-[140px] sm:w-[180px] md:w-[220px]"
              />
            </Link>
            <a
              href="tel:8662192294"
              className="flex items-center gap-3 text-forest-deep/70 hover:text-gold transition-colors text-sm mb-4"
            >
              <Phone className="w-4 h-4 text-gold" />
              866-219-2294
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 border border-forest-deep/20 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:border-gold"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg text-gold mb-4 sm:mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-forest-deep/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg text-gold mb-4 sm:mb-5">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-forest-deep/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="col-span-2 sm:col-span-1 text-center sm:text-left mt-4 sm:mt-0">
            <h4 className="font-display text-lg text-gold mb-4 sm:mb-5">Location</h4>
            <div className="inline-flex sm:flex items-start gap-3 text-forest-deep/60 text-sm">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed text-left">
                Truly Investor Capital<br />
                A division of Oaktree Funding Corp.<br />
                3133 West Frye Road, Suite #205<br />
                Chandler, AZ 85226
              </address>
            </div>
            <div className="mt-4">
              <span className="text-forest-deep/40 text-xs">NMLS # 71640</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-forest-deep/10 pt-8">
          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link href="/careers" className="text-forest-deep/60 hover:text-gold text-sm transition-colors">
              Careers
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/privacy" className="text-forest-deep/60 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <a
              href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/71640"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-deep/60 hover:text-gold text-sm transition-colors inline-flex items-center gap-1"
            >
              NMLS Consumer Access
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-forest-deep/40 text-sm mb-6">
            © 2025 Truly Investor Capital. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Disclosure Section */}
      <div className="bg-cream border-t border-forest-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8">
          <p className="text-forest-deep/50 text-xs leading-relaxed text-center">
            Truly Investor Capital, a division of Oaktree Funding Corp., 3133 West Frye Road, Suite #205
            Chandler, AZ 85226 (NMLS # 71640 | In the following states AZ, CA, ID, MN, OR, UT loans are
            originated and made in the name of Oaktree Funding Corp. NMLS #71640 pursuant to the laws of
            AZ Mortgage Banker Lic. # 0920541 | CA DFPI Lic. # 6035721). ©2025. All Rights
            Reserved. This is not an offer to enter into an agreement. Not all customers will qualify.
            Information, rates, and programs are subject to change without prior notice. All products are
            subject to credit and property approval. Not all products are available in all states or for
            all loan amounts. Other restrictions and limitations apply. Oaktree Funding Corp. is an
            independent mortgage lender and is not affiliated with the Department of Housing and Urban
            Development or the Federal Housing Administration. Not intended for legal or financial advice.
            All state licensing information may be found at{" "}
            <a
              href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/71640"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              NMLS Consumer Access
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
