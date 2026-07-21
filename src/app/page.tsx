import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ExperienceSection />
      <FeaturedProject />
      <ProjectsSection />
      <SkillsSection />
      <GithubSection />
      <ServicesSection />
      <CertificationsSection />
      <ContactSection />
      <ScrollToTop />
    </>
  );
}
