import type { Metadata } from "next";
import { Google_Sans, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { getAvailability } from "@/lib/profile";
import "./globals.css";

const googleSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-code",
});

export const dynamic = "force-dynamic";

export const generateMetadata = (): Metadata => ({
  title: "Dorji Tshering",
  description: getAvailability().description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
