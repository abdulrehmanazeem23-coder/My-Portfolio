"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { ChevronDown, Download, ArrowRight, Code2 as Github } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((current) => (current + 1) % portfolioData.personalInfo.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen py-28 relative flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide backdrop-blur-md"
        >
          My name is
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-6"
        >
          {portfolioData.personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-12 md:h-16 flex items-center justify-center mb-8"
        >
          <motion.p
            key={titleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl md:text-3xl font-medium text-primary font-heading"
          >
            {portfolioData.personalInfo.titles[titleIndex]}
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed mb-12"
        >
          {portfolioData.personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#projects"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="#"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-foreground font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto backdrop-blur-md"
          >
            <Download className="w-5 h-5" />
            Resume
          </Link>
          
          <Link
            href={portfolioData.personalInfo.contact.github}
            target="_blank"
            className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 text-foreground rounded-full hover:bg-white/10 transition-all hover:scale-110 active:scale-95 backdrop-blur-md"
          >
            <Github className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
