"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Code2 as Github, Star, GitFork, Activity } from "lucide-react";
import Link from "next/link";

export function GithubSection() {
  return (
    <section id="github" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Open Source" subtitle="Check out my public repositories and contributions on GitHub." align="center" />
        
        <div className="mt-16 bg-card border border-white/10 rounded-3xl p-8 md:p-12 glass max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-foreground">abdulrehmanazeem23-coder</h3>
                <p className="text-muted-foreground text-sm">Top Languages: Python, TypeScript, LangChain</p>
              </div>
            </div>
            
            <Link 
              href={portfolioData.personalInfo.contact.github} 
              target="_blank"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              Follow on GitHub
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-foreground font-bold">
                <Activity className="text-primary w-5 h-5" /> AI Automation
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Multiple enterprise-grade automation workflows utilizing n8n, LangChain, RAG, and LLMs.
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-foreground/50">
                <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 12</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> 5</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-foreground font-bold">
                <Activity className="text-accent w-5 h-5" /> Cyber Security
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced security scripts, penetration testing tools, and network vulnerability scanners.
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-foreground/50">
                <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 8</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> 2</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-foreground font-bold">
                <Activity className="text-success w-5 h-5" /> Software Testing
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Automated QA pipelines and end-to-end testing scripts using Selenium and Playwright.
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-foreground/50">
                <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 15</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> 4</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-black/40 border border-white/5 flex flex-col items-center justify-center">
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold mb-4">Contribution Activity</p>
            {/* Fake Contribution Graph Placeholder */}
            <div className="flex gap-1 w-full flex-wrap justify-center overflow-hidden h-24 opacity-60">
              {Array.from({ length: 300 }).map((_, i) => {
                const seed = (i * 37 + 17) % 100;
                const bgClass = seed > 70 ? (seed > 85 ? 'bg-primary' : 'bg-primary/50') : 'bg-white/5';
                return (
                  <div 
                    key={i} 
                    className={`w-3 h-3 rounded-sm ${bgClass}`} 
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}