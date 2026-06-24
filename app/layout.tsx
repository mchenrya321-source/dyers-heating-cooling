import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getLocalBusinessSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dyer's AIRCO Heating & Cooling | HVAC Contractor in Monroe, LA",
  description:
    "Professional HVAC repair, heating services, AC installation, and maintenance serving Monroe, West Monroe, Sterlington, Rayville, Calhoun, and Northeast Louisiana. Call Dyer's AIRCO today.",
  keywords: [
    "HVAC Monroe LA",
    "AC Repair Monroe LA",
    "Heating Repair Monroe LA",
    "HVAC Contractor West Monroe",
    "Emergency HVAC Service",
    "Air Conditioning Repair Near Me",
    "Dyer's AIRCO",
    "heating and cooling Monroe Louisiana",
  ],
  openGraph: {
    title: "Dyer's AIRCO Heating & Cooling | HVAC Contractor in Monroe, LA",
    description:
      "Professional HVAC repair, heating services, AC installation, and maintenance serving Northeast Louisiana. Call (318) 789-5240.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
