"use client";

import {
  BadgeCheck,
  Clock,
  DollarSign,
  Heart,
  Home,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  badge: BadgeCheck,
  clock: Clock,
  dollar: DollarSign,
  wrench: Wrench,
  heart: Heart,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-light-gray py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Why Choose Dyer's AIRCO"
            subtitle="Trusted by homeowners across Northeast Louisiana for reliable, honest HVAC service."
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="group h-full rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-6 md:p-7">
                  <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:mb-4 sm:rounded-xl sm:p-3">
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-navy sm:text-lg">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
