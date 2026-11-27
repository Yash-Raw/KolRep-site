import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const studioFont = localFont({
  src: "../public/fonts/SpaceGrotesk.ttf",
  variable: "--font-studio",
  display: "swap",
  weight: "300 700",
});

const consoleFont = localFont({
  src: "../public/fonts/IBMPlexMono-Regular.ttf",
  variable: "--font-console",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "KolRep — 100% Local AI Voice Cloning Platform",
  description:
    "Zero-shot local voice cloning and studio narration running on your own hardware. Zero cloud voice APIs, zero telemetry, and dual-layer cryptographic provenance.",
  applicationName: "KolRep",
  keywords: [
    "KolRep",
    "local AI voice cloning",
    "offline text to speech",
    "F5-TTS",
    "Apple Silicon MPS",
    "studio narration",
    "cryptographic provenance",
    "acoustic watermarking",
    "open source voice cloning",
  ],
  authors: [{ name: "KolRep", url: "https://github.com/Yash-Raw/KolRep" }],
  creator: "KolRep",
  publisher: "KolRep",
  openGraph: {
    title: "KolRep — 100% Local AI Voice Cloning Platform",
    description:
      "Zero-shot local voice cloning and studio narration running on your own hardware. Zero cloud voice APIs, zero telemetry, and dual-layer cryptographic provenance.",
    siteName: "KolRep",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KolRep — 100% Local AI Voice Cloning Platform",
    description:
      "Zero-shot local voice cloning and studio narration running on your own hardware. Zero cloud voice APIs, zero telemetry, and dual-layer cryptographic provenance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${studioFont.variable} ${consoleFont.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <a href="#install" className="skip-link">
          Skip to installation
        </a>
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
