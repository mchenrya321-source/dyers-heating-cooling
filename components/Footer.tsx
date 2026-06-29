import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, PHONE, PHONE_HREF } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy py-8 text-white md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="Dyer's AIRCO Heating & Cooling"
              width={224}
              height={78}
              className="h-16 w-auto"
              loading="lazy"
            />
            <a
              href={PHONE_HREF}
              className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {PHONE}
            </a>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              Business Hours
            </h3>
            <ul className="space-y-2">
              {BUSINESS.hours.map((item) => (
                <li key={item.days} className="flex gap-2 text-sm">
                  <Clock
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-medium text-white">{item.days}</span>
                    <br />
                    <span className="text-white/70">{item.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-1.5">
              {BUSINESS.serviceAreas.map((city) => (
                <li key={city} className="flex items-center gap-1.5 text-sm text-white/80">
                  <MapPin className="h-3 w-3 shrink-0 text-primary" aria-hidden="true" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-white/80 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-white/80 transition-colors hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#service-areas" className="text-white/80 transition-colors hover:text-white">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-white/50 sm:mt-10 sm:pt-6">
          &copy; {year} {BUSINESS.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
