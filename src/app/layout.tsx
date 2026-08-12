import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indonesian Idol Voting System - Official Spektakuler Voting Portal",
  description: "Dukung idola favoritmu di Indonesian Idol Spektakuler Show. Tonton penampilan terbaik peserta di YouTube dan berikan voting resmi melalui Google Form.",
  keywords: ["Indonesian Idol", "Voting Idol", "Spektakuler Show", "Peserta Idol", "YouTube Idol"],
  openGraph: {
    title: "Indonesian Idol Voting System - Official Spektakuler Voting Portal",
    description: "Portal voting resmi Indonesian Idol. Berikan suaramu untuk menentukan pemenang selanjutnya!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-[#050714] text-white antialiased selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
