"use client";

import { MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { BUSINESS, PHONE, PHONE_HREF } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section id="service-areas" className="bg-light-gray py-12 md:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Proudly Serving Northeast Louisiana
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Local heating and cooling service for homes and businesses across
            Monroe, West Monroe, and surrounding communities.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-8 md:mt-10">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {BUSINESS.serviceAreas.map((city) => (
              <li
                key={city}
                className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-4"
              >
                <span className="inline-flex shrink-0 rounded-lg bg-primary/10 p-1.5 text-primary">
                  <MapPin className="h-4 w-4" aria-hidden="true" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-semibold text-navy sm:text-base">
                  {city}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="mt-8 text-center md:mt-10">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            No matter where you are in our service area, Dyer's AIRCO Heating
            &amp; Cooling provides dependable local HVAC service with honest
            workmanship and prompt response times.
          </p>

          <a
            href={PHONE_HREF}
            className="mt-6 inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40 sm:mt-8 sm:text-lg"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {PHONE}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
