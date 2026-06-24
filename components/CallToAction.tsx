"use client";

import { Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function CallToAction() {
  return (
    <section id="contact" className="bg-primary py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <AnimatedSection>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Need HVAC Service Today?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            Call now and speak directly with a local HVAC professional.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-8 inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl bg-white px-10 py-4 text-lg font-bold text-primary shadow-xl transition-all hover:bg-light-gray hover:shadow-2xl"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            Call {PHONE}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
