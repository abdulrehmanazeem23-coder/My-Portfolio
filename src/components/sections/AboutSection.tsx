"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GraduationCap, BrainCircuit, Terminal, Briefcase } from "lucide-react";

export function AboutSection() {
  const cards = [
    { icon: GraduationCap, title: "Education", text: "BS Software Engineering, CUST" },
    { icon: BrainCircuit, title: "AI Focus", text: "Enterprise Workflow Automation" },
    { icon: Terminal, title: "Development", text: "Full Stack & System Architecture" },
    { icon: Briefcase, title: "Experience", text: "Business Operations & Engineering" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Bridging the gap between software engineering, artificial intelligence, and enterprise business operations." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {portfolioData.about.story}
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-foreground font-heading mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary" /> Academic Profile
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">Degree:</strong> {portfolioData.about.education.degree}</p>
                <p><strong className="text-foreground">Institution:</strong> {portfolioData.about.education.institution}</p>
                <p><strong className="text-foreground">Status:</strong> {portfolioData.about.education.semester} (CGPA: {portfolioData.about.education.cgpa})</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cards.map((card, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md group">
                <card.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-foreground mb-2">{card.title}</h4>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
