import { Sparkles } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/20 relative">
      {/* Background Effects */}
      <div className="floating-shapes">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-electric rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-gradient-plasma rounded-2xl opacity-[0.08] animate-levitate"></div>
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            About <span className="text-plasma">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            Passionate about creating <span className="text-electric font-semibold">intelligent solutions</span> that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Developer Profile Image */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-[2px] bg-gradient-electric rounded-3xl opacity-40 group-hover:opacity-70 blur-sm transition-opacity duration-500" />
              <div className="relative glass-card rounded-3xl p-4 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden">
                  <img src={profilePhoto} alt="Saipraneeth Sattu" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="portfolio-card p-8 md:p-10">
              <div className="space-y-8">
                <div className="glass-card p-6 rounded-3xl neon-border">
                  <p className="text-base md:text-lg font-semibold text-electric leading-relaxed">
                    I'm a <span className="text-electric font-semibold">Computer Science graduate</span> passionate about creating impactful software and intelligent solutions. My experience includes working with Python, Flask, MySQL, HTML5, CSS, Java, and developing AI & Machine Learning applications.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  My academic background and practical experience have provided me with a strong skill set across various technologies. I am passionate about developing complex applications that solve real-world problems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-3xl text-center group">
                <h4 className="text-xl font-bold text-electric mb-3 group-hover:text-plasma transition-colors">🎯 Focus Areas</h4>
                <p className="text-muted-foreground">Machine Learning • Python • Backend Development • Automation</p>
              </div>
              <div className="glass-card p-8 rounded-3xl text-center group">
                <h4 className="text-xl font-bold text-plasma mb-3 group-hover:text-electric transition-colors">🚀 Mission</h4>
                <p className="text-muted-foreground">Turning Data and Algorithms into Real-World Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
