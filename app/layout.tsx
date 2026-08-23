import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghayoor Khan // AI Laboratory",
  description:
    "Personal AI/Software Engineering portfolio of Ghayoor Khan — AI Engineer & Software Engineer.",
  metadataBase: new URL("https://ghayoorkhan.vercel.app"),
  openGraph: {
    title: "Ghayoor Khan // AI Laboratory",
    description:
      "Personal AI/Software Engineering portfolio of Ghayoor Khan — AI Engineer & Software Engineer.",
    url: "https://ghayoorkhan.vercel.app",
    siteName: "Ghayoor Khan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghayoor Khan // AI Laboratory",
    description:
      "Personal AI/Software Engineering portfolio of Ghayoor Khan — AI Engineer & Software Engineer.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-dim text-on-surface">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}