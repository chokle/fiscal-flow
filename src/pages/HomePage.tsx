import { motion } from "framer-motion"
import { MapPin, Wrench, GraduationCap, HardHat, Brain, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ThemeToggle"
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}
const deductions = [
  { icon: MapPin, title: "The Travel Loophole", amount: "$4,000", description: "Did you work 150km+ from home for at least 36 hours? You could claim up to $4,000 back in travel and lodging expenses.", color: "from-emerald-500 to-emerald-700" },
  { icon: Wrench, title: "The Tool Deduction", amount: "$1,000", description: "Spent money on a new impact driver or saw this year? Claim up to $1,000 of that cost back.", color: "from-amber-500 to-amber-700" },
  { icon: GraduationCap, title: "Apprentice Loans", amount: "$20,000", description: "Get access to up to $20,000 in interest-free loans while you finish your levels.", color: "from-sky-500 to-sky-700" },
]
const features = [
  { icon: HardHat, title: "Built for the Site", description: "No complex spreadsheets. Just a simple calculator to see your Take-Home vs. Write-Offs." },
  { icon: Brain, title: "AI Deal-Hunter", description: "Our AI scans your inputs and alerts you to government credits like the Labour Mobility Deduction that banks don't tell you about." },
  { icon: FileText, title: "The T2200 Helper", description: "Instantly generate the form your boss needs to sign so your deductions are 100% CRA-approved." },
]
export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-20">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Stop Leaving Your Hard-Earned Money with the CRA.{" "}
            <span className="inline-block">&#127464;&#127462;</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Most Canadian tradespeople miss out on <span className="text-foreground font-semibold">$5,000+</span> in tax deductions every year. Fiscal Flow helps you track your travel, tools, and credits in seconds — so you get paid, not the taxman.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button size="lg" className="btn-gradient px-10 py-6 text-lg font-bold rounded-xl" asChild>
              <a href="https://fiscal-flow-path.base44.app" target="_blank" rel="noopener noreferrer">
                TRY THE FREE CALCULATOR
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">No credit card. No bank login required.</p>
          </motion.div>
        </motion.div>
      </section>
      {/* Deductions */}
      <section className="py-16 md:py-24 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            How Much Are You Owed?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Here are three deductions most tradespeople don't know about.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deductions.map((d) => (
              <motion.div key={d.title} variants={fadeUp}>
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center mb-4`}>
                      <d.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-1">{d.title}</h3>
                    <p className="text-3xl font-display font-bold bg-gradient-to-r from-emerald-500 to-amber-500 bg-clip-text text-transparent mb-3">{d.amount}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{d.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Features */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Why Fiscal Flow?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Built by tradespeople, for tradespeople.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                      <f.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* CTA */}
      <section className="py-16 md:py-24 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to claim what's yours?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Find out in under 60 seconds how much money you could be getting back from the CRA this year.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button size="lg" className="btn-gradient px-10 py-6 text-lg font-bold rounded-xl" asChild>
              <a href="https://fiscal-flow-path.base44.app" target="_blank" rel="noopener noreferrer">
                TRY THE FREE CALCULATOR
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">No credit card. No bank login required.</p>
          </motion.div>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-lg">Fiscal Flow</span>
          <p className="text-sm text-muted-foreground">Built for Canadian tradespeople.</p>
        </div>
      </footer>
    </div>
  )
}