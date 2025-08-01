import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { bebas, oswald, opensans, anton, ibmplex } from "@/config/fonts";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StickyMenuWrapper from "@/components/ui/StickyMenuWrapper";
import FooterWrapper from "@/components/Footer-Wrapper";
import { TestimonialDialog } from "@/components/TestimonialDialog";
import { NewsletterDialog } from "@/components/NewsletterDialog";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/costrad.webp",
  },
  publisher: "Dr. Abu Bako",
  robots: "index, follow",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={` ${bebas.variable} ${anton.variable}  ${ibmplex.variable} ${oswald.variable} ${opensans.variable}  ${opensans.className} 
         text-lg font-extralight min-h-screen text-foreground bg-background antialiased`}
    >
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {/* Use the wrapper component instead */}
          <StickyMenuWrapper />

          <main className="relative overflow-x-hidden">{children}</main>
          <FooterWrapper />
          <Toaster />
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics gaId="G-1GJ79QESWQ" />

          {/* <GlobalDialog /> */}
          <TestimonialDialog />
          <NewsletterDialog />
        </Providers>
      </body>
    </html>
  );
}
