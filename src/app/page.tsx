import {
  AnnouncementBar,
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
      <AnnouncementBar />
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
