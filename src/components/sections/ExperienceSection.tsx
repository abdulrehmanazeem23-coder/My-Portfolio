"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Experience" subtitle="My professional journey across software engineering and business operations." />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2" />
          
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_15px_rgba(0,245,255,0.5)]" />
              
              <div className="w-full pl-8 md:pl-0 md:w-[45%]">
                <div className="p-6 md:p-8 bg-card rounded-2xl border border-white/10 glass hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground font-heading">{exp.role}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-muted-foreground mb-4">{exp.company} &bull; {exp.location}</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">&rsaquo;</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
