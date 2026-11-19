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
    "Instant zero-shot local voice cloning and studio narration running completely on-device. Zero cloud costs, 100% privacy, and dual-layer C2PA cryptographic provenance. Download the desktop release.",
  icons: {
    icon: "/favicon.ico",
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
        <a href="#download" className="skip-link">
          Skip to download
        </a>
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
