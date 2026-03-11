import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-gradient">Saipraneeth</span> Sattu
            </h3>
            <p className="text-muted-foreground">
              Building the future with AI & ML
            </p>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="outline"
              onClick={scrollToTop}
              className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Saipraneeth Sattu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}