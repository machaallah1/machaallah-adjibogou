import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Machaallah ADJIBOGOU — Développeur Web et Mobile",
  description:
    "Développeur Web et Mobile (Architecture Logicielle) basé à Lomé. Conception de solutions digitales robustes et scalables. Portfolio de projets, méthodologie et expertise technique.",
  icons: {
    icon: [
      { url: "/mach.png" },
      { url: "/mach.png", sizes: "16x16", type: "image/png" },
      { url: "/mach.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/mach.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="f7a6d986-f3fc-456c-93c3-073515ba32e2"
        />
        <SmoothScroll />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
