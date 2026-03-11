import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Download, MessageCircle } from "lucide-react"

const animatedTexts = [
  "Engineering Intelligent AI Systems",
  "Transforming Data into Real-World Solutions",
  "Building Scalable AI-Powered Applications",
  "Creating Smart Automation with Machine Learning"
]

const codeLines = [
  { text: 'class ', cls: 'text-plasma font-bold' },
  { text: 'Developer', cls: 'text-electric font-bold' },
  { text: ':\n\n', cls: 'text-muted-foreground' },
  { text: '    name', cls: 'text-muted-foreground' },
  { text: ' = ', cls: 'text-foreground' },
  { text: '"Saipraneeth Sattu"', cls: 'text-green-400' },
  { text: '\n    role', cls: 'text-muted-foreground' },
  { text: ' = ', cls: 'text-foreground' },
  { text: '"AI/ML Engineer"', cls: 'text-green-400' },
  { text: '\n\n    skills', cls: 'text-muted-foreground' },
  { text: ' = [', cls: 'text-foreground' },
  { text: '\n        "Python"', cls: 'text-green-400' },
  { text: ',', cls: 'text-foreground' },
  { text: '\n        "Machine Learning"', cls: 'text-green-400' },
  { text: ',', cls: 'text-foreground' },
  { text: '\n        "Automation"', cls: 'text-green-400' },
  { text: '\n    ]', cls: 'text-foreground' },
  { text: '\n\n    mission', cls: 'text-muted-foreground' },
  { text: ' = ', cls: 'text-foreground' },
  { text: '"Build intelligent software"', cls: 'text-green-400' },
]

function useTypingAnimation(lines: typeof codeLines, speed = 30) {
  const [visibleChars, setVisibleChars] = useState(0)
  const totalChars = useMemo(() => lines.reduce((sum, l) => sum + l.text.length, 0), [lines])

  useEffect(() => {
    if (visibleChars >= totalChars) return
    const timeout = setTimeout(() => setVisibleChars(prev => prev + 1), speed)
    return () => clearTimeout(timeout)
  }, [visibleChars, totalChars, speed])

  const rendered: { text: string; cls: string }[] = []
  let remaining = visibleChars
  for (const line of lines) {
    if (remaining <= 0) break
    const chars = Math.min(remaining, line.text.length)
    rendered.push({ text: line.text.slice(0, chars), cls: line.cls })
    remaining -= chars
  }
  return { rendered, done: visibleChars >= totalChars }
}
function TypingCode() {
  const { rendered, done } = useTypingAnimation(codeLines, 25)
  return (
    <pre className="p-6 text-sm md:text-base font-mono leading-relaxed overflow-x-auto min-h-[280px]">
      <code>
        {rendered.map((seg, i) => (
          <span key={i} className={seg.cls}>{seg.text}</span>
        ))}
        {!done && <span className="inline-block w-2 h-5 bg-primary animate-pulse ml-0.5 align-middle" />}
      </code>
    </pre>
  )
}

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Ultra-Modern Background Effects */}
      <div className="hero-mesh"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="floating-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-electric rounded-2xl opacity-10 animate-levitate"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-plasma rounded-full opacity-15 animate-float"></div>
      </div>

      {/* Main content */}
      <div className="container-custom z-10 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main content */}
          <div className="text-left lg:text-left">
            {/* Name with ultra-modern typography */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-none">
              <span className="text-electric animate-glow">Saipraneeth </span>
              <span className="text-plasma">Sattu</span>
            </h1>

            {/* Enhanced Title with electric gradient */}
            <div className="text-base md:text-lg lg:text-xl mb-6 font-bold">
              <span className="text-gradient">Software Engineer</span>
              <span className="mx-4 text-accent animate-pulse">●</span>
              <span className="text-electric">Python Developer</span>
              <span className="mx-4 text-accent animate-pulse">●</span>
              <span className="text-plasma">AI/ML Enthusiast</span>
            </div>

            {/* Animated tagline with enhanced effects */}
            <div className="h-14 sm:h-16 flex items-center justify-start mb-8">
              <div className="glass-card px-6 py-3 rounded-2xl neon-border">
                <p className="text-base md:text-xl font-bold text-gradient animate-glow">
                  {animatedTexts[currentText]}
                </p>
              </div>
            </div>

            {/* Enhanced description */}
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-12 leading-relaxed font-medium">
              <span className="text-electric font-semibold">Software engineer</span> specializing in 
              <span className="text-plasma font-semibold"> Python and Machine Learning</span>, building intelligent systems 
              that <span className="text-gradient font-semibold">automate real-world workflows</span> and deliver measurable impact.
            </p>

            {/* Ultra-Modern Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-12">
              <Button 
                size="lg" 
                className="btn-primary px-8 py-3 text-lg font-bold rounded-2xl relative z-10 group"
                onClick={() => window.open('https://drive.google.com/file/d/14T6ANblZ2FNgPAYO10mko4xDPLsJK7U4/view?usp=sharing', '_blank')}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button 
                size="lg"
                className="btn-glass px-8 py-3 text-lg font-bold rounded-2xl group neon-border"
                onClick={() => scrollToSection('contact')}
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Contact Me
              </Button>
            </div>

            {/* Floating metrics */}
            <div className="grid grid-cols-3 gap-3 max-w-full sm:max-w-md">
              <div className="glass-card p-2 rounded-xl neon-border animate-levitate z-20 relative">
                <div className="text-base md:text-lg font-black text-plasma mb-1">15+</div>
                <div className="text-xs text-muted-foreground font-medium">Projects</div>
              </div>
              <div className="glass-card p-2 rounded-xl neon-border animate-levitate z-20 relative" style={{animationDelay: '0.3s'}}>
                <div className="text-base md:text-lg font-black text-gradient mb-1">AI/ML</div>
                <div className="text-xs text-muted-foreground font-medium">Specialist</div>
              </div>
              <div className="glass-card p-2 rounded-xl neon-border animate-levitate z-20 relative" style={{animationDelay: '0.6s'}}>
                <div className="text-base md:text-lg font-black text-electric mb-1">3+</div>
                <div className="text-xs text-muted-foreground font-medium">Internships</div>
              </div>
            </div>
          </div>

          {/* Right side - Code Block */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="portfolio-card p-1 max-w-lg group w-full">
              <div className="glass-card rounded-2xl neon-border overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">developer.py</span>
                </div>
                <TypingCode />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}