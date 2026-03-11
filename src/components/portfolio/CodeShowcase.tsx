import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check, Code2 } from "lucide-react"
import { ScrollReveal } from "@/hooks/useScrollReveal"

const codeSnippets = [
  {
    title: "RAG Pipeline",
    language: "Python",
    description: "Retrieval-Augmented Generation with LangChain",
    code: `from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQA

# Build vector store from documents
embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(docs, embeddings)

# Create RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-4"),
    retriever=vectorstore.as_retriever(k=5),
    return_source_documents=True
)

response = qa_chain.invoke({"query": user_query})`,
  },
  {
    title: "ML Model Training",
    language: "Python",
    description: "Energy consumption prediction with Scikit-Learn",
    code: `from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import StandardScaler

# Feature engineering & scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_train)

# Train with cross-validation
model = RandomForestRegressor(
    n_estimators=200,
    max_depth=12,
    random_state=42
)
scores = cross_val_score(model, X_scaled, y_train, cv=5)
print(f"R² Score: {scores.mean():.4f} ± {scores.std():.4f}")`,
  },
  {
    title: "Data Visualization",
    language: "Python",
    description: "Automated chart generation & PowerPoint export",
    code: `import matplotlib.pyplot as plt
from pptx import Presentation
from pptx.util import Inches

fig, axes = plt.subplots(2, 2, figsize=(12, 10))

for ax, metric in zip(axes.flat, metrics):
    ax.plot(df["date"], df[metric], linewidth=2)
    ax.set_title(metric, fontweight="bold")
    ax.annotate(f"Peak: {df[metric].max():.1f}",
                xy=(peak_date, peak_val),
                arrowprops=dict(arrowstyle="->"))

fig.savefig("charts.png", dpi=150, bbox_inches="tight")

# Export to PowerPoint
prs = Presentation()
slide = prs.slides.add_slide(prs.slide_layouts[5])
slide.shapes.add_picture("charts.png", Inches(1), Inches(1))
prs.save("report.pptx")`,
  },
]

export function CodeShowcase() {
  const [activeSnippet, setActiveSnippet] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeSnippet].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="code" className="section-padding relative">
      <div className="floating-shapes">
        <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-electric rounded-full opacity-5 animate-float" />
      </div>

      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Code <span className="text-electric">Showcase</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
              Snippets from my <span className="text-plasma font-semibold">real projects</span>
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* Snippet Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {codeSnippets.map((snippet, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSnippet(i)}
                  className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                    activeSnippet === i
                      ? "glass-card text-primary neon-border shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Code2 className="w-4 h-4 inline mr-2" />
                  {snippet.title}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Code Block */}
          <ScrollReveal delay={0.2}>
            <div className="portfolio-card overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--quantum-orange))]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--neon-green))]" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {codeSnippets[activeSnippet].title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                    {codeSnippets[activeSnippet].language}
                  </Badge>
                  <Button variant="ghost" size="icon" onClick={handleCopy} className="h-8 w-8">
                    {copied ? <Check className="w-4 h-4 text-[hsl(var(--neon-green))]" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Code */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm leading-relaxed font-mono text-foreground/90 whitespace-pre">
                  {codeSnippets[activeSnippet].code}
                </pre>
              </div>

              {/* Description */}
              <div className="px-6 py-4 border-t border-border/20">
                <p className="text-sm text-muted-foreground">
                  {codeSnippets[activeSnippet].description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
