import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  products: [
    { label: "DSCR Loans", href: "#" },
    { label: "Bridge Loans", href: "#" },
    { label: "Rehab Loans", href: "#" },
    { label: "Construction Loans", href: "#" },
    { label: "Portfolio Loans", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Truly U", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  partners: [
    { label: "Broker Partners", href: "#" },
    { label: "Referral Partners", href: "#" },
    { label: "Wholesale", href: "#" },
    { label: "Become a Partner", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/trulyinvestorcap/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/truly-investor-capital/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61552563339946", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep py-20 px-8 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-semibold tracking-[0.2em] block">
                TRULY
              </span>
              <span className="text-[0.6rem] tracking-[0.25em] text-gold">
                INVESTOR CAPITAL
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-8 max-w-xs">
              Truly Investor Capital provides innovative lending solutions for
              real estate investors across the nation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:border-gold"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold hover:pl-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold hover:pl-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-6">
              Partners
            </h4>
            <ul className="space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold hover:pl-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <span>© 2024 Truly Investor Capital. All rights reserved.</span>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              NMLS Consumer Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
