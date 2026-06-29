"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[75vh] items-center justify-center overflow-hidden pt-[4.5rem] md:min-h-[85vh] md:pt-20"
    >
      <Image
        src="/hero-background.jpg"
        alt="Outdoor residential air conditioning condenser installed beside a home"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_45%]"
        quality={85}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/50 to-navy/70"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 text-center sm:px-6 sm:py-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto mb-4 flex justify-center sm:mb-8">
            <Image
              src="/logo.png"
              alt="Dyer's AIRCO Heating & Cooling"
              width={448}
              height={154}
              className="h-auto w-64 drop-shadow-2xl sm:w-[26rem] md:w-[28rem]"
              priority
            />
          </div>

          <h1 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Keeping Northeast Louisiana Comfortable Year Round
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-lg md:text-xl">
            Professional Heating &amp; Cooling Services You Can Count On
          </p>

          <div className="mt-4 flex flex-col items-center gap-1.5 sm:mt-8 sm:gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
              ))}
              <span className="ml-1.5 text-xs font-semibold text-white sm:ml-2 sm:text-base">
                5.0 Google Rating
              </span>
            </div>
            <p className="text-xs font-medium text-white/80 sm:text-base">
              Locally Owned • Honest Service • Fast Response
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href={PHONE_HREF}
              className="group inline-flex min-h-[52px] w-full flex-col items-center justify-center rounded-2xl bg-primary px-6 py-3.5 text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-primary/50 sm:min-h-[56px] sm:w-auto sm:min-w-[240px] sm:px-8 sm:py-4"
            >
              <span className="flex items-center gap-2 text-base font-bold sm:text-lg">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </span>
              <span className="mt-0.5 text-sm font-medium text-white/90">
                {PHONE}
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 sm:min-h-[56px] sm:w-auto sm:min-w-[240px] sm:px-8 sm:py-4 sm:text-base"
            >
              Request Free Estimate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
