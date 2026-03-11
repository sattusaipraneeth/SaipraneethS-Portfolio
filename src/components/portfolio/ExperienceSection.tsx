import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    
  company: "Lumora Technologies Partners",
  role: "Backend Developer (Full-Time)",
  period: "Sep 2025 – Present",
  location: "House No: 2-57, Dharmasagar (V&M), Hanamkonda",
  description: "Developing and maintaining backend systems for scalable web applications, building RESTful APIs, handling database operations, and improving server-side performance.",
  technologies: ["Python", "FastAPI", "Node.js", "REST APIs", "Databases"],
  status: "Ongoing"
  },
  {
    company: "Nanoquest Technologies",
    role: "AI/ML Intern",
    period: "May 2025 – August 2025",
    description: "Building AI agents and working with Large Language Models (LLMs) to create intelligent automation solutions.",
    technologies: ["Python", "LLMs", "AI Agents", "Machine Learning"],
    status: "Completed"
  },
  {
    company: "Infosys Springboard",
    role: "ML Intern",
    period: "Nov 2024 – Jan 2025",
    description: "Developed energy usage prediction models for smart buildings, optimizing consumption patterns through advanced machine learning algorithms.",
    technologies: ["Python", "Scikit-Learn", "Data Analysis", "Smart Buildings"],
    status: "Completed"
  },
  {
    company: "Defence Research and Development Organisation – Research Centre Imarat",
    role: "Python Developer Intern",
    period: "May 2024 – Aug 2024",
    description: "Automated data processing and presentation pipeline using Python & ML, significantly improving efficiency in research data analysis.",
    technologies: ["Python", "Machine Learning", "Data Processing", "Automation"],
    status: "Completed"
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world experience building impactful solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <ul className="list-disc pl-6 space-y-6">
            {experiences.map((exp, index) => (
              <li key={index} className="ml-1">
                <Card className="portfolio-card p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                        <p className="text-lg text-primary font-medium">{exp.role}</p>
                      </div>
                      <Badge 
                        variant={exp.status === "Current" ? "default" : "outline"} 
                        className={exp.status === "Current" ? "bg-primary text-primary-foreground" : "border-primary/30 text-primary"}
                      >
                        {exp.status}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                    
                    <p className="text-foreground leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}