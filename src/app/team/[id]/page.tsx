"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Phone, Mail, ArrowLeft, FileText, MessageSquare } from "lucide-react";
import { Navbar, InnerFooter } from "@/components";

// Complete team member data with full bios
const teamMembersData: Record<string, {
  name: string;
  title: string;
  nmls?: string;
  phone: string;
  email: string;
  image: string;
  bio: string[];
}> = {
  "darin-judis": {
    name: "Darin Judis",
    title: "President, Truly Investor Capital",
    phone: "626.716.2556",
    email: "djudis@oaktreefunding.com",
    image: "/team/darin-judis.jpg",
    bio: [
      "Darin is a veteran mortgage executive with over 30 years of experience driving growth and innovation in wholesale and correspondent lending. As President of Truly Investor Capital and EVP of Correspondent Lending at Oaktree Funding Corp, he leads national strategy and partnerships, delivering scalable solutions that strengthen market presence and client success.",
      "Throughout his career, Darin has held senior leadership roles at Axos Bank, IndyMac Bank, and Aames Capital Corp, consistently building high-performing teams and guiding organizations through expansion in both residential lending and real estate investment finance.",
      "Recognized for his ability to optimize operations and foster long-term partnerships, Darin has a proven track record of aligning business strategy with execution to achieve measurable results. Based in California, he continues to be a trusted leader in third-party origination, shaping the future of correspondent and wholesale lending.",
    ],
  },
  "lindy-pond": {
    name: "Lindy Pond",
    title: "Vice President, National Sales Manager",
    nmls: "203141",
    phone: "804.647.7866",
    email: "LPond@trulyinvestorcap.com",
    image: "/team/lindy-pond.jpg",
    bio: [
      "Lindy specializes in providing the best possible service to all her customers and business partners. With over 16 years' experience in the mortgage banking industry, she has the knowledge and experience to help match the right product/program to fit a client's situation.",
    ],
  },
  "heidi-hawk": {
    name: "Heidi Hawk",
    title: "Regional Sales Manager",
    phone: "360.910.3117",
    email: "heidi.hawk@trulyinvestorcap.com",
    image: "/team/heidi-hawk.jpg",
    bio: [
      "Heidi Hawk is a nationally recognized expert in private money lending for SFR & small MFR real estate asset classes, and is recognized as one of the Top Women Originators by the Scotsman Guide. With over 25 years of experience, Heidi has built a reputation for precision pre-underwriting, strategic deal/loan structuring, along with pre- and post-closing customer care, which has lead her into long standing real estate investor relationships.",
      "Her expertise extends across the full lifecycle of real estate: Owner & Managing Real Estate Broker in 3 states specializing in SFR & MFR developments/subdivisions and new construction sales; Regional Sales Manager for National & Regional Builders; Regional Business Development for a National Title/Escrow Company; and in the last 8 years, a National Loan Originator for business purpose lending where she has successfully originated and closed over $500M in loans inclusive of A&D, ground up, bridge, & DSCR (rental) financing.",
      "Heidi holds multiple industry licenses & certifications: National NMLS, State NMLS in OR, WA, ID, UT, NV, AZ, and MIRM, CAPS, ADU, CCIM. She has served in leadership roles with the National & Regional Home Builders Associations, Professional Women in Building, CREW, and currently is the Co-Chair for Salt Lake County Parade of Homes.",
      "Heidi's strategic insight to seasoned builders and real estate investors seeking reliable capital for ground up, value add and/or long term debt, makes her a great addition to empower your success.",
    ],
  },
  "casey-koelsch": {
    name: "Casey Koelsch",
    title: "Regional Sales Manager",
    phone: "224.422.8882",
    email: "ckoelsch@trulyinvestorcap.com",
    image: "/team/casey-koelsch.jpg",
    bio: [
      "Casey Koelsch has been in the financing industry for over 20 years, where she achieved multiple-time nationwide Top Performer and President's Club status. Her main focus is providing excellent Customer Service from every stage of the transaction.",
      "While Casey helps clients build their investment portfolios, she also assists brokers and referral partners in building their book of business. She takes pride in her expertise on Truly Investor Capital's full product suite, and knowing what is best for her clients, for present and future.",
      "Truly Investor Capital provides Fix & Flip, Bridge, New Construction, DSCR/Single/Portfolio Rental loans, Multi-Family and Mixed-Use to residential real estate investors across the country, helping our clients overcome traditional financing hurdles and build long-term wealth through real estate investment. Casey Truly looks forward to helping you and your client GROW!",
    ],
  },
  "mike-meyers": {
    name: "Mike Meyers",
    title: "Regional Sales Manager",
    phone: "630.308.7318",
    email: "mmeyers@trulyinvestorcap.com",
    image: "/team/mike-meyers.jpg",
    bio: [
      "Mike boasts an impressive resume of over 30 years in the mortgage industry with a focus on operations, management, underwriting and sales. For the past 22 years he's worked exclusively in sales.",
      "Most recently, he worked for the past 6 years in Commercial Mortgage, originating myriad loans including the following products: Fix/Flip, Bridge, Long Term Rental, Multi-Family, Ground up Construction-both vertical and horizontal. As a salesperson he consistently produces high volume in closings.",
      "Mike is bringing his expertise to Truly Investor Capital's Business Purpose Lending team providing premier sales support investors in search of sensible financing options.",
    ],
  },
  "luke-weber": {
    name: "Luke Weber",
    title: "Regional Sales Manager",
    phone: "630.670.7706",
    email: "lweber@trulyinvestorcap.com",
    image: "/team/luke-weber.jpg",
    bio: [
      "With 20+ years of professional mortgage, real estate, and construction experience, Luke is a trusted advisor for all his clients. He offers creative lending solutions to help his clients increase their cash flow, maximize their return on investments, and grow their businesses.",
      "Luke has personally completed 37 Fix & Flip Rehabs, including 14 New Construction, in his career. He enjoys helping his clients each step of the way including property acquisition, financing, budgeting, and trade selections.",
      "In the often-complex world of real estate investing, you want a dynamic resource like Luke on your side. Truly Investor Capital provides Fix & Flip, Bridge, New Construction, and Single/Portfolio Rental loans to residential real estate investors across the country, helping our clients overcome traditional financing hurdles and build long-term wealth through real estate investment.",
    ],
  },
  "kevin-kavanaugh": {
    name: "Kevin Kavanaugh",
    title: "Regional Sales Advisor",
    phone: "480.856.9158",
    email: "kkavanaugh@trulyinvestorcap.com",
    image: "/team/kevin-kavanaugh.jpg",
    bio: [
      "Kevin Kavanaugh is an accomplished Business Development Manager with more than a decade of experience driving growth in sales, marketing, and product strategy. He has a proven record of exceeding sales goals, launching new products, and strengthening profit and loss performance while leading high-performing teams.",
      "Holding a Bachelor of Science in Electrical Engineering from the Georgia Institute of Technology, Kevin also brings advanced training in solution selling and financial services. His expertise in building strong client relationships and delivering consistent results makes him a valuable asset to Truly Investor Capital.",
    ],
  },
  "alex-tkachenko": {
    name: "Alex Tkachenko",
    title: "Regional Sales Advisor",
    phone: "480.856.9191",
    email: "atkachenko@trulyinvestorcap.com",
    image: "/team/alex-tkachenko.jpg",
    bio: [
      "Alex is an Account Executive specializing in investment property financing, with experience funding bridge loans, fix-and-flip projects, ground-up construction, and DSCR loans. Since graduating from Washington State University in 2024, he's completed a full year of service in this role, successfully funding deals across all 50 states and helping investors achieve their real estate goals.",
      "What drives Alex most is his passion for helping clients succeed—whether that means securing the right loan, expanding their portfolios, or bringing their real estate visions to life.",
      "Outside of work, Alex is an avid mountain climber, having summited Mount Fuji, Mount Rainier, Mount Kilimanjaro, Mount Baker, and Mount Adams. The same dedication, persistence, and focus he brings to the mountains is what he brings to every client relationship.",
    ],
  },
  "kris-kaba": {
    name: "Kris Kaba",
    title: "Regional Sales Advisor",
    phone: "760.585.8931",
    email: "kkaba@trulyinvestorcap.com",
    image: "/team/kris-kaba.jpg",
    bio: [
      "Kris is a UC San Diego Finance graduate with over 10 years of experience in the financial industry. After years of trading for a major broker-dealer in San Diego, he transitioned into private money lending.",
      "Kris is dedicated to providing exceptional service, building long-term relationships and helping clients build real estate wealth.",
    ],
  },
  "james-moreno": {
    name: "James Moreno",
    title: "Regional Sales Advisor",
    phone: "208.748.9159",
    email: "jmoreno@trulyinvestorcap.com",
    image: "/team/james-moreno.jpg",
    bio: [
      "James Moreno is a Regional Sales Advisor, bringing over 10 years of experience in financial services and investment strategy. With a strong background in client relationship management and capital growth solutions, James helps investors identify and execute opportunities that align with their long-term financial goals.",
      "He holds a Bachelor's degree in Finance from Texas State University and is dedicated to delivering data-driven insights and exceptional client service across the nation.",
    ],
  },
  "barton-lewis": {
    name: "Barton Lewis",
    title: "Regional Sales Advisor",
    phone: "213.822.4733",
    email: "blewis@trulyinvestorcap.com",
    image: "/team/barton-lewis.jpg",
    bio: [
      "With over 15 years of mortgage experience in roles like Senior Account Executive, EVP, and Operations Director, Barton Lewis is committed to supporting your real estate investment goals at Truly Investor Capital. He brings deep knowledge of our tailored loan products—Rehab, Bridge, New Construction, Single Property Rental, Multifamily Rental, and Portfolio Loans—to guide you through every step of the financing process with clarity and care.",
      "At Truly, Barton lives our mission: People, Partnerships, and Process. He focuses on understanding your unique needs, offering clear guidance, and ensuring a smooth, stress-free experience with fast closings. His work supports Truly's reputation for reliable execution and attention to detail on all loan sizes, and he's here to make your financing journey seamless as an expert in all of our programs.",
      "Outside of work, Barton enjoys exploring new places, staying active, and riding mountain bike trails, bringing that same energy and dedication to helping you succeed. With Barton and Truly Investor Capital, you'll find a supportive partner, competitive rates, and a streamlined process designed to make securing your investment financing simple and worry-free.",
      "Connect with Barton to experience the Truly Difference and move forward with confidence in your next real estate deal!",
    ],
  },
};

