"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Certifications & Achievements" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-foreground font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
