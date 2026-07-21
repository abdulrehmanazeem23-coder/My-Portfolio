"use client";

import { motion } from "framer-motion";
import { Code2 as Github, ExternalLink, Activity } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    category: string;
    status: string;
    difficulty: string;
    github: string;
    demo: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full bg-card rounded-2xl p-6 md:p-8 flex flex-col justify-between glass z-10">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
              {project.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Activity className="w-4 h-4 text-success" />
              {project.status}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-3 font-heading group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-white/5 text-foreground/70 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
          {project.github !== "#" && (
            <Link 
              href={project.github} 
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" /> Code
            </Link>
          )}
          {project.demo !== "#" && (
            <Link 
              href={project.demo} 
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors ml-4"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
