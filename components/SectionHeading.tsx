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
    <div className={`mb-5 md:mb-10 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-xl font-bold tracking-tight sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 max-w-2xl text-sm leading-relaxed sm:mt-3 sm:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
