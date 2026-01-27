"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Navbar, InnerFooter } from "@/components";

export default function PrivacyPage() {
  return (
    <>
      <Navbar currentPage="/privacy" />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative bg-forest-deep pt-40 pb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Back Link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Back to Home</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/20 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-gold" />
                </div>
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                  Your Privacy Matters
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl text-white mb-6">
                Consumer Privacy Policy
              </h1>

              <p className="text-white/70 text-lg leading-relaxed">
                Customer service is very important to us. As we continue to improve and expand our services,
                we recognize our customers' need and desire to preserve their privacy and confidentiality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-cream-warm p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-forest/80 leading-relaxed mb-8">
                  Safeguarding our customers' privacy is also very important to us. We have adopted standards
                  that help maintain and preserve the confidentiality of customers' nonpublic personal information.
                  The following Statement affirms our continued efforts to safeguard customer information.
                </p>

                {/* Information We Collect */}
                <h2 className="font-display text-2xl text-forest-deep mt-12 mb-6">Information We Collect</h2>
                <p className="text-forest/70 mb-4">
                  We gather nonpublic personal information about our customers as may be necessary to conduct
                  business with our customers. We collect nonpublic personal information about you from the following sources:
                </p>
                <ul className="space-y-4 text-forest/70 mb-8">
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Information from applications and forms:</strong> Information
                    we receive from you on applications or other forms, over the telephone or in face-to-face meetings,
                    and via the Internet. Examples include your name, address, telephone number, social security number,
                    credit history and other financial information.
                  </li>
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Transaction information:</strong> Information about your
                    transactions with us or others. Examples include payment histories, account balances and account activity.
                  </li>
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Consumer reporting agencies:</strong> Information we receive
                    from a consumer reporting agency. Examples include your credit score, credit reports and other
                    information relating to your creditworthiness.
                  </li>
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Verification from employers and others:</strong> Information
                    from employers and others to verify information you have given to us. Examples include verifications
                    of employment, income or deposits.
                  </li>
                </ul>

                {/* Information We Disclose */}
                <h2 className="font-display text-2xl text-forest-deep mt-12 mb-6">Information We Disclose</h2>
                <p className="text-forest/70 mb-4">
                  Your personal information will only be retained for the purpose of providing you with our response
                  to your query and will not be made available to any third party except as necessary to be disclosed
                  to any related entity for the purpose intended or as required to be disclosed under law.
                </p>
                <p className="text-forest/70 mb-4">
                  By submitting data on our website, the visitor is providing explicit consent to transmission of
                  data collected on the website.
                </p>
                <p className="text-forest/70 mb-4">
                  We treat data as confidential within our firm and require a strict adherence of all our employees
                  to data protection and our confidentiality policies.
                </p>
                <p className="text-forest/70 mb-8">
                  All visitors, however, should be aware that our website may contain links to other sites that are
                  not governed by this or any other privacy statement.
                </p>
                <p className="text-forest/70 mb-8">
                  We reserve the right to amend (that is, add to, delete or change) the terms of this Privacy
                  Statement from time to time.
                </p>

                {/* CCPA Section */}
                <div className="bg-forest-deep/5 border border-forest-deep/10 p-6 md:p-8 my-12">
                  <h2 className="font-display text-2xl text-forest-deep mb-4">
                    California Consumer Privacy Act Privacy Notice
                  </h2>
                  <p className="text-forest/60 text-sm">
                    California Residents: See below for California Consumer Protection Act information
                  </p>
                </div>

                <p className="text-forest/70 mb-4">
                  This privacy notice supplements the general privacy policy notice of Truly Investor Capital.
                  This supplemental privacy policy applies solely to consumers who reside in the State of California ("you").
                  Truly Investor Capital adopts this notice to comply with the California Consumer Privacy Act of 2018,
                  as amended ("CCPA") and other applicable California privacy laws. Any terms defined in the CCPA have
                  the same meaning when used in this notice.
                </p>
                <p className="text-forest/70 mb-8">
                  The CCPA was passed by the State of California in 2018 and provides California residents with the
                  following rights over their personal information: (a) the right to access, transfer, edit and delete
                  their personal data with a verifiable consumer request; and (b) the ability to opt out of certain
                  data-processing practices. In addition, California residents have the right to: (a) know what information
                  is being collected about them; (b) know if their personal information is sold or disclosed, and to whom;
                  (c) say "no" to the sale of personal information; and (d) equal service and price, even if they exercise
                  their privacy rights under the CCPA.
                </p>
                <p className="text-forest/70 mb-8 font-semibold">
                  Truly Investor Capital does not and will not discriminate in any way against any consumers who choose
                  to exercise their rights under the CCPA.
                </p>

                {/* What Information We Collect */}
                <h2 className="font-display text-2xl text-forest-deep mt-12 mb-6">What Information We Collect About You</h2>
                <p className="text-forest/70 mb-4">
                  We may obtain certain personal information (such as name and other contact details) through our Sites.
                  Here are the most common types of information: Contact information (such as name, postal address, e-mail
                  address, telephone number and fax number); Login and access credentials (such as username and password);
                  Information about your property or mortgage loan; Age and gender; Real estate license number.
                </p>
                <p className="text-forest/70 mb-6">
                  As part of its business and efforts to serve you, Truly Investor Capital collects information that
                  identifies, relates to, describes, references, is capable of being associated with, or could reasonably
                  be linked, directly or indirectly, with a particular consumer. Specifically, we have collected (in the
                  preceding 12 months) and are collecting the following categories of personal information from consumers:
                </p>
                <ul className="space-y-4 text-forest/70 mb-8">
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Personal Identifiers:</strong> Consumer's real name, alias,
                    postal address, unique personal identifier, online identifier, Internet Protocol address, email address,
                    Social Security Number, driver's license number, passport number, state identification number, and
                    other similar identifiers.
                  </li>
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Personal Information Categories in the California Customer Records Statute:</strong> Name,
                    signature, Social Security Number, physical characteristics or description, address, telephone number,
                    passport number, driver's license number, state identification number, insurance policy number, education,
                    credit history and credit profile, employment and employment history, bank account number, credit card
                    number debit card number, or any other financial information.
                  </li>
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Protected Classification Characteristics Under California and/or Federal Law:</strong> Age,
                    race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition,
                    physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or
                    childbirth and related medical conditions), sexual orientation, and veteran or military status.
                  </li>
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Employment-Related Information:</strong> Current or past job
                    history or performance evaluations or reference checks.
                  </li>
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Internet Activity:</strong> Browsing history, search history,
                    information on a consumer's interaction with a website, application, or advertisement.
                  </li>
                  <li className="pl-4 border-l-2 border-gold">
                    <strong className="text-forest-deep">Commercial Information:</strong> Records of property, products
                    or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.
                  </li>
                </ul>

                {/* How We Collect */}
                <h2 className="font-display text-2xl text-forest-deep mt-12 mb-6">How We Collect Your Information</h2>
                <p className="text-forest/70 mb-8">
                  We collect your personal information from the foregoing categories: (a) directly from you when you
                  complete required applications, agreements and disclosure forms; (b) indirectly from you when we collect
                  the information during the course of services that we provide to you, that you have consented to receive
                  and that are necessary to support our services to you; (c) information that you provide when interacting
                  with our websites (d) from third-parties that interact with us in connection with the services that we
                  provide to you; (e) from third-parties who provide us with data used for marketing purposes.
                </p>

                {/* How We Use */}
                <h2 className="font-display text-2xl text-forest-deep mt-12 mb-6">How We Use the Information We Collect About You</h2>
                <p className="text-forest/70 mb-4">
                  Truly Investor Capital uses the personal information we collect from you for the following business
                  purposes: (a) to provide you with information, products, or services that you have requested of us;
                  (b) to market our products and services to you; (c) to provide you with notices; (d) to improve our
                  website; (e) to carry out our obligations and enforce our rights arising from any contracts entered
                  into between you and us, or between third-party vendors and us, including for billing and collections;
                  (f) to respond to court orders and legal requests; (g) to aid in hiring and other employment decisions;
                  and (h) as necessary to protect our interests.
                </p>
                <p className="text-forest/70 mb-8">
                  Verify your identity; Provide, administer and communicate with you about products, services, and events;
                  Create, administer and communicate with you about your online account or subscription; Process, evaluate
                  and respond to your requests, inquiries and applications; Provide and administer communications tools
                  available through our sites; Operate, evaluate and improve our business (including developing new products
                  and services; managing our communications; performing market research; managing our advertising and
                  marketing; analyzing our products, services and our sites; administering our sites; and performing
                  accounting, auditing, billing, reconciliation and collection activities); Protect against and prevent
                  fraud, unauthorized activity, claims and other liabilities; or Comply with and enforce applicable legal
                  requirements, industry standards and our policies and terms of use. We also may use the information in
                  other ways for which we provide specific notice at the time of collection.
                </p>

                {/* We Do Not Sell */}
                <div className="bg-gold/10 border border-gold/20 p-6 md:p-8 my-12">
                  <h2 className="font-display text-2xl text-forest-deep mb-4">We Do Not Sell Your Information</h2>
                  <p className="text-forest/70">
                    Truly Investor Capital does not sell personal information. We do not sell or otherwise disclose
                    personal information we collect on our Sites, except as described here.
                  </p>
                </div>

                <p className="text-forest/70 mb-4">
                  We may share the information with our service providers who perform services on our behalf. These
                  service providers are not authorized by us to use or disclose the information except as necessary
                  to perform services on our behalf or comply with legal requirements. We may also provide personal
                  information to third parties such as technology providers to enable such third parties to perform
                  business, professional and technical support functions for us, our Sites or for you.
                </p>
                <p className="text-forest/70 mb-4">
                  Truly Investor Capital can and does disclose your personal information to third-parties for a business
                  purpose. When we disclose personal information to a non-governmental entity, we enter a contract that
                  describes the purposes and requires the recipients to both keep that personal information confidential
                  and not use it for any purpose except for the performance of the contract. We may disclose your personal
                  information to the following categories of third-parties: (a) our affiliates; (b) vendors; (c) third-parties
                  whom you or your agent has authorized to receive your personal information; (d) third-parties who provide
                  marketing services for us; and (e) regulatory agencies, courts and other authorities who have requested
                  your personal information pursuant to applicable law.
                </p>
                <p className="text-forest/70 mb-8">
                  In the preceding 12-month period, we have disclosed, for a business purpose, the following categories
                  of personal information to third-parties: (a) Personal Identifiers; (b) Personal Information Categories
                  in the California Customer Records Statute; (c) Protected Classification Characteristics Under California
                  and/or Federal Law; (d) Employment-Related Information; and (e) Internet Activity.
                </p>

                {/* How We Protect */}
                <h2 className="font-display text-2xl text-forest-deep mt-12 mb-6">How We Protect Personal Information</h2>
                <p className="text-forest/70 mb-8">
                  We maintain administrative, technical and physical safeguards designed to protect the personal information
                  we collect on our Sites against accidental, unlawful or unauthorized destruction, loss, alteration, access,
                  disclosure or use. Links to Other Websites, Features, and Embedded Content. For your convenience and
                  information, our Sites may provide links to other Websites or online services, including social media
                  sites, or present content or features from other Websites or other third parties. These Websites may
                  operate independently from Truly Investor Capital. The Websites may have their own privacy notices or
                  policies, which we strongly suggest you review if you visit any linked Web site or pages containing
                  content hosted by other Web sites. To the extent such Websites are not owned or controlled by Truly
                  Investor Capital, we are not responsible for the Web site's content, any use of the Website, or the
                  privacy practices of the Website.
                </p>

                {/* Under 18 */}
                <h2 className="font-display text-2xl text-forest-deep mt-12 mb-6">We Do Not Do Business or Collect Information on People under 18 Years Old</h2>
                <p className="text-forest/70 mb-8">
                  We do not knowingly collect information from people under 18 years old.
                </p>

                {/* Financial Incentives */}
                <h2 className="font-display text-2xl text-forest-deep mt-12 mb-6">Financial Incentives for Providing Data or Not Exercising Your Rights</h2>
                <p className="text-forest/70 mb-8">
                  Truly Investor Capital does not provide any financial incentives for providing your personal information
                  to Truly Investor Capital, or for not exercising your rights under the CCPA.
                </p>

                {/* Your Rights */}
                <h2 className="font-display text-2xl text-forest-deep mt-12 mb-6">Your Rights Under the California Consumer Privacy Act of 2018</h2>
                <p className="text-forest/70 mb-4">In CA AB 375, people are granted the following rights in SEC 2 (i):</p>
                <ol className="list-decimal list-inside space-y-2 text-forest/70 mb-8 pl-4">
                  <li>The right of Californians to know what personal information is being collected about them.</li>
                  <li>The right of Californians to know whether their personal information is sold or disclosed and to whom.</li>
                  <li>The right of Californians to say no to the sale of personal information.</li>
                  <li>The right of Californians to access their personal information.</li>
                  <li>The right of Californians to equal service and price, even if they exercise their privacy rights.</li>
                </ol>

                <p className="text-forest/70 mb-4">You have the following rights under the CCPA by submitting a verifiable consumer request:</p>
                <ul className="space-y-4 text-forest/70 mb-8">
                  <li className="pl-4 border-l-2 border-gold">
                    The right to request that we disclose certain information to you about our collection and use of your
                    personal information over the past 12 months;
                  </li>
                  <li className="pl-4 border-l-2 border-gold">
                    The right to request that we delete any of your personal information that we have collected from you
                    and retained, subject to certain exceptions. Under the CCPA, we are not required to comply with your
                    request to delete your personal information if retaining your personal information is necessary to:
                    (i) complete the transaction for which we collected the personal information, provide a good or service
                    that you requested, take actions reasonably anticipated within the context of our ongoing business
                    relationship with you, or otherwise perform our contract with you; (ii) detect security incidents,
                    protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible
                    for such activities; (iii) debug products to identify and repair errors that impair existing intended
                    functionality; (iv) exercise free speech another right provided for by law; (v) comply with the
                    California Electronic Communications Privacy Act; (vi) enable solely internal uses that are reasonably
                    aligned with consumer expectations based on your relationship with us; (vii) comply with a legal
                    obligation; and (viii) make other internal and lawful uses of that information that we are compatible
                    with the context in which you provided it.
                  </li>
                </ul>

                <p className="text-forest/70 mb-4">
                  A verifiable consumer request requires the following: (a) sufficient information that allows us to
                  reasonably verify you are the person about whom we collected personal information or an authorized
                  representative; and (b) description of your request with sufficient detail to allow Truly Investor
                  Capital to properly understand, evaluate and respond to the request. Should your verifiable consumer
                  request require more information, we will contact you to request such information.
                </p>
                <p className="text-forest/70 mb-4">
                  Only you or a person registered with the California Secretary of State that you authorize to act on
                  your behalf may make a verifiable consumer request related to your personal information. You may also
                  make a verifiable consumer request on behalf of your minor child.
                </p>
                <p className="text-forest/70 mb-4">
                  You are allowed to make a verifiable consumer request twice within a 12-month period. Under the CCPA,
                  we cannot respond to your request or provide you with the requested information if we are unable to
                  verify your identity or authority to make the request and confirm the personal information relates to you.
                </p>
                <p className="text-forest/70 mb-8">
                  Truly Investor Capital will provide you with the requested information once we receive a verifiable
                  consumer request from you. We may, at our sole discretion, provide the requested information to you
                  via mail or electronically. If we elect to send the requested information to you electronically, we
                  will provide the information in a portable, and to the extent technically feasible, in a readily useable
                  format that allows you to transmit the information to another party without hindrance. Truly Investor
                  Capital will attempt to respond to a verifiable consumer request within 45 days of receipt. If we require
                  more time (up to 90 days) we will inform you in writing of the reason for requiring more time and the
                  additional time required to respond. We do not charge for this service.
                </p>

                {/* Contact Section */}
                <div className="bg-forest-deep text-white p-6 sm:p-8 md:p-10 mt-12">
                  <h2 className="font-display text-xl sm:text-2xl mb-6">Exercise Your Rights</h2>
                  <p className="text-white/80 mb-6 text-sm sm:text-base">
                    You may exercise your right to access or delete the personal information we have of you by making
                    a verifiable consumer request:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <a href="tel:8662192294" className="text-white hover:text-gold transition-colors text-sm sm:text-base">
                        (866) 219-2294 <span className="text-white/60 block sm:inline">(during business hours)</span>
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <a href="mailto:customersupport@trulyinvestorcapital.com" className="text-white hover:text-gold transition-colors text-sm sm:text-base break-all">
                        customersupport@trulyinvestorcapital.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <address className="not-italic text-white/80 text-sm sm:text-base">
                        Truly Investor Capital<br />
                        Compliance Department<br />
                        3133 W Frye Rd Suite 205<br />
                        Chandler, AZ 85226<br />
                        NMLS ID# 71640
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
