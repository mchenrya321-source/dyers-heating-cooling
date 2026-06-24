"use client";

import { MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { BUSINESS, PHONE, PHONE_HREF } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section id="service-areas" className="bg-light-gray py-10 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy sm:text-3xl">
            Proudly Serving Northeast Louisiana
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-lg">
            Local heating and cooling service for homes and businesses across
            Monroe, West Monroe, and surrounding communities.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-5 sm:mt-8 md:mt-10">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
            {BUSINESS.serviceAreas.map((city) => (
              <li
                key={city}
                className="flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-2.5 sm:rounded-xl sm:px-5 sm:py-4"
              >
                <span className="inline-flex shrink-0 rounded-md bg-primary/10 p-1 text-primary sm:rounded-lg sm:p-1.5">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" strokeWidth={2.5} />
                </span>
                <span className="text-xs font-semibold text-navy sm:text-base">
                  {city}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="mt-5 text-center sm:mt-8 md:mt-10">
          <p className="mx-auto hidden max-w-2xl text-sm leading-relaxed text-slate-600 sm:block md:text-base">
            No matter where you are in our service area, Dyer's AIRCO Heating
            &amp; Cooling provides dependable local HVAC service with honest
            workmanship and prompt response times.
          </p>

          <a
            href={PHONE_HREF}
            className="mt-4 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40 sm:mt-8 sm:min-h-[52px] sm:gap-2.5 sm:px-8 sm:py-3.5 sm:text-lg"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            Call {PHONE}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
