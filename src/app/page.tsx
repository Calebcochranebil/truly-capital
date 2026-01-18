import {
  Navbar,
  Hero,
  Products,
  Process,
  Testimonials,
  CTA,
  InnerFooter,
  PopupTrigger,
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
      <PopupTrigger delaySeconds={10} />
    </main>
  );
}
