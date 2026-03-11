import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    institution: "SR University,Warangal",
    degree: "B.Tech - Computer Science(AIML Specialization)",
    period: "2021 - 2025",
    score: "8.58",
    status: "Completed"
  },
  {
    institution: "SR Prime,Warangal",
    degree: "Higher Secondary School",
    period: "2019 - 2021",
    score: "97%",
    status: "Completed"
  },
  {
    institution: "SPR SCHOOL OF EXCELLENCE",
    degree: "Secondary Education (10th Grade)",
    period: "2018 - 2019",
    score: "9.8",
    status: "Completed"
  }
]

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey that shaped my technical foundation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <ul className="list-disc pl-6 space-y-6">
              {education.map((edu, index) => (
                <li key={index} className="ml-1">
                  <Card className="portfolio-card p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{edu.institution}</h3>
                        <p className="text-lg text-primary font-medium">{edu.degree}</p>
                        <div className="text-sm text-muted-foreground">{edu.period}</div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          {edu.status}
                        </Badge>
                        {edu.score && (
                          <div className="text-sm font-semibold text-primary mt-2">{edu.score}</div>
                        )}
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