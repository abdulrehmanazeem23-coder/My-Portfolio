import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Abdul Rehman | AI Automation Engineer & Software Engineer",
  description: "Portfolio of Abdul Rehman, a Senior AI Automation Engineer & Full Stack Developer specializing in RAG, LangChain, and Enterprise Workflow Automation.",
  keywords: ["AI Automation", "Software Engineer", "LangChain", "RAG", "n8n", "Abdul Rehman", "Portfolio"],
  authors: [{ name: "Abdul Rehman" }],
  openGraph: {
    title: "Abdul Rehman | AI Automation Engineer",
    description: "Portfolio of Abdul Rehman, a Senior AI Automation Engineer & Full Stack Developer.",
    url: "https://abdulrehman.ai",
    siteName: "Abdul Rehman Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary relative`}
      >
        <CustomCursor />
        <CommandPalette />
        <Navbar />
        <main className="relative z-10 flex min-h-screen flex-col overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
