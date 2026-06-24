import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <SectionPlaceholder />,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <SectionPlaceholder />,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionPlaceholder />,
});
const Reviews = dynamic(() => import("@/components/Reviews"), {
  loading: () => <SectionPlaceholder />,
});
const ServiceArea = dynamic(() => import("@/components/ServiceArea"), {
  loading: () => <SectionPlaceholder />,
});
const CallToAction = dynamic(() => import("@/components/CallToAction"), {
  loading: () => <SectionPlaceholder />,
});
const Footer = dynamic(() => import("@/components/Footer"));

function SectionPlaceholder() {
  return <div className="h-32 animate-pulse bg-light-gray" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <About />
        <Reviews />
        <ServiceArea />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
