"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Zap, Database, BrainCircuit, Layout, Bot, Cpu, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Database,
  BrainCircuit,
  Layout,
  Bot,
  Cpu,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10 bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading title="What I Do" subtitle="Bringing bleeding-edge AI solutions and robust software engineering to solve enterprise problems." align="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {portfolioData.services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Cpu;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-white/10 glass hover:bg-white/5 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
                <Icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-4 font-heading">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
