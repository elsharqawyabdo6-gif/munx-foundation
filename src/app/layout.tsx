import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import { BackToTop, ScrollProgress } from "@/components/blocks";
import { FooterShell, NavbarShell } from "@/components/layout";
import { MotionProvider, ThemeProvider } from "@/components/providers";
import { PageWrapper } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = constructMetadata({
  title: "MUNX Foundation",
  description: "A premium architecture foundation for the MUNX luxury AI creative agency experience.",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cormorant.variable} ${jetBrainsMono.variable}`}>
      <body>
        <ThemeProvider>
          <MotionProvider>
            <PageWrapper>
              <ScrollProgress />
              <NavbarShell />
              {children}
              <FooterShell />
              <BackToTop />
            </PageWrapper>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
