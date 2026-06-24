"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="bg-light-gray py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimatedSection>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/about.jpg"
                alt="Residential home in Northeast Louisiana served by Dyer's AIRCO"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10" aria-hidden="true" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <SectionHeading
              title="Your Local Heating & Cooling Experts"
              centered={false}
            />
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              We are a locally owned HVAC company dedicated to providing
              professional, reliable, and honest heating and cooling services
              throughout Northeast Louisiana. Whether you need emergency AC
              repair, a new HVAC installation, or routine maintenance,
              Dyer's AIRCO is committed to getting the job done right the first
              time.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
