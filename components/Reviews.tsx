"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { REVIEWS } from "@/lib/constants";

function ReviewCard({
  text,
  author,
  compact = false,
  className = "",
}: {
  text: string;
  author: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 md:p-7 ${className}`}
    >
      <Quote
        className={`text-primary/40 ${compact ? "mb-1 hidden h-6 w-6 sm:mb-3 sm:block sm:h-8 sm:w-8" : "mb-3 h-8 w-8"}`}
        aria-hidden="true"
      />
      <div
        className={`flex gap-0.5 ${compact ? "mb-2" : "mb-3"}`}
        aria-label="5 out of 5 stars"
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4"
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote
        className={`flex-1 text-sm leading-snug text-slate-700 sm:text-base sm:leading-relaxed ${
          compact ? "line-clamp-3 sm:line-clamp-none" : ""
        }`}
      >
        &ldquo;{text}&rdquo;
      </blockquote>
      <footer
        className={`font-semibold text-navy ${compact ? "mt-2 text-xs sm:mt-4 sm:text-sm" : "mt-4 text-sm"}`}
      >
        — {author}
      </footer>
    </article>
  );
}

export default function Reviews() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const slide = container.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveIndex(index);
  }, []);

  const handleScroll = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.offsetWidth * 0.85;
    const index = Math.round(scrollLeft / slideWidth);
    setActiveIndex(Math.min(index, REVIEWS.length - 1));
  }, []);

  return (
    <section id="reviews" className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real reviews from homeowners across Northeast Louisiana."
          />
        </AnimatedSection>

        {/* Desktop grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2">
          {REVIEWS.map((review, index) => (
            <AnimatedSection key={review.author} delay={index * 0.1}>
              <ReviewCard text={review.text} author={review.author} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="review-carousel flex gap-3 overflow-x-auto pb-1"
            aria-label="Customer reviews carousel"
          >
            {REVIEWS.map((review) => (
              <div
                key={review.author}
                className="review-slide w-[85%] shrink-0 first:ml-[7.5%] last:mr-[7.5%]"
              >
                <ReviewCard text={review.text} author={review.author} compact />
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:bg-slate-50"
              aria-label="Previous review"
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-1.5" role="tablist" aria-label="Review pagination">
              {REVIEWS.map((review, index) => (
                <button
                  key={review.author}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Go to review ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-5 bg-primary"
                      : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                scrollToIndex(Math.min(REVIEWS.length - 1, activeIndex + 1))
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:bg-slate-50"
              aria-label="Next review"
              disabled={activeIndex === REVIEWS.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
