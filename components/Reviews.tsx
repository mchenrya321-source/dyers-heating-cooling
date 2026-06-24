"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { REVIEWS } from "@/lib/constants";

function ReviewCard({
  text,
  author,
  className = "",
}: {
  text: string;
  author: string;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm md:p-7 ${className}`}
    >
      <Quote
        className="mb-3 h-8 w-8 text-primary/40"
        aria-hidden="true"
      />
      <div className="mb-3 flex gap-0.5" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-700 sm:text-base">
        &ldquo;{text}&rdquo;
      </blockquote>
      <footer className="mt-4 text-sm font-semibold text-navy">
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
    <section id="reviews" className="bg-white py-12 md:py-16">
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
            className="review-carousel flex gap-4 overflow-x-auto pb-2"
            aria-label="Customer reviews carousel"
          >
            {REVIEWS.map((review) => (
              <div
                key={review.author}
                className="review-slide w-[85%] shrink-0 first:ml-[7.5%] last:mr-[7.5%]"
              >
                <ReviewCard text={review.text} author={review.author} />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:bg-slate-50"
              aria-label="Previous review"
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Review pagination">
              {REVIEWS.map((review, index) => (
                <button
                  key={review.author}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Go to review ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-6 bg-primary"
                      : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                scrollToIndex(Math.min(REVIEWS.length - 1, activeIndex + 1))
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:bg-slate-50"
              aria-label="Next review"
              disabled={activeIndex === REVIEWS.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