export default function TeamMemberPage() {
  const params = useParams();
  const memberId = params.id as string;
  const member = teamMembersData[memberId];

  if (!member) {
    return (
      <>
        <Navbar currentPage="/team" />
        <main className="min-h-screen bg-cream flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display text-4xl text-forest-deep mb-4">Team Member Not Found</h1>
            <Link href="/team" className="text-gold hover:underline">
              ← Back to Team
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar currentPage="/team" />
      <main className="min-h-screen bg-cream">
        {/* Back Navigation */}
        <div className="bg-forest-deep pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider uppercase">Back to Team</span>
          </Link>
        </div>
      </div>

      {/* Hero Section with Logo and Bio */}
      <section className="relative min-h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <Image
                src="/trulylogo.svg"
                alt="Truly Investor Capital"
                width={220}
                height={220}
                className="w-[180px] lg:w-[220px]"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block text-forest-deep/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Expert Service
              </span>

              <h1 className="font-display text-4xl md:text-5xl text-forest-deep mb-2">
                Meet {member.name}
              </h1>

              <p className="text-gold text-lg md:text-xl font-medium mb-2">
                {member.title}
              </p>

              {member.nmls && (
                <p className="text-forest-deep/50 text-sm mb-6">
                  NMLS# {member.nmls}
                </p>
              )}

              {/* Bio */}
              <div className="space-y-4 mb-8">
                {member.bio.map((paragraph, index) => (
                  <p key={index} className="text-forest-deep/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={`tel:${member.phone.replace(/\./g, "")}`}
                  className="flex items-center gap-2 text-forest-deep hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>{member.phone}</span>
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-forest-deep hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>{member.email}</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="tel:8662192294" className="btn-primary flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Request A Quote
                </a>
                <a
                  href="https://applications.trulyinvestorcapital.com/form-6571272/?N8yvhYgdEG4zFKZ5cu5pWA1Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest-deep text-white px-6 py-3 font-semibold text-sm tracking-wider uppercase hover:bg-forest transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Apply Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cream-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl text-forest-deep mb-4"
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate mb-8"
          >
            Reach out to {member.name.split(" ")[0]} today to discuss financing needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`tel:${member.phone.replace(/\./g, "")}`}
              className="btn-primary"
            >
              Call {member.phone}
            </a>
            <a
              href={`mailto:${member.email}`}
              className="bg-forest-deep text-white px-8 py-4 font-semibold text-sm tracking-widest uppercase hover:bg-forest transition-colors"
            >
              Send Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-2xl text-forest-deep text-center mb-8">
            Meet Other Team Members
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(teamMembersData)
              .filter(([id]) => id !== memberId)
              .slice(0, 6)
              .map(([id, m]) => (
                <Link
                  key={id}
                  href={`/team/${id}`}
                  className="group flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-sm hover:shadow-md transition-all border border-cream-warm"
                >
                  <span className="text-forest-deep group-hover:text-gold transition-colors font-medium">
                    {m.name}
                  </span>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/team"
              className="text-gold hover:text-forest-deep transition-colors font-medium"
            >
              View All Team Members →
            </Link>
          </div>
        </div>
      </section>
      </main>
      <InnerFooter />
    </>
  );
}
