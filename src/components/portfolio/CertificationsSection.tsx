import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/hooks/useScrollReveal"

const certifications = [
  {
  year: "2025",
  items: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      category: "Artificial Intelligence",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      link: "https://drive.google.com/file/d/1RBH5__1h9XsZ0_krwgevx3htbdoUD9y9/view?usp=sharing",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle University",
      category: "Cloud Computing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      link: "https://drive.google.com/file/d/1T-vVCGka_y6LIe6hrwW6swTHSCsY9Dy3/view?usp=drive_link",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle University",
      category: "Generative AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      link: "https://drive.google.com/file/d/1CxnLw2AvDmcV74Tnp8nmwTd5XtszJ8xe/view?usp=sharing",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle University",
      category: "Data Science",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      link: "https://drive.google.com/file/d/1gt2q2UNGHmrY4cwZUa1Wo7AthC8rhrEi/view?usp=drive_link",
    },
  ],
},
  {
    year: "2024",
    items: [
      {
        title: "Deep Learning with PyTorch",
        issuer: "EDX",
        category: "Deep Learning",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/EdX.svg/120px-EdX.svg.png",
        link: "https://drive.google.com/file/d/1aFTd31PD5tPf8rFEEAAOYnekTf17niUX/view?usp=drive_link",
      },
      {
        title: "Introduction to Machine Learning",
        issuer: "NPTEL",
        category: "Machine Learning",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/NPTEL_logo.png/220px-NPTEL_logo.png",
        link: "https://drive.google.com/file/d/1mMEEq976DY2Yn1wQxRWGRi5473895svx/view?usp=drive_link",
      },
    ],
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gradient">Certifications</span> & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my expertise
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {certifications.map((group, gi) => (
            <ScrollReveal key={group.year} delay={gi * 0.1}>
              <div className="relative pl-8 md:pl-12 pb-10 last:pb-0">
                {/* Timeline line */}
                <div className="absolute left-[11px] md:left-[19px] top-2 bottom-0 w-px bg-primary/20" />

                {/* Year dot */}
                <div className="absolute left-0 md:left-2 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Year label */}
                <h3 className="text-2xl font-black text-primary mb-5">{group.year}</h3>

                {/* Cards */}
                <div className="space-y-3">
                  {group.items.map((cert) => (
                    <a
                      key={cert.title}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 glass-card rounded-xl px-5 py-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer neon-border"
                    >
                      {/* Logo */}
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                        <img
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          className="max-h-8 max-w-[40px] object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                          {cert.title}
                        </p>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>

                      {/* Category + Link icon */}
                      <Badge variant="outline" className="hidden sm:inline-flex text-[10px] border-primary/30 text-primary flex-shrink-0">
                        {cert.category}
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Continuous Learning */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mt-14">
            <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
              📚 Currently Learning: LLMs & RAG Systems
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
              🎯 Next: Cloud Computing & MLOps
            </Badge>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
