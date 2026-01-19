"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
  hasPhoto?: boolean;
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
    title: "Regional Sales Manager",
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
    title: "Regional Sales Manager",
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
    title: "Regional Sales Manager",
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
    title: "Regional Sales Manager",
    phone: "208.748.9159",
    email: "jmoreno@trulyinvestorcap.com",
    image: "/team/james-moreno.jpg",
    bio: [
      "James Moreno is a Regional Sales Manager, bringing over 10 years of experience in financial services and investment strategy. With a strong background in client relationship management and capital growth solutions, James helps investors identify and execute opportunities that align with their long-term financial goals.",
      "He holds a Bachelor's degree in Finance from Texas State University and is dedicated to delivering data-driven insights and exceptional client service across the nation.",
    ],
  },
  "barton-lewis": {
    name: "Barton Lewis",
    title: "Regional Sales Manager",
    phone: "213.822.4733",
    email: "blewis@trulyinvestorcap.com",
    image: "/team/barton-lewis.jpg",
    hasPhoto: true,
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
      <div className="bg-forest-deep pt-24 sm:pt-28 pb-6 sm:pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider uppercase">Back to Team</span>
          </Link>
        </div>
      </div>

      {/* Hero Section with Profile */}
      <section className="relative bg-forest-deep pt-8 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Mobile Photo - shown above content on small screens */}
          {member.hasPhoto && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8 lg:hidden"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gold/30 shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2 sm:mb-3"
              >
                {member.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gold text-lg sm:text-xl md:text-2xl mb-2"
              >
                {member.title}
              </motion.p>

              {member.nmls && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-white/50 text-sm mb-6"
                >
                  NMLS# {member.nmls}
                </motion.p>
              )}

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 sm:mb-8"
              >
                <a
                  href={`tel:${member.phone.replace(/\./g, "")}`}
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/15 px-4 sm:px-6 py-2.5 sm:py-3 rounded transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  <span className="text-white text-sm sm:text-base">{member.phone}</span>
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/15 px-4 sm:px-6 py-2.5 sm:py-3 rounded transition-colors"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  <span className="text-white text-xs sm:text-sm truncate max-w-[200px] sm:max-w-none">{member.email}</span>
                </a>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <a href="tel:8662192294" className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4">
                  <FileText className="w-4 h-4" />
                  Request A Quote
                </a>
                <a
                  href="https://applications.trulyinvestorcapital.com/form-6571272/?N8yvhYgdEG4zFKZ5cu5pWA1Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4"
                >
                  <MessageSquare className="w-4 h-4" />
                  Apply Now
                </a>
              </motion.div>
            </div>

            {/* Profile Photo - only shown if hasPhoto is true */}
            {member.hasPhoto && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-shrink-0 hidden lg:block"
              >
                <div className="w-56 h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 -mt-10 sm:-mt-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-5 sm:p-8 md:p-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep mb-6 sm:mb-8 pb-4 border-b border-cream-warm">
              About Me
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {member.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-slate text-sm sm:text-base leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-cream-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl text-forest-deep mb-3 sm:mb-4"
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate text-sm sm:text-base mb-6 sm:mb-8"
          >
            Reach out to {member.name.split(" ")[0]} today to discuss financing needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a
              href={`tel:${member.phone.replace(/\./g, "")}`}
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              Call {member.phone}
            </a>
            <a
              href={`mailto:${member.email}`}
              className="bg-forest-deep text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-xs sm:text-sm tracking-widest uppercase hover:bg-forest transition-colors"
            >
              Send Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="font-display text-xl sm:text-2xl text-forest-deep text-center mb-6 sm:mb-8">
            Meet Other Team Members
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {Object.entries(teamMembersData)
              .filter(([id]) => id !== memberId)
              .slice(0, 6)
              .map(([id, m]) => (
                <Link
                  key={id}
                  href={`/team/${id}`}
                  className="group flex items-center gap-2 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-sm hover:shadow-md transition-all border border-cream-warm"
                >
                  <span className="text-forest-deep group-hover:text-gold transition-colors font-medium text-sm sm:text-base">
                    {m.name}
                  </span>
                </Link>
              ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/team"
              className="text-gold hover:text-forest-deep transition-colors font-medium text-sm sm:text-base"
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
