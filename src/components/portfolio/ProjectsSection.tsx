import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Github, ExternalLink, Zap, Brain, Code, Filter } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Energy Consumption Prediction for Smart Buildings",
    description:
      "Machine learning system that predicts smart building energy consumption to optimize usage and improve efficiency.",
    featured: true,
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-green-700 to-green-900",
    categories: ["Machine Learning", "Data Science"],
    techStack: ["🐍 Python", "🤖 Machine Learning", "📊 Scikit-learn"],
    github:
      "https://github.com/sattusaipraneeth/Energy-Consumption-Prediction-for-Smart-Buildings",
    demo: "https://project-demo.com",
  },
  {
    title: "EduGenius AI – Smart Concept Explainer",
    description:
      "AI-powered learning assistant that explains complex concepts, summarizes content, generates presentations, and converts explanations into audio.",
    featured: true,
    icon: <Code className="w-8 h-8" />,
    gradient: "from-purple-700 to-purple-900",
    categories: ["AI", "Automation"],
    techStack: ["🐍 Python", "🧠 Gemini API", "⚡ Streamlit", "🎤 Text-to-Speech"],
    github: "https://github.com/sattusaipraneeth/Smart-Concept-Explainer",
    demo: "https://project-demo.com",
  },
  {
    title: "AI Blog & News Generator",
    description:
      "AI application that automatically generates blog posts and news articles using advanced NLP techniques.",
    featured: true,
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-blue-700 to-blue-900",
    categories: ["AI", "Automation"],
    techStack: ["🐍 Python", "🤖 NLP", "⚡ Streamlit"],
    github: "https://github.com/sattusaipraneeth/AI-Blog-News-Generator",
    demo: "https://project-demo.com",
  },
  {
    title: "SmartAttend – Facial Recognition Attendance System",
    description:
      "Automated attendance management system using facial recognition to identify individuals and record attendance in real time.",
    featured: true,
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-orange-600 to-orange-900",
    categories: ["AI", "Machine Learning"],
    techStack: ["🐍 Python", "🎥 OpenCV", "🤖 Face Recognition", "📊 Database"],
    github:
      "https://github.com/sattusaipraneeth/SmartAttend-Intelligent-Facial-Recognition-Based-Attendance-System",
    demo: "https://project-demo.com",
  },
];

const allCategories = ["All", "Machine Learning", "AI", "Automation", "Data Science"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">

        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Featured <span className="text-electric">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions showcasing my AI, Machine Learning, and automation expertise
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "glass-card text-primary neon-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {cat === "All" && <Filter className="w-4 h-4 inline mr-1.5" />}
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {filtered.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div className="portfolio-card group flex flex-col overflow-hidden rounded-2xl border border-white/10 hover:border-primary/40 transition">

                {/* Gradient Header */}
                <div
                  className={`h-28 flex items-center justify-center bg-gradient-to-r ${project.gradient}`}
                >
                  <div className="text-white opacity-90">{project.icon}</div>
                </div>

                <div className="p-8 flex flex-col flex-1 space-y-6">

                  <div className="flex items-center gap-4">
                    {project.featured && (
                      <Badge className="px-4 py-2 glass-card text-electric neon-border">
                        ⚡ Featured
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-electric transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-6 mt-auto">

                    {project.demo && (
                      <Button asChild className="btn-primary flex-1 py-3 rounded-2xl">
                        <a href={project.demo} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    <Button asChild className="btn-glass flex-1 py-3 rounded-2xl neon-border">
                      <a href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>

                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-20">
            <Button
              asChild
              className="btn-glass px-12 py-4 text-xl font-bold rounded-3xl neon-border"
            >
              <a
                href="https://github.com/sattusaipraneeth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 mr-3" />
                Explore All Projects on GitHub
              </a>
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}