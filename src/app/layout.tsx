import type { Metadata } from "next";
import { Google_Sans, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Dorji Tshering",
  description:
    "Self-taught frontend engineer from Trashigang, based in Thimphu, Bhutan, building the frontend at Jaggle.AI. refactor: mechanical → frontend.",
};

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
