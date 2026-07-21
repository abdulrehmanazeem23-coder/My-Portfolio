"use client";

import { Code2 as Github, Mail } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {portfolioData.personalInfo.name}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-sm text-center md:text-left">
              Building intelligent automation pipelines and elegant software solutions for the modern enterprise.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href={portfolioData.personalInfo.contact.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href={`mailto:${portfolioData.personalInfo.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abdul Rehman. All rights reserved.</p>
          <p>
            Designed & Built with Next.js, Framer Motion & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
