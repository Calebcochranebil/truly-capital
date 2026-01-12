import {
  Navbar,
  Hero,
  Products,
  Process,
  Testimonials,
  CTA,
  InnerFooter,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Process />
      <Testimonials />
      <CTA />
      <InnerFooter />
    </main>
  );
}
