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
    <section id="services" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Our HVAC Services"
            subtitle="From emergency repairs to full system installations, we handle it all."
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl md:p-7">
                  <div className="mb-4 inline-flex rounded-xl bg-navy p-3 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-navy sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {service.description}
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark sm:text-base"
                  >
                    Learn More
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
