"use client";

import { portfolioData } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";

export function ProjectsSection() {
  // Exclude the featured project if we want to show it separately, or just show all non-featured
  const regularProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-6">
        <SectionHeading title="All Projects" subtitle="A comprehensive list of my work in AI, Automation, and Full Stack Development." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
