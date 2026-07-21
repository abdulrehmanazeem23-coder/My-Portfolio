"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Code2 as Github, ExternalLink, Network, Zap, Workflow, Code } from "lucide-react";
import Link from "next/link";

export function FeaturedProject() {
  const project = portfolioData.projects.find(p => p.featured);

  if (!project) return null;

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured Project" subtitle="Deep dive into my most impactful enterprise architecture." align="center" />
        
        <div className="mt-16 bg-card rounded-3xl border border-white/10 p-8 md:p-12 glass overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold border border-primary/30">
                  {project.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Zap className="w-4 h-4 text-accent" /> {project.businessImpact}
                </span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                {project.title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <Network className="w-6 h-6 text-primary mb-3" />
                  <h4 className="text-sm font-bold text-foreground mb-1">Architecture</h4>
                  <p className="text-xs text-muted-foreground">RAG Pipeline & LangChain</p>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <Workflow className="w-6 h-6 text-accent mb-3" />
                  <h4 className="text-sm font-bold text-foreground mb-1">Automation</h4>
                  <p className="text-xs text-muted-foreground">n8n Enterprise Workflows</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href={project.github} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-foreground font-medium rounded-full transition-colors">
                  <Github className="w-5 h-5" /> View Source
                </Link>
                <Link href={project.demo} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </Link>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              {/* Architecture Diagram Placeholder */}
              <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl bg-black/50 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
                <Code className="w-16 h-16 text-muted-foreground/30 mb-4 group-hover:scale-110 transition-transform duration-500" />
                <p className="text-muted-foreground/50 font-medium tracking-widest uppercase text-sm">Interactive Architecture Diagram</p>
                <p className="text-muted-foreground/30 text-xs mt-2">To be added by user</p>
                
                {/* Animated scanning line */}
                <motion.div 
                  className="absolute left-0 right-0 h-px bg-primary/50 shadow-[0_0_10px_rgba(0,245,255,0.8)]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
