import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

<link
  rel="preload"
  as="image"
  href="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
/>

// ✅ SEO metadata (clean)
export const metadata: Metadata = {
  title:
    "Boiler Repair & Heat Pump Installation London | Swift Heat — Same Day Service",
  description:
    "Gas Safe registered heating engineers covering all London boroughs. Emergency boiler repair, new boiler installation & government-approved heat pump upgrades. Call 020 7946 0123.",
  openGraph: {
    title:
      "Boiler Repair & Heat Pump Installation London | Swift Heat — Same Day Service",
    description:
      "Gas Safe registered heating engineers covering all London boroughs. Emergency boiler repair, new boiler installation & government-approved heat pump upgrades. Call 020 7946 0123.",
    type: "website",
  },
};

// ✅ NEW: viewport export (this removes warning)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}