import type { Metadata } from "next";
import { Poppins, JetBrains_Mono, Jacquard_12, DotGothic16 } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dotGothic = DotGothic16({
  variable: "--font-dotgothic",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Machaallah ADJIBOGOU — Développeur Full Stack | Interfaces & Expériences Web",
  description:
    "Développeur full stack spécialisé dans les interfaces et les expériences web, avec une licence en architecture logicielle. Création de produits digitaux performants, scalables et mémorables.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/mach.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} ${dotGothic.variable} antialiased font-sans`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J0SRRQCRET"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J0SRRQCRET');
          `}
        </Script>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="f7a6d986-f3fc-456c-93c3-073515ba32e2"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <SmoothScroll />
            <CustomCursor />
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
