import { Metadata } from "next";
import { Ysabeau } from "next/font/google";
import "./globals.css";

const ysabeau = Ysabeau({
  variable: "--font-ysabeau",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dorji Tshering",
  description:
    "An interactive journey — self-taught developer from Bhutan.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ysabeau.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
