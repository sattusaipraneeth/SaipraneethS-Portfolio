import { Navbar } from "@/components/portfolio/Navbar"
import { ScrollProgress } from "@/components/portfolio/ScrollProgress"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { AboutSection } from "@/components/portfolio/AboutSection"
import { EducationSection } from "@/components/portfolio/EducationSection"
import { ExperienceSection } from "@/components/portfolio/ExperienceSection"
import { ProjectsSection } from "@/components/portfolio/ProjectsSection"
import { CodeShowcase } from "@/components/portfolio/CodeShowcase"
import { SkillsSection } from "@/components/portfolio/SkillsSection"
import { CertificationsSection } from "@/components/portfolio/CertificationsSection"
import { ContactSection } from "@/components/portfolio/ContactSection"
import { Footer } from "@/components/portfolio/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <CodeShowcase />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
