import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const recipient = "saipraneethsattu@gmail.com"
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Most reliable behavior across browsers/iframes
    window.location.href = mailtoUrl

    toast({
      title: "Opening your email app...",
      description: "A draft email has been prepared. Please review and send.",
    })

    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const connectLinks = [
    { name: "Resume", url: "https://drive.google.com/file/d/1-FzIYBMKfhNVSzfk0zjeVwtbJq6DB7ix/view?usp=sharing", color: "hover:text-orange-600" },
    { name: "GitHub", url: "https://github.com/sattusaipraneeth", color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/saipraneeth-sattu/", color: "hover:text-blue-600" },
    
  ]

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              
              <div className="space-y-6">
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Current Status</h4>
                  <p className="text-muted-foreground">
                    Available for internship opportunities and freelance projects
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Interests</h4>
                  <p className="text-muted-foreground">
                    AI/ML projects, Python development, automation solutions, and collaborative development
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-medium text-foreground mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-4">
                  {connectLinks.map((link, index) => (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      size="sm"
                      className={`rounded-full border-primary/30 text-primary ${link.color} transition-colors duration-300`}
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="portfolio-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-border bg-background"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-border bg-background"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="rounded-xl border-border bg-background resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-primary rounded-xl py-3 text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}