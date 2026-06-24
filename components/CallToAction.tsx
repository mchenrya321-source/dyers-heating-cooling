"use client";

import { Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function CallToAction() {
  return (
    <section id="contact" className="bg-primary py-8 md:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <AnimatedSection>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Need HVAC Service Today?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/90 sm:mt-4 sm:max-w-lg sm:text-lg">
            Call now and speak directly with a local HVAC professional.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-5 inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl bg-white px-8 py-3.5 text-base font-bold text-primary shadow-xl transition-all hover:bg-light-gray hover:shadow-2xl sm:mt-8 sm:min-h-[60px] sm:px-10 sm:py-4 sm:text-lg"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            Call {PHONE}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
