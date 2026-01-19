"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { Navbar, InnerFooter } from "@/components";

// Team member data
const teamMembers = [
  {
    id: "darin-judis",
    name: "Darin Judis",
    title: "President, Truly Investor Capital",
    phone: "626.716.2556",
    email: "djudis@oaktreefunding.com",
    image: "/team/darin-judis.jpg",
    isLeadership: true,
  },
  {
    id: "kevin-kavanaugh",
    name: "Kevin Kavanaugh",
    title: "Vice President, National Sales Manager",
    phone: "480.856.9158",
    email: "kkavanaugh@trulyinvestorcap.com",
    image: "/team/kevin-kavanaugh.jpg",
    isLeadership: true,
  },
  {
    id: "heidi-hawk",
    name: "Heidi Hawk",
    title: "Regional Sales Manager",
    phone: "360.910.3117",
    email: "heidi.hawk@trulyinvestorcap.com",
    image: "/team/heidi-hawk.jpg",
    isLeadership: false,
  },
  {
    id: "casey-koelsch",
    name: "Casey Koelsch",
    title: "Regional Sales Manager",
    phone: "224.422.8882",
    email: "ckoelsch@trulyinvestorcap.com",
    image: "/team/casey-koelsch.jpg",
    isLeadership: false,
  },
  {
    id: "mike-meyers",
    name: "Mike Meyers",
    title: "Regional Sales Manager",
    phone: "630.308.7318",
    email: "mmeyers@trulyinvestorcap.com",
    image: "/team/mike-meyers.jpg",
    isLeadership: false,
  },
  {
    id: "luke-weber",
    name: "Luke Weber",
    title: "Regional Sales Manager",
    phone: "630.670.7706",
    email: "lweber@trulyinvestorcap.com",
    image: "/team/luke-weber.jpg",
    isLeadership: false,
  },
  {
    id: "lindy-pond",
    name: "Lindy Pond",
    title: "Regional Sales Manager",
    nmls: "203141",
    phone: "804.647.7866",
    email: "LPond@trulyinvestorcap.com",
    image: "/team/lindy-pond.jpg",
    isLeadership: false,
  },
  {
    id: "alex-tkachenko",
    name: "Alex Tkachenko",
    title: "Regional Sales Manager",
    phone: "480.856.9191",
    email: "atkachenko@trulyinvestorcap.com",
    image: "/team/alex-tkachenko.jpg",
    isLeadership: false,
  },
  {
    id: "kris-kaba",
    name: "Kris Kaba",
    title: "Regional Sales Manager",
    phone: "760.585.8931",
    email: "kkaba@trulyinvestorcap.com",
    image: "/team/kris-kaba.jpg",
    isLeadership: false,
  },
  {
    id: "james-moreno",
    name: "James Moreno",
    title: "Regional Sales Manager",
    phone: "208.748.9159",
    email: "jmoreno@trulyinvestorcap.com",
    image: "/team/james-moreno.jpg",
    isLeadership: false,
  },
  {
    id: "barton-lewis",
    name: "Barton Lewis",
    title: "Regional Sales Manager",
    phone: "213.822.4733",
    email: "blewis@trulyinvestorcap.com",
    image: "/team/barton-lewis.jpg",
    isLeadership: false,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Team Member Card Component
function TeamMemberCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <motion.div variants={cardVariants}>
      <Link href={`/team/${member.id}`} className="group block">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-cream-warm relative">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          {/* Content */}
          <div className="p-4 sm:p-6">
            <h3 className="font-display text-xl sm:text-2xl text-forest-deep mb-1 group-hover:text-gold transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-slate text-xs sm:text-sm mb-3 sm:mb-4">{member.title}</p>
            {member.nmls && (
              <p className="text-slate/70 text-xs mb-3 sm:mb-4">NMLS# {member.nmls}</p>
            )}

            {/* Contact Info */}
            <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-cream-warm">
              <a
                href={`tel:${member.phone.replace(/\./g, "")}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-xs sm:text-sm text-slate hover:text-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                {member.phone}
              </a>
              <a
                href={`mailto:${member.email}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-xs sm:text-sm text-slate hover:text-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                <span className="truncate">{member.email}</span>
              </a>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function TeamPage() {
  const leadership = teamMembers.filter((m) => m.isLeadership);
  const salesTeam = teamMembers.filter((m) => !m.isLeadership);

  return (
    <>
      <Navbar currentPage="/team" />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative bg-forest-deep pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-gold/10 text-gold px-4 sm:px-6 py-2 text-xs tracking-[0.2em] uppercase mb-4 sm:mb-6 border border-gold/20"
          >
            Our Team
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6"
          >
            Meet the <span className="text-gold">Experts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our dedicated team of lending professionals brings decades of combined
            experience to help achieve real estate investment goals.
          </motion.p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-cream-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="section-tag">Leadership</span>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Guiding Our Vision</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Experienced leaders driving excellence in real estate investment lending.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {leadership.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sales Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="section-tag">Sales Team</span>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Dedicated Partners</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Regional experts ready to help navigate the financing process with personalized service.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {salesTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-forest-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
          >
            Connect with one of our experienced team members today and discover how we can help fund the next deal.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="tel:8662192294" className="btn-primary">
              Call 866-219-2294
            </a>
            <Link href="/brokerpartners" className="btn-secondary">
              Become a Partner
            </Link>
          </motion.div>
        </div>
      </section>
      </main>
      <InnerFooter />
    </>
  );
}