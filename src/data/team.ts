export interface TeamMember {
  id: string;
  name: string;
  title: string;
  nmls?: string;
  phone: string;
  email: string;
  image: string;
  hasPhoto?: boolean;
  isLeadership: boolean;
  bio: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "darin-judis",
    name: "Darin Judis",
    title: "President, Truly Investor Capital",
    phone: "626.716.2556",
    email: "djudis@trulyinvestorcap.com",
    image: "/team/darin-judis.jpg",
    isLeadership: true,
    bio: [
      "Darin is a veteran mortgage executive with over 30 years of experience driving growth and innovation in wholesale and correspondent lending. As President of Truly Investor Capital and EVP of Correspondent Lending at Oaktree Funding Corp, he leads national strategy and partnerships, delivering scalable solutions that strengthen market presence and client success.",
      "Throughout his career, Darin has held senior leadership roles at Axos Bank, IndyMac Bank, and Aames Capital Corp, consistently building high-performing teams and guiding organizations through expansion in both residential lending and real estate investment finance.",
      "Recognized for his ability to optimize operations and foster long-term partnerships, Darin has a proven track record of aligning business strategy with execution to achieve measurable results. Based in California, he continues to be a trusted leader in third-party origination, shaping the future of correspondent and wholesale lending.",
    ],
  },
  {
    id: "heidi-hawk",
    name: "Heidi Hawk",
    title: "Regional Sales Manager",
    phone: "360.910.3117",
    email: "heidi.hawk@trulyinvestorcap.com",
    image: "/team/heidi-hawk.jpg",
    isLeadership: false,
    bio: [
      "Heidi Hawk is a nationally recognized expert in private money lending for SFR & small MFR real estate asset classes, and is recognized as one of the Top Women Originators by the Scotsman Guide. With over 25 years of experience, Heidi has built a reputation for precision pre-underwriting, strategic deal/loan structuring, along with pre- and post-closing customer care, which has lead her into long standing real estate investor relationships.",
      "Her expertise extends across the full lifecycle of real estate: Owner & Managing Real Estate Broker in 3 states specializing in SFR & MFR developments/subdivisions and new construction sales; Regional Sales Manager for National & Regional Builders; Regional Business Development for a National Title/Escrow Company; and in the last 8 years, a National Loan Originator for business purpose lending where she has successfully originated and closed over $500M in loans inclusive of A&D, ground up, bridge, & DSCR (rental) financing.",
      "Heidi holds multiple industry licenses & certifications: National NMLS, State NMLS in OR, WA, ID, UT, NV, AZ, and MIRM, CAPS, ADU, CCIM. She has served in leadership roles with the National & Regional Home Builders Associations, Professional Women in Building, CREW, and currently is the Co-Chair for Salt Lake County Parade of Homes.",
      "Heidi's strategic insight to seasoned builders and real estate investors seeking reliable capital for ground up, value add and/or long term debt, makes her a great addition to empower your success.",
    ],
  },
  {
    id: "kris-kaba",
    name: "Kris Kaba",
    title: "Regional Sales Manager",
    phone: "760.585.8931",
    email: "kkaba@trulyinvestorcap.com",
    image: "/team/kris-kaba.jpg",
    isLeadership: false,
    bio: [
      "Kris is a UC San Diego Finance graduate with over 10 years of experience in the financial industry. After years of trading for a major broker-dealer in San Diego, he transitioned into private money lending.",
      "Kris is dedicated to providing exceptional service, building long-term relationships and helping clients build real estate wealth.",
    ],
  },
  {
    id: "kevin-kavanaugh",
    name: "Kevin Kavanaugh",
    title: "Vice President, National Sales Manager",
    phone: "480.856.9158",
    email: "kkavanaugh@trulyinvestorcap.com",
    image: "/team/kevin-kavanaugh.jpg",
    isLeadership: true,
    bio: [
      "Kevin Kavanaugh is an accomplished Business Development Manager with more than a decade of experience driving growth in sales, marketing, and product strategy. He has a proven record of exceeding sales goals, launching new products, and strengthening profit and loss performance while leading high-performing teams.",
      "Holding a Bachelor of Science in Electrical Engineering from the Georgia Institute of Technology, Kevin also brings advanced training in solution selling and financial services. His expertise in building strong client relationships and delivering consistent results makes him a valuable asset to Truly Investor Capital.",
    ],
  },
  {
    id: "jolisa-garrett",
    name: "Jolisa Garrett",
    title: "Processing Manager",
    phone: "480.493.1959",
    email: "Jgarrett@oaktreefunding.com",
    image: "/team/jolisa-garrett.jpg",
    isLeadership: true,
    bio: [
      "Jolisa Garrett serves as the Processing Manager at Truly Investor Capital, bringing expertise and dedication to ensuring smooth loan processing operations.",
    ],
  },
  {
    id: "casey-koelsch",
    name: "Casey Koelsch",
    title: "Regional Sales Manager",
    phone: "224.422.8882",
    email: "ckoelsch@trulyinvestorcap.com",
    image: "/team/casey-koelsch.jpg",
    isLeadership: false,
    bio: [
      "Casey Koelsch has been in the financing industry for over 20 years, where she achieved multiple-time nationwide Top Performer and President's Club status. Her main focus is providing excellent Customer Service from every stage of the transaction.",
      "While Casey helps clients build their investment portfolios, she also assists brokers and referral partners in building their book of business. She takes pride in her expertise on Truly Investor Capital's full product suite, and knowing what is best for her clients, for present and future.",
      "Truly Investor Capital provides Fix & Flip, Bridge, New Construction, DSCR/Single/Portfolio Rental loans, Multi-Family and Mixed-Use to residential real estate investors across the country, helping our clients overcome traditional financing hurdles and build long-term wealth through real estate investment. Casey Truly looks forward to helping you and your client GROW!",
    ],
  },
  {
    id: "barton-lewis",
    name: "Barton Lewis",
    title: "Regional Sales Manager",
    phone: "213.822.4733",
    email: "blewis@trulyinvestorcap.com",
    image: "/team/barton-lewis.jpg",
    hasPhoto: true,
    isLeadership: false,
    bio: [
      "With over 15 years of mortgage experience in roles like Senior Account Executive, EVP, and Operations Director, Barton Lewis is committed to supporting your real estate investment goals at Truly Investor Capital. He brings deep knowledge of our tailored loan products—Rehab, Bridge, New Construction, Single Property Rental, Multifamily Rental, and Portfolio Loans—to guide you through every step of the financing process with clarity and care.",
      "At Truly, Barton lives our mission: People, Partnerships, and Process. He focuses on understanding your unique needs, offering clear guidance, and ensuring a smooth, stress-free experience with fast closings. His work supports Truly's reputation for reliable execution and attention to detail on all loan sizes, and he's here to make your financing journey seamless as an expert in all of our programs.",
      "Outside of work, Barton enjoys exploring new places, staying active, and riding mountain bike trails, bringing that same energy and dedication to helping you succeed. With Barton and Truly Investor Capital, you'll find a supportive partner, competitive rates, and a streamlined process designed to make securing your investment financing simple and worry-free.",
      "Connect with Barton to experience the Truly Difference and move forward with confidence in your next real estate deal!",
    ],
  },
  {
    id: "mike-meyers",
    name: "Mike Meyers",
    title: "Regional Sales Manager",
    phone: "630.308.7318",
    email: "mmeyers@trulyinvestorcap.com",
    image: "/team/mike-meyers.jpg",
    isLeadership: false,
    bio: [
      "Mike boasts an impressive resume of over 30 years in the mortgage industry with a focus on operations, management, underwriting and sales. For the past 22 years he's worked exclusively in sales.",
      "Most recently, he worked for the past 6 years in Commercial Mortgage, originating myriad loans including the following products: Fix/Flip, Bridge, Long Term Rental, Multi-Family, Ground up Construction-both vertical and horizontal. As a salesperson he consistently produces high volume in closings.",
      "Mike is bringing his expertise to Truly Investor Capital's Business Purpose Lending team providing premier sales support investors in search of sensible financing options.",
    ],
  },
  {
    id: "james-moreno",
    name: "James Moreno",
    title: "Regional Sales Manager",
    phone: "208.748.9159",
    email: "jmoreno@trulyinvestorcap.com",
    image: "/team/james-moreno.jpg",
    isLeadership: false,
    bio: [
      "James Moreno is a Regional Sales Manager, bringing over 10 years of experience in financial services and investment strategy. With a strong background in client relationship management and capital growth solutions, James helps investors identify and execute opportunities that align with their long-term financial goals.",
      "He holds a Bachelor's degree in Finance from Texas State University and is dedicated to delivering data-driven insights and exceptional client service across the nation.",
    ],
  },
  {
    id: "alex-tkachenko",
    name: "Alex Tkachenko",
    title: "Regional Sales Manager",
    phone: "480.856.9191",
    email: "atkachenko@trulyinvestorcap.com",
    image: "/team/alex-tkachenko.jpg",
    isLeadership: false,
    bio: [
      "Alex is an Account Executive specializing in investment property financing, with experience funding bridge loans, fix-and-flip projects, ground-up construction, and DSCR loans. Since graduating from Washington State University in 2024, he's completed a full year of service in this role, successfully funding deals across all 50 states and helping investors achieve their real estate goals.",
      "What drives Alex most is his passion for helping clients succeed—whether that means securing the right loan, expanding their portfolios, or bringing their real estate visions to life.",
      "Outside of work, Alex is an avid mountain climber, having summited Mount Fuji, Mount Rainier, Mount Kilimanjaro, Mount Baker, and Mount Adams. The same dedication, persistence, and focus he brings to the mountains is what he brings to every client relationship.",
    ],
  },
  {
    id: "luke-weber",
    name: "Luke Weber",
    title: "Regional Sales Manager",
    phone: "630.670.7706",
    email: "lweber@trulyinvestorcap.com",
    image: "/team/luke-weber.jpg",
    isLeadership: false,
    bio: [
      "With 20+ years of professional mortgage, real estate, and construction experience, Luke is a trusted advisor for all his clients. He offers creative lending solutions to help his clients increase their cash flow, maximize their return on investments, and grow their businesses.",
      "Luke has personally completed 37 Fix & Flip Rehabs, including 14 New Construction, in his career. He enjoys helping his clients each step of the way including property acquisition, financing, budgeting, and trade selections.",
      "In the often-complex world of real estate investing, you want a dynamic resource like Luke on your side. Truly Investor Capital provides Fix & Flip, Bridge, New Construction, and Single/Portfolio Rental loans to residential real estate investors across the country, helping our clients overcome traditional financing hurdles and build long-term wealth through real estate investment.",
    ],
  },
  {
    id: "andrew-haines",
    name: "Andrew Haines",
    title: "Regional Sales Manager",
    phone: "610.283.3532",
    email: "ahaines@trulyinvestorcap.com",
    image: "/team/andrew-haines.jpg",
    isLeadership: false,
    bio: [
      "Bio coming soon.",
    ],
  },
  {
    id: "brian-welborne",
    name: "Brian Welborne",
    title: "Regional Sales Manager",
    phone: "866.219.2294",
    email: "bwelborne@trulyinvestorcap.com",
    image: "/team/brian-welborne.jpg",
    isLeadership: false,
    bio: [
      "As a Regional Sales Manager at Truly Investor Capital, I strive to provide excellent service. I pride myself on my responsiveness as I always get back to my Broker Partners in a timely fashion. I have been in the industry for over 30 years, with experience as a wholesale account executive, mortgage loan originator and real estate agent.",
      "In my spare time, I enjoy golfing. My motto is A B C! Always Be Closing! I am proud to be part of the Truly Investor Capital Lending Team!",
    ],
  },
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id);
}

export function getLeadership(): TeamMember[] {
  return teamMembers.filter((member) => member.isLeadership);
}

export function getSalesTeam(): TeamMember[] {
  return teamMembers.filter((member) => !member.isLeadership);
}
