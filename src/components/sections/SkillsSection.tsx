"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function SkillsSection() {
  const categories = Object.entries(portfolioData.skills).map(([key, values]) => ({
    title: key.charAt(0).toUpperCase() + key.slice(1),
    skills: values,
  }));

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Skills" subtitle="Technologies, frameworks, and tools I use to build robust solutions." align="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-white/10 glass hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 font-heading group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
