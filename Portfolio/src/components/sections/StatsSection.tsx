"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="py-20 relative z-10 border-y border-white/10 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {portfolioData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center group"
            >
              <h3 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
