"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 relative inline-block">
          {title}
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
        </h2>
        {subtitle && (
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto md:mx-0">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
