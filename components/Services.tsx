"use client";

import {
  ArrowRight,
  Building2,
  Flame,
  Home,
  Package,
  Shield,
  Snowflake,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { PHONE_HREF, SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  snowflake: Snowflake,
  flame: Flame,
  install: Package,
  shield: Shield,
  house: Home,
  building: Building2,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Our HVAC Services"
            subtitle="From emergency repairs to full system installations, we handle it all."
          />
        </AnimatedSection>

        <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <article className="group flex h-full flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl sm:rounded-2xl sm:p-6 md:p-7">
                  <div className="mb-2 inline-flex rounded-lg bg-navy p-2 text-primary sm:mb-4 sm:rounded-xl sm:p-3">
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-navy sm:text-lg md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm leading-snug text-slate-600 sm:hidden">
                    {service.shortDescription}
                  </p>
                  <p className="mt-1.5 hidden flex-1 text-sm leading-relaxed text-slate-600 sm:block md:text-base">
                    {service.description}
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary-dark sm:mt-5 sm:gap-1.5 sm:text-sm md:text-base"
                  >
                    Learn More
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
