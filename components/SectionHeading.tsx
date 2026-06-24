interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-10 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed sm:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
